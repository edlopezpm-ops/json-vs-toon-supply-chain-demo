// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { released: false, exception: null, units: 0, label: '0', flags: [true, false, null] };
const decoded = decode(encode(input));
assert.deepEqual(decoded, input);
assert.equal(typeof decoded.units, 'number');
assert.equal(typeof decoded.label, 'string');
console.log(JSON.stringify(decoded));
