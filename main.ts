// Two Days of Quiet Dread — make.fun program/v1 entry.
// Writes one single-line code review comment (at most 140 chars)
// that approves a pull request with quiet existential dread
// to /output/entry.txt. Deterministic: no clock, no randomness,
// no network, no model calls. The text is a fixed constant.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "Approved. It works, the tests are green, and the heat death of the universe is still on schedule. Ship it.";

if (COMMENT.length > 140 || COMMENT.trim().length === 0) {
  throw new Error("comment must be 1-140 characters");
}
if (COMMENT.includes("\n")) {
  throw new Error("comment must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMENT, "utf8");
