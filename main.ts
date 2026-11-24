import { mkdirSync, writeFileSync } from "node:fs";

// Entry: exactly "347" — three digits, no trailing newline.
// Why 347: a specific, non-round count in the 200–500 range. It reads
// as an honest count from a heavy tab hoarder (research tabs, tab
// groups, suspended tabs piling up over weeks), not a round guess
// like 300, not a meme number like 42 or 69, and not an absurd
// shock figure like 99999. Specific enough to look counted, high
// enough to be surprising, believable enough to be real — and at
// 3 bytes it wins the fewer-bytes tie-break over any 4-digit count.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "347", "utf8");
