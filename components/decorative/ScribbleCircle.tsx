import { cn } from "@/lib/utils";

interface ScribbleProps {
  className?: string;
  color?: string;
}

export function ScribbleCircle({
  className,
  color = "#F43F5E",
}: ScribbleProps) {
  return (
    <svg
      viewBox="0 0 110 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute pointer-events-none -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)]", className)}
      aria-hidden="true"
    >
      <path
        d="M20 18C42 10 88 12 100 24C112 36 84 46 50 46C20 46 2 36 6 22C10 8 58 4 94 14"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.8}
      />
    </svg>
  );
}

export function ScribbleUnderline({
  className,
  color = "#0F62FE",
}: ScribbleProps) {
  return (
    <svg
      viewBox="0 0 140 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-3 inline-block", className)}
      aria-hidden="true"
    >
      <path
        d="M4 12C32 5 78 4 136 10"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M16 15C48 10 92 9 128 14"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
}
