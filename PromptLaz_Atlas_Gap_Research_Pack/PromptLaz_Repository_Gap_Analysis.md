# PromptLaz Atlas — Repository-Grounded Gap Analysis
**Reviewed:** 26 October 2026  
**Repository supplied:** `PromptLaZ-main.zip`  
**Purpose:** Compare the application as it exists in the ZIP with the intended PromptLaz/PromptLaz Atlas product: a cross-disciplinary, beginner-friendly discovery system that helps users choose domain-specific options and build prompts through guided forms.

## Executive finding

The ZIP has a meaningful starting point. It is not an empty prototype, and it already includes a searchable four-level subject picker, custom-entry paths, domain categories, sample tasks, situation-phrase matching and 29 detailed workflow forms.

However, it is **not yet the complete, evidence-backed global Atlas described in the research brief**. The primary gap is not the absence of dropdown UI. It is the depth, traceability and linkage of the knowledge behind the UI.

A useful distinction:

- **Domain directory:** already present and broad.
- **Guided choices:** partially present; options are searchable and custom values are possible.
- **Task-specific explanations:** available for many workflow form fields, but not for each sample-task choice in the general taxonomy.
- **Specialist question banks:** only a subset of the domain/task space has dedicated workflow schemas.
- **Research evidence and maintenance:** not systematically represented for taxonomy nodes.
- **Global completeness:** not demonstrated; the taxonomy is a seed catalogue that needs evidence-led gap discovery and iterative expansion.

The ZIP should therefore be treated as a useful application baseline to enrich, not as proof that every profession, industry, technical discipline or task is covered.

## 1. What was counted in the supplied source

Counts below are from static inspection of the files in the ZIP. They are source inventory counts, not independent proof of domain completeness.

| Asset or metric | Observed in ZIP | What it means |
|---|---:|---|
| Top-level domain families | 39 | Broad navigation families are defined in `src/data/taxonomy.ts`. |
| Subdiscipline entries | 211 | Taxonomy contains a second level of domain-specific branches. |
| Sample-task strings | 801 | Suggested task labels exist under subdisciplines; they are not 801 separately authored workflow schemas. |
| Detailed workflow schemas | 29 | 10 in `workflows.ts` (including the universal builder), 4 in `workflows-founder.ts`, and 15 in `workflows-encyclopedia.ts`. |
| Workflow question fields | 190 | The 29 forms contain 5–11 field definitions each (about 6.6 on average). |
| Static situation phrases | 98 | `src/utils/fuzzySearch.ts` maps example problem phrases to domain/subdiscipline paths across 24 domain families and 87 distinct subdiscipline IDs. |
| Domain families tagged `published_workflow` | 6 | This is a status label, not evidence that the entire family is covered. |
| Subdisciplines tagged `published_workflow` | 10 | Most taxonomy branches are in starter/explainer/seed states. |
| Taxonomy `workflowsCount` metadata | Sum = 261 | This does not directly map to the 29 workflow schema IDs in the repository; treat it as an unresolved metric, not a verified count of implemented workflows. |

### Taxonomy status distribution

**Root domain families:** 6 `published_workflow`, 24 `starter_ready`, 8 `explainer_ready`, 1 `taxonomy_seed`.

**Subdisciplines:** 10 `published_workflow`, 88 `starter_ready`, 84 `explainer_ready`, 29 `taxonomy_seed`.

The `HierarchicalSubjectPicker.tsx` UI hardcodes the text **“39 domains · 211 disciplines ready”**. That is too strong if “ready” is read as fully authored or reviewed. The taxonomy itself distinguishes seed/explainer/starter/published states. Change the UI language to an accurate statement such as “39 domain families · 211 subject branches” and display individual coverage states or counts separately.

## 2. What is already implemented well

### 2.1 A real hierarchical subject picker exists

`src/components/HierarchicalSubjectPicker.tsx` implements four searchable levels:

1. Domain group
2. Domain family
3. Subdiscipline / branch
4. Specific task or problem

It uses the `SearchableCombobox` component. Domain families include a summary and alias terms; subdisciplines include summaries and sample-task suggestions. The picker has custom-entry routes for group, domain, branch and task, and a `specificDetails` field for extra user context. It also has quick starters, random inspiration and a static “Writer’s Block?” helper that uses `SITUATION_PHRASES`.

This means the next effort should **enrich and connect the data**, rather than unnecessarily rebuilding the picker from scratch.

### 2.2 Workflow fields have useful UX metadata

The `QuestionField` type supports a label, technical term, ELI5 explanation, example, input type, options, required/advanced states, step grouping, prompt impact, unknown-answer help and conditional dependency metadata. The detailed workflow schemas also include risk class, content tier, standards, reviewer role, review date, related workflows, verification checks and missing-input fallback rules.

This is a strong reusable base for task-specific questionnaires.

### 2.3 Prompt assembly and local workflows are part of the app

`src/utils/promptBuilder.ts` formats the selected hierarchy, builds prompt sections, handles readiness/missing-input signals and supports local drafts/export utilities. The app has Atlas browse/search components, a “Help Me Choose” modal, a response checker and related-workflow metadata.

These foundations should be retained and tested as the taxonomy is expanded.

## 3. Critical gaps between the research brief and the ZIP

### P0 — Make the knowledge model capable of representing what the brief asks for

The current taxonomy types in `src/types/index.ts` are mostly `DomainFamily` and `Subdiscipline`. A subdiscipline has `id`, `name`, `summary`, `sampleTasks`, `coverageState`, and `workflowsCount`. A sample task is a string.

That structure is not yet enough to represent a full knowledge graph of:

- economic industries and industry sub-sectors;
- occupations and user roles;
- academic disciplines and specialist concepts;
- tasks, methods and processes;
- tools, software, equipment and instruments;
- technical parameters, units, measurements and constraints;
- input datasets, records and evidence;
- standards, frameworks, regulations and jurisdictions;
- deliverables, quality checks, common mistakes and prerequisites;
- source evidence, confidence, reviewer and content version.

Do not force all these entity types into the current two-level tree. Add a backward-compatible, typed node/relationship layer and keep a stable-ID mapping to the current `DOMAIN_FAMILIES` so the existing interface can continue to work during migration.

### P0 — Sample tasks are labels, not domain-specific question banks

The 801 values in `sampleTasks` are plain strings. At task level, the picker’s subtitle is generic (`Sample prompt task in [subdiscipline]`). A user may see an unfamiliar task label but still not know what it means, when to choose it, what data is required or what happens next.

For each selectable task candidate, research and add, where relevant:

- plain-English definition;
- “Choose this when…” guidance;
- an example situation;
- novice and professional synonyms;
- expected inputs and missing-data guidance;
- relevant parameters / units / tools / standards;
- likely deliverables;
- a question-bank or workflow link;
- related tasks / prerequisites;
- source references and confidence;
- honest maturity status.

Avoid dumping every expert field into the dropdown. Use a concise subtitle plus “What does this mean?” / “Choose this when…” detail, then reveal the appropriate form after selection.

### P0 — Taxonomy and implemented workflow coverage are not joined by stable IDs

The sample-task list stores names, not task objects with IDs. The taxonomy does not have explicit `workflowIds` for each branch. `workflowsCount` values sum to 261, while only 29 workflow schemas are defined in the three workflow files.

The 29 actual workflow schemas use 5 `domainId` values that are not among the 39 taxonomy family IDs: `universal`, `founder_sales_marketing`, `founder_finance_cashflow`, `founder_operations_erp`, and `founder_people_leadership`. These may represent legitimate special routes, but the data contract does not explicitly distinguish virtual workflow categories from canonical taxonomy domains.

Required change:
1. Assign stable IDs to task candidates.
2. Link workflows to task IDs and taxonomy nodes explicitly.
3. Make visible workflow counts derived from actual linked workflow records, not hand-entered integers.
4. Model Universal Builder and Founder Playbook as workflow collections or special entry routes, or map their workflows to canonical domains with explicit secondary relationships.
5. Add validation to detect missing IDs, orphaned relationships and falsely reported counts.

### P0 — The taxonomy has no systematic provenance

`DomainFamily` and `Subdiscipline` do not include source IDs, evidence notes, access dates, confidence, language/region, reviewer or revision metadata. Workflow schemas contain review-related fields, but that does not establish evidence provenance for each taxonomy branch or task label.

Research outputs need a source register and traceable mapping for major nodes. Add fields such as `sourceIds`, `sourceConfidence`, `lastReviewedAt`, `reviewStatus`, `coverageStatus`, `regionScope`, `language`, `aliases` and `contentVersion`. Use a separate source table rather than repeating long URLs inside every node.

### P0 — Do not mistake “task choice” for “specialist workflow”

Current detailed forms are concentrated in a limited set of paths. Based on workflow `domainId` mappings in the files, only 24 of the 29 schemas link directly to one of the 39 canonical domain-family IDs; the remaining five use special IDs noted above.

Representative coverage gaps include:

- **Photography / video:** product/commercial photography and image editing have dedicated workflows. The taxonomy contains a Video Production & Filmmaking branch, but there is no dedicated videography/cinematography workflow schema. Video-specific questions should cover production goal, shot type, camera/lens, focal length, frame rate, shutter angle/speed, exposure, focus, lighting, movement, audio, codec, colour profile, edit and delivery—not indiscriminately ask every user every parameter.
- **Civil engineering:** dedicated soil and structural-member workflows exist. Concrete/materials QA, steel connections, hydraulics, quantity surveying, transport/pavements, surveying/GIS/BIM and environmental branches exist as taxonomy/task suggestions but do not each have an individually linked specialist questionnaire.
- **Electrical / telecom:** one combined electrical/electronics workflow exists; telecommunications/RF appears in the taxonomy but lacks its own verified specialist workflow.
- **IT:** Kubernetes operations, software QA, data science/ML, cybersecurity and UI/UX have dedicated schemas. Networking, server administration, databases, cloud architecture, IT support and other listed branches need separate workflow depth where justified.
- **Finance / paperwork:** equity valuation and founder cash-flow/receivables workflows exist. Bookkeeping/reconciliation, banking/treasury, insurance claims and tax-document preparation are taxonomy branches but do not each have a dedicated questionnaire.
- **Marketing:** one marketing content/campaign workflow does not constitute separately reviewed SEO, PPC, paid social, lifecycle/email, attribution, analytics and conversion-rate optimisation workflows.
- **Manufacturing:** broad mechanical/manufacturing and operations branches exist, but paper/pulp processing, packaging, process quality and related industrial tasks need a more explicit branch and evidence-based task mapping.
- **Other sciences and life areas:** wide taxonomy coverage exists, but many branches remain starter/explainer/seed content without dedicated linked workflow schemas.

The full list of branches with and without direct schemas should be generated automatically from IDs. The examples above identify high-value gap clusters; they are not a complete list.

### P1 — Problem-first discovery is useful but not global semantic understanding

The project has 98 curated situation phrases across 24 of 39 domains, plus fuzzy search and a Help Me Choose modal. This is a useful local-first baseline, not a comprehensive natural-language task classifier. Phrases and aliases should be researched from real user/job/task language and expanded systematically.

Do not imply that an LLM is inferring arbitrary unseen tasks. If the app is using phrase/alias matching, label it as guided search / matching. AI-based task classification is a separate optional capability requiring explicit privacy, cost and reliability design.

### P1 — The “Other” paths need a formal custom-entry contract

The picker supports custom group/domain/branch/task text and extra specific details. Preserve this. Ensure:
- selecting a known parent while typing a custom child is supported;
- custom values are carried into the live prompt and local draft;
- typed custom values are not silently discarded on parent changes;
- taxonomy-missing topics remain usable but are tagged `custom_unclassified` or equivalent;
- the app never presents a custom term as a verified catalogue item;
- a future review process can propose frequently used custom topics for taxonomy admission.

### P1 — Global and regional terminology need explicit modelling

The taxonomy should support synonyms, spelling variants, abbreviations, equipment/vendor terms, regional terminology and translated aliases. Standards, codes, laws, regulatory requirements, currencies, units, measurement conventions and job titles must be jurisdiction-aware where applicable.

Avoid using a single US/EU/India classification as the worldwide master taxonomy. Use classifications as references and map them into PromptLaz's cross-disciplinary task graph.

## 4. Illustrative difference: taxonomy seed versus guided workflow

### Photography — a meaningful current base, but not all video needs

Existing photography workflow fields include camera/gear, focal length, aperture/depth of field, focus and composition/lighting controls. That matches the “photographer already knows camera parameters” example reasonably well for the supported photography use case.

The next work is to:
- add educational descriptions to individual task choices;
- create distinct paths by photography genre and actual output;
- make advanced camera options progressive/disclosed only when relevant;
- create a separate video-production workflow instead of assuming a photo workflow covers video.

### Civil engineering — taxonomy tree exists; deeper workflows remain uneven

The civil family currently has 10 subdisciplines and 36 sample-task suggestions. The two explicit schemas are soil compaction/settlement and structural member review. Concrete technology and steel structures appear in the taxonomy with starter status, and their individual workflows are not separately linked by task IDs.

Do not stop at generic “Civil engineering → Concrete.” Provide routes for concrete mix-design brief, slump/workability, compressive-strength and cube-test interpretation, durability, reinforcement detailing, inspection/QA, and report generation, with appropriate jurisdiction/standard and reviewer controls.

### Electrical engineering and IT — broad branches exist, linked question sets are incomplete

Electrical has 7 subdisciplines and 27 task suggestions; one combined electrical/electronics workflow exists. Computing/software has 10 subdisciplines and 40 task suggestions; two core workflows cover Kubernetes operations and software QA, with adjacent schemas for data science, cybersecurity and UI/UX elsewhere.

Build the coverage register by task ID so that a user can distinguish a suggestion from a completed, tested specialist workflow.

## 5. Evidence-led research approach recommended

Do not prompt an agent to “analyse the entire internet” as if exhaustive crawling were possible. Ask for systematic, source-backed research using different reference systems for different dimensions:

- **Occupations, tasks, tools and worker skills:** O*NET is a detailed US occupational dataset with task statements, knowledge, technologies and work-activity data. Useful as a source and crosswalk, not as a complete global ontology. Official source: https://www.onetcenter.org/database.html and https://www.onetonline.org/help/onet/
- **Multilingual occupations, skills and knowledge concepts:** ESCO provides hierarchical occupation concepts, skill/knowledge concepts, descriptions and non-preferred terms. Its scope is the European labour market and it should be mapped, not treated as the global universe. Official source: https://esco.ec.europa.eu/en/classification
- **Industries / economic activity:** UN ISIC Revision 5 is an international industry classification and explicitly updates industry structure to account for new activities. Official source: https://unstats.un.org/unsd/classifications/Econ/isic
- **Research disciplines:** UNESCO's Fields of Research and Development (FORD) classification organizes research by fields of enquiry. Official source: https://uis.unesco.org/en/glossary-term/fields-research-and-development-ford
- **Specialist concepts and workflows:** official standards bodies, professional societies, university curricula, manufacturer documentation, technical handbooks, regulators and credible practitioner material.

The key is to join these sources while recording what each source covers and what it does not. Industry classifications, occupation taxonomies, academic subject lists and technical standards are complementary—not interchangeable.

Current reference findings: the O*NET database provides task statements and occupational characteristics; the ESCO classification uses hierarchical relationships and alternative terms; UN ISIC Rev. 5 reflects industry change; UNESCO FORD provides a high-level research-field structure. These source frameworks help bootstrap the Atlas but do not define PromptLaz's workflow product by themselves.

## 6. Recommended target data model

Retain existing `DOMAIN_FAMILIES` compatibility during migration. Add a typed node graph with relationships.

Minimum node types:
- `domain_family`
- `industry`
- `discipline`
- `subdiscipline`
- `occupation_role`
- `task`
- `concept`
- `method`
- `tool_or_equipment`
- `parameter`
- `input_data`
- `standard_or_framework`
- `jurisdiction`
- `deliverable`
- `quality_check`
- `workflow`

Minimum node metadata:
- stable ID and schema version;
- canonical label and entity type;
- `parentIds` and relationship edges;
- plain-English description;
- `chooseWhen`;
- concise examples;
- beginner and professional synonyms;
- child IDs / related IDs;
- input/parameter hints and output types where relevant;
- source IDs and evidence note;
- source confidence and region/language scope;
- coverage status, review status, last reviewed date and reviewer role.

Minimum workflow metadata:
- linked task IDs and applicable domain IDs;
- questions with `required`, `optional` or `expert` status;
- plain-language explanation, example, option metadata and conditional visibility;
- `I don't know / help me choose` behaviour;
- custom-value support;
- data requirements and missing-input rules;
- prompt assembly mapping;
- verification/answer checks;
- test cases and reviewer gate.

Suggested states:
`discovered` → `taxonomy_mapped` → `question_bank_drafted` → `workflow_implemented` → `tested` → `expert_reviewed` → `published`.

States must be machine-validated. Presence in a JSON file must not automatically imply `published`.

## 7. Prioritised work plan

### P0 — Research and content model before bulk data expansion
1. Freeze a machine-readable current inventory of all existing domains, subdisciplines, sample tasks, workflows and IDs.
2. Detect and reconcile task duplicates, aliases, orphaned relationships, stale counts and special workflow IDs.
3. Add stable task IDs and explicit workflow links.
4. Add provenance and confidence fields.
5. Replace “ready” copy with truthful coverage status.

### P1 — Domain gap research and representative workflow depth
1. Research each major domain systematically using official and specialist sources.
2. Produce a missing-branches register instead of rewriting already-present areas.
3. Prioritise high-impact gaps: video production, concrete QA/testing, steel connections, fluid mechanics/hydraulics, electrical protection, telecommunications/RF, networking/server/database administration, bookkeeping/reconciliation, tax-document organisation, SEO/PPC/email, paper/pulp production and common office/admin tasks.
4. Create one expert-reviewed, high-quality workflow per high-value task cluster before scaling to numerous shallow forms.

### P2 — Search, multilingual expansion and continuous maintenance
1. Grow situation phrases, aliases and plain-language examples from verified source language and user testing.
2. Support language/region variants and unit/standard differences.
3. Add a review cadence and user-report process for missing/incorrect taxonomy entries.
4. Add analytics only for privacy-safe taxonomy engagement; do not collect prompt content unless explicitly and justifiably designed.

## 8. Repository and implementation caveats

- The supplied project is named `PromptLaZ-main`, and the current `index.html` uses PromptLaz, but bundled docs/asset folders still include the old **PromptLas** spelling. Brand cleanup is incomplete in the content pack.
- The root README is still the generic Google AI Studio starter README and the package name is `react-example`; update these for the actual application.
- `@google/genai` and a `GEMINI_API_KEY` example exist in the package/configuration, but no app-source usage of the Gemini SDK was found in the searched source files. The current picker appears to use local taxonomy/fuzzy phrase matching, not model-powered task classification. Keep docs explicit about this.
- Repeated image assets exist in multiple repository locations (`PromptLas_*` folders, `public/`, and `public/og/`), inflating the ZIP and making it easier for deployed and source assets to drift.
- An installation attempt for JavaScript dependencies timed out in the analysis environment, and no `node_modules` directory was present. Therefore this report is a static source audit; `npm run lint` and `npm run build` were not successfully executed here. Do not infer a successful build.

## 9. External references consulted

1. O*NET Resource Center — Database: https://www.onetcenter.org/database.html  
   Provides occupation/task/knowledge/technology data and downloadable formats; US-focused.
2. O*NET OnLine — Overview: https://www.onetonline.org/help/onet/  
   Describes occupation profiles, occupation-specific task statements and the O*NET-SOC taxonomy.
3. European Commission ESCO — Classification: https://esco.ec.europa.eu/en/classification  
   Hierarchical occupations, skills and knowledge concepts with alternative terms and descriptions; EU labour-market focus.
4. United Nations Statistics Division — ISIC: https://unstats.un.org/unsd/classifications/Econ/isic  
   International industry/economic-activity classification; Revision 5 reflects structural changes and emerging activities.
5. UNESCO Institute for Statistics — Fields of Research and Development (FORD): https://uis.unesco.org/en/glossary-term/fields-research-and-development-ford  
   High-level research-domain classification.

## Bottom line

The ZIP has a stronger foundation than a simple blank-form prototype: 39 families, 211 branches, 801 sample-task suggestions, a custom-capable hierarchical picker and 29 detailed workflow schemas. The key missing work is to turn those disconnected labels into a **source-backed, cross-linked and progressively guided domain knowledge system**.

The next research agent should not start from a blank page. It should inspect the repository, preserve and validate what is useful, find the uncovered branches and missing task metadata, research those gaps using appropriate sources, then produce an additive, reviewable dataset and a precise implementation plan.


### Additional specialist-source examples for the priority gaps

6. NIST NICE Framework Resource Center — About: https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/about  
   Organizes cybersecurity work through task, knowledge and skill statements and work roles, which is directly relevant to modelling roles and tasks separately.

7. NIST NICE Framework Components v2.2.0 release (28 April 2026): https://www.nist.gov/news-events/news/2026/04/nice-releases-nice-framework-components-v220  
   Shows that specialist taxonomies need a version/update process; the 2026 update includes changed work roles and competency areas.

8. OWASP Web Security Testing Guide: https://owasp.org/projects/web-security-testing-guide and https://wstg.owasp.org/latest/2-Introduction/  
   Provides practical, domain-organized web application security testing methods. It is a useful source for a task-specific testing branch, not a general classification of all cybersecurity work.

9. Canon Europe — Basic Features of Lenses: https://files.canon-europe.com/files/webcontent/rf-lens-world/knowledge/index.html  
   Explains focal length, depth of field, aperture, shutter speed, perspective and lens effects; useful for authoritative beginner-facing photography explanations.

10. Adobe — Camera exposure settings: https://www.adobe.com/creativecloud/photography/hub/guides/camera-exposure-camera-settings.html  
    Explains aperture, shutter speed, ISO, exposure modes and task-dependent choices such as portrait depth of field versus action freezing.

11. Adobe India — Video frame rate: https://www.adobe.com/in/creativecloud/video/discover/frame-rate.html  
    Explains the relationship between frame rate and shutter speed for motion capture, helping seed video-specific guided questions. Exact production practice still depends on genre, delivery format and camera/workflow constraints.
