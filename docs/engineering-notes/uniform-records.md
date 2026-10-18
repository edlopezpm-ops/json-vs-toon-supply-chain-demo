<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Observe a small uniform record table

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/uniform-records.mjs
```

The [complete executable recipe](../examples/uniform-records.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { orders: [{ id: 'DEMO-1', units: 2 }, { id: 'DEMO-2', units: 5 }] };
const toon = encode(input);
assert.match(toon, /orders\[2\]\{id,units\}:/);
assert.deepEqual(decode(toon), input);
console.log(toon);
```

## Expected result

Two synthetic records sharing primitive fields produce an `orders[2]{id,units}:` header, and decoding reproduces the input.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

The baseline dataset also uses uniform order records. This single shape does not establish smaller size for every dataset.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
