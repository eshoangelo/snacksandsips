"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Meridiem = "AM" | "PM";

// Build 15-minute slots for one meridiem: "12:00 PM" ... "11:45 PM"
function slotsFor(meridiem: Meridiem): string[] {
  const startHour = meridiem === "AM" ? 0 : 12;
  const slots: string[] = [];
  for (let h = startHour; h < startHour + 12; h++) {
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    for (const m of [0, 15, 30, 45]) {
      slots.push(`${hour12}:${String(m).padStart(2, "0")} ${meridiem}`);
    }
  }
  return slots;
}

const AM_SLOTS = slotsFor("AM");
const PM_SLOTS = slotsFor("PM");

export default function TimePicker({
  value,
  onChange,
  invalid = false,
}: {
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  // Default to PM — nearly every event is afternoon/evening, so choosing an
  // AM time should be a deliberate tap, not the accidental first option.
  const [meridiem, setMeridiem] = useState<Meridiem>("PM");
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  const slots = meridiem === "AM" ? AM_SLOTS : PM_SLOTS;

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

  // When opening, show the meridiem of the current value (or default to PM).
  useEffect(() => {
    if (open && value) {
      setMeridiem(value.endsWith("AM") ? "AM" : "PM");
    }
  }, [open, value]);

  // Center the selected time when the list opens or the meridiem changes.
  useEffect(() => {
    if (open && selectedRef.current) {
      selectedRef.current.scrollIntoView({ block: "center" });
    }
  }, [open, meridiem]);

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
          {value || "Select a time"}
        </span>
        <svg className="w-5 h-5 text-gold-dark shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5l3 2" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-full bg-white shadow-2xl border border-charcoal/10">
          {/* AM / PM toggle — defaults to PM so evening times are what users see first */}
          <div className="flex p-1 gap-1 border-b border-charcoal/10">
            {(["AM", "PM"] as Meridiem[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMeridiem(m)}
                className={`flex-1 py-2 text-sm tracking-wider transition-colors ${
                  meridiem === m
                    ? "bg-charcoal text-gold font-medium"
                    : "text-charcoal/60 hover:bg-gold/15"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <div ref={listRef} className="max-h-60 overflow-y-auto thin-scroll py-1">
            {slots.map((slot) => {
              const isSel = slot === value;
              return (
                <button
                  key={slot}
                  ref={isSel ? selectedRef : undefined}
                  type="button"
                  onClick={() => {
                    onChange(slot);
                    setOpen(false);
                  }}
                  className={`w-full px-5 py-2.5 text-left text-sm transition-colors ${
                    isSel
                      ? "bg-gold text-charcoal font-medium"
                      : "text-charcoal hover:bg-gold/15"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
