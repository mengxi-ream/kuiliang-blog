type TagType = "default" | "primary";
type TagSize = "sm" | "md";

export default function Tag({
  content,
  type = "default",
  size = "sm",
}: {
  content: string;
  type?: TagType;
  size?: TagSize;
}) {
  const bgTextColor =
    type === "default"
      ? "bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-gray-300"
      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";

  const paddingStyles = size === "md" ? "px-2 py-1" : "px-1";

  return (
    <span
      key={content}
      className={`${paddingStyles} text-${size} rounded-${size} ${bgTextColor}`}
    >
      {content}
    </span>
  );
}
