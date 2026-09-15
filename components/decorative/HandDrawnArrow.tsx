import { cn } from "@/lib/utils";

interface HandDrawnArrowProps {
  variant?: "curved-down-right" | "curved-down-left" | "swoop-right" | "loop-right" | "straight";
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export default function HandDrawnArrow({
  variant = "curved-down-right",
  className,
  color = "#F43F5E",
  strokeWidth = 1.6,
}: HandDrawnArrowProps) {
  if (variant === "curved-down-right") {
    return (
      <svg
        viewBox="0 0 74 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-14 h-12 inline-block", className)}
        aria-hidden="true"
      >
        <path
          d="M6 8C18 6 38 12 48 26C55 35 56 46 54 53"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M44 48C48 51 53 54 56 55C56 50 58 43 62 38"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === "curved-down-left") {
    return (
      <svg
        viewBox="0 0 74 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-14 h-12 inline-block", className)}
        aria-hidden="true"
      >
        <path
          d="M68 8C56 6 36 12 26 26C19 35 18 46 20 53"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M30 48C26 51 21 54 18 55C18 50 16 43 12 38"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === "swoop-right") {
    return (
      <svg
        viewBox="0 0 88 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-16 h-8 inline-block", className)}
        aria-hidden="true"
      >
        <path
          d="M4 22C24 16 52 14 74 24"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M64 16L76 25L66 32"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === "loop-right") {
    return (
      <svg
        viewBox="0 0 92 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-18 h-11 inline-block", className)}
        aria-hidden="true"
      >
        <path
          d="M6 34C22 36 34 32 38 20C42 8 32 4 24 10C16 16 18 36 38 42C56 46 72 38 82 28"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M72 24L83 27L81 38"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 60 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-12 h-5 inline-block", className)}
      aria-hidden="true"
    >
      <path
        d="M4 12C20 11.5 38 12.5 52 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M44 6L54 12L44 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
