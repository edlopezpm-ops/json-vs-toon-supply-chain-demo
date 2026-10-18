<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Distinguish booleans, null, zero and string values

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/primitive-types.mjs
```

The [complete executable recipe](../examples/primitive-types.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { released: false, exception: null, units: 0, label: '0', flags: [true, false, null] };
const decoded = decode(encode(input));
assert.deepEqual(decoded, input);
assert.equal(typeof decoded.units, 'number');
assert.equal(typeof decoded.label, 'string');
console.log(JSON.stringify(decoded));
```

## Expected result

False, null, numeric zero and the string "0" remain distinct, including within the mixed primitive array.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

A preserved type is not a business validation result. For example, zero units may be serializable while still violating a separate order rule.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
