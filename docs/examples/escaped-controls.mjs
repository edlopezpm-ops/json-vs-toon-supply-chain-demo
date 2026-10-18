// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { instruction: 'Use "TEST" lane\\bin\nSecond line\tCHECK\rEND' };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.ok(toon.includes('\\n'));
assert.ok(toon.includes('\\t'));
console.log(toon);
