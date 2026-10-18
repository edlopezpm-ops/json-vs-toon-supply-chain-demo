// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { orders: [{ id: 'DEMO-1', destination: 'Test City, ZZ' }, { id: 'DEMO-2', destination: 'Other City, ZZ' }] };
const toon = encode(input);
assert.ok(toon.includes('"Test City, ZZ"'));
assert.deepEqual(decode(toon), input);
console.log(toon);
