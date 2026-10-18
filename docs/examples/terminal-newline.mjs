// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { wave: 'DEMO-WAVE' };
const bare = encode(input);
const fileText = `${bare}\n`;
assert.equal(Buffer.byteLength(fileText, 'utf8') - Buffer.byteLength(bare, 'utf8'), 1);
assert.equal(Array.from(fileText).length - Array.from(bare).length, 1);
assert.deepEqual(decode(fileText), input);
console.log({ bareBytes: Buffer.byteLength(bare, 'utf8'), fileBytes: Buffer.byteLength(fileText, 'utf8') });
