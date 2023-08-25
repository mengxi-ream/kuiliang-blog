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
      ? "bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-gray-300"
      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";

  const sizeStyles =
    size === "md" ? "px-2 py-1 rounded-lg text-md" : "px-1 rounded-md text-sm";

  return (
    <span key={content} className={`${sizeStyles} ${typeStyles} ${className}`}>
      {content}
    </span>
  );
}
