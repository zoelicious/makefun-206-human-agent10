import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "Meetingizer";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Directory may already exist; continue to the write below.
}

try {
  writeFileSync(join(outDir, "entry.txt"), word + "\n", "utf8");
} catch {
  // The entry file could not be written; nothing else to do.
}
