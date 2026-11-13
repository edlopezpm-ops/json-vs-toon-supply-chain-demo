<!-- (kommiBo) Project-specific contribution and reproduction guidance. -->

# Contributing to json-vs-toon-supply-chain-demo

Start with the [README](README.md), [use boundaries](TERMS.md) and
[licensing inventory](docs/licensing.md). This guide describes how to propose a
change; it grants no new reuse rights and does not create a contributor agreement
or promise of support. Submit only material you are entitled to share. For restricted
material or an unclear permission, contact [aekr@aekr.io](mailto:aekr@aekr.io) before
sharing it. Use [SECURITY.md](SECURITY.md) for a private vulnerability report.

## Reproduce a change

Use Node.js 20 or newer and npm. From the repository root:

```sh
npm ci
npm test
```

The [package scripts](package.json) regenerate the two output files and compare them
with Git. The [CI workflow](.github/workflows/validation.yml) performs this check using
Node.js 20 and the locked dependencies. If the outputs differ, inspect the diff before
accepting it. An intended generator or fixture change should include the corresponding
reviewed outputs; do not update generated files merely to hide an unexplained failure.

For a reproduction, include the Node/npm versions, commit, exact command, expected and
actual output, and the smallest fictional input that demonstrates the issue. Keep
customer, warehouse and employee records out of issues and generated examples.

## Make measurement claims reproducible

Identify the dataset, serialization settings and dependency version behind any new
comparison. Keep characters, UTF-8 bytes and model tokens distinct. This program does
not invoke a model or measure cost, accuracy or latency; a smaller output is not
evidence of those outcomes. A token experiment needs its own named tokenizer and
method, without adding a paid model API as an implicit requirement.

For a dependency change, review `package.json`, `package-lock.json`, generated outputs
and the dependency's actual license notice together. Preserve the root MIT notice and
applicable dependency notices when redistributing covered material.

## Submit a bounded pull request

Describe the concrete problem, affected files, resulting behavior and validation
actually performed, including failures or missing runtime checks. Separate unrelated
changes. For documentation-only edits, check relative links, commands and claims
against the repository; do not claim runtime evidence from prose checks.

Do not include credentials, personal records or generated temporary artifacts.
Preserve copyright and dependency notices, and explain any proposed permission change
explicitly. Keep review and acceptance separate from implementation. A reviewed merge
is not proof of deployment or real-world suitability. Recover a bad merged change
through a reviewed revert rather than rewriting shared history.
