import Image from "next/image";
import { ArrowRightIcon, QrCodeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ItemWithImage({
  imageSrc,
  children,
}: {
  imageSrc?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-10 flex flex-wrap gap-x-2">
      <div
        className={
          imageSrc
            ? "flex-auto w-full md:w-64 p-4 max-w-md md:max-w-sm mx-auto"
            : "hidden"
        }
      >
        <div className="relative w-full aspect-w-16 aspect-h-9">
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
      <div className="flex-auto w-full md:w-72 max-w-md md:max-w-lg mx-auto">
        {children}
      </div>
    </div>
  );
}
