// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { shipment: { id: 'DEMO-S1', route: { origin: 'TEST-A', destination: 'TEST-B' } } };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.equal(decode(toon).shipment.route.destination, 'TEST-B');
console.log(toon);
