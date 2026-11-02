<!-- (kommiBo) Source-reviewed repository notice; no runtime or license grant is implied. -->

# Safe data handling and publication

Reviewed 2026-11-01.

This is an operator checklist for a local Node.js serialization comparison over a fixed fictional warehouse dataset, not a claim that these controls
are automatically enforced by the code.

1. Retain the fictional fixture for public demonstrations. If evaluating another
   dataset, use a separate private copy and obtain the necessary data authorization.
2. Treat JSON and TOON outputs as equivalent disclosures of the source values.
   Smaller representation is neither anonymization nor access control.
3. Check `output/` before staging changes: both `demo` and `npm test` rewrite those
   files. The test detects baseline drift but does not classify sensitive data.
4. Inspect terminal captures for absolute paths and environment details before sharing.
   Do not attach real customer orders to an issue or an evaluation screenshot.
5. Any later model experiment needs its own provider, data-use, cost and authorization
   decision. This repository neither calls a model nor supplies paid API credentials.

Generated files remain on local storage until removed. No central retention scheduler
or remote deletion endpoint is implemented by the generator.

## Review before publishing

Check the complete staged diff and all attachments, not just source extensions. Reject
secrets, real customer records, personal documents and unexplained binary exports.
Use synthetic reproductions in public discussions. If information is already public,
contact AEKR through [the privacy notice](../PRIVACY.md); changing the current file
does not erase Git history or third-party copies. Rotate an exposed credential through
its provider rather than relying on a later Git deletion.
