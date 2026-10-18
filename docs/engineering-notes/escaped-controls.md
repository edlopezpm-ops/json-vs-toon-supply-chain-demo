<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Round-trip quotes, slashes and control characters

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/escaped-controls.mjs
```

The [complete executable recipe](../examples/escaped-controls.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { instruction: 'Use "TEST" lane\\bin\nSecond line\tCHECK\rEND' };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.ok(toon.includes('\\n'));
assert.ok(toon.includes('\\t'));
console.log(toon);
```

## Expected result

The embedded newline and tab are escaped in serialized text and restored by decoding; quotes and backslashes remain part of the string.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

The terminal displays escape sequences in encoded text. Do not replace them manually or treat line-oriented display as a CSV parser.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
