<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Read and compare the committed demonstration artifacts

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/artifact-fidelity.mjs
```

The [complete executable recipe](../examples/artifact-fidelity.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const jsonPath = new URL('../../output/warehouse-orders.json', import.meta.url);
const toonPath = new URL('../../output/warehouse-orders.toon', import.meta.url);
const json = await readFile(jsonPath, 'utf8');
const toon = await readFile(toonPath, 'utf8');
const original = JSON.parse(json);
const decoded = decode(toon);
assert.deepEqual(decoded, original);
assert.equal(original.outboundOrders.length, 8);
console.log({ orders: original.outboundOrders.length, jsonBytes: Buffer.byteLength(json, 'utf8'), toonBytes: Buffer.byteLength(toon, 'utf8') });
```

## Expected result

The two existing files decode to the same eight-order object. This read-only example prints actual checkout byte counts.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

This adds a local round-trip experiment; the existing npm test only regenerates and checks Git differences. Neither one proves an LLM, gateway, live warehouse integration or human acceptance.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
