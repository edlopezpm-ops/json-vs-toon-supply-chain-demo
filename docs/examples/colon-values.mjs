// (kommiBo) Operator-assisted synthetic serialization recipe; no network or application-output writes.
import assert from 'node:assert/strict';
import { encode, decode } from '@toon-format/toon';

const input = { generatedAt: '2026-01-02T03:04:05Z', instruction: 'Dock: TEST-ONLY' };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.equal(decode(toon).generatedAt, '2026-01-02T03:04:05Z');
console.log(toon);
