// One Word for the Boss — entry program.
//
// The competition asks for exactly one word describing your boss: no phrase,
// no caption, no explanation. The word is the whole entry, up to 30
// characters, and it has to land on its own. The judge compares entries two
// at a time on how funny the word is, how true it rings, and how fresh it
// feels.
//
// The word: Houseplant.
//
// Why this word, after weighing 20+ candidates against the published
// criteria (single real word; funny on its own; rings true; fresh; travels
// across workplaces):
//   - It is one standard English word, ten characters, no spaces.
//   - It is funny standing alone: the boss as office furniture — present,
//     decorative, does nothing, and the company keeps watering it anyway.
//     A colleague repeats it at lunch.
//   - It rings true: every workplace has the ornamental boss who occupies
//     the corner and contributes nothing but presence.
//   - It is fresh: nobody's first reach. The first-reach words
//     (micromanager, tyrant, dictator, narcissist, workaholic,
//     control freak) lose on freshness, and the caption-dependent jokes
//     (the seagull-manager gag) lose because they need explaining.
//   - It travels: a houseplant sits in a kitchen, a warehouse, and an
//     office alike, no industry knowledge required.
//
// The program writes the word to /output/entry.txt (or to the directory in
// OUTPUT_DIR when set, for local testing) and checks its own output against
// the sealed gate first: UTF-8 text of 1 to 30 characters, not only
// whitespace, a single word with no spaces. Nothing is read from the
// network, the git history, or any secret — the word is right here.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Houseplant";

// Mirror of the sealed gate, and nothing more: the entry must be UTF-8 text
// of 1 to 30 characters, not only whitespace. The competition additionally
// requires a single word, so we enforce no whitespace at all.
function gateOk(word: string): boolean {
  // Count characters as code points, so the 1–30 bound is exact even for
  // words outside the BMP (a UTF-16 surrogate pair is one character).
  const chars = [...word].length;
  if (chars < 1 || chars > 30) return false;
  if (word.trim().length === 0) return false;
  if (/\s/.test(word)) return false;
  return true;
}

function main(): void {
  if (!gateOk(WORD)) {
    throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, WORD, "utf8");
  // Read back and re-check: the file on disk must be exactly the gated word.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== WORD || !gateOk(onDisk)) {
    throw new Error(`verification failed for ${outPath}`);
  }
  console.log(`wrote ${JSON.stringify(WORD)} to ${outPath}`);
}

main();
