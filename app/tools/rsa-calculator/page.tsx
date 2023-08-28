// https://www.cs.drexel.edu/~jpopyack/IntroCS/HW/RSAWorksheet.html
// https://ui-avatars.com/api/?name=RSA&length=3&background=fff7ed&color=f97316&size=256
"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import SchemaTable from "./components/SchemaTable";

const INITIAL_SCHEMA: [string, string, string][] = [
  ["A", "00", uuidv4()],
  ["B", "01", uuidv4()],
  ["C", "02", uuidv4()],
  ["D", "03", uuidv4()],
  ["E", "04", uuidv4()],
  ["F", "05", uuidv4()],
  ["G", "06", uuidv4()],
  ["H", "07", uuidv4()],
  ["I", "08", uuidv4()],
  ["J", "09", uuidv4()],
  ["K", "10", uuidv4()],
  ["L", "11", uuidv4()],
  ["M", "12", uuidv4()],
  ["N", "13", uuidv4()],
  ["O", "14", uuidv4()],
  ["P", "15", uuidv4()],
  ["Q", "16", uuidv4()],
  ["R", "17", uuidv4()],
  ["S", "18", uuidv4()],
  ["T", "19", uuidv4()],
  ["U", "20", uuidv4()],
  ["V", "21", uuidv4()],
  ["W", "22", uuidv4()],
  ["X", "23", uuidv4()],
  ["Y", "24", uuidv4()],
  ["Z", "25", uuidv4()],
];

export default function RSA() {
  const [schema, setSchema] =
    useState<[string, string, string][]>(INITIAL_SCHEMA);

  const handleSchemaChange = (newSchema: [string, string, string][]) => {
    setSchema(newSchema);
    console.log(newSchema);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="text-3xl font-bold mb-10">RSA Calculator</div>
      <SchemaTable schema={schema} onSchemaChange={handleSchemaChange} />
    </div>
  );
}
