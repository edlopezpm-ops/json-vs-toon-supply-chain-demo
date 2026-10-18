// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { orders: [{ id: 'DEMO-3', units: 1 }, { id: 'DEMO-1', units: 3 }] };
const decoded = decode(encode(input));
assert.deepEqual(decoded, input);
assert.deepEqual(decoded.orders.map((row) => row.id), ['DEMO-3', 'DEMO-1']);
console.log(decoded.orders.map((row) => row.id).join(' -> '));
