// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { orders: [{ id: 'DEMO-1', units: 2 }, { id: 'DEMO-2', units: 5 }] };
const toon = encode(input);
assert.match(toon, /orders\[2\]\{id,units\}:/);
assert.deepEqual(decode(toon), input);
console.log(toon);
