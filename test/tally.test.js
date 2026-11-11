'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const tally = path.join(__dirname, '..', 'bin', 'tally.js');

test('prints lines, words and characters for standard input', () => {
  assert.equal(execFileSync(process.execPath, [tally], { input: 'one two\n', encoding: 'utf8' }), '1 2 8\n');
});

test('names each file it reads', () => {
  assert.equal(execFileSync(process.execPath, [tally, path.join(__dirname, '..', 'package.json')], { encoding: 'utf8' }).trim().split(' ').at(-1),
    path.join(__dirname, '..', 'package.json'));
});
