<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Keep commas inside a single tabular field

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/comma-values.mjs
```

The [complete executable recipe](../examples/comma-values.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { orders: [{ id: 'DEMO-1', destination: 'Test City, ZZ' }, { id: 'DEMO-2', destination: 'Other City, ZZ' }] };
const toon = encode(input);
assert.ok(toon.includes('"Test City, ZZ"'));
assert.deepEqual(decode(toon), input);
console.log(toon);
```

## Expected result

The comma-containing destination is quoted and returns as one string after decoding.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

Do not parse a TOON row with `split(",")`. The baseline destinations also contain commas, and their quoting belongs to the serializer.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
