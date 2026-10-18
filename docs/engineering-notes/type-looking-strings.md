<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Distinguish strings from numbers and keywords

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/type-looking-strings.mjs
```

The [complete executable recipe](../examples/type-looking-strings.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { values: ['true', 'false', 'null', '42', '0012', '1e3', ''] };
const toon = encode(input);
const decoded = decode(toon);
assert.deepEqual(decoded, input);
assert.ok(decoded.values.every((value) => typeof value === 'string'));
console.log(toon);
```

## Expected result

Every entry remains a string, including keyword-looking, numeric-looking and empty values.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

Identifiers with leading zeros should be supplied as strings before serialization. A number already parsed by JavaScript cannot recover lost identifier formatting.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
