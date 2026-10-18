<!-- (kommiBo) Operator-assisted, source-derived engineering note; synthetic examples only. -->
# Engineering notes

Runnable serialization recipes extend the fictional dataset with concrete type, escaping, nesting, fidelity and measurement cases. They leave application code and generated artifacts unchanged.

Source baseline: [`d3771e8611af6a126d94c87c9a18afecdc52a7a5`](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/tree/d3771e8611af6a126d94c87c9a18afecdc52a7a5). Each note links the owning implementation. Examples assert their own outcomes; baseline implementation descriptions are source-derived. A local assertion pass is scoped to that recipe and the installed package version.

## Reading paths

- [Observe a small uniform record table](uniform-records.md)
- [Preserve array order through a round trip](record-order.md)
- [Keep commas inside a single tabular field](comma-values.md)
- [Keep timestamp and colon-bearing strings intact](colon-values.md)
- [Distinguish strings from numbers and keywords](type-looking-strings.md)
- [Round-trip quotes, slashes and control characters](escaped-controls.md)
- [Separate Unicode code points, UTF-16 units and UTF-8 bytes](unicode-metrics.md)
- [Round-trip a nested synthetic shipment object](nested-objects.md)
- [Retain line-item arrays inside order records](nested-arrays.md)
- [Compare records with different fields](nonuniform-records.md)
- [Retain empty arrays, objects and strings distinctly](empty-containers.md)
- [Distinguish booleans, null, zero and string values](primitive-types.md)
- [Expose JavaScript number normalization limits](number-boundaries.md)
- [Keep a missing property distinct from explicit null](missing-versus-null.md)
- [Measure formatted JSON and compact JSON separately](formatting-baselines.md)
- [Account for the final newline in file metrics](terminal-newline.md)
- [Read and compare the committed demonstration artifacts](artifact-fidelity.md)

## Documentation pattern provenance

These notes adapt four documentation practices from the public `checktimecardandgivefeedback` dossier at commit `235a70f1613f9a7c19515b3a579d7539dcff6b47`:

- [00-START-HERE.md](https://github.com/edlopezpm-ops/checktimecardandgivefeedback/blob/235a70f1613f9a7c19515b3a579d7539dcff6b47/00-START-HERE.md): pin the reviewed source and state the evidence boundary.
- [01-architecture-and-stack.md](https://github.com/edlopezpm-ops/checktimecardandgivefeedback/blob/235a70f1613f9a7c19515b3a579d7539dcff6b47/01-architecture-and-stack.md): identify each component's responsibility and follow data across boundaries.
- [07-security-privacy-quality-and-evidence.md](https://github.com/edlopezpm-ops/checktimecardandgivefeedback/blob/235a70f1613f9a7c19515b3a579d7539dcff6b47/07-security-privacy-quality-and-evidence.md): distinguish source checks, executed examples and human observations.
- [09-improvement-review-guide-and-open-decisions.md](https://github.com/edlopezpm-ops/checktimecardandgivefeedback/blob/235a70f1613f9a7c19515b3a579d7539dcff6b47/09-improvement-review-guide-and-open-decisions.md): use concrete inputs, expected outcomes, negative cases and explicit limits.

This is attribution of documentation patterns. The dossier's timeKER architecture, functionality, release evidence and acceptance status do not describe this repository. Examples here are synthetic and do not supply production or human acceptance evidence.
