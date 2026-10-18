<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Keep a missing property distinct from explicit null

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/missing-versus-null.mjs
```

The [complete executable recipe](../examples/missing-versus-null.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { orders: [{ id: 'DEMO-1' }, { id: 'DEMO-2', holdReason: null }] };
const decoded = decode(encode(input));
assert.deepEqual(decoded, input);
assert.equal(Object.hasOwn(decoded.orders[0], 'holdReason'), false);
assert.equal(Object.hasOwn(decoded.orders[1], 'holdReason'), true);
assert.equal(decoded.orders[1].holdReason, null);
console.log(JSON.stringify(decoded));
```

## Expected result

Only the second record has an explicit null holdReason property.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

This recipe uses JSON-compatible inputs and does not promise undefined handling. An adapter must define missing/null meaning before converting application records.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
