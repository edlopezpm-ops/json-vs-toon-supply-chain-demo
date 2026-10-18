// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { maximumSafeInteger: Number.MAX_SAFE_INTEGER, decimal: 0.1, negativeZero: -0, notFinite: Infinity };
const decoded = decode(encode(input));
assert.equal(decoded.maximumSafeInteger, 9007199254740991);
assert.equal(decoded.decimal, 0.1);
assert.equal(Object.is(decoded.negativeZero, -0), false);
assert.equal(decoded.notFinite, null);
assert.deepEqual(decoded, JSON.parse(JSON.stringify(input)));
console.log(decoded);
