'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { count } = require('../src/count');

test('counts lines, words and characters', () => {
  assert.deepEqual(count('one two\nthree\n'), { lines: 2, words: 3, characters: 14 });
});

test('an empty string has nothing to count', () => {
  assert.deepEqual(count(''), { lines: 0, words: 0, characters: 0 });
});
