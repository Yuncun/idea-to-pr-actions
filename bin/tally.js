#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const { count } = require('../src/count');

function format({ lines, words, characters }, name) {
  return [lines, words, characters, ...(name ? [name] : [])].join(' ');
}

const files = process.argv.slice(2);
if (files.length) {
  for (const file of files) console.log(format(count(fs.readFileSync(file, 'utf8')), file));
} else {
  console.log(format(count(fs.readFileSync(0, 'utf8'))));
}
