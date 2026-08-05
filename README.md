# JSON vs TOON: Supply Chain Demo

A small Node.js demo that serializes the same fictional warehouse outbound wave as readable JSON and TOON, then compares their character and UTF-8 byte sizes.

## Why compare them?

JSON is the source representation here. It remains the broadly supported choice for APIs, schemas, contracts, integrations, validation, tooling, and general interoperability.

[TOON (Token-Oriented Object Notation)](https://github.com/toon-format/toon) is used as a compact, human-readable translation of the same data. Its tabular form is especially effective for the uniform order records in this example and may reduce structural overhead at the application-to-LLM boundary.

TOON is not automatically a replacement for JSON. Choose a format for the specific system boundary and verify that its consumers support it. The demo reports characters and UTF-8 bytes only: **byte reduction is not token reduction**. Actual LLM token counts vary by model and tokenizer.

All warehouse, customer, and order details are fictional.

## Run the demo

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run demo
```

The command regenerates:

- `output/warehouse-orders.json`
- `output/warehouse-orders.toon`

It also prints a compact comparison table, absolute differences, percentage reductions, and the exact output paths.

## Prepare the VS Code screenshot

1. Open this project folder in VS Code.
2. Open `output/warehouse-orders.json`.
3. In the Explorer, right-click `output/warehouse-orders.toon` and select **Open to the Side**.
4. Run `npm run demo` in the integrated terminal.
5. Resize the terminal so the complete table, reduction lines, note, and both generated paths remain visible.
6. Collapse the Explorer sections you do not need, then hide the Explorer with `Ctrl+B` (`Cmd+B` on macOS) for minimal clutter.
7. Keep both editor panes near their first line. The screenshot should include the warehouse/wave header, JSON order objects, TOON tabular header and rows, and the complete terminal summary.

For a readable capture, use a moderate editor zoom and make the two editor panes approximately equal width.

## Project structure

```text
json-vs-toon-supply-chain-demo/
├── src/generate-comparison.mjs
├── output/warehouse-orders.json
├── output/warehouse-orders.toon
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## License

MIT
