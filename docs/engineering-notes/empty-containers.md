<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Retain empty arrays, objects and strings distinctly

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/empty-containers.mjs
```

The [complete executable recipe](../examples/empty-containers.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { orders: [], metadata: {}, note: '' };
const toon = encode(input);
assert.deepEqual(decode(toon), input);
assert.ok(Array.isArray(decode(toon).orders));
assert.equal(typeof decode(toon).metadata, 'object');
console.log(toon);
```

## Expected result

The decoded result retains an empty orders array, an empty metadata object and an empty note string.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

Empty, missing and null are different states. The serializer does not choose business defaults for an empty wave.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
