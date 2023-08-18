import { readFile, writeFile, mkdir } from "fs/promises";
import * as path from 'path';

const saveStyles = async (
  themePath: string,
  prefix?: string,
  targetPath: string = "app/styles"
) => {
  const target = path.join(process.cwd(), targetPath);
  const content = await readFile(
    path.join(process.cwd(), "node_modules", themePath), "utf-8"
  );

  const targetThemePath = path.join(target, themePath);
  await mkdir(path.dirname(targetThemePath), { recursive: true });

  let styleContent: string;

  if (prefix) {
    // Use a regular expression to prefix the CSS rules with `.dark`
    styleContent = content.replace(/(^|\})\s*([^\{]+)\s*\{/g, (_, end: string, selectors: string) => {
      // Prefix each selector in a comma-separated list
      const prefixedSelectors = selectors.split(',').map(selector => `.dark ${selector.trim()}`).join(', ');
      return `${end}${prefixedSelectors} {`;
    });
  } else {
    styleContent = content;
  }
  // const styleContent = prefix ? `.${prefix} {  ${content} }` : content;
  await writeFile(targetThemePath, styleContent, {
    encoding: "utf-8",
    flag: "w+",
  });
};

(async () => {
  await saveStyles("highlight.js/styles/github.css");
  await saveStyles("highlight.js/styles/github-dark.css", "dark");
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
