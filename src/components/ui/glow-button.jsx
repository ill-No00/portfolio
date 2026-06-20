"use client";

/**
 * Button with a subtle glow effect behind it.
 * Renders as `<a>` when `href` is provided, `<button>` otherwise.
 * Fixes the invalid <a><button></a> nesting from the original code.
 *
 * @param {object} props
 * @param {string} props.href - Optional link destination
 * @param {string} props.variant - "primary" (white border) or "ghost" (subtle)
 * @param {string} props.type - Button type (for form buttons)
 * @param {React.ReactNode} props.children
 * @param {string} props.className - Additional classes
 */
export default function GlowButton({
  href,
  variant = "primary",
  type = "button",
  children,
  className = "",
  ...props
}) {
  const baseClasses =
    "relative inline-flex items-center justify-center px-7 sm:px-10 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50";

  const variantClasses =
    variant === "primary"
      ? "border border-white/80 bg-black text-white hover:bg-white/5 hover:border-white"
      : "border border-white/20 bg-white/[0.03] text-white/80 hover:bg-white/[0.06] hover:text-white hover:border-white/40";

  const inner = (
    <>
      {/* Glow */}
      <span
        aria-hidden="true"
        className="absolute -inset-0.5 rounded-full bg-white/15 blur-sm group-hover:bg-white/25 transition-all duration-500"
      />
      <span className="relative">{children}</span>
    </>
  );

  const combinedClasses = `group ${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={`cursor-pointer ${combinedClasses}`} {...props}>
      {inner}
    </button>
  );
}
