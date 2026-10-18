// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { orders: [{ id: 'DEMO-1', units: 2 }, { id: 'DEMO-2', holdReason: 'TEST-ONLY' }] };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.equal(Object.hasOwn(decode(toon).orders[0], 'holdReason'), false);
console.log(toon);
