// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { orders: [{ id: 'DEMO-1', lines: [{ sku: 'TEST-A', units: 2 }, { sku: 'TEST-B', units: 1 }] }, { id: 'DEMO-2', lines: [] }] };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.equal(decode(toon).orders[0].lines.length, 2);
console.log(toon);
