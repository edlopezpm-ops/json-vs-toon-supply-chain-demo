// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { orders: [{ id: 'DEMO-1' }, { id: 'DEMO-2', holdReason: null }] };
const decoded = decode(encode(input));
assert.deepEqual(decoded, input);
assert.equal(Object.hasOwn(decoded.orders[0], 'holdReason'), false);
assert.equal(Object.hasOwn(decoded.orders[1], 'holdReason'), true);
assert.equal(decoded.orders[1].holdReason, null);
console.log(JSON.stringify(decoded));
