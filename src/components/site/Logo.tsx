export function Logo({
  variant = "light",
  showTagline = false,
  className = "",
  size = "md",
}: {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const heightClass =
    size === "sm"
      ? "h-9"
      : size === "lg"
      ? "h-14 sm:h-16"
      : "h-11 sm:h-12";

  return (
    <div className={`inline-flex items-center gap-2 group ${className}`}>
      <img
        src="/kts-logo.jpg"
        alt="KL Tech Solutions Logo"
        className={`${heightClass} w-auto object-contain rounded-xl shadow-md ring-1 ring-slate-900/10 transition-transform duration-300 group-hover:scale-105`}
      />
    </div>
  );
}


