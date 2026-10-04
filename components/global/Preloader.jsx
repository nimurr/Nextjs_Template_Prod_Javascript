import React from "react";

const sizes = {
  sm: "h-6 w-6 border-2",
  md: "h-12 w-12 border-4",
  lg: "h-16 w-16 border-4",
};

export default function Preloader({
  fullScreen = true,
  label = "Loading...",
  size = "md",
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={
        fullScreen
          ? "fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 bg-white/80 backdrop-blur-sm dark:bg-black/80"
          : "flex flex-col items-center justify-center gap-3 py-10"
      }
    >
      {/* Spinner with a pulsing core */}
      <div className="relative flex items-center justify-center">
        <div
          className={`${sizes[size]} animate-spin rounded-full border-gray-200 border-t-indigo-600 dark:border-gray-700 dark:border-t-indigo-400`}
        />
        <div className="absolute h-2 w-2 animate-pulse rounded-full bg-indigo-600 dark:bg-indigo-400" />
      </div>

      {/* Bouncing dots + label */}
      {label && (
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          <span>{label}</span>
          <span className="flex gap-1">
            <i className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.3s]" />
            <i className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-600 [animation-delay:-0.15s]" />
            <i className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-600" />
          </span>
        </div>
      )}

      <span className="sr-only">{label}</span>
    </div>
  );
}