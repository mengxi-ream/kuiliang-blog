import Latex from "react-latex-next";
import Input from "@/app/components/Input";
import ValidateText from "./ValidateText";
import isRelativePrime from "@/lib/isRelativePrime";

export default function PickDE({
  p,
  q,
  d,
  e,
  setD,
  setE,
}: {
  p: number | null;
  q: number | null;
  d: number | null;
  e: number | null;
  setD: (newD: number) => void;
  setE: (newE: number) => void;
}) {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-3 mt-10">
        Pick <Latex>$d$</Latex>, <Latex>$e$</Latex>
      </h3>
      <div className="flex items-center gap-x-2 flex-wrap">
        <div>
          Large integer that is relatively prime to <Latex>$(p-1)(q-1)$</Latex>
          {typeof p === "number" && typeof q === "number"
            ? `=${(p - 1) * (q - 1)}`
            : ""}
          : <Latex>$d$</Latex>
        </div>
        <Input
          type="text"
          onChange={(e) => setD(Number(e.target.value))}
          regex="^[0-9]+$"
        />
        <div>
          Modular Inverse of <Latex>$d$</Latex> mod <Latex>$(p-1)(q-1)$</Latex>:{" "}
          <Latex>$e$</Latex>
        </div>
        <Input
          type="text"
          onChange={(e) => setE(Number(e.target.value))}
          regex="^[0-9]+$"
        />
      </div>
      <ValidateText
        text="d is relatively prime to (p-1)(q-1)"
        valid={
          typeof d === "number" &&
          typeof p === "number" &&
          typeof q === "number" &&
          isRelativePrime(d, (p - 1) * (q - 1))
        }
      />
      <ValidateText
        text="e is the modular inverse of d mod (p-1)(q-1)"
        valid={
          typeof d === "number" &&
          typeof e === "number" &&
          typeof p === "number" &&
          typeof q === "number" &&
          isRelativePrime(d, (p - 1) * (q - 1)) &&
          (d * e) % ((p - 1) * (q - 1)) === 1
        }
      />
    </section>
  );
}
