// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { orders: [{ id: 'DEMO-1', units: 2 }, { id: 'DEMO-2', units: 5 }] };
const variants = { prettyJSON: `${JSON.stringify(input, null, 2)}\n`, compactJSON: `${JSON.stringify(input)}\n`, TOON: `${encode(input)}\n` };
const rows = Object.entries(variants).map(([format, text]) => ({ format, codePoints: Array.from(text).length, utf8Bytes: Buffer.byteLength(text, 'utf8') }));
assert.ok(rows[0].utf8Bytes > rows[1].utf8Bytes);
assert.deepEqual(JSON.parse(variants.prettyJSON), JSON.parse(variants.compactJSON));
assert.deepEqual(decode(variants.TOON), input);
console.table(rows);
