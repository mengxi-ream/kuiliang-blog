import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function mergeClassNames(...classNames: ClassValue[]): string {
  return twMerge(clsx(classNames));
}