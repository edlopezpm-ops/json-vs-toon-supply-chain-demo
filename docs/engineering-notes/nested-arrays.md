<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Retain line-item arrays inside order records

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/nested-arrays.mjs
```

The [complete executable recipe](../examples/nested-arrays.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { orders: [{ id: 'DEMO-1', lines: [{ sku: 'TEST-A', units: 2 }, { sku: 'TEST-B', units: 1 }] }, { id: 'DEMO-2', lines: [] }] };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.equal(decode(toon).orders[0].lines.length, 2);
console.log(toon);
```

## Expected result

The first order keeps two nested lines and the second keeps an empty array.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

Nested containers may use a different layout from the baseline uniform primitive table. Inspect actual output rather than extrapolating baseline percentages.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
