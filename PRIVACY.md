<!-- (kommiBo) Source-reviewed repository notice; no runtime or license grant is implied. -->

# Privacy — json-vs-toon-supply-chain-demo

Reviewed 2026-11-01.

## Scope and responsibility

AEKR maintains this project's notices and is the contact for questions at
[aekr@aekr.io](mailto:aekr@aekr.io). This notice covers a local Node.js serialization comparison over a fixed fictional warehouse dataset.
It does not claim a new legal entity or apply the aekr.io website's analytics,
questionnaire, browser-data email service or retention periods to this repository.

## What the reviewed source does

`src/generate-comparison.mjs` embeds the fictional example and writes JSON and TOON
under `output/`. It prints size metrics and local output paths. The reviewed generator
contains no HTTP client, account system, analytics collector or model invocation.
TOON serialization is an encoding choice, not anonymization or encryption.

`npm ci` downloads the locked dependency from the package registry. Installation is
a separate network operation governed by npm/registry and dependency behavior.
Replacing the sample with real orders would place those values in both generated
files; this notice grants no authority to publish or send them to an LLM.

Source evidence: [generator](src/generate-comparison.mjs), [package manifest](package.json), [lockfile](package-lock.json). This is a source review, not a guarantee about every
dependency, host, historical artifact or future deployment.

## Hosting, requests and retention

GitHub processes repository visits and collaboration activity under its
[privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
If you serve a local copy over HTTP, that server can log requests. Downloading runtimes
or dependencies contacts their providers. Those operations are distinct from collection
implemented by the project itself. No repository-wide anonymous-visitor or zero-log
guarantee is made here.

Public issues, commits and attachments can be retained in history, forks, caches and
clones. Do not submit secrets, personal records or confidential data. For questions,
corrections, access or removal requests about project-held information, contact AEKR;
use [SECURITY.md](SECURITY.md) for a vulnerability report. Requests are considered under
applicable requirements; this notice promises neither a specific legal outcome nor
deletion of copies controlled by other parties. Local files have the retention described
in the [data-handling guide](docs/data-handling.md).
