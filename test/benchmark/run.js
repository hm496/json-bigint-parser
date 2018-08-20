'use strict';

const { readFileSync } = require('fs');
const { parse, stringify } = require('../../lib');

const json = JSON.parse(readFileSync(__dirname + '/largefile.json', 'utf-8'));
const text = JSON.stringify(json);

const MAX = 25;

// benchmark native JSON.parse
console.time('JSON.parse');
for (let i = 0; i < MAX; i++) {
  JSON.parse(text);
}
console.timeEnd('JSON.parse');

// benchmark JSON-BIGINT-PARSER.parse
console.time('JSON-BIGINT-PARSER.parse');
for (let i = 0; i < MAX; i++) {
  parse(text);
}
console.timeEnd('JSON-BIGINT-PARSER.parse');

console.log('');

// benchmark native JSON.stringify
console.time('JSON.stringify');
for (let i = 0; i < MAX; i++) {
  JSON.stringify(json);
}
console.timeEnd('JSON.stringify');

// benchmark JSON-BIGINT-PARSER.stringify
console.time('JSON-BIGINT-PARSER.stringify');
for (let i = 0; i < MAX; i++) {
  stringify(json);
}
console.timeEnd('JSON-BIGINT-PARSER.stringify');
