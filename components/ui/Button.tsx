export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="text-base font-semibold text-white bg-orange-500 px-2 py-1 rounded-md shadow-sm hover:bg-orange-400"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
