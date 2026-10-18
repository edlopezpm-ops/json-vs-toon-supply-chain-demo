<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Expose JavaScript number normalization limits

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/number-boundaries.mjs
```

The [complete executable recipe](../examples/number-boundaries.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { maximumSafeInteger: Number.MAX_SAFE_INTEGER, decimal: 0.1, negativeZero: -0, notFinite: Infinity };
const decoded = decode(encode(input));
assert.equal(decoded.maximumSafeInteger, 9007199254740991);
assert.equal(decoded.decimal, 0.1);
assert.equal(Object.is(decoded.negativeZero, -0), false);
assert.equal(decoded.notFinite, null);
assert.deepEqual(decoded, JSON.parse(JSON.stringify(input)));
console.log(decoded);
```

## Expected result

The safe integer and 0.1 round-trip as JavaScript numbers. Negative zero becomes zero and Infinity becomes null for the pinned package, matching JSON normalization in this example.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

Do not use this as exact decimal-money or arbitrary-precision integer proof. JavaScript number parsing can already have lost precision before either serializer runs.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
