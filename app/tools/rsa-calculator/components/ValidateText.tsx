import { twMerge } from "tailwind-merge";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";

type ValidateTextProps = {
  className?: string;
  text: string | React.ReactNode;
  valid: boolean;
};

export default function ValidateText({
  className,
  text,
  valid,
}: ValidateTextProps) {
  return (
    <div
      className={twMerge(
        "flex items-center text-sm",
        valid ? "text-green-500" : "text-red-500",
        className
      )}
    >
      <div className="relative w-4 mr-1">
        {valid ? <CheckCircleIcon /> : <XCircleIcon />}
      </div>
      {text}
    </div>
  );
}
