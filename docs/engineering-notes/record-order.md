<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Preserve array order through a round trip

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/record-order.mjs
```

The [complete executable recipe](../examples/record-order.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { orders: [{ id: 'DEMO-3', units: 1 }, { id: 'DEMO-1', units: 3 }] };
const decoded = decode(encode(input));
assert.deepEqual(decoded, input);
assert.deepEqual(decoded.orders.map((row) => row.id), ['DEMO-3', 'DEMO-1']);
console.log(decoded.orders.map((row) => row.id).join(' -> '));
```

## Expected result

The decoded sequence is `DEMO-3 -> DEMO-1`; no sort is added by this recipe.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

Preserving array order does not make object-property order a domain contract. Sort only when the application explicitly requires it.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
