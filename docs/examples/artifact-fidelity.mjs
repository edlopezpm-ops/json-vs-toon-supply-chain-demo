// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { encode, decode } from '@toon-format/toon';

const jsonPath = new URL('../../output/warehouse-orders.json', import.meta.url);
const toonPath = new URL('../../output/warehouse-orders.toon', import.meta.url);
const json = await readFile(jsonPath, 'utf8');
const toon = await readFile(toonPath, 'utf8');
const original = JSON.parse(json);
const decoded = decode(toon);
assert.deepEqual(decoded, original);
assert.equal(original.outboundOrders.length, 8);
console.log({ orders: original.outboundOrders.length, jsonBytes: Buffer.byteLength(json, 'utf8'), toonBytes: Buffer.byteLength(toon, 'utf8') });
