# tally

A tiny command-line tool that counts the lines, words and characters in text, like `wc`.

## Use

```sh
node bin/tally.js notes.txt         # 3 12 64 notes.txt
echo "one two" | node bin/tally.js  # 1 2 8
```

It prints the lines, words and characters, separated by spaces, then the file's name when it read a file.

## Develop

Node 20 or later, with no dependencies.

```sh
npm test
```

Read [CONTRIBUTING.md](CONTRIBUTING.md) before you change anything.

## Idea to PR demo

This repository also demonstrates an "idea to pull request" flow as a GitHub Actions workflow:
Actions → Idea to PR → Run workflow. A model writes a brief, the run waits for approval, then it
opens an issue and a pull request. The pull request only adds the brief; a coding agent would make
the change there.
