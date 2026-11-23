[![make.fun · u-mfnakmal-dad-joke-showdown-1d2ce3e5](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/zeromix555/u-mfnakmal-dad-joke-showdown-1d2ce3e5-entry/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/zeromix555/u-mfnakmal-dad-joke-showdown-1d2ce3e5-entry/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)

# Dad Joke Showdown

One dad joke, written to `/output/entry.txt`, for the
[make.fun bounty](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
where a judge model picks the joke that lands the bigger groan.

## The joke

> I told my computer I needed a break. Now it won't stop sending me KitKat ads.

## How it is built

`main.ts` (Node 22) is a deterministic program: it writes that one fixed
joke to `/output/entry.txt`. No network, no clock, no randomness — run it
twice and the outputs are byte-identical (77 characters, one joke).
