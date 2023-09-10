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
      className="text-accent-light dark:text-accent-dark hover:text-accent-500 dark:hover:text-accent-400"
    >
      {children}
    </Link>
  );
}
