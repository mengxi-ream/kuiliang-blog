import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  className?: string;
  regex?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

export default function Input({
  className,
  regex,
  value,
  onChange,
  ...restProps
}: InputProps) {
  const [internalValue, setInternalValue] = useState(""); // State to keep track of the internal value
  const [isValid, setIsValid] = useState(true); // State to keep track of validity

  // Determine the effective value (from props or internal state)
  const effectiveValue = value !== undefined ? value : internalValue;

  // useEffect to check the value against the regex whenever either value or regex changes
  useEffect(() => {
    if (regex) {
      setIsValid(new RegExp(regex).test(effectiveValue));
    }
  }, [effectiveValue, regex]);

  // Internal onChange handler
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Update internal state only if the component is uncontrolled
    if (value === undefined) {
      setInternalValue(newValue);
    }

    // Call external onChange handler if provided
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      value={effectiveValue}
      onChange={handleOnChange}
      className={twMerge(
        "block w-20 sm:w-24 text-center m-1 rounded-md py-1.5 border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset dark:bg-slate-900",
        !isValid
          ? "focus:ring-red-500"
          : "focus:ring-blue-400 dark:focus:ring-blue-600",
        className
      )}
      {...restProps}
    />
  );
}
