import Image from "next/image";

type Size =
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60";

type Rounded =
  | "rounded-none"
  | "rounded-sm"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl";

export default function Icon({
  src,
  alt,
  size,
  innerSize = "full",
  pixelated = false,
  rounded = "rounded-none",
}: {
  src: string;
  alt: string;
  size: Size;
  innerSize?: IconInnerSize;
  pixelated?: boolean;
  rounded?: Rounded;
}) {
  return (
    <div
      className={`relative flex items-center justify-center w-${size} h-${size} ${
        pixelated ? "pixelated" : ""
      }`}
    >
      <div className={`relative w-${innerSize} h-${innerSize}`}>
        <Image
          className={`${rounded}`}
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
