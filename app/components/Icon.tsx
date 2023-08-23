import Image from "next/image";

type Size =
  | "w-4"
  | "w-5"
  | "w-6"
  | "w-7"
  | "w-8"
  | "w-9"
  | "w-10"
  | "w-11"
  | "w-12"
  | "w-14"
  | "w-16"
  | "w-20"
  | "w-24"
  | "w-28"
  | "w-32"
  | "w-36"
  | "w-40"
  | "w-44"
  | "w-48"
  | "w-52"
  | "w-56"
  | "w-60";

export default function Icon({
  src,
  alt,
  size,
  innerSize = "w-5/6",
  pixelated = false,
}: {
  src: string;
  alt: string;
  size: Size;
  innerSize?: IconInnerSize;
  pixelated?: boolean;
}) {
  // const innerSizeStyles = `w-[${innerSize}] h-[${innerSize}]`;

  return (
    <div
      className={`relative flex items-center justify-center ${size} ${
        pixelated ? "pixelated" : ""
      }`}
    >
      <div
        className={`relative flex items-center justify-center ${innerSize} aspect-h-1 aspect-w-1`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          unoptimized
        />
      </div>
    </div>
  );
}
