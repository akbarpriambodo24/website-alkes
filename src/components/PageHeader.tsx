interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-[#0f172a] relative overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Left-side glow */}
      <div className="absolute top-0 left-0 w-2/5 h-full bg-linear-to-r from-[#1e3a8a]/25 to-transparent" />
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#2563eb]/50 to-transparent" />

      <div className="container mx-auto px-6 relative">
        {badge && (
          <p className="text-[#60a5fa] text-xs font-bold tracking-widest uppercase mb-5">
            {badge}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
