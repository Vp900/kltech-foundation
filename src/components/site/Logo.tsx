import { cn } from "@/lib/utils";

export function Logo({
  variant = "auto",
  showTagline = false,
  className = "",
  size = "md",
}: {
  variant?: "light" | "dark" | "auto";
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
    <div className={cn("inline-flex items-center gap-2 group", className)}>
      {variant === "light" ? (
        <img
          src="/lightlogo.jpeg"
          alt="SVM IT Solutions Logo"
          className={cn(
            heightClass,
            "w-auto object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
          )}
        />
      ) : variant === "dark" ? (
        <img
          src="/darklogo.jpeg"
          alt="SVM IT Solutions Logo"
          className={cn(
            heightClass,
            "w-auto object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
          )}
        />
      ) : (
        <>
          {/* Light Mode Logo (Visible in light mode, hidden in dark mode) */}
          <img
            src="/lightlogo.jpeg"
            alt="SVM IT Solutions Logo"
            className={cn(
              heightClass,
              "w-auto object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105 dark:hidden inline-block"
            )}
          />
          {/* Dark Mode Logo (Hidden in light mode, visible in dark mode) */}
          <img
            src="/darklogo.jpeg"
            alt="SVM IT Solutions Logo"
            className={cn(
              heightClass,
              "w-auto object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105 hidden dark:inline-block"
            )}
          />
        </>
      )}
    </div>
  );
}
