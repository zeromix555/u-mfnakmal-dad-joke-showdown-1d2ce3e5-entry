import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my computer I needed a break. Now it won't stop sending me KitKat ads.";

// The gate requires UTF-8 text of 1-200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
