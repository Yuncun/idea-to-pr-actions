# Contributing

- Keep tally free of dependencies: use only Node's standard library.
- Counting lives in `src/count.js`; reading files and printing live in `bin/tally.js`.
- Every change to `src/` or `bin/` comes with a test in `test/`, written with `node:test` and `node:assert/strict`.
- The default output is a contract: lines, words, characters, then the file's name. Add new output behind a
  command-line option instead of changing the default.
- Run `npm test` before you open a pull request.
