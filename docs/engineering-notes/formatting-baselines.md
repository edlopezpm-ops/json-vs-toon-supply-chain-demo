<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Measure formatted JSON and compact JSON separately

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/formatting-baselines.mjs
```

The [complete executable recipe](../examples/formatting-baselines.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { orders: [{ id: 'DEMO-1', units: 2 }, { id: 'DEMO-2', units: 5 }] };
const variants = { prettyJSON: `${JSON.stringify(input, null, 2)}\n`, compactJSON: `${JSON.stringify(input)}\n`, TOON: `${encode(input)}\n` };
const rows = Object.entries(variants).map(([format, text]) => ({ format, codePoints: Array.from(text).length, utf8Bytes: Buffer.byteLength(text, 'utf8') }));
assert.ok(rows[0].utf8Bytes > rows[1].utf8Bytes);
assert.deepEqual(JSON.parse(variants.prettyJSON), JSON.parse(variants.compactJSON));
assert.deepEqual(decode(variants.TOON), input);
console.table(rows);
```

## Expected result

The same data yields different pretty and compact JSON byte counts. The printed rows identify exactly which representations are measured.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

The repository baseline compares two-space JSON against default TOON. Changing JSON formatting changes the denominator; these measurements do not establish token, latency or cost outcomes.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
