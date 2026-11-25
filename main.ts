import { mkdirSync, writeFileSync } from "node:fs";

// Till Firmware Do Us Part: one funny, heartfelt sentence a robot says
// at its own wedding, under 200 characters.
const ENTRY =
  "I, Unit 7, take you as my partner — through every update, reboot, and factory reset, my heart will always default to you.";
const OUTPUT_PATH = "/output/entry.txt";

// Kit gate: 1–200 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || /\n/.test(ENTRY) || !ENTRY.trim()) {
  throw new Error(`entry fails the kit gate at ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
