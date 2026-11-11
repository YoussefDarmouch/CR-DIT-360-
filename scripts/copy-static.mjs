import { cp, copyFile, readFile, writeFile, mkdir } from "node:fs/promises";

await mkdir("dist/css", { recursive: true });

let html = await readFile("index.html", "utf8");

html = html.replace(
  './dist/app.js',
  './app.js'
);

await writeFile("dist/index.html", html);

await cp("css", "dist/css", { recursive: true });

console.log("Static files copied successfully!");
