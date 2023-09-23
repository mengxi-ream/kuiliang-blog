import Image from "next/image";
import { ArrowRightIcon, QrCodeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type AspectRatio = ["aspect-w-16", "aspect-h-9"] | ["aspect-w-2", "aspect-h-3"];

export default function ItemWithImage({
  imageSrc,
  children,
  aspectRatio = ["aspect-w-16", "aspect-h-9"],
  imageMaxWidth = "max-w-sm",
}: {
  imageSrc?: string;
  children: React.ReactNode;
  aspectRatio?: [string, string];
  imageMaxWidth?: string;
}) {
  return (
    <div className="my-10 flex flex-wrap gap-x-4 items-center justify-center">
      <div
        className={
          imageSrc
            ? `flex-auto relative w-full md:w-64 p-4 ${imageMaxWidth}`
            : "hidden"
        }
      >
        <div className={`relative w-full ${aspectRatio[0]} ${aspectRatio[1]}`}>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={
                (imageSrc.split("/").pop() || "").split(".")[0] ||
                "defaultAltText"
              }
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg ring-1 ring-gray-200 dark:ring-gray-700"
            />
          )}
        </div>
      </div>
      <div className="flex-auto w-full md:w-72 max-w-md md:max-w-lg">
        {children}
      </div>
    </div>
  );
}
