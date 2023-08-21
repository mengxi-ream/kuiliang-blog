import Link from "next/link";

export default function CustomLink({
  href,
  target = "_blank",
  children,
}: {
  href: string;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="text-orange-500 hover:text-orange-400 dark:hover:text-orange-600"
    >
      {children}
    </Link>
  );
}
