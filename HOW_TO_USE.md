# How to Use This Demo

Use this repository as a small serialization experiment, not as a production architecture or a recommendation to replace JSON.

## 1. Install and run

Requirements: Node.js 20 or newer and npm.

```bash
git clone https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo.git
cd json-vs-toon-supply-chain-demo
npm install
npm run demo
```

The script writes two representations of the same fictional warehouse dataset:

- `output/warehouse-orders.json`
- `output/warehouse-orders.toon`

It also reports character and UTF-8 byte counts for those exact generated files.

## 2. Compare the outputs

Open both output files side by side. Compare:

- repeated field names and structural punctuation in formatted JSON;
- TOON's declared collection length and field header;
- the compact rows available for this uniform collection; and
- readability for the intended consumer.

The result is specific to this dataset and formatting. A different or non-uniform structure may produce a different comparison.

## 3. Interpret the measurements correctly

The reported characters and UTF-8 bytes are not LLM tokens. Tokenizers differ by model and implementation, so any actual token change must be measured with the exact tokenizer and production data being considered.

This demo does not measure accuracy, latency, throughput, cost, or operational reliability. Do not infer those outcomes from the byte comparison.

## 4. Evaluate the appropriate boundary

Keep JSON where interoperability and established contracts matter: APIs, REST or GraphQL payloads, OpenAPI, JSON Schema, integration messaging, configuration, persistence, and system-to-system communication.

If an application sends structured context to an LLM, one possible experiment is to translate at a controlled AI boundary:

```text
Application → JSON → AI Gateway → TOON → LLM
Application ← JSON ← AI Gateway ← TOON ← LLM
```

This is one possible architecture, not an industry recommendation. The gateway would own conversion, validation, observability, error handling, and compatibility with the selected model.

## 5. Run a meaningful evaluation

Before considering TOON for a real application-to-LLM boundary:

1. Test representative production-shaped data, excluding confidential data from public experiments.
2. Compare against the JSON form the application actually uses, including its real formatting.
3. Measure tokens with the exact target model's tokenizer.
4. Evaluate model accuracy and failure behavior, not size alone.
5. Include conversion, validation, latency, debugging, and operational complexity in the decision.
6. Keep JSON contracts unchanged unless a separately reviewed architecture requires otherwise.

The appropriate conclusion may be to use TOON for a narrow boundary, use another representation, or retain JSON throughout.
