"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <p className="mt-10">An error occurred.</p>
      <Link href="/">Back to Home</Link>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
