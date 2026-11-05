import { readFile } from "node:fs/promises";
import { setTimeout } from "node:timers/promises";
const base = "https://zaxdevv.github.io/zaxdev-portfolio/";
const expected = (await readFile("index.html", "utf8")).replaceAll("\r\n", "\n");
const deadline = Date.now() + 180000;
while (Date.now() < deadline) {
  const response = await fetch(`${base}?verify=${process.env.GITHUB_SHA || "current"}`, { signal: AbortSignal.timeout(15000) });
  if (response.ok && (await response.text()).replaceAll("\r\n", "\n") === expected) {
    console.log("PASS: GitHub Pages serves the committed HTML");
    process.exit(0);
  }
  await setTimeout(5000);
}
throw new Error("GitHub Pages did not publish the committed HTML within 180s");
