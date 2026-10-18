// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { orders: [], metadata: {}, note: '' };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.ok(Array.isArray(decode(toon).orders));
assert.equal(typeof decode(toon).metadata, 'object');
console.log(toon);
