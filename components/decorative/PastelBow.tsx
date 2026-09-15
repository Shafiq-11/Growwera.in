import { cn } from "@/lib/utils";

interface PastelBowProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function PastelBow({
  className,
  color = "#F472B6",
  size = 42,
}: PastelBowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block opacity-75 select-none pointer-events-none", className)}
      aria-hidden="true"
    >
      {/* Center knot */}
      <circle cx="27" cy="20" r="3.5" stroke={color} strokeWidth={1.5} />

      {/* Left loop */}
      <path
        d="M24 19C15 13 6 12 7 21C8 27 18 24 24 21"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right loop */}
      <path
        d="M30 19C39 13 48 12 47 21C46 27 36 24 30 21"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left ribbon tail */}
      <path
        d="M25 23C21 30 15 36 12 42M12 42C14 38 18 36 21 34"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
      />

      {/* Right ribbon tail */}
      <path
        d="M29 23C33 30 39 36 42 42M42 42C40 38 36 36 33 34"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </svg>
  );
}
