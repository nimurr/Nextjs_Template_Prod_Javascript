import React from "react";
import Link from "next/link";

export default function PrimaryButton({
  children,
  href,
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = "",
  disabled,
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        startIcon && <span className="shrink-0">{startIcon}</span>
      )}
      {children}
      {!loading && endIcon && <span className="shrink-0">{endIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
}