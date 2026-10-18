// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { values: ['true', 'false', 'null', '42', '0012', '1e3', ''] };
const toon = encode(input);
const decoded = decode(toon);
assert.deepEqual(decoded, input);
assert.ok(decoded.values.every((value) => typeof value === 'string'));
console.log(toon);
