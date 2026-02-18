export default function PageHeader({
  subtitle,
  title,
  titleAccent,
}: {
  subtitle: string;
  title: string;
  titleAccent?: string;
}) {
  return (
    <div className="text-center pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-gold/30" />

      <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
        {subtitle}
      </p>
      <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-gold italic">{titleAccent}</span>
          </>
        )}
      </h1>
      <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
    </div>
  );
}
