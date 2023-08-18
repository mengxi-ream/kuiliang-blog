export default function ImageCaption({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="relative bottom-6 my-0 text-sm text-center text-gray-500">
      {children}
    </p>
  );
}
