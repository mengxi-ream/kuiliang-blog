import { twMerge } from "tailwind-merge";

type Type = "default" | "primary" | "accent";
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
  // const typeStyles =
  //   type === "default"
  //     ? "bg-secondary-light text-gray-700 dark:bg-secondary-dark dark:text-gray-300"
  //     : "bg-primary text-gray-100 dark:bg-primary dark:text-gray-300";

  const typeStyleMap = {
    default: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    primary: "bg-primary dark:bg-primary dark:text-white",
    accent: "bg-accent-light text-white dark:bg-accent-dark dark:text-black",
  };

  const typeStyles = typeStyleMap[type];

  const sizeStyles =
    size === "md" ? "px-2 py-1 rounded-lg text-md" : "px-1 rounded-md text-sm";

  return (
    <span key={content} className={twMerge(typeStyles, sizeStyles, className)}>
      {content}
    </span>
  );
}
