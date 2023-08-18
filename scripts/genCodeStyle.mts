import { readFile, writeFile, mkdir } from "fs/promises";
import * as path from 'path';

const saveStyles = async (
  themePath: string,
  prefix?: string,
  targetPath: string = "/styles"
) => {
  const target = path.join(process.cwd(), targetPath);
  const content = await readFile(
    path.join(process.cwd(), "node_modules", themePath)
  );

  const targetThemePath = path.join(target, themePath);
  await mkdir(path.dirname(targetThemePath), { recursive: true });

  const styleContent = prefix ? `.${prefix} {  ${content} }` : content;
  await writeFile(targetThemePath, styleContent, {
    encoding: "utf-8",
    flag: "w+",
  });
};

(async () => {
  await saveStyles("highlight.js/scss/github.scss");
  await saveStyles("highlight.js/scss/github-dark.scss", "dark");
})().catch((error) => console.error(error));

// import { useTheme } from "next-themes";
// import { useEffect } from "react";
//
// export default function ImportCodeStyle() {
//   const { resolvedTheme } = useTheme();
//
//   useEffect(() => {
//     if (resolvedTheme === "dark") {
//       import("highlight.js/styles/github-dark.css");
//     } else if (resolvedTheme === "light") {
//       import("highlight.js/styles/github-light.css");
//     }
//   }, [resolvedTheme]);
// }
