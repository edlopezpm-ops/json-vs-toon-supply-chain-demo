<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Account for the final newline in file metrics

Run from the repository root with Node.js 20+ after `npm ci`:

```shell
node docs/examples/terminal-newline.mjs
```

The [complete executable recipe](../examples/terminal-newline.mjs) uses synthetic values (or the repository's existing fictional artifacts), asserts its expected result, and writes only to the terminal. It does not overwrite `output/`.

## Input and assertion

```javascript
const input = { wave: 'DEMO-WAVE' };
const bare = encode(input);
const fileText = `${bare}\n`;
assert.equal(Buffer.byteLength(fileText, 'utf8') - Buffer.byteLength(bare, 'utf8'), 1);
assert.equal(Array.from(fileText).length - Array.from(bare).length, 1);
assert.deepEqual(decode(fileText), input);
console.log({ bareBytes: Buffer.byteLength(bare, 'utf8'), fileBytes: Buffer.byteLength(fileText, 'utf8') });
```

## Expected result

Appending the generator-style LF adds one byte and one code point to this ASCII example; decoding still returns the input.

## Source and responsibility

The existing [generator](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/src/generate-comparison.mjs) owns the baseline data, default `encode` call, final LF and character/byte measurements. The [package declaration](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package.json) and [lockfile](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/blob/d3771e8611af6a126d94c87c9a18afecdc52a7a5/package-lock.json) pin `@toon-format/toon` to `4.1.1`. The example uses that installed package's encoder/decoder; its local implementation is `node_modules/@toon-format/toon/dist/index.mjs` (installed by npm, not committed here).

## Limit

CRLF conversion on checkout can add more bytes. Measure the exact in-memory/generated text or exact file bytes, and record which one was measured.

An assertion pass proves this exact local example at the installed version. It does not establish model-specific token savings or a production conversion contract.
