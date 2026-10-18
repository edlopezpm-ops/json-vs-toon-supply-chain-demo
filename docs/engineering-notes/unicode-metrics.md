<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Separate Unicode code points, UTF-16 units and UTF-8 bytes

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/unicode-metrics.mjs
```

The [complete executable recipe](../examples/unicode-metrics.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const text = 'é🚚';
const metrics = { utf16Units: text.length, codePoints: Array.from(text).length, utf8Bytes: Buffer.byteLength(text, 'utf8') };
assert.deepEqual(metrics, { utf16Units: 3, codePoints: 2, utf8Bytes: 6 });
assert.deepEqual(decode(encode({ label: text })), { label: text });
console.log(metrics);
```

## Expected result

For the exact string `é🚚`, JavaScript length is 3 UTF-16 units, the generator-style character count is 2 code points, and UTF-8 length is 6 bytes.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

The generator uses Array.from, so its Characters column counts code points rather than user-perceived graphemes. None of these counts is an LLM token count.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
