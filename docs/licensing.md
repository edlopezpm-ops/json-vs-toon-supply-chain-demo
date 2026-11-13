<!-- (kommiBo) Source-reviewed repository notice; no runtime or license grant is implied. -->

# Licensing and provenance inventory

Reviewed 2026-11-12.

The root LICENSE grants MIT permissions subject to its notice conditions. These operational notes and TERMS.md do not narrow those rights, add a non-commercial restriction, or change the copyright holder.

| Component | Evidence and licensing boundary |
|---|---|
| Project code and associated documentation | Root `LICENSE` and `package.json` declare MIT. Preserve the copyright and permission notice in copies or substantial portions. |
| `@toon-format/toon` | Manifest and lockfile pin `4.1.1`. Its installed package metadata and LICENSE declare MIT, copyright 2025-PRESENT Johann Schopplich. The [bundled verbatim notice](../THIRD_PARTY_NOTICES.md) makes that notice available without inspecting an installed environment. Preserve it when distributing the dependency. The lockfile's integrity hash is not a license grant. |
| Illustrations in `assets/` | Keep existing provenance; do not infer a separate trademark or endorsement grant from a format illustration. |

## AEKR provenance has a bounded scope

The [AEKR banner notice](../assets/AEKR-BANNER-LICENSE.txt) is copied unchanged from
the AEKR project-branding scaffold. It records the MIT provenance of that upstream
scaffold and any AEKR banner copied from it. Upstream references inside that verbatim
notice describe the toolkit, not a requirement to add its handbook here. It is not a
license for unrelated project code, data, personal material or third-party marks.

The AEKR footer names the workflow used. It neither transfers copyright to AEKR nor
imports the toolkit's CC BY handbook license into this repository. Where no banner
image is present, retaining its provenance notice does not claim that an image is bundled.

## Recorded license and permission changes

This history distinguishes a changed permission from an update to its documentation.
The linked commits identify the material being described; this inventory is not a new grant.

| Date | Source change | Effect on permissions |
|---|---|---|
| 2026-08-05 | [Root MIT license added](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/commit/a9350881d143c37db575e0ec112c52e2b8d4fd6c) | The root license grants MIT permissions with its copyright and notice conditions. |
| 2026-11-01 | [Licensing inventory added](https://github.com/edlopezpm-ops/json-vs-toon-supply-chain-demo/commit/37d4027d8d7ca4eb96dd20a6c0cb1d6e5eb71121) | Distinguished the project MIT grant, dependency notice and AEKR provenance; did not replace the root license. |
| 2026-11-12 | Inventory and dependency notice updates | Added reuse guidance and a [verbatim dependency notice](../THIRD_PARTY_NOTICES.md); corrected the first-license reference using complete history. The root MIT license and package metadata remain unchanged. |

## Which permission applies to a proposed reuse?

| Proposed action | Applicable boundary |
|---|---|
| Use, modify or redistribute project software and associated documentation covered by MIT | Follow the root [MIT license](../LICENSE), including its notice condition; commercial use is not excluded. |
| Redistribute the installed `@toon-format/toon` package | Preserve its own copyright and MIT notice as well as the project notice. |
| Replace fictional orders with another dataset | Check rights and confidentiality for that dataset separately; the software license supplies no permission over third-party records. |
| Use AEKR branding or imply an endorsement | The software grant and banner provenance do not establish a general trademark or endorsement permission. |

For a permission request, send [aekr@aekr.io](mailto:aekr@aekr.io) the repository,
commit or release, relevant paths, and intended use or distribution. Omit confidential
source data. A request is not approval; retain any actual written permission with the
revision and files it covers. A future license change needs an explicit scope and must
preserve third-party notices and permissions already granted.

## Before redistributing

Check the actual files and installed dependency versions, preserve their applicable
notices, and obtain any missing permissions. A package name, a public repository,
a passing test or a software bill of materials is not itself a grant. This is a bounded
source inventory, not an exhaustive dependency-license or ownership certification.
The [use notes](../TERMS.md) cannot override a license grant.

Reference: [GitHub's repository licensing guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).
