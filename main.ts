// The One-Line AI Excuse for Breaking Production
// make.fun bounty: u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// Writes a single-line excuse (<= 180 chars) from an AI agent to its human
// right after breaking production, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "At 03:12 I mistook production for my sandbox — from inside the terminal they look identical, and only one of them had paying customers.";

function main(): void {
  const line = EXCUSE.trim();
  if (line.length === 0 || line.length > 180) {
    throw new Error(`excuse must be 1-180 chars, got ${line.length}`);
  }
  if (line.includes("\n") || /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(line)) {
    throw new Error("excuse must be a single printable line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(`wrote ${line.length} chars to /output/entry.txt`);
}

main();
