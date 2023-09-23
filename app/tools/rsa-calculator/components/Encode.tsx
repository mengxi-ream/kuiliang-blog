import { ChangeEvent, useState } from "react";
import Input from "@/components/ui/Input";

export default function Encode({
  schema,
  m,
  p,
  q,
  d,
  e,
}: {
  schema: [string, string, string][];
  m: number | null;
  p: number | null;
  q: number | null;
  d: number | null;
  e: number | null;
}) {
  const [plainText, setPlainText] = useState<string>("");

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-3 mt-10">Encode</h3>
      <div>Plain Text:</div>

      <Input
        className="w-full sm:w-full"
        type="text"
        onChange={(e) => setPlainText(e.target.value)}
      />
      {/*button disable condition*/}
      {/*encode*/}
    </section>
  );
}

function encode(plainText: string, schema: [string, string, string][]) {
  const encoded = plainText
    .split("")
    .map((char) => schema.find(([c]) => c === char)?.[2])
    .join("");

  return encoded;
}
