import { twMerge } from "tailwind-merge";

type Type = "default" | "primary";
type Size = "sm" | "md";

export default function Tag({
  content,
  type = "default",
  size = "sm",
  className = "",
}: {
  content: string;
  type?: Type;
  size?: Size;
  className?: string;
}) {
  const typeStyles =
    type === "default"
      ? "bg-secondary-light text-gray-700 dark:bg-secondary-dark dark:text-gray-300"
      : "bg-primary text-gray-100 dark:bg-primary dark:text-gray-300";

  const sizeStyles =
    size === "md" ? "px-2 py-1 rounded-lg text-md" : "px-1 rounded-md text-sm";

  return (
    <span key={content} className={twMerge(typeStyles, sizeStyles, className)}>
      {content}
    </span>
  );
}
