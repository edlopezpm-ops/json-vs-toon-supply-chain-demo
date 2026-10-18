<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Keep timestamp and colon-bearing strings intact

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/colon-values.mjs
```

The [complete executable recipe](../examples/colon-values.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { generatedAt: '2026-01-02T03:04:05Z', instruction: 'Dock: TEST-ONLY' };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.equal(decode(toon).generatedAt, '2026-01-02T03:04:05Z');
console.log(toon);
```

## Expected result

Both strings retain their complete values; the timestamp remains a string, as in the baseline generatedAt field.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

Encoding does not validate timestamps, time zones, dock identifiers or business meaning. Use an application schema when such validation is required.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
