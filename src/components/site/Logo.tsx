/**
 * Placeholder wordmark. Replace with the official KLTech Solutions logo file
 * once the client supplies it.
 */
export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className="grid size-9 place-items-center rounded-lg bg-primary font-display text-base font-bold text-primary-foreground"
        aria-hidden="true"
      >
        K
      </span>
      <span
        className={
          variant === "light"
            ? "font-display text-lg font-bold tracking-tight text-ink-foreground"
            : "font-display text-lg font-bold tracking-tight text-foreground"
        }
      >
        KLTech <span className="text-cyan">Solutions</span>
      </span>
    </span>
  );
}
