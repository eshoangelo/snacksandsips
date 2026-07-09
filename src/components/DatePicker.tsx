"use client";

import { useEffect, useRef, useState } from "react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatDisplay(d: Date) {
  return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
}

export default function DatePicker({
  value,
  onChange,
  invalid = false,
}: {
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(null);
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", onDoc);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const firstWeekday = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const canGoPrev =
    view.year > today.getFullYear() ||
    (view.year === today.getFullYear() && view.month > today.getMonth());

  function prevMonth() {
    if (!canGoPrev) return;
    setView((v) => (v.month === 0 ? { year: v.year - 1, month: 11 } : { year: v.year, month: v.month - 1 }));
  }
  function nextMonth() {
    setView((v) => (v.month === 11 ? { year: v.year + 1, month: 0 } : { year: v.year, month: v.month + 1 }));
  }

  function isPast(day: number) {
    return new Date(view.year, view.month, day) < today;
  }
  function isSelected(day: number) {
    return (
      selected != null &&
      selected.getFullYear() === view.year &&
      selected.getMonth() === view.month &&
      selected.getDate() === day
    );
  }

  function pick(day: number) {
    if (isPast(day)) return;
    const d = new Date(view.year, view.month, day);
    setSelected(d);
    onChange(formatDisplay(d));
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between border-b bg-transparent py-3 text-left transition-colors focus:outline-none ${
          invalid ? "border-red-400" : open ? "border-gold" : "border-charcoal/20"
        }`}
      >
        <span className={value ? "text-charcoal" : "text-charcoal/40"}>
          {value || "Select a date"}
        </span>
        <svg className="w-5 h-5 text-gold-dark shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-72 bg-white shadow-2xl border border-charcoal/10 p-4">
          {/* Month header */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={prevMonth}
              disabled={!canGoPrev}
              className="p-1.5 text-charcoal/60 hover:text-gold disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous month"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-serif text-charcoal text-sm tracking-wide">
              {MONTHS[view.month]} {view.year}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1.5 text-charcoal/60 hover:text-gold transition-colors"
              aria-label="Next month"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Weekday labels */}
          <div className="grid grid-cols-7 mb-1">
            {WEEKDAYS.map((w) => (
              <div key={w} className="text-center text-[10px] uppercase tracking-wider text-gold-dark py-1">
                {w}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="grid grid-cols-7 gap-y-1">
            {cells.map((day, i) => {
              if (day === null) return <div key={`empty-${i}`} />;
              const past = isPast(day);
              const sel = isSelected(day);
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => pick(day)}
                  disabled={past}
                  className={`mx-auto w-9 h-9 flex items-center justify-center text-sm transition-colors ${
                    sel
                      ? "bg-gold text-charcoal font-medium"
                      : past
                        ? "text-charcoal/25 cursor-not-allowed"
                        : "text-charcoal hover:bg-gold/20"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
