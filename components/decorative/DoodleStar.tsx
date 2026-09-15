import { cn } from "@/lib/utils";

interface DoodleStarProps {
  variant?: "four-point" | "five-point" | "sparkle" | "cross";
  className?: string;
  color?: string;
  size?: number;
}

export default function DoodleStar({
  variant = "four-point",
  className,
  color = "#F43F5E",
  size = 20,
}: DoodleStarProps) {
  if (variant === "four-point") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("inline-block", className)}
        aria-hidden="true"
      >
        <path
          d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
          fill={color}
          opacity={0.85}
        />
      </svg>
    );
  }

  if (variant === "five-point") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("inline-block", className)}
        aria-hidden="true"
      >
        <path
          d="M12 2.5L14.8 8.8L21.5 9.4L16.4 14L17.9 20.6L12 17.2L6.1 20.6L7.6 14L2.5 9.4L9.2 8.8L12 2.5Z"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.8}
        />
      </svg>
    );
  }

  if (variant === "cross") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("inline-block", className)}
        aria-hidden="true"
      >
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          opacity={0.7}
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="2.5" fill={color} opacity={0.8} />
      <path
        d="M10 3V6M10 14V17M3 10H6M14 10H17"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        opacity={0.75}
      />
    </svg>
  );
}
