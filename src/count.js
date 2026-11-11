'use strict';

// Counts the lines, words and characters in a string as wc does: a line ends with "\n", and a word is a run of
// characters other than white space.
function count(text) {
  return {
    lines: (text.match(/\n/g) ?? []).length,
    words: text.split(/\s+/).filter(Boolean).length,
    characters: [...text].length,
  };
}

module.exports = { count };
