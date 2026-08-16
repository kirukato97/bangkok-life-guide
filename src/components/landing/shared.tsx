export const TELEGRAM = "https://t.me/bangkok_relocation";

export function CtaButton({
  children,
  variant = "primary",
  href = TELEGRAM,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
      : variant === "ghost"
        ? "border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10"
        : "border border-border bg-card text-foreground hover:bg-muted";
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function Section({
  id,
  children,
  tone = "default",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "default" | "surface";
}) {
  return (
    <section
      id={id}
      className={`px-5 py-16 sm:py-24 ${tone === "surface" ? "bg-surface text-surface-foreground" : ""}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </p>
  );
}

export function InlineCta({ text, label }: { text: string; label: string }) {
  return (
    <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{text}</p>
      <CtaButton className="shrink-0">{label}</CtaButton>
    </div>
  );
}