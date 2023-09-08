// https://www.cs.drexel.edu/~jpopyack/IntroCS/HW/RSAWorksheet.html
// https://ui-avatars.com/api/?name=RSA&length=3&background=fff7ed&color=f97316&size=256
"use client";
import { useState } from "react";
import RSASchemas from "@/lib/data/RSASchemas";
import SchemaTable from "./components/SchemaTable";
import PickPQ from "./components/PickPQ";
import PickDE from "./components/PickDE";

export default function RSA() {
  const [schema, setSchema] = useState<[string, string, string][]>(
    RSASchemas.upperLetters
  );
  const [m, setM] = useState<number | null>(null);
  const [p, setP] = useState<number | null>(null);
  const [q, setQ] = useState<number | null>(null);
  const [d, setD] = useState<number | null>(null);
  const [e, setE] = useState<number | null>(null);

  const handleSchemaChange = (newSchema: [string, string, string][]) => {
    setSchema(newSchema);
    console.log(newSchema);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-10">RSA Calculator</h2>
      <SchemaTable schema={schema} onSchemaChange={handleSchemaChange} />
      <PickPQ
        schema={schema}
        m={m}
        p={p}
        q={q}
        setM={setM}
        setP={setP}
        setQ={setQ}
      />
      <PickDE p={p} q={q} d={d} e={e} setD={setD} setE={setE} />
    </div>
  );
}
