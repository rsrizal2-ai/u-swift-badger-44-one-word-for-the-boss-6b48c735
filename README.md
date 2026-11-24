# One Word for the Boss — Houseplant

[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/rsrizal2-ai/u-swift-badger-44-one-word-for-the-boss-6b48c735/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/rsrizal2-ai/u-swift-badger-44-one-word-for-the-boss-6b48c735/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)

Bounty: [One Word for the Boss](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

## The entry

**Houseplant**

One word, ten characters, no caption needed. The boss as office furniture:
present, decorative, does nothing, and the company keeps watering it anyway.
It lands in a kitchen, a warehouse, or an office, and it is the word a
colleague repeats at lunch.

## Why this word

The competition asks for exactly one word that describes your boss — funny on
its own, true, and fresh. The obvious reaches (micromanager, tyrant,
dictator, narcissist, workaholic, control freak) are the first words anyone
grabs, so they lose on freshness. Twenty-plus candidates were weighed against
the published criteria — single real word, funny alone, rings true, fresh,
travels across workplaces — and `Houseplant` won: a whole portrait in one
word, funnier than the dry-clever picks (Bottleneck), truer across workplaces
than the loud-boss picks (Foghorn), and fresher than the animal-metaphor
picks (Parrot, Goldfish), with no caption required to get the joke.

## How it works

`main.ts` writes the single word `Houseplant` to `/output/entry.txt`. It
validates its own output against the sealed gate before writing: exactly one
word (no spaces), UTF-8, 1–30 characters, not only whitespace. Nothing is
read from the network, the git history, or any secret — the word is in the
source, in plain sight.

Run it with:

```sh
node --experimental-strip-types main.ts
```

or, on older Node versions, compile it first:

```sh
npx tsc main.ts --outDir dist --module nodenext --target es2022
node dist/main.js
```

Referral: `3a433hx8`

## License

MIT — see [LICENSE](LICENSE).
