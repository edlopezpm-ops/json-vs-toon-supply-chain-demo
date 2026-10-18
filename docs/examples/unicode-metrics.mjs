// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const text = 'é🚚';
const metrics = { utf16Units: text.length, codePoints: Array.from(text).length, utf8Bytes: Buffer.byteLength(text, 'utf8') };
assert.deepEqual(metrics, { utf16Units: 3, codePoints: 2, utf8Bytes: 6 });
assert.deepEqual(decode(encode({ label: text })), { label: text });
console.log(metrics);
