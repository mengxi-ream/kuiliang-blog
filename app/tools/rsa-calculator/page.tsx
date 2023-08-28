// https://www.cs.drexel.edu/~jpopyack/IntroCS/HW/RSAWorksheet.html
// https://ui-avatars.com/api/?name=RSA&length=3&background=fff7ed&color=f97316&size=256
"use client";
import { useState } from "react";

import SchemaTable from "./components/SchemaTable";
import RSASchemas from "@/lib/data/RSASchemas";

export default function RSA() {
  const [schema, setSchema] = useState<[string, string, string][]>(
    RSASchemas.upperLetters
  );

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
