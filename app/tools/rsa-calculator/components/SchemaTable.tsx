"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { v4 as uuidv4 } from "uuid";
import Button from "@/components/ui/Button";
import RSASchemas from "@/config/RSASchemas";
import Input from "@/components/ui/Input";
import ValidateText from "./ValidateText";

export default function SchemaTable({
  schema,
  onSchemaChange,
}: {
  schema: [string, string, string][];
  onSchemaChange: (newSchema: [string, string, string][]) => void;
}) {
  const [blocksPerRow, setBlocksPerRow] = useState(1);
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const computeBlocksPerRow = () => {
      if (blockRef.current) {
        const blockWidth = blockRef.current.offsetWidth;
        const parentWidth = (blockRef.current.parentNode as HTMLElement)
          .offsetWidth;

        // Deduct one for the label div
        const computedBlocksPerRow = Math.floor(parentWidth / blockWidth) - 1;
        setBlocksPerRow(computedBlocksPerRow);
      }
    };

    computeBlocksPerRow();
    window.addEventListener("resize", computeBlocksPerRow);

    return () => {
      window.removeEventListener("resize", computeBlocksPerRow);
    };
  }, [schema]);

  const handleAdd = (index: number) => {
    const newSchemaEntries = [...schema];
    newSchemaEntries.splice(index + 1, 0, ["", "", uuidv4()]);
    onSchemaChange(newSchemaEntries);
  };

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-3">Schema Table</h3>
      <div className="flex flex-wrap my-2 gap-x-3 gap-y-2">
        <Button onClick={() => onSchemaChange(RSASchemas.upperLetters)}>
          Uppercase Letters
        </Button>
        <Button onClick={() => onSchemaChange(RSASchemas.lowerLetters)}>
          Lowercase Letters
        </Button>
        <Button onClick={() => onSchemaChange(RSASchemas.allLetters)}>
          All Letters
        </Button>
        <Button onClick={() => onSchemaChange([["", "", uuidv4()]])}>
          Empty
        </Button>
      </div>
      {Array(Math.ceil(Math.max(schema.length, 1) / blocksPerRow))
        .fill(null)
        .map((_, rowIndex) => (
          <div key={rowIndex} className="flex my-3 relative">
            <Labels />
            {rowIndex === 0 && (
              <button
                className={`${
                  schema.length === 0 ? "" : "opacity-0"
                } hover:opacity-100 absolute w-5 left-14 top-1/2 transform -translate-y-1/2 z-10`}
                onClick={() => handleAdd(-1)}
              >
                <PlusCircleIcon className="rounded-full bg-white dark:bg-slate-900 text-green-500" />
              </button>
            )}
            {Array(blocksPerRow)
              .fill(null)
              .map((_, blockIndex) => {
                const index = rowIndex * blocksPerRow + blockIndex;
                const [char, num, uuid] = schema[index] || ["", "", ""];
                return (
                  index < schema.length && (
                    <div
                      className="relative"
                      key={uuid}
                      ref={rowIndex === 0 && blockIndex === 0 ? blockRef : null}
                    >
                      <Block
                        index={index}
                        char={char}
                        num={num}
                        schemaEntries={schema}
                        onSchemaChange={onSchemaChange}
                      />
                      <button
                        className={`${
                          schema.length - 1 === index ? "" : "opacity-0"
                        } hover:opacity-100 absolute w-5 -right-2.5 top-1/2 transform -translate-y-1/2 z-10`}
                        onClick={() => handleAdd(index)}
                      >
                        <PlusCircleIcon className="rounded-full bg-white dark:bg-slate-900 text-green-500" />
                      </button>
                    </div>
                  )
                );
              })}
          </div>
        ))}
      <ValidateText
        text="No duplicated chars"
        valid={new Set(schema.map(([c]) => c)).size === schema.length}
      />
      <ValidateText
        text="No duplicated numbers"
        valid={new Set(schema.map(([, n]) => Number(n))).size === schema.length}
      />
      <ValidateText
        text="Valid chars (single character)"
        valid={schema.every(([c]) => new RegExp("^.$").test(c))}
      />
      <ValidateText
        text="Valid numbers (1-4 digits)"
        valid={schema.every(([, n]) => new RegExp("^[0-9]{1,4}$").test(n))}
      />
    </section>
  );
}

function Labels() {
  return (
    <div className="flex flex-col mr-2 justify-center gap-y-4 items-center">
      <div className="font-semibold">Char</div>
      <div className="font-semibold">Number</div>
    </div>
  );
}

function Block({
  index,
  char,
  num,
  schemaEntries,
  onSchemaChange,
}: {
  index: number;
  char: string;
  num: string;
  schemaEntries: [string, string, string][];
  onSchemaChange: (newSchema: [string, string, string][]) => void;
}) {
  const [inputChar, setInputChar] = useState(char);
  const [inputNum, setInputNum] = useState(num);

  const handleCharChange = (e: ChangeEvent<HTMLInputElement>) => {
    // if char is already in schema, don't allow change
    // if (schemaEntries.some(([c]) => c === e.target.value)) {
    //   return;
    // }
    const newChar = e.target.value;
    const newSchemaEntries = [...schemaEntries];
    newSchemaEntries[index][0] = newChar;
    setInputChar(newChar);
    onSchemaChange(newSchemaEntries);
  };

  const handleNumChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newNum = e.target.value;
    const newSchemaEntries = [...schemaEntries];
    newSchemaEntries[index][1] = newNum;
    setInputNum(newNum);
    onSchemaChange(newSchemaEntries);
  };

  const handleDelete = () => {
    const newSchemaEntries = [...schemaEntries];
    newSchemaEntries.splice(index, 1);
    if (newSchemaEntries.length === 0) {
      newSchemaEntries.push(["", "", uuidv4()]);
    }
    onSchemaChange(newSchemaEntries);
  };

  return (
    <div className="inline-block relative group">
      <button
        className="hidden group-hover:block absolute w-5 -right-1 -top-1"
        onClick={handleDelete}
      >
        <MinusCircleIcon className="rounded-full bg-white dark:bg-slate-900 text-red-500" />
      </button>
      <Input
        className="w-12 sm:w-16"
        type="text"
        value={inputChar}
        onChange={handleCharChange}
        regex="^.$"
      />
      <Input
        className="w-12 sm:w-16"
        type="text"
        value={inputNum}
        onChange={handleNumChange}
        regex="^[0-9]{1,4}$"
      />
    </div>
  );
}
