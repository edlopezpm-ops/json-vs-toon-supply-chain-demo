<!-- (kommiBo) Source-reviewed repository notice; no runtime or license grant is implied. -->

# Licensing and provenance inventory

Reviewed 2026-11-01.

The root LICENSE grants MIT permissions subject to its notice conditions. These operational notes and TERMS.md do not narrow those rights, add a non-commercial restriction, or change the copyright holder.

| Component | Evidence and licensing boundary |
|---|---|
| Project code and associated documentation | Root `LICENSE` and `package.json` declare MIT. Preserve the copyright and permission notice in copies or substantial portions. |
| `@toon-format/toon` | Manifest and lockfile pin `4.1.1`. Its installed package metadata and LICENSE were inspected: MIT, copyright 2025-PRESENT Johann Schopplich. Preserve that dependency notice when distributing it. The lockfile's integrity hash is not a license grant. |
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

## Before redistributing

Check the actual files and installed dependency versions, preserve their applicable
notices, and obtain any missing permissions. A package name, a public repository,
a passing test or a software bill of materials is not itself a grant. This is a bounded
source inventory, not an exhaustive dependency-license or ownership certification.
The [use notes](../TERMS.md) cannot override a license grant.

Reference: [GitHub's repository licensing guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository).
