import { useEffect, useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { isPrime } from "mathjs";

export default function PickPQ({
  schema,
  m,
  p,
  q,
  setM,
  setP,
  setQ,
}: {
  schema: [string, string, string][];
  m: number | null;
  p: number | null;
  q: number | null;
  setM: (newM: number) => void;
  setP: (newP: number) => void;
  setQ: (newQ: number) => void;
}) {
  const inputClassName = (value: string, regex: string) =>
    `block w-20 sm:w-24 text-center m-1 rounded-md py-1.5 border-0 shadow-sm ring-1 ring-inset ring-gray-300 ${
      !new RegExp(regex).test(value)
        ? "focus:ring-red-500"
        : "focus:ring-blue-400 dark:focus:ring-blue-600"
    } focus:ring-2 focus:ring-inset dark:bg-slate-900`;

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-3 mt-10">
        Pick <Latex>$p$</Latex>, <Latex>$q$</Latex>
      </h3>
      <div className="flex items-center gap-x-2 flex-wrap">
        <div>
          Number of Characters in one block: <Latex>$m$</Latex>
        </div>
        <input
          type="text"
          onChange={(e) => setM(Number(e.target.value))}
          className={inputClassName(String(m), "^[0-9]+$")}
        />
      </div>
      <div className="flex items-center gap-x-2  flex-wrap">
        <div>
          Large prime: <Latex>$p$</Latex>
        </div>
        <input
          type="text"
          onChange={(e) => setP(Number(e.target.value))}
          className={inputClassName(String(p), "^[0-9]+$")}
        />
      </div>
      <div className="flex items-center gap-x-2  flex-wrap">
        <div>
          Large prime: <Latex>$q$</Latex>
        </div>
        <input
          type="text"
          onChange={(e) => setQ(Number(e.target.value))}
          className={inputClassName(String(q), "^[0-9]+$")}
        />
      </div>
      <div className="flex items-center gap-x-2  flex-wrap">
        <div>
          <Latex>$pq = n$</Latex>
        </div>
        <input
          type="text"
          value={p && q ? p * q : ""}
          className={inputClassName(String(q), "^[0-9]+$")}
        />
      </div>
      <ValidationBox schema={schema} p={p} q={q} m={m} />
    </section>
  );
}

function ValidationBox({
  schema,
  p,
  q,
  m,
}: {
  schema: [string, string, string][];
  p: number | null;
  q: number | null;
  m: number | null;
}) {
  const [validations, setValidations] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const maxNumber = Math.max(...schema.map(([, n]) => Number(n)));
  const minN = Number(String(maxNumber).repeat(m ? m : 1));
  const maxN = Number(String(maxNumber).repeat(m ? m + 1 : 2));

  const ValText = [
    <Latex key={0}>$m$ is set</Latex>,
    <Latex key={0}>$p$ is a prime number</Latex>,
    <Latex key={1}>$q$ is a prime number</Latex>,
    <Latex key={2}>$p \neq q$</Latex>,
    <div key={3}>
      {minN} <Latex>$ \lt n \lt$</Latex> {maxN}
    </div>,
  ];

  const Revalidate = () => {
    const mSet = !!m;
    const pPrime = p ? isPrime(p) : false;
    const qPrime = q ? isPrime(q) : false;
    const pNotQ = p && q ? p !== q : false;
    const validRangeN = p && q ? p * q > minN && p * q < maxN : false;
    setValidations([mSet, pPrime, qPrime, pNotQ, validRangeN]);
  };

  useEffect(() => {
    Revalidate();
  }, [schema, p, q, m]);

  return (
    <div>
      {ValText.map((text, index) => (
        <div
          key={index}
          className={`flex items-center text-sm ${
            validations[index] ? "text-green-500" : "text-red-500"
          }`}
        >
          <div className="relative w-4 mr-1">
            {validations[index] ? <CheckCircleIcon /> : <XCircleIcon />}
          </div>
          {text}
        </div>
      ))}
    </div>
  );
}
