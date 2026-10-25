# PromptLas Prompt Studio
## Product Requirements Document (PRD) — v1.5

**Status:** Product requirements baseline; expanded domain-coverage and question-bank contract for implementation  
**Product type:** Static-site-generated (SSG), no-login, browser-first prompt-building workspace  
**Working tagline:** *Know what to ask. Build better prompts.*  
**Audience:** Global; beginners and professionals across creative, educational, technical, commercial and operational domains  
**Document purpose:** Define PromptLas Atlas + Studio, the connected A–Z directory, adaptive prompt forms, concrete landing-page and design requirements, user-comprehension rules, an AI Studio build contract, feasible launch scope, content governance, technical architecture, business model options, risk controls, delivery targets, and acceptance criteria.

---


**Document control**
- **Product/working brand:** PromptLas (domain and trademark clearance remain an open decision; not verified by this PRD).
- **Version:** 1.5
- **Status:** Build-ready requirements baseline; not a claim that the application has already been implemented or tested.
- **Audience:** Product owner, AI coding agent, UX designer, frontend engineer, content/workflow authors, reviewers and release owner.
- **Source of truth:** This PRD controls product intent; the UI/UX specification controls visual and interaction detail; the Master Build Prompt translates both into a first AI Studio implementation. If documents conflict, follow the PRD's product/safety requirements and record the conflict.
- **Revision summary:** v1.5 reframes comprehensive domain discovery and guided question knowledge as core product requirements. It adds an explicit breadth-versus-depth coverage contract, detailed civil-engineering and IT taxonomies, workflow-completeness states, question-bank schemas, beginner task-discovery behaviour, and updated release/acceptance criteria. v1.4 established the PromptLas brand and detailed UI placement, interaction, accessibility, operations and launch gates.

### Revision history

| Version | Change |
|---|---|
| v1.0 | Initial prompt-form product definition based on the AdvertFloz form + live-preview pattern. |
| v1.1 | Expanded connected cross-disciplinary directory and adaptive workflow catalogue. |
| v1.2 | Added Atlas, content tiers, risk classes, publishing gate and feasibility constraints. |
| v1.3 | Added an AI Studio build prompt, visual design tokens and beginner-first form rules. |
| v1.4 | Renamed to PromptLas; closes PRD implementation gaps with detailed placement, behavioural requirements, operational criteria and launch gates. |
| v1.5 | Makes the “Wikipedia for building prompts” vision explicit; adds comprehensive taxonomy/question-bank contracts and detailed civil-engineering and IT task trees; distinguishes catalog presence from reviewed workflows. |

### 0.1 Product problem and opportunity

Many prompt libraries assume that users already know the tool, vocabulary and structure required to ask a high-quality question. Generic prompt generators often ask a few universal questions that do not capture the real differences between tasks. A civil-engineering user may need units, source test results and a code edition; a photographer may need lighting, composition and depth-of-field intent; a DevOps engineer may need environment, expected versus actual behaviour, logs and rollback requirements.

PromptLas addresses the gap between **having a task** and **knowing what information an AI needs to perform it responsibly**. It provides a subject directory and guided intake that asks relevant questions, explains unfamiliar terms, identifies missing inputs, builds a prompt visibly and helps the user check the resulting answer.

These are product hypotheses to validate, not proven market findings:
- Task-specific forms improve user comprehension compared with a blank prompt box.
- Small, staged forms reduce abandonment compared with long technical questionnaires.
- Missing-input checks and answer-verification lists provide more lasting value than prompt wording alone.
- A curated subject graph and question banks can distinguish PromptLas from generic prompt libraries if their quality is demonstrably higher.

### 0.2 Product outcome and positioning

**Positioning statement:** PromptLas helps people across professions turn a real task into a clear, context-aware AI prompt through short, explained forms, visible prompt assembly and relevant quality checks.

**Primary user outcome:** the user leaves with an editable, task-specific prompt and understands the important choices they made.

**Secondary outcome:** the user discovers a sensible next step or related workflow without needing to know the directory taxonomy in advance.

**Not the promise:** PromptLas does not guarantee AI correctness, professional compliance, financial returns, or image fidelity; prompt generation is not the same as executing a task.


## 1. Executive summary

PromptLas Prompt Studio is a global **Atlas of subjects and a Studio of guided prompt forms**. It helps people ask better questions of AI without requiring them to know the right terminology first. The Atlas is a connected, searchable subject graph; the Studio turns a subject, task, role, context, modality and intended deliverable into a guided form that assembles an editable prompt in real time.

The long-term vision is cross-disciplinary coverage: civil engineering down to soil mechanics and consolidation; electrical engineering down to protection, power electronics and embedded systems; IT down to DevOps, data engineering, cloud and system design; photography down to genre, lighting and camera intent; finance down to accounting, equity research and quantitative-methodology education; and the connected needs of founders and small businesses. The directory also spans education, science, language, healthcare education, law-related information, agriculture, trades, operations, media and everyday work.

**The product is not “a million prompt templates”.** It is a maintained knowledge graph with aliases, disambiguation, question banks, common mistakes, answer-check lists, standards/source references and reviewed workflows. These are the durable assets. A form-only interface is relatively easy to copy; reviewed domain knowledge and trustworthy connections are harder to reproduce.

The attached AdvertFloz Prompt Studio v5.1 HTML remains the primary UX reference: ELI5 help beside each field, progressive disclosure, side-by-side form and live prompt, editable prompt output, copy/download actions, and explicit capability boundaries. PromptLas extends those interaction patterns into a directory.

### Design and usability contract added in v1.3

The interface must be easy enough for a person with no prompt-engineering background to complete. The default experience must not show the full expert schema. Ask the smallest useful set of questions, use ordinary language, and reveal technical options only when they add value. Every form should make it obvious what to enter, why it matters, and what happens next.

The PRD now specifies:
- Exact landing-page content hierarchy, section order, CTA labels and example copy.
- Font families, sizes, weights, spacing, buttons, cards, form fields, focus states and colour tokens.
- Beginner-first question design, “I don't know” handling, field examples and conditional branching.
- A real workflow workspace with live prompt preview and functioning interactions—not just a polished static mockup.
- An explicit AI Studio implementation prompt and delivery checklist, including what must be built, what must not be added, and how the app should be tested.

### Product model

**Atlas (subjects and question knowledge) → Studio (adaptive form) → Prompt Preview and Readiness Checks → Copy/export or explicit external execution → Response Checker and related next workflows.**

### Coverage contract added in v1.5

The product must be architected and governed as a **cross-disciplinary Atlas plus a guided prompt-learning workbench**, not as a landing page with a handful of unrelated forms. The A–Z directory, subject graph, task-discovery paths, question-bank model and workflow engine are core product capabilities. Every major domain family must be representable in the canonical taxonomy; domain coverage must be expandable without bespoke UI code for each subject.

Two dimensions of coverage must be reported separately:

- **Breadth coverage:** a user can find a domain and navigate to relevant disciplines, subjects, common tasks, plain-language explanations and a sensible next step. An available universal/starter builder may serve a subject whose specialist form is not yet reviewed.
- **Depth coverage:** a subject/task has a complete, tested and reviewed workflow with task-specific questions, conditional branches, missing-input behaviour, prompt assembly, quality checks and appropriate references/review metadata.

A taxonomy node, a category card, an explainer page, a reusable generic prompt pattern and a fully reviewed workflow are different things. The UI, analytics and release notes must never count them as interchangeable.

### Release scope rule

The initial release must establish the complete data model and navigation system, useful browse/search coverage across all 39 domain families in the directory map, an honest status for every exposed branch, a universal beginner-safe builder, and a deliberately selected set of deeply implemented workflows. Priority clusters—especially civil/built-environment engineering and computing/IT—must have substantially granular subject trees from the outset, not a single generic category. The public launch may stage specialist workflow depth, but it must not disguise missing forms as implemented features or use empty, search-indexable pages to simulate breadth. Each newly published workflow must pass its schema, content, test, safety and reviewer gates. Expanding the count by weakening these gates is prohibited.

### Product boundary

The first release is a static-site-generated, no-login, browser-first prompt builder. It can guide, assemble, explain, copy, download, and optionally keep local drafts. It does not itself conduct live research, generate/edit images, run code, retrieve current market data or perform transactions unless a clearly disclosed external integration is added. A prompt is an instruction to another tool, not evidence that the task has been executed.

### Changes introduced in v1.2

- Reframed the product as **Atlas + Studio**: a subject graph and question knowledge layer connected to the guided form workspace.
- Changed the catalogue model to six axes: subject, intent, person/level, context, modality and deliverable.
- Added canonical Atlas node records, question-bank fields, alias/disambiguation rules, graph relations, review metadata and reference registries.
- Added Tier 1 deep workflows, Tier 2 subject patterns and one Tier 3 universal builder.
- Added the 39-domain/6-group coverage map plus situation, business-type, exam, role, place and tool entry doors.
- Adopted Astro + React islands as the default architecture, while documenting Next.js static export as an alternative.
- Added risk classes R0–R4, publishing gates, crisis routing and R4 blocked workflow categories.
- Added an AI-assisted content factory with automated schema/prompt/duplicate checks and risk-proportional human review.
- Added SEO indexability gates, hosting file-count limits, content licensing/freshness requirements and a workflow authoring tool roadmap.
- Added model/tool profiles, prompt readiness, Response Checker, before/after evaluation, local prompt library, shareable state, multilingual routing and monetisation options to the roadmap.
- Added the feasibility assessment, target workflow counts as hypotheses, effort assumptions, stage gates and kill/pause criteria.

## 2. Product principles

1. **Outcome before jargon.** Ask what the user needs to accomplish before presenting specialist terminology.
2. **Multiple entry points.** A user may know their profession, the subject, the output needed, or only the problem. Support all four.
3. **ELI5 without oversimplifying the work.** Explain terms simply while preserving technical accuracy and professional vocabulary.
4. **Adaptive intake, not an interrogation.** Ask only questions relevant to the chosen task; allow “I don't know” where a safe path exists.
5. **Live prompt transparency.** Show how each significant choice changes the prompt.
6. **Progressive disclosure.** Beginner path first; advanced controls remain available without dominating the form.
7. **A connected directory.** Workflows link to prerequisites, complementary tasks, and logical next steps. The user should not need to know the exact taxonomy label.
8. **Domain fidelity.** Soil mechanics, portrait photography, options-risk analysis, and Kubernetes incident response require different inputs and guardrails.
9. **Explicit assumptions.** Separate user-provided facts, known defaults, inferred suggestions, and missing information.
10. **No false intelligence.** Rule-based routing must not be presented as AI understanding. Arbitrary-language AI routing requires an actual model capability and appropriate backend/privacy handling.
11. **Human control.** Prompts remain editable; form changes must not silently erase manual edits.
12. **Honest execution boundary.** “Build prompt” is not the same as “generate image”, “run code”, “fetch live market prices”, or “publish campaign”.
13. **Privacy by default.** No login, no prompt-content analytics, and no image upload to PromptLas servers in prompt-only mode.
14. **Evidence and safety.** Technical, financial, legal, health, and other high-consequence workflows must declare their limits, inputs, standards/jurisdiction, and review requirements.
15. **Globally extensible.** Use locale-aware units, jurisdiction fields, localisation-ready strings, and no US- or India-only assumptions unless the user selects that context.
16. **Breadth with depth.** The taxonomy may be A–Z in ambition, but each published workflow must be complete, tested, and useful; a huge list of shallow templates is not success.
17. **Composable architecture.** Add workflows through versioned schemas and test fixtures instead of bespoke pages and duplicated logic.
18. **Generate coverage; do not enumerate combinations by hand.** Use a bounded subject graph and reusable intent patterns. Never try to author every possible subject × role × intent × context × output combination as a separate page.
19. **Question knowledge is the asset.** Preserve reviewed beginner/practitioner/expert questions, neglected-input checks, common mistakes and response-verification checklists.
20. **Publish by evidence and risk.** A domain label or AI-generated draft is not enough to justify an indexable page. Review status, risk class and unique user value determine release and indexing.
21. **Model and modality are explicit.** Ask which target tool or family is intended when it materially changes structure; distinguish text, image, video, audio/music, code, data, slides, diagrams, 3D/CAD and voice/chatbot outputs.

## 3. Goals and non-goals

### 3.1 Goals

- Build a cross-disciplinary prompt-form directory with clear parent/child branches and cross-links between related workflows.
- Let users browse by **domain, discipline, subdiscipline, task intent, deliverable, role, synonym, or natural-language starter phrase**.
- Make common guided prompts usable in approximately 2–5 minutes, with deeper expert workflows allowed to take longer.
- Anticipate the information usually required for the selected task through conditional fields and transparent missing-input checks.
- Update the prompt preview as users answer.
- Explain the field in plain language, provide examples, state the default, and show what changes in the prompt.
- Include novice and advanced paths without duplicating the form.
- Let users copy, download Markdown/text, and export/import non-sensitive configuration JSON.
- Support optional, device-local drafts without login.
- Start as an SSG site and keep core form rendering and prompt assembly client-side.
- Give domain owners a repeatable method for adding, testing and maintaining new workflows.
- Treat high-consequence outputs differently from low-risk creative prompts.
- Provide search-friendly static category and workflow pages with unique useful content.
- Use a subject Atlas and six explicit dimensions to generate reusable workflow forms.
- Ship a Tier 3 universal builder from day one, alongside a small expert-reviewed Tier 1 launch pack.
- Establish content authoring, risk-based review, source freshness, schema generation and deprecation processes.
- Include a target-tool profile, language selection, quality/readiness feedback and a response-check path in the roadmap.

### 3.2 Non-goals for initial release

- Implementing every branch and specialist calculation in the first public launch.
- Pretending a static site can provide unrestricted LLM-based natural-language reasoning without calling a model.
- Performing calculations that require unavailable data and silently inventing inputs.
- Guaranteeing that a prompt will produce the same output across all models.
- Guaranteed image generation, code execution, financial returns, regulatory compliance, structural safety, or professional certification.
- Broker integration, live trade execution, automatic investment recommendations, or financial transactions.
- Mandatory login, cloud-synced history, public user profiles, or community posting.
- Server-side storage of user photos, code, personal financial details, engineering drawings, or prompts by default.
- Replacing qualified professional judgment in engineering, health, legal, finance, or safety-critical work.

## 4. Target users and primary jobs-to-be-done

| User / role | Example job | Typical inputs | Expected prompt output |
|---|---|---|---|
| General user | Turn an unclear idea into a useful AI request | Goal, context, desired result, constraints | Structured general prompt and guidance on missing context |
| Photographer / image creator | Plan a photo, create a visual, or edit a reference image | Subject, scene, intent, camera/light/style, preserve/change list | Photography brief or image-generation/edit prompt |
| Civil engineer | Explore soil compaction, settlement, structural analysis, or a BOQ | Project/task type, units, materials, geometry, loads/data, standard, output | Calculation/review/report prompt with input checks |
| Electrical engineer | Analyse power distribution, protection, motors, electronics or control | System, ratings, topology, voltage/frequency, load/data, standards, task | Engineering analysis/design brief with safeguards |
| Mechanical / process engineer | Analyse thermal, fluid, manufacturing, machine or process problems | System boundaries, geometry, materials, operating conditions, constraints | Model/design/review/maintenance prompt |
| IT / software engineer | Design a system, build an API, debug a defect, or review code | Task, stack/version, expected vs actual, constraints, tests, deployment target | Code/design/debugging prompt and verification plan |
| DevOps / platform / SRE | Build a pipeline, deploy infrastructure, troubleshoot an incident | Cloud/platform, architecture, environment, error/impact, SLO, security, rollback | Runbook, IaC/CI-CD/architecture/incident prompt |
| Data professional | Ingest, model, analyse or visualise data | Source, schema, volume, quality, latency, privacy, target, acceptance tests | ETL, SQL, warehouse, analytics, ML or dashboard prompt |
| Investor / trader / finance learner | Learn concepts or research a market/asset/strategy | Market, instrument, horizon, data source, assumptions, risk limits, method | Educational analysis/research/backtest prompt with uncertainty |
| Entrepreneur / founder | Validate an idea, price an offer, plan an MVP or raise capital | Customer, problem, evidence, market, stage, constraints, resources | Research plan, business model, PRD, GTM, financial model or pitch prompt |
| Marketer / creator | Make content or plan distribution | Offer, audience, channel, goal, proof, budget/capacity, restrictions | Content brief, campaign, landing-page, SEO or experiment prompt |
| Student / teacher | Learn, practise, teach or assess | Level, subject, syllabus, target outcome, time, assessment format | Tutor, quiz, revision plan, lesson or worksheet prompt |
| Researcher / analyst | Review evidence and derive a defensible answer | Question, corpus, method, evidence rules, output, uncertainty | Research protocol, synthesis, analysis or report prompt |
| Healthcare / wellbeing user | Learn general health concepts or prepare questions | Topic, context, intent, source preference, urgency where relevant | Educational explanation or appointment-preparation prompt, not diagnosis |
| Legal / compliance user | Understand a concept, organise facts, review a clause or checklist | Jurisdiction, document, date, objective, relevant facts | Legal-information/review prompt with jurisdiction and counsel caveats |
| Operations / service professional | Plan procurement, logistics, hospitality, agriculture, facilities or service delivery | Scope, location, resources, constraints, standards, KPIs | Operating plan, checklist, schedule, risk register or SOP |
| Writer / designer / media professional | Draft, storyboard, design, localise or critique content | Audience, medium, purpose, style, source material, output spec | Drafting/design/review prompt with format-specific controls |

The same person may use many branches. A founder might move through customer discovery → market sizing → unit economics → product requirements → landing page → marketing experiments → analytics. A civil engineer might move from soil investigation → geotechnical parameters → foundation options → structural interface → BOQ → construction method statement → inspection checklist. The product should support these connected journeys rather than treating each form as an isolated tool.

**High-consequence warning:** legal, finance, healthcare, civil/structural, electrical, chemical/process and safety work must not imply professional certification or replace qualified review. Prompts should identify missing information and ask for verification against applicable standards and jurisdiction.


### 4.1 User stories and outcome requirements

| ID | User story | Acceptance outcome |
|---|---|---|
| US-01 | As a novice, I want to describe my task in ordinary language so I do not need to know the category name. | The universal builder returns a useful prompt structure or asks one concise disambiguation question. |
| US-02 | As a beginner, I want each field explained so I can answer without searching the web. | Every non-obvious visible field has an explanation/example and an “I don't know” route where safe. |
| US-03 | As a practitioner, I want advanced options when I need precision. | Expert settings expose domain-specific fields without replacing beginner mode. |
| US-04 | As a user, I want to see the prompt build as I answer. | Preview reflects state changes and distinguishes user facts, unknowns and assumptions. |
| US-05 | As a professional, I want the form to identify missing critical inputs. | The form explains which inputs are missing and changes the output to a safe brief/checklist when needed. |
| US-06 | As a repeat user on the same device, I want to save a prompt without registering. | Local save is opt-in, removable and clearly device-specific. |
| US-07 | As a user with an existing reference image or document, I want to specify what should change and what must be preserved. | Edit workflows expose both change and preserve fields and disclose local/external data handling. |
| US-08 | As a user, I want related workflows to help me continue my task. | Contextual prerequisite/companion/next-step links appear without duplicating the same workflow definition. |
| US-09 | As a reviewer, I want provenance, risk class and review dates. | Each published high-consequence workflow shows the required scope, source metadata and reviewer status. |
| US-10 | As a product owner, I want to add workflows through a repeatable process. | A schema authoring path and automated validation reduce bespoke page implementation. |

### 4.2 Prioritisation convention

- **P0 / Must:** required for a safe, usable MVP and part of launch acceptance.
- **P1 / Should:** important for launch quality but can be scheduled after the first end-to-end vertical slice.
- **P2 / Could:** useful later, no launch blocker.
- **P3 / Not now:** explicitly deferred to avoid scope expansion.

Where a requirement affects safety, privacy, or a user being misled, it is P0 even if the UI polish could otherwise be deferred.


## 5. Information architecture and A–Z taxonomy

### 5.1 Core design: Atlas graph plus six dimensions

PromptLas uses a **subject graph**, not a flat list. The graph records what a subject is called, what it relates to, the questions people should ask about it, and which reviewed workflows apply to it. A form is generated by combining six explicit dimensions:

| Dimension | Question | Examples | Implementation note |
|---|---|---|---|
| Subject | What is this about? | Soil compaction, Kubernetes, Carnatic music, GST filing | A canonical graph node with aliases and relationships |
| Intent | What do you want to do? | Learn, calculate, compare, debug, practise, operate | A reusable task pattern; use a controlled vocabulary |
| Person / level | Who is asking and at what level? | Student, site engineer, shop owner; beginner to expert | Controls explanations and depth, not stereotypes |
| Context | Where, when, under what constraints? | Country, state, language, units, code/standard, season, version | Only request context relevant to the task; version and valid-as-of dates matter |
| Modality | What kind of thing is being created or analysed? | Text, image, video, audio/music, code, data, slides, diagram, 3D/CAD, voice/chatbot script | A distinct field because different modalities have different prompt conventions |
| Deliverable | What should come back? | Report, code patch, image prompt, spreadsheet, lesson plan, checklist, script | 60-ish reusable output families is a catalogue estimate, not a launch requirement |

**Why six, not five:** context and modality should not be overloaded into “deliverable”. Modality determines the type of content; deliverable describes the concrete artifact or response. Keeping them separate makes schemas, testing and tool-specific formatting cleaner.

A workflow is one useful combination of these dimensions, but the system must not build the full Cartesian product. The registry identifies valid combinations, conditional fields, missing-input rules, risk classes, and relationships. If a combination is not useful or safe, it does not need a form.

A single subject can be reached by many paths without content duplication. “Create a soil compaction report” may be found under Civil → Geotechnical → Soil Mechanics, under Lab Reports, by role (“site engineer”), by tool (“Excel”), or via a situation (“I need to interpret a Proctor test”).

### 5.1.1 Atlas subject-node contract

Each Atlas node should carry:
- Stable canonical ID, title, one-line ELI5 and a short, original explainer.
- Aliases, acronyms, common misspellings, local-language labels and romanised variants where reviewed.
- Disambiguation group; “settlement” could mean soil settlement, legal settlement, payment settlement or a place.
- Parent, child, related, prerequisite-of, used-in and interdisciplinary links.
- A tiered question bank: beginner starters, practitioner questions, expert/edge-case questions and inputs people commonly forget.
- Common misconceptions and answer checks tied to the subject.
- Typical intents, modalities and deliverables.
- Official-source/standard identifiers, edition/version if known, URL and valid-as-of date; store links and brief original scope notes, not copied standards text.
- Risk class, review status, reviewer role, last reviewed date and next review due date.
- Attached Tier 1 workflows and eligible Tier 2 patterns.
- Seed-source IDs and source/licence notes where data was imported.

Interdisciplinary categories such as fintech, agri-tech, edtech and bioinformatics should be computed views over nodes and links, not duplicated canonical subjects.

### 5.1.2 Question banks are a core product asset

A subject page should not merely repeat a short encyclopaedia definition. It should teach people **what to ask**: starter questions; deeper practitioner prompts; expert edge cases; missing units/data/standards; common errors; alternative methods; and a checklist for evaluating the AI answer. The response checker can reuse these answer checks. The question ladder makes PromptLas's educational promise tangible.

### 5.1.3 Three content tiers

| Tier | Definition | How produced | Review/search policy |
|---|---|---|---|
| Tier 1 — Deep | Hand-designed workflow with conditional inputs, missing-input logic, domain-specific quality checks and fixtures | AI may draft; a human edits and validates | Published/indexable only after full review. R2/R3 require qualified review and appropriate framing |
| Tier 2 — Pattern | Reusable task pattern applied to an Atlas node, e.g. “Explain {subject}” or “Exam revision for {subject}” using that node's question bank | Generated from node data and controlled patterns | Spot-check at R0/R1; R2/R3 never ship as generic patterns alone. Index only when the page adds unique subject-specific value |
| Tier 3 — Universal | “I do not know what this is called” builder and generic builder for each supported intent | Built once; broad fallback route | Available day one; not a substitute for specialised Tier 1 forms |

Tier 3 makes any topic reachable in the prompt builder. Tier 2 extends breadth after nodes have useful metadata. Tier 1 builds trust and supports high-consequence or high-value tasks. A Tier 2 node can remain visible in browsing without becoming an indexable thin page.

### 5.1.4 Controlled task-intent vocabulary

Start with these 25 intent families; variants may be aliases but should not become separate near-duplicate top-level intents:

1. Learn / explain
2. Calculate / derive
3. Create / design
4. Edit / improve
5. Analyse / interpret
6. Compare / select
7. Plan / schedule
8. Debug / troubleshoot
9. Test / validate
10. Review / audit
11. Document / report
12. Decide / recommend
13. Communicate / present
14. Automate / implement
15. Research / verify
16. Practise / drill
17. Translate / localise
18. Summarise / extract
19. Brainstorm
20. Estimate / forecast
21. Prepare for an event (exam, interview, audit, talk)
22. Simulate / role-play
23. Critique / give feedback
24. Negotiate / persuade
25. Operate / maintain

Task intent and deliverable must be separate: “debug” can return a root-cause hypothesis, patch, test, runbook or incident report.

### 5.1.5 Coverage states: what does “covered” mean?

Every Atlas node and workflow must carry a machine-readable lifecycle state. The state is visible to editors, informs the interface, and drives release/reporting; it must not be inferred from whether a page happens to exist.

| State | Meaning | User-facing behaviour | May be counted as a completed guided workflow? |
|---|---|---|---|
| `taxonomy_seed` | Canonical subject or branch exists; metadata may be incomplete | Browse only where useful; do not imply a tailored form exists | No |
| `explainer_ready` | Plain-language scope, aliases, common uses and related subjects reviewed | User can learn what the subject is and explore examples | No |
| `starter_ready` | Universal or controlled-pattern prompt can be populated with subject-specific context; gaps are disclosed | Show a “guided starter” label and explain its limits | No |
| `workflow_draft` | Specialist questionnaire exists but has not passed all review/test gates | Internal preview only, unless explicitly labelled as an unreviewed research prototype | No |
| `review_required` | Draft is complete enough for qualified/editorial review | Not presented as approved professional guidance | No |
| `published_workflow` | Schema, question bank, form, prompt fixtures, quality checks, risk and review requirements pass | May be called a guided workflow; indexing is separately decided | Yes |
| `deprecated` | Replaced, unsafe, stale or no longer supported | Redirect to successor or explain unavailability; preserve history internally | No |

The release dashboard must report node counts and published-workflow counts separately by domain, risk class and content state. A domain with many taxonomy nodes but few reviewed forms is “broadly mapped, shallow in workflow depth,” not “fully supported.”

### 5.1.6 The question-bank record contract

A question bank is not just a list of suggested prompts. It is structured instructional content that informs discovery, form fields, explanations, validation, prompt generation and answer checking. Each question/field record should support:

- Stable ID, canonical subject/workflow ID, version, status and intended user outcome.
- Beginner-language question label and a technical name where useful; a concise “why this matters” explanation.
- Input type: single-select, multi-select, free text, number with unit, date/version, file/reference declaration, boolean, ordered steps or conditional group.
- Example answer and non-leading examples; acceptable values/ranges where justified by authoritative criteria.
- Required/optional/conditionally required state and the condition that triggers it.
- Safe “I don't know” route: show an explanation, ask a simpler question, offer a clearly labelled “help me identify this,” or leave the value unknown. Never silently guess a high-consequence value.
- Prompt impact: which section of the assembled prompt changes when the field changes.
- Validation and missing-input consequences; units and locale/standard/version rules where relevant.
- Whether the answer is user-provided, selected from a controlled registry, derived with a disclosed rule, or still unknown.
- Risk/sensitivity class and whether the value may be stored in an optional local draft.
- Test fixtures for a normal answer, blank answer, invalid answer, each material conditional branch and relevant boundary/edge case.

For a published specialist workflow, the bank must cover the complete task intake—not merely the first few questions visible on the screen. The default UI can still show only 3–5 questions per step. Long, advanced or rare inputs belong in conditional steps or collapsed expert settings. Question count is not a quality metric; the bank is complete when it captures the information needed for the declared outcome, exposes limitations, and avoids unnecessary collection.

### 5.1.7 The training-wheels task-discovery contract

PromptLas must support users who know the problem but not the name of the field, method or task. Users can start through any of these equivalent doors:

- **Describe my problem:** plain-language text such as “the building floor is cracking,” “my pipeline keeps failing,” or “I need to analyse this spreadsheet.” In prompt-only mode this input is routed through local search, aliases, curated decision rules and a general fallback; it must not be presented as model-powered natural-language reasoning.
- **Choose my discipline:** navigate a subject tree without needing to know the final technical term.
- **Choose my deliverable:** start from report, analysis, design brief, test plan, worksheet, dashboard, checklist, code, presentation or similar output.
- **Choose my role or situation:** use a useful set of role/task shortcuts without making role the sole taxonomy.
- **Help me choose:** answer a short diagnostic sequence that narrows the task and explains why the next question matters.

At each step, the user should be able to see the path so far, go back without losing answers, and change the interpretation if the first route is wrong. When uncertainty is high, show two or three plausible routes with short distinctions; do not pretend to diagnose the task from one ambiguous phrase. Preserve the original problem description as user-supplied context but do not automatically treat it as a verified fact.

Every important question should answer three user concerns: **What are you asking? Why does it matter? What changes in my prompt if I answer?** Include an optional “Explain this choice” affordance where the field label alone is insufficient. A “Not sure” route must be a first-class state, not a validation error.

AI-assisted routing is a separate future capability. It must be feature-flagged, opt-in where appropriate, disclose provider/data handling and costs, keep credentials server-side, define retention rules, and evaluate routing errors. Never state that PromptLas itself generated a factual answer or ran a technical analysis when it only assembled a prompt.

### 5.1.8 Subject-page minimum content and editorial depth

A published Atlas subject page should answer, in original plain language:

1. What is this subject, and what is it not?
2. When might a person use it? Include understandable situation examples.
3. What are the common tasks and related subtopics?
4. What information is usually needed before asking an LLM?
5. What are common beginner questions and common misconceptions?
6. What does a useful output look like, and how can the user check it?
7. Which upstream topics, adjacent disciplines and next-step workflows are relevant?
8. Are standards, laws, software versions, units, jurisdictions or source freshness material?
9. What can PromptLas currently do here: explainer, guided starter, or reviewed workflow?

Do not publish a thin subject page merely to target a keyword. If a node lacks distinct useful content, keep it discoverable through search/navigation or group it under its parent until editorially ready; apply indexability rules separately from UI discoverability.

### 5.2 Main entry points: search plus multiple discovery doors

All entry doors point to the same canonical Atlas nodes and workflow schemas; they do not duplicate content.

1. **Task / problem search:** “my soil keeps settling”, “deployment is failing”, “make this product photo look premium”.
2. **Discipline:** domain → discipline → subdiscipline → subject → task form.
3. **Situation:** “I'm dealing with…” routes to a short playbook and asks first whether the situation is urgent or involves immediate danger. This door must not try to solve emergencies with generic prompts.
4. **Business type:** “I run a…” opens a small-business playbook—setup, pricing, marketing, operations, hiring, finance and compliance research as relevant.
5. **Exam / credential:** “I'm preparing for…” routes to learning and practice forms. Link official syllabus pages and never claim alignment without checking the current syllabus.
6. **Role:** “I'm a…” uses occupation labels to show common tasks, but role pages should not be indexed until useful workflows exist behind them.
7. **Place:** “I'm in…” provides locale, language, units, seasons, legal/tax context, standards and local official sources. Place packs require review dates.
8. **Tool / thing:** “I'm using…” routes from tools, software versions, devices, machinery, materials or species to relevant workflows.
9. **Deliverable:** find a report, spreadsheet, code, diagram, image, presentation, checklist or plan.
10. **A–Z index:** secondary discovery route, not the primary interface.

The search bar should support the pattern “I'm a [role] and I need to [intent] [subject]”, but not require the user to fill those slots formally.

### 5.2.1 Situation and business playbooks

Candidate situation playbooks include starting a business, cash-flow stress, a product not selling, job loss/change, interview preparation, exam preparation, choosing a course, home purchase/rental, renovation, travel, a thesis, public speaking, account compromise, equipment failure, crop problems and paperwork after a death. These are candidate routes, not a launch promise. Urgent health/safety/self-harm cues must route to a verified support page, not a prompt form.

Candidate business-type playbooks include retail shops, salons, restaurants/cloud kitchens, bakeries, coaching centres, gyms, boutiques, repair workshops, construction contractors, design studios, property brokers, consultancies, travel/event businesses, photographers, online sellers, farms, small manufacturers, freelancers, agencies, software startups and NGOs. Each playbook should link to a small, coherent task sequence rather than a generic list of 30 prompts.

### 5.2.2 Tool and exam registries

Shared registries should hold tool names and versions, exam/credential identifiers, languages, units, jurisdictions and standard metadata. A registry provides consistent dropdowns and aliases; it is not a substitute for checking the current official source. Do not store copyrighted standards or full copyrighted exam papers. Store official links and original summaries only.

### 5.3 Proposed global domain directory

### 5.3.1 Detailed coverage by domain family

The following is the **coverage map**, not a claim that every workflow is already implemented. Each listed branch should eventually have one or more high-quality forms where a prompt can genuinely help.

#### 1. Creative, visual and media work
- **Photography:** portrait, product, food, fashion, beauty, architecture, interiors, real estate, landscape, travel, wildlife, macro, sports/action, wedding/event, documentary, street, night/astrophotography, studio, real-estate listing, headshot, flat-lay, aerial/drone, restoration, retouching, colour grading, lighting plans, shot lists, camera/lens selection, exposure planning.
- **Image work:** new image, image editing, reference-preserving edits, background replacement, object removal, product mock-up, poster, thumbnail, cover image, social creative, diagram, infographic, illustration, icon, branding exploration, layout and text-overlay brief.
- **Graphic / communication design:** brand identity, logo brief, packaging, print, presentation, infographic, chart, typography, accessibility, design critique.
- **UX/UI and product design:** personas grounded in evidence, user journeys, information architecture, wireframes, interface states, usability test plan, design system, accessibility review, product discovery.
- **Video / animation:** concept, script, storyboard, shot list, editing brief, subtitles, motion graphics, animation principles, production checklist.
- **Writing / publishing:** fiction, non-fiction, copyediting, tone adaptation, outlines, article briefs, newsletter, book proposal, technical writing, documentation.
- **Music / audio / performance:** composition, songwriting, arrangement, music theory, practice plans, podcast outline, audio cleanup brief, sound design, performance preparation.
- **Culture / history / games / entertainment:** research-led explainers, game design, tabletop scenarios, narrative, cultural context, audience-facing explainers.

#### 2. Education, learning and knowledge work
- School subjects and exam preparation across mathematics, physics, chemistry, biology, computing, social science, history, geography, language, economics and commerce.
- University and professional study: civil/mechanical/electrical engineering, medicine-related learning, law-related learning, accounting, statistics, research methods, project management, software, finance, design and more.
- Learning tasks: explain simply, derive step-by-step, solve a worked example, identify misconceptions, create flashcards, practise active recall, spaced revision, mock test, oral exam, rubric, marking feedback, lesson plan, worksheet, lab report structure, lesson adaptation, language learning and skills practice.
- Professional training: onboarding, certification plans, competency matrix, SOP, safety briefing and scenario-based exercises.

#### 3. Engineering, manufacturing and the built environment

**3.1 Civil engineering and built environment**
- **Geotechnical engineering / soil mechanics:** site investigation plan; soil classification; index properties; grain-size distribution; Atterberg limits; compaction/Proctor test; moisture-density relationship; optimum moisture content and maximum dry density interpretation; consolidation and settlement; shear strength; permeability and seepage; effective stress; earth pressure; bearing capacity; shallow/deep foundations; pile concepts; slope stability; retaining walls; embankments; ground improvement; liquefaction screening; ground-water considerations; geotechnical laboratory report; bore-log interpretation; foundation option comparison. Inputs may include soil profile, test results, groundwater, loads, geometry, units, standard and desired output.
- **Structural engineering:** load path; load assumptions; load combinations; beams, columns, slabs, frames, trusses, retaining structures, foundations interface, reinforced concrete, structural steel, masonry, timber, bridges, industrial structures, wind/seismic concepts, stability, drift, deflection, preliminary sizing, detailing brief, drawing review, condition assessment, structural report and inspection checklist.
- **Construction materials and testing:** concrete mix design brief, cement/concrete testing, aggregates, steel, masonry, bitumen/asphalt, durability, non-destructive tests, material selection, quality-control plan and lab report.
- **Transportation / highway / rail / airport engineering:** traffic counts, geometric design concepts, pavement evaluation, road safety audit checklist, junction studies, public transport planning, drainage interface, traffic-management plan and transport impact brief.
- **Water resources / hydraulics / hydrology:** rainfall/runoff, catchments, flood-risk inputs, open-channel flow, pipe networks, pumps, water distribution, stormwater drainage, irrigation, reservoirs, watershed planning, hydraulic model input checklist and water-balance report.
- **Environmental engineering:** water/wastewater treatment, solid waste, air pollution, environmental impact scoping, sampling plans, environmental monitoring, remediation, sustainability assessment, regulatory research and compliance checklist.
- **Surveying / geomatics / GIS / remote sensing:** survey method selection, coordinate systems, levelling, traverse, total station, GNSS, topographic survey, GIS workflow, map requirements, photogrammetry, drone survey planning and data-quality checks.
- **Construction/project controls:** estimates, BOQ/quantity take-off, rate analysis, tender documents, method statements, WBS, schedules, CPM concepts, risk register, progress reports, site diaries, claims documentation, procurement, QA/QC, snag lists and handover checklists.
- **Architecture / planning / facilities:** design brief, space planning, code research by jurisdiction, building systems coordination, accessibility, energy efficiency, facilities maintenance, building condition survey and urban planning.
- **BIM/CAD/digital construction:** drawing prompt, model review checklist, clash-detection planning, model naming, quantity extraction requirements, asset information, CAD drafting brief and BIM execution-plan outline.

**3.2 Electrical, electronics and energy**
- Power generation, transmission, distribution, load flow, short-circuit/fault analysis, voltage drop, cable sizing, earthing/grounding, protection coordination, switchgear, transformers, motors, generators, power quality, harmonics, energy audit, electrical safety checklists, renewable power, solar PV, wind, battery storage, inverter, EV charging, microgrids and building electrical services.
- Electronics: analog/digital circuits, component selection, circuit explanation, PCB design brief, signal integrity, power electronics, sensors, instrumentation, calibration, embedded systems, firmware, microcontrollers, FPGA/HDL, IoT devices, communication systems, RF concepts, control systems, PLC/SCADA, automation, testing and troubleshooting.
- Workflow inputs: task type, topology, voltage/current/power ratings, frequency, load, operating environment, component data, standard/jurisdiction, design stage, measurements, fault symptoms and required deliverable.

**3.3 Mechanical, aerospace, automotive and robotics**
- Machine design, mechanisms, kinematics, stress/deflection brief, fatigue, bearings/gears/shafts, CAD/CAE/FEA planning, materials, manufacturing processes, machining, additive manufacturing, quality, maintenance, reliability, root-cause analysis, thermodynamics, heat transfer, fluid mechanics, pumps/compressors, HVAC/refrigeration, energy systems, automotive systems, EV powertrain, aerospace systems, robotics, mechatronics, control, industrial automation and production planning.

**3.4 Chemical, process, materials, mining and other engineering**
- Chemical/process engineering, mass/energy balances, unit operations, reaction engineering, process flow diagrams, process control, piping/instrumentation documentation, hazard analysis, process safety and environmental controls.
- Materials science, metallurgy, polymers, ceramics, corrosion, failure analysis, materials selection and test plans.
- Mining, mineral processing, petroleum, marine/ocean, nuclear, biomedical, agricultural, industrial/manufacturing, systems engineering, reliability engineering, operations research, safety engineering and engineering management.

**3.5 Cross-engineering workflow families**
- Learn/explain a concept; solve a homework-style worked example; create a calculation brief; compare methods/materials; review a design; plan an experiment/test; interpret supplied results; prepare a report; create a site/lab checklist; assess failure modes; develop a risk register; create a maintenance plan; research standards; prepare a presentation; estimate quantities/costs; document assumptions; perform independent verification.

#### 4. Computing, IT and digital systems
- **Software engineering:** requirements, algorithm, data structures, language/framework-specific coding, API design, web/mobile/backend, UI, refactoring, code review, tests, debugging, performance, security, documentation, release notes.
- **System design / architecture:** functional and non-functional requirements, capacity, throughput, latency, availability, consistency, database design, cache, queues, event-driven architecture, API boundaries, service decomposition, observability, disaster recovery, threat modelling and architecture decision records.
- **DevOps / SRE / platform engineering:** CI/CD, build/test pipelines, Git strategy, containers, Docker, Kubernetes, Helm, Terraform/IaC, configuration management, secrets, artifact registries, GitOps, release/rollback, blue-green/canary deployment, reliability objectives, incident response, postmortems, monitoring/metrics/logs/traces, alert design, backups, disaster recovery, capacity, cost, hardening and operational runbooks.
- **Cloud and infrastructure:** AWS/Azure/GCP or other providers; IAM, network/VPC, compute, storage, database, load balancing, DNS/CDN, serverless, cloud migration, cost estimation, policy, landing zones, backup, DR and hybrid infrastructure.
- **Networking and systems administration:** routing/switching, DNS, TLS, VPN, firewalls, Linux/Windows, identity, storage, virtualisation, troubleshooting, patching, endpoint management and capacity.
- **Cybersecurity / privacy / DevSecOps:** threat modelling, vulnerability remediation, secure design, IAM, audit checklist, incident handling, security testing, compliance evidence and secure SDLC. Avoid enabling abuse, credential theft, malware or unauthorised access.
- **Data engineering / database / BI:** ingestion, ETL/ELT, batch/streaming, data modelling, SQL, warehouse/lakehouse, orchestration, data quality, lineage, governance, privacy, dashboards, KPI definition and analytics.
- **Data science / AI / ML:** question framing, dataset assessment, leakage checks, features, model selection, training/evaluation, experiment design, statistics, explainability, deployment, monitoring, LLM/RAG, evaluation, prompt testing, agents, MLOps and inference-cost analysis.
- **QA / test engineering:** test strategy, unit/integration/e2e, contract tests, load/performance, accessibility, regression, test data, defect reproduction and release gates.
- **IT support / enterprise systems:** troubleshooting, help desk, endpoint, identity, ERP/CRM, SaaS administration, backup/recovery, IT policy, change management, asset inventory and user-facing runbooks.
- **Embedded / IoT / edge / robotics software:** hardware/software interface, firmware, drivers, communication protocols, device provisioning, edge processing and telemetry.

#### 5. Finance, accounting, stock markets and economic decision support
- **Personal finance education:** budget, cash flow, emergency fund concepts, debt repayment comparisons, goal planning, insurance concepts, retirement planning and tax-document organisation.
- **Accounting / bookkeeping / tax workflows:** transaction categorisation, reconciliation, financial statements, management accounts, cost centres, audit prep checklist, tax question preparation and jurisdiction-specific research.
- **Corporate finance:** budget and forecast, unit economics, working capital, cash runway, break-even, pricing, scenario analysis, capital structure, valuation frameworks, due diligence, investor reporting and finance memo.
- **Markets and investing research:** company/stock research, fundamentals, sector analysis, earnings review, balance-sheet quality, valuation methods, ETF/mutual-fund comparison criteria, portfolio construction concepts, diversification, drawdown, correlation, position-sizing education and risk review.
- **Trading and quantitative research:** market thesis, instrument selection, options/futures education, payoff diagrams, Greeks, volatility concepts, strategy specification, data quality, backtest assumptions, look-ahead/survivorship bias checks, transaction costs, slippage, risk metrics, paper-trading plan, trading journal and post-trade review.
- **Economics and markets:** inflation, interest rates, macro indicators, company/industry analysis, economic data interpretation and scenario planning.
- **Required guardrails:** no guaranteed return or certainty language; separate educational analysis from personalised advice; ask for jurisdiction, market, data source, date range, instrument, horizon and risk assumptions where relevant; disclose stale/missing market data; never claim live prices are fetched unless actually integrated; never place trades or access brokerage accounts in the prompt-only MVP.

#### 6. Entrepreneurship, business and organisation
- Idea discovery and problem framing; customer interviews; market sizing; competitor and substitute analysis; validation experiments; value proposition; business model; pricing; unit economics; business plan; MVP scope; product requirements (PRD); roadmap; UX research; product analytics; launch plan; go-to-market; content/SEO; paid acquisition briefs; sales scripts; outbound prospecting; partnership proposals; CRM workflow; customer support; onboarding; retention; community; fundraising; pitch deck; financial model; runway; hiring; role scorecards; vendor procurement; contracts/compliance research; operations; SOPs; process improvement; project management; risk register; KPI dashboards; governance; internal communications and exit/due-diligence preparation.
- **Founder sequence examples:** validate problem → test willingness to pay → define MVP → specify product → model unit economics/runway → launch → acquire customers → measure activation/retention → improve.
- **Small business examples:** service definition → local audience → pricing → brochure/website → enquiry response → operating checklist → cash-flow review → customer feedback.
- Separate recommendations from facts. Do not invent revenue, customers, market size, endorsements, discounts or traction.

#### 7. Marketing, sales, customer experience and communication
- Audience research, brand positioning, messaging, value proposition, campaign strategy, social post, carousel, newsletter, blog, landing page, SEO brief, product description, ecommerce listing, email sequence, sales proposal, lead qualification, interview script, CRM hygiene, customer journey, onboarding, retention, review response, FAQ, support macro, event promotion, community programming and experiments.
- Form requirements depend on the asset and channel: verified product facts, target action, brand/voice, audience, platform, creative format, destination URL, proof/assets, constraints, budget and capacity only when relevant.
- Guardrails against fabricated reviews, misleading before/after claims, fake scarcity, fabricated statistics and unverified landing-page URLs.

#### 8. Science, mathematics, research and analytics
- Mathematics, statistics, probability, physics, chemistry, biology, earth science, geology, climate/environment, lab experiment design, research question, literature review, evidence extraction, statistical analysis, data visualisation, reproducibility, uncertainty analysis, peer-review response and technical report.
- Prompts should distinguish hypothesis from result, correlation from causation, illustrative example from real data, and accessible sources from sources actually reviewed.

#### 9. Health, wellbeing, care and safety education
- General health literacy, appointment preparation, symptom-question organisation, patient-friendly explanation, nutrition education, fitness planning, mental-wellbeing resources, rehabilitation education, public-health communication, first-aid learning, occupational health/safety and care coordination.
- The tool must not diagnose, triage high-risk symptoms without safe escalation guidance, prescribe, or replace licensed professionals. High-risk areas need separate policy review before publishing their workflows.

#### 10. Law, government, policy and compliance information
- Legal concept explainers, jurisdiction-specific research plans, contract clause checklists, policy briefs, public-records research, administrative letters, compliance inventories, regulatory change summaries, governance and procurement documentation.
- Ask for jurisdiction, date, document/source, intended use and whether the user needs education, issue spotting, or a lawyer-facing brief. Never claim legal advice or current law verification without authoritative sources.

#### 11. Agriculture, environment, field operations and natural resources
- Crop planning, soil/agronomy education, irrigation, pest-management research, livestock-care education, farm budgeting, sustainability, forestry, fisheries, water management, waste, environmental monitoring, biodiversity, field sampling, operations checklists and supply-chain planning.
- Region, season, species/crop, local rules, units and data quality may determine the answer; avoid silently applying advice from another climate or jurisdiction.

#### 12. Manufacturing, logistics, retail and services
- Production planning, standard work, quality tools, root-cause analysis, maintenance, procurement, inventory, warehousing, transport, delivery optimisation, demand forecast, retail operations, ecommerce, hospitality, travel/event planning, facility management, customer service, food preparation workflows and service design.

#### 13. Personal productivity, everyday life and practical skills
- Decision comparison, planning, routines, household budgets, travel itinerary, meal planning, personal learning, job search, CV/interview, communication, organisation, DIY planning, hobby projects and accessible explanations.
- Keep advice proportionate to risk and context. Do not imply the same routine or plan suits every user.

#### 14. Interdisciplinary work
- Sustainability and lifecycle analysis; smart buildings; energy systems; construction technology; digital twins; climate adaptation; health informatics; fintech; agri-tech; AI in education; robotics in manufacturing; GIS for infrastructure; product analytics; supply-chain finance; accessibility; systems engineering and policy/technology assessment.
- Interdisciplinary workflows must preserve their parent domains and link to the disciplines whose assumptions, standards or evidence they depend on.

### 5.3.2 Long-term directory coverage map: 39 domains in six groups

The 39 domains below are a coverage taxonomy, not 39 promised launch packs. “Now / Next / Later” are sequencing suggestions from the Universal Coverage Addendum; they must be re-prioritised using measured demand, safety, differentiation and reviewer capacity. Interdisciplinary views are computed from node links rather than separate duplicated domains.

| Group | # | Domain | v1.1 coverage | Initial sequence |
|---|---:|---|---|---|
| Knowledge & science | 1 | Mathematics and statistics | Partial | Now |
| Knowledge & science | 2 | Physical sciences | Partial | Now |
| Knowledge & science | 3 | Life sciences | Partial | Next |
| Knowledge & science | 4 | Earth, climate and space science | Thin | Next |
| Knowledge & science | 5 | Social sciences | New | Next |
| Knowledge & science | 6 | Humanities | New | Next |
| Knowledge & science | 7 | Research and knowledge work | Partial | Now |
| Technology & engineering | 8 | Civil and built environment | Deep | Now |
| Technology & engineering | 9 | Electrical, electronics and energy | Deep | Next |
| Technology & engineering | 10 | Mechanical, automotive and marine engineering | Partial | Next |
| Technology & engineering | 11 | Chemical, materials, mining and process engineering | Thin | Later |
| Technology & engineering | 12 | Computing and software | Deep | Now |
| Technology & engineering | 13 | Office and productivity software | New | Now |
| Technology & engineering | 14 | AI, data science and analytics | Partial | Now |
| Technology & engineering | 15 | IoT, embedded, robotics and automation | Partial | Now |
| Technology & engineering | 16 | Cybersecurity and privacy | Partial | Next |
| Technology & engineering | 17 | Transport, aviation, space and defence studies | Thin | Later |
| Health, food & living things | 18 | Medicine and health-professions education | Partial | Later; exam prep earlier if reviewed |
| Health, food & living things | 19 | Fitness, nutrition and wellbeing | Partial | Next |
| Health, food & living things | 20 | Food, culinary and hospitality | Partial | Next |
| Health, food & living things | 21 | Agriculture, forestry, fisheries and animals | Partial | Next |
| Health, food & living things | 22 | Environment, climate and sustainability | Partial | Next |
| Economy & work | 23 | Business, management and entrepreneurship | Deep | Now |
| Economy & work | 24 | Finance, accounting, banking and insurance | Deep | Now, with strict risk controls |
| Economy & work | 25 | Marketing, sales and e-commerce | Partial | Now |
| Economy & work | 26 | Careers, HR and workplace | Partial | Now |
| Economy & work | 27 | Operations, manufacturing and supply chain | Partial | Next |
| Economy & work | 28 | Skilled trades, repair and vocational skills | New | Next; safety review required |
| Economy & work | 29 | Real estate, housing and home | New | Next |
| Society, law & culture | 30 | Law, governance and public policy | Partial | Next; information-only first |
| Society, law & culture | 31 | Education, teaching and exam preparation | Partial | Now |
| Society, law & culture | 32 | Languages, writing and translation | Partial | Now |
| Society, law & culture | 33 | Arts, design, media and entertainment | Deep | Now |
| Society, law & culture | 34 | Religion, philosophy and belief systems | New | Next, clearly distinguish belief from evidence |
| Society, law & culture | 35 | Sports, games and recreation | New | Next |
| Society, law & culture | 36 | Travel, places and cultures | Partial | Next |
| Personal life & situations | 37 | Family, relationships and life stages | New | Next; safety limits required |
| Personal life & situations | 38 | Home, money and daily living | Partial | Now |
| Personal life & situations | 39 | Personal growth and communication | Partial | Next |

The new catalogue is intentionally broader than school and engineering taxonomies. It includes software productivity (Excel, Sheets, Power BI, Word, PowerPoint, Tally), IoT, cybersecurity, skilled trades, housing, social sciences, humanities, belief systems, HR, sports, and family/life situations because people arrive through their work and circumstances, not only through academic disciplines.

### 5.3.3 Domain expansion contract: one model across every discipline

Every major branch must use the same canonical structure while allowing discipline-specific fields. The target hierarchy is:

**Domain family → discipline → subdiscipline → subject/method/material/tool → task family → workflow → question bank → prompt template and quality checks.**

This is a flexible graph, not a mandatory six-level tree. Some subjects require more than six levels; a cross-disciplinary task may link to several branches. Each task-family node should have a stable ID, plain-language explanation, aliases, common use cases, prerequisite/related links, likely deliverables, risk class and an explicit coverage state.

The taxonomy is an inventory of what users may need—not a claim that every associated calculation, design decision or professional task is safe to automate. In high-consequence fields, PromptLas may help gather requirements, explain concepts, structure data or prepare a review checklist even when it should not present a final decision-making workflow.

#### Shared task families to consider for every domain

For each discipline, assess which of these intents are meaningful rather than blindly creating all of them: learn/explain; identify/classify; calculate/derive; analyse/interpret; create/design; compare/select; plan/schedule; test/validate; debug/troubleshoot; review/audit; document/report; estimate/forecast; research/verify; practise/prepare; communicate/present; operate/maintain; improve/optimise; translate/localise. A discipline can add specialist intents and should omit irrelevant ones.

#### Breadth baseline for the 39-domain map

For the public Atlas, each of the 39 existing domain families in Section 5.3.2 should have at least a useful entry point, a parent/child path, a plain-language description, representative task routes and a status that tells the truth about current capability. For deeper subject clusters, add curated branches and starter question sets. Do not expose dead links, empty workflow cards, or generic generated pages as finished specialist support.

### 5.3.4 Civil engineering and built environment: detailed subject and task tree

Civil engineering is a first-class priority domain. The following list is a working taxonomy seed and scope checklist. It defines subject families and potential task families; it does **not** assert that every item already has a deployed form. A civil subdiscipline must not collapse to a single generic “engineering prompt.”

#### A. Geotechnical engineering and soil mechanics

**Soil exploration and field investigation:** site investigation planning; borehole and trial-pit scope; sampling plans; bore logs; groundwater observations; SPT/CPT and other in-situ test interpretation; geophysical investigation briefs; geotechnical data gaps; ground model summaries; geotechnical investigation reports.

**Index properties and classification:** soil description; grain-size distribution and sieve analysis; hydrometer analysis; Atterberg limits; natural water content; specific gravity; bulk/dry density; void ratio, porosity and degree of saturation; soil classification under a specified system; plasticity charts; consistency and relative-density interpretation; soil report tables and plots.

**Compaction and earthworks:** Standard/Modified Proctor test interpretation; moisture-density curves; optimum moisture content and maximum dry density; field density and relative compaction; compaction specifications; CBR testing and subgrade interpretation; borrow-material suitability; earthwork volume and shrink/swell assumptions; construction quality-control records.

**Strength, stress and deformation:** total/effective stress; pore-water pressure; seepage and flow nets; permeability; capillarity; shear strength; Mohr-Coulomb parameters; direct shear; triaxial tests (UU/CU/CD where applicable); unconfined compression; vane shear; stress paths; stress distribution; consolidation; coefficient of consolidation; compressibility; primary/secondary settlement; time-rate settlement; immediate settlement; expansive/collapsible soils.

**Foundations and ground improvement:** shallow foundation options; bearing-capacity assessment brief; settlement criteria; footing sizing inputs; raft/mat foundation options; pile type selection brief; axial/lateral pile behaviour; pile-group effects; pile load-test interpretation; negative skin friction; ground improvement comparison (e.g. densification, stabilisation, drainage, inclusions) with site-specific validation required.

**Earth structures and geohazards:** lateral earth pressure; retaining walls; braced excavations; shoring; embankments; slope stability; cut/fill balance; erosion; liquefaction screening; ground subsidence; dewatering; seepage/piping; soil-structure interaction; seismic geotechnical considerations; landslide case documentation.

**Typical geotechnical outputs:** soil investigation scope, test plan, data-quality checklist, calculation input sheet, interpretive report outline, method comparison, assumptions register, risk register and questions for a qualified geotechnical engineer.

#### B. Structural engineering and structural analysis

**Foundations of analysis:** structural idealisation; load paths; support/boundary conditions; statically determinate/indeterminate systems; free-body diagrams; reactions; shear-force and bending-moment diagrams; influence lines; truss/frame analysis; matrix/FEA concepts; model assumptions and sensitivity checks.

**Actions and load combinations:** dead/imposed loads; wind and seismic actions; snow/temperature/dynamic actions where relevant; load paths; accidental and construction-stage loads; combination selection under a specified jurisdiction/code edition; load take-down; verification of units and tributary areas.

**Member and system behaviour:** beams; columns; slabs; walls; trusses; portals and frames; bracing; diaphragms; lateral stability; buckling; vibration; deflection and drift; robustness; fatigue; connections; foundations and soil-structure interaction; non-linear/finite-element result review.

**Structural assessment and documentation:** existing-building assessment; visual inspection records; defect/crack mapping; load-path review; drawing/specification review; as-built differences; repair/strengthening options brief; model verification checklist; design-basis report; structural calculation report outline; peer-review checklist.

#### C. Steel structures

Steel grade and section properties; tension members; compression members and buckling; beams and lateral-torsional buckling; beam-columns; built-up members; local slenderness; connection concepts; bolted connections; welded connections; gusset plates; base plates and anchor rods; bracing systems; stability and second-order effects; serviceability; fatigue and fracture concepts; corrosion protection; fire protection; fabrication and erection tolerances; shop/erection drawing review; weld inspection/NDT documentation; steelwork inspection and maintenance.

Steel-related forms must request the relevant design standard, edition, jurisdiction, steel grade, section/system, connection/load context and units when necessary. They must distinguish an educational worked example or review brief from a design approval. Do not invent loads, material grades, connection capacities or code clauses.

#### D. Concrete, cement, aggregates and reinforced/prestressed concrete

**Materials and fresh concrete:** cementitious materials; aggregate grading and properties; water/binder ratio context; admixtures; concrete mix-design brief; batching; transport/placing; slump/workability; temperature; segregation/bleeding; curing; sampling and specimen identity; ready-mix delivery records.

**Testing and strength:** cube/cylinder specimen records; compressive-strength test interpretation; 7/28-day or other specified ages; failure loads and specimen area; strength calculations with units; outlier/data-quality checks; acceptance criteria only against the specified applicable standard/edition; rebound hammer/UPV and other NDT limitations; core-test reporting; maturity-method context; test certificates and report writing.

**Reinforced concrete:** beams; one-way/two-way slabs; columns; footings; retaining walls; stairs; shear and flexure concepts; reinforcement detailing; development/anchorage/lap concepts; serviceability and crack control; punching shear; durability/exposure; cover; corrosion; deflection; fire; construction joints; prestressed and post-tensioned systems; precast components and connections.

**Concrete defects and repair:** plastic/drying shrinkage; thermal cracking; settlement cracking; honeycombing; spalling; reinforcement corrosion; leakage; delamination; carbonation/chloride exposure; durability assessment; repair-method comparison; investigation plan; maintenance and monitoring report.

#### E. Construction materials and quality assurance

Cement, aggregates, bitumen/asphalt, masonry, timber, geosynthetics, recycled materials, soil stabilisers, material certificates, sampling plans, laboratory test selection, inspection/test plans, non-conformance reports, root-cause review, corrective/preventive actions, traceability, hold points, method statements, quality-control dashboards and handover documentation.

#### F. Transportation, highways and pavements

Road alignment and geometry; traffic survey data; capacity and level-of-service concepts; pavement layers; subgrade/subbase/base; flexible/rigid pavement; bituminous mix testing; pavement distress surveys; pavement condition/rating; maintenance prioritisation; traffic safety audit documentation; drainage; intersections; public transport; pedestrian/cycle access; parking; traffic-impact assessment briefs; road project cost and schedule inputs.

#### G. Water, hydrology, hydraulics and municipal infrastructure

Rainfall/runoff; catchment delineation; hydrographs; flood-frequency data; drainage networks; open-channel flow; pipe flow; pumps; water distribution; water demand; storage and reservoirs; irrigation; stormwater; sewer networks; wastewater treatment process learning; water/wastewater quality data; hydraulic model input checks; leak/loss investigation; utility layouts; operation and maintenance plans.

#### H. Environmental engineering and sustainability

Environmental monitoring plans; air/noise/water/soil sampling; pollution-control options; environmental impact assessment structure; waste management; life-cycle assessment briefs; carbon accounting assumptions; wastewater/sludge; remediation; environmental compliance registers; sustainability indicators; environmental management plans; monitoring and reporting. Keep jurisdiction-specific limits linked to current official sources and identify source dates.

#### I. Surveying, geomatics, GIS, BIM and digital delivery

Survey plans; levelling; traverse and coordinate-system checks; GNSS/total-station workflows; topographic surveys; setting out; quantity surveys; GIS data cleaning and spatial analysis; remote sensing; terrain models; CAD drawing review; BIM model coordination; clash-detection triage; model/data exchange requirements; asset information; as-built capture; digital-twin use cases; model LOD/LOI briefs.

#### J. Construction management, estimating and project controls

BOQ/quantity take-off; measurement rules and assumptions; rate analysis; estimates and cost plans; tender comparison; procurement; construction sequencing; work method statement; baseline schedule; critical path; earned-value concepts; resource loading; site progress reporting; delay/claim evidence organisation; change control; risk register; contractor correspondence; RFI/submittal logs; safety/quality coordination; commissioning and handover.

#### K. Other built-environment branches

Bridge engineering; tunnels; ports/coastal engineering; dams and water-retaining structures; masonry; timber; rehabilitation/retrofit; fire/life-safety coordination; urban/infrastructure planning; building services coordination; architecture/engineering interfaces; asset management; disaster resilience; construction law/contract administration information; facilities management.

For every civil task family selected for a form, define the relevant user role, purpose, evidence/data available, units, jurisdiction/standard and edition where material, output type, missing-input route, assumptions and qualified-review boundary. The builder should be able to produce reports, calculation briefs, data-analysis requests, drawing-review checklists, design briefs, BOQs, method statements and inspection/test plans—not only educational explanations.

### 5.3.5 Computing, IT and digital systems: detailed subject and task tree

IT is a first-class priority domain, not one combined “software/DevOps” workflow. Its taxonomy must cover users who want to learn concepts, build systems, analyse data, design interfaces, test software, operate infrastructure or diagnose failures.

#### A. Software engineering and system design

Requirements discovery; user stories/acceptance criteria; domain modelling; architecture and component boundaries; API design; frontend/backend integration; monolith versus services; event-driven design; authentication/authorisation design; data modelling; scalability/reliability; observability; threat-aware design; architecture decision records; migration plans; technical documentation; code review; refactoring; technical debt; performance profiling; release planning.

#### B. Frontend, backend, web and mobile development

HTML/CSS/JavaScript/TypeScript; React and other UI frameworks; state management; routing; responsive behaviour; accessibility; component/design systems; browser debugging; API clients; backend services; REST/GraphQL/event APIs; validation; session/authentication flows; mobile architecture; offline/sync behaviour; deployment configuration; build errors; dependency/version compatibility; testable bug reports; code generation briefs.

#### C. Software quality assurance and testing

Test strategy; test plans; test cases and data; unit testing; component testing; integration testing; API/contract testing; end-to-end testing; acceptance/UAT; regression testing; smoke/sanity testing; exploratory testing; compatibility/browser/device testing; accessibility testing; performance/load/stress/soak testing; reliability testing; security testing within authorised scope; test automation; flaky-test triage; coverage interpretation; defect/b bug reports; severity/priority triage; release exit criteria; test evidence and traceability.

A testing workflow should ask about the system under test, user journeys or requirements, environment/build/version, test level, risks, supported platforms, test data, constraints, expected outputs and acceptance criteria. It should distinguish the creation of a test plan from execution of tests; PromptLas must not claim that tests ran unless an actual test execution integration did so.

#### D. DevOps, SRE and platform engineering

Linux administration; shell scripting; Git workflows; branching/release strategy; CI pipelines; Jenkins/GitHub Actions/GitLab CI/Azure DevOps; artifact registries; Docker/container builds; Kubernetes; Helm; GitOps; Terraform/OpenTofu; Ansible/configuration management; cloud provisioning; secrets and IAM; environment configuration; deployment/rollback; blue-green/canary strategies; observability; logs/metrics/traces; alert design; incident response; root-cause analysis; postmortems; SLO/SLI/error budgets; capacity and cost; backup/restore; disaster recovery; change management; platform runbooks.

Deployment and incident forms must ask about target environment, architecture, current versus desired state, error evidence, blast radius, constraints, secrets handling, health checks, validation, rollback and authorised scope. Do not ask users to paste credentials or private keys. Prefer redacted log snippets and synthetic examples.

#### E. Cloud architecture and infrastructure

AWS/Azure/GCP and other provider concepts; compute/network/storage; virtual networks; IAM; DNS/CDN/WAF; load balancing; managed databases; queues/events; serverless; private connectivity; multi-account/project structure; infrastructure-as-code; cost allocation; reliability/availability; scaling; migration; landing zones; data residency; cloud security posture; architecture diagrams; trade-off analysis; well-architected review briefs.

Provider service names and versions are registry data, not hard-coded assumptions in every form. Ask for provider, region, account/project constraints, workload characteristics, availability/security requirements, budget and deployment maturity only when relevant.

#### F. Networking, systems administration and IT support

IP addressing/subnetting; VLANs; routing/switching; DNS; DHCP; TLS/certificates; HTTP; VPN; firewalls; proxies; load balancers; wireless; network monitoring; packet captures; Linux/Windows server administration; identity directories; endpoint configuration; patching; storage; virtualisation; backup/restore; hardware troubleshooting; help-desk triage; ticket quality; root-cause isolation; access requests; asset inventory; runbooks; change records.

Troubleshooting routes should split by symptoms and evidence, not force users to know the root cause. Ask “what changed?”, “what works/does not?”, environment, error messages, timestamps, topology and safe diagnostic steps. Avoid destructive commands without explicit warning and confirmation in any future execution-enabled experience.

#### G. Databases, data engineering and analytics

SQL querying; schema design; relational and NoSQL concepts; indexing/query plans; transactions; migrations; backups/restores; replication; performance; data modelling; warehouse/lake/lakehouse; ETL/ELT; batch/stream processing; orchestration; data lineage; quality checks; deduplication; missing/outlier handling; spreadsheet analysis; descriptive statistics; KPI definitions; dashboards; BI modelling; visualisation choice; cohort/funnel/retention analysis; experiment analysis; forecasting; reproducibility; privacy and governance.

Data workflows should ask about the question to answer, row/column meaning, schema, sample size/period, source and quality, definitions, missing values, units, segments, desired analysis, comparison/baseline and output. They must distinguish descriptive analysis, causal inference and prediction, and require limitations rather than fabricate data.

#### H. Data science, machine learning, AI and LLM engineering

Problem framing; dataset assessment; feature preparation; train/validation/test design; baselines; model selection; metrics; error analysis; calibration; explainability; drift; experiment tracking; model deployment; MLOps; evaluation datasets; retrieval-augmented generation; embeddings/vector search; chunking; prompt design; tool/function calling; agent workflow design; hallucination and grounding evaluation; red-teaming; cost/latency trade-offs; safety policy; monitoring; model/data versioning.

Forms must ask for goal, available data, success metric, baseline, constraints, privacy, evaluation plan and deployment context as applicable. They must not imply that a proposed model is validated merely because a prompt describing it was generated.

#### I. Cybersecurity, privacy and defensive operations

Asset/threat modelling; secure architecture; IAM and least privilege; secrets management; secure coding; dependency and container scanning; vulnerability triage; patch prioritisation; logging/detection; defensive threat hunting; incident response; recovery planning; data protection; security policies; audit evidence; compliance mapping; phishing awareness; backup resilience; configuration hardening; privacy impact assessment.

The taxonomy should be useful for authorised defensive work. It must block or safely redirect requests for credential theft, stealth, persistence, evasion, unauthorised access, malware deployment or other harmful activity under the R4 policy. Security tasks must state authorised scope and avoid turning a defensive form into an operational offensive playbook.

#### J. UI/UX, design systems and product discovery

Problem framing; research plan; interview guides; surveys; synthesis of supplied evidence; user needs; journey maps; information architecture; task flows; wireframes; prototypes; interaction design; responsive layouts; design systems/tokens; content design; accessibility audits; usability test plans; usability-test synthesis; design critique; heuristic evaluation; product requirements; feature prioritisation; onboarding; forms and empty/error/loading states; analytics events; conversion experiments; design handoff and acceptance criteria.

PromptLas must distinguish research evidence from invented personas or assumptions. A form should ask for target users, user problem, evidence available, platform, constraints, accessibility needs, success measures and intended design artifact only as relevant.

#### K. Product, project and IT service management

Product discovery; PRDs; roadmaps; prioritisation; backlog refinement; sprint planning; estimations; stakeholder maps; requirements traceability; incident/problem/change management; service catalogues; SLA/SLO definition; ITIL-style service processes; support knowledge bases; release notes; migration and adoption planning; risk registers; post-implementation review.

#### L. Other IT branches

Enterprise platforms and business applications; ERP/CRM; office/productivity software; spreadsheets and automation; RPA; low-code/no-code; blockchain concepts; embedded systems; firmware; IoT; robotics; industrial control/OT security with specialised safety review; game development; graphics/3D; AR/VR; technical writing; accessibility engineering; developer education and interview preparation.

For each IT task family, forms should adapt to actual target stack, version, environment, constraints and the type of evidence available. “I'm learning Kubernetes,” “I need a Kubernetes deployment design,” and “our production deployment is failing” must take different routes, question sequences and review treatments.

### 5.3.6 Minimum taxonomy coverage for other domain families

The detailed examples below are a seed list for content planning, not an exhaustive enumeration. Every branch must use the shared question-bank and workflow-completeness contracts; a generic prompt is not a substitute for subject-specific questions.

- **Electrical, electronics and energy:** circuit fundamentals; power systems; load flow and fault-analysis learning; protection and coordination review briefs; transformers and machines; power electronics; electrical installations; control systems; instrumentation; signal processing; PCB/electronics design briefs; embedded/firmware; renewable energy; batteries/storage; energy efficiency; electrical safety documentation. Ask for ratings, topology, environment, jurisdiction and standards where needed; safety-critical outputs require qualified review.
- **Mechanical, automotive, marine and aerospace studies:** statics/dynamics; machine design; materials and failure analysis; thermal systems; fluids; HVAC; manufacturing processes; CAD/CAE; FEA/CFD input and results review; maintenance; reliability; vehicles; marine systems; aerospace learning. Require units, boundary conditions, material properties, operating conditions and assumptions for analytical tasks.
- **Chemical, materials, mining and process:** material selection; phase/property interpretation; process flows; mass/energy balance learning; process control; hazard studies; laboratory reports; mineral processing; extraction and environmental controls. Safety-critical process design must be routed through specialist review; do not provide unreviewed operating instructions for hazardous systems.
- **Mathematics, statistics and physical/life/earth sciences:** concept explanation; derivations; experimental design; dimensional analysis; data interpretation; statistical tests; uncertainty; modelling; lab reports; field observations; reproducibility; equations and units; astronomy/climate/geology/biology/chemistry/physics learning. Ask users to distinguish observed data, assumptions and theoretical examples.
- **Research and knowledge work:** question formulation; literature search plans; source evaluation; systematic/scoping review protocols; evidence extraction; synthesis; citation checking; qualitative/quantitative methods; survey/interview design; research ethics; data analysis; reproducibility; thesis/dissertation planning; peer review. Never invent citations, findings or access to sources.
- **Education, language and humanities:** explanations at multiple levels; curriculum-aligned study where source verified; lesson plans; assessment rubrics; quizzes; flashcards; worksheets; writing; editing; translation/localisation; language learning; history/philosophy/religion/culture analysis; primary-source comparison; media literacy. Preserve uncertainty and distinguish historical evidence, interpretation and belief.
- **Business, management and entrepreneurship:** customer discovery; market research; validation; business models; pricing; unit economics; cash-flow planning; operations; hiring; procurement; sales; customer support; product requirements; launch plans; risk registers; governance; process improvement; negotiation; business documents. Clearly distinguish assumptions, evidence and estimates.
- **Finance, accounting, banking, insurance and markets:** bookkeeping concepts; financial statements; budgeting; cash-flow analysis; tax information research; audit preparation; valuation frameworks; equity/fundamental research; portfolio risk education; options education; backtest methodology; insurance comparison; lending concepts; fraud controls. Ask market, as-of date, data source, horizon and assumptions; no guaranteed returns or fabricated/live data claims.
- **Marketing, sales, communication and media:** audience definition; positioning; research; messaging; content calendars; campaigns; SEO briefs; landing pages; ads; sales scripts; CRM workflows; experiment design; analytics; PR; stakeholder communication; presentations; video/audio/podcast scripts; storyboards; accessibility and localisation. Preserve factual claims/provenance and disclose generated content where needed.
- **Healthcare education, wellbeing, food and fitness:** plain-language education; appointment preparation; symptom-history organisation when appropriate; care-process questions; research-literacy; exercise/nutrition planning; food safety and culinary workflows; wellness habits. Do not diagnose or prescribe; urgent symptoms/safety cues route to verified guidance; high-risk clinical content requires qualified review.
- **Law, public policy, government and compliance information:** concept explanations; jurisdiction/date-aware research plans; document summarisation; issue spotting; fact chronologies; questions for counsel; forms/checklists; policy comparisons; public-record requests; regulatory monitoring plans. Never present generic prompts as legal advice or assert current law without current authoritative sources.
- **Agriculture, forestry, fisheries, animals and environment:** crop planning; soil/water observations; pest/disease information gathering; farm operations; irrigation; animal-care education; environmental monitoring; sustainability; climate adaptation; resource management. Include location, season, species/crop, conditions and local official sources where they materially affect the task.
- **Manufacturing, logistics, retail, services and skilled trades:** production planning; quality control; maintenance; inventory; supply chain; warehouse; routes; procurement; process diagrams; SOPs; shop operations; repair triage; inspection checklists; real estate and facilities; hospitality and service workflows. Apply safety gates to electrical, mechanical, chemical and construction tasks.
- **Personal productivity, family, travel, home and daily living:** planning; household budgets; forms/paperwork organisation; travel planning; home maintenance; career planning; communication; event planning; learning plans; decision matrices; personal projects. Protect personal data and route crisis/safety situations away from generic prompt creation.

### 5.3.7 Cross-domain completeness and prioritisation rules

The domain inventory is complete only when it can be navigated, queried by aliases and connected to tasks. A **subject family** is content-ready when it has a defined scope, child branches, example situations, common questions, required context, related nodes and a truthful status. A **guided workflow** is complete only when it meets the workflow contract in Section 8 and the acceptance gates in Section 18.

Prioritise new workflows by the combination of: user problem frequency and severity; whether structured questions materially improve output; usefulness of PromptLas compared with a generic prompt; feasibility of creating reliable questions; availability of qualified reviewers; freshness burden; safety/legal risk; and reuse across connected tasks. Do not prioritise only by search volume, trendiness, or ease of auto-generating pages.

### 5.4 How disciplines connect

Every workflow should support relationship types:
- **Parent / child:** Structural Engineering → Reinforced Concrete → Beam design brief.
- **Synonym / alias:** MDD ↔ maximum dry density; OMC ↔ optimum moisture content; CI/CD ↔ continuous integration/delivery; SRE ↔ site reliability engineering.
- **Prerequisite:** Settlement analysis may need soil profile and compressibility parameters.
- **Companion:** Kubernetes deployment may connect to secrets management, observability, rollback and backup.
- **Next step:** Stock research may connect to assumptions, valuation sensitivity, risk review and a decision memo—not an automatic buy/sell conclusion.
- **Alternative method:** Compare methods or tools for the same goal.
- **Shared inputs:** Reuse units, jurisdiction, source document and context between connected forms only when the user explicitly agrees.
- **Role lens:** The same topic can have a beginner, student, designer, reviewer, site engineer, manager or auditor workflow.

“Related workflows” must be contextual and limited (typically 3–6 links), not a cluttered list of everything adjacent.

### 5.5 Adaptive intake: anticipate needs without over-questioning

The form engine should follow a staged intake:

1. **Identify the goal:** “What are you trying to do?” (choose/create, learn, calculate, design, compare, analyse, troubleshoot, plan, document, review, decide).
2. **Identify the subject:** domain, discipline, technology/material/instrument/topic, or plain-language description.
3. **Identify the output:** what the user wants back (report, answer explanation, code, diagram, calculation steps, image, checklist, plan).
4. **Establish context:** level, location/jurisdiction, platform/runtime, units, audience, time horizon, data/source context—only where relevant.
5. **Ask domain discriminators:** conditional questions determined by the selected workflow. Example: soil compaction asks for test type and supplied results; DevOps deployment asks for cloud/runtime/target and release constraints; photography asks whether this is a real-camera plan or an image-model prompt.
6. **Check completeness:** show required inputs, missing data, contradictions, and assumptions. Offer “I don't know—help me choose” where safe.
7. **Build and explain:** update prompt live; give a short explanation of why each material instruction appears.
8. **Suggest a next workflow:** based on an explicit relationship rule, such as “After this calculation brief, create a report” or “Next, prepare a validation checklist”.

The engine should prefer useful defaults for low-risk formatting decisions, but must not invent critical technical input values. “Anticipation” means asking for likely missing parameters at the right moment, not guessing the answer.

### 5.6 Search, synonyms and “I don't know” routing

- Search across workflow titles, tags, aliases, abbreviations, field names and example phrases.
- Support common spelling variants, pluralisation, abbreviations and domain synonyms.
- Display a breadcrumb and a short “Why this form?” explanation.
- Offer results by intent, not only exact phrase. “Help me understand my soil test” should surface soil-mechanics explanation/report workflows, not only one exact title.
- Add guided fallback questions when the query is ambiguous: “Do you want to learn the concept, calculate from data, or write a report?”
- The prompt-only v1 uses a curated static search index, aliases and rules. True arbitrary-language semantic interpretation requires an integrated model/API or separate search service; do not pretend rules-based matching is full AI understanding.
- “No result” pages should suggest adjacent branches and allow a short custom task brief.

### 5.7 Information architecture and main navigation

- Home
- Search / “I need to…”
- Explore all disciplines
- Photography & Image
- Engineering & Built Environment
- IT, Software & Data
- Finance & Markets
- Business & Entrepreneurship
- Education & Research
- Writing, Design & Media
- Science, Health & Environment
- Operations & Everyday Work
- A–Z index
- Local drafts (browser-only)
- How it works
- Privacy, safety and limitations

Main navigation should stay compact on mobile. Category and workflow pages can be static/SEO-indexable; user-generated prompt content must remain private and must not become a public page.

## 6. Core user experience

### 6.1 Landing page

The landing page should answer four questions quickly: what PromptLas is, who it helps, how it works, and where to start.

**Hero**
- Headline: **“Tell us what you want to do. Build a prompt that knows what you mean.”**
- Supporting copy: “Simple, guided forms turn your idea into a clear AI prompt—with explanations while you build.”
- Primary CTA: **Build a prompt**
- Secondary CTA: **Explore all workflows**
- A product screenshot/mockup should show a category selector, a few plain-language controls, and a live prompt preview. Avoid a generic AI-glow hero that does not explain the product.

**Quick-start task cards**
- Create an image
- Improve a photo
- Study for an exam
- Market a product
- Build or debug software
- Solve an engineering task
- Write or research something
- “I’m not sure — help me choose”

**How it works**
1. Choose your task.
2. Answer simple questions.
3. See your prompt improve live.
4. Copy it into your preferred AI tool—or use an integrated provider if enabled.

**Trust/clarity strip**
- No login required
- Your form stays in your browser by default
- You can edit the generated prompt
- Prompt creation is separate from AI execution

**Further sections**
- Browse by profession and outcome
- Example: “What you select → what appears in the prompt”
- FAQ about images, privacy, model compatibility, and limitations
- Footer with accessibility, privacy, terms, contact/feedback, and supported capabilities


### 6.1.1 Exact landing-page implementation specification

The following hierarchy is mandatory for the first implementation. The page should feel like a professional productivity product, not a generic “AI magic” landing page.

**Header**
- Left: PromptLas wordmark with a simple compass/search-inspired mark; do not use a stock AI sparkles logo.
- Navigation: Explore workflows, How it works, For professionals, Safety & privacy.
- Right-side CTA: “Build a prompt”.
- On mobile, use a compact header and accessible menu. Keep the main CTA discoverable.

**Hero — above the fold**
- Eyebrow: “TURN YOUR IDEA INTO A CLEAR AI PROMPT.”
- H1: “Tell us what you need to do. We’ll help you ask AI clearly.”
- Supporting copy: “Choose a task, answer a few simple questions, and watch your prompt take shape. No prompt-engineering experience. No account required.”
- Primary button: “Build my prompt”
- Secondary link/button: “Explore all workflows”
- Reassurance line: “Free to use · No login · Your prompt stays in your browser by default”
- Show a real interactive-looking product preview: a short form on the left and generated prompt on the right, with field labels such as “What are you trying to do?”, “What should the result look like?” and a visible live prompt. It must be a faithful UI preview built from the actual components or a reusable demo component, not a decorative fake screenshot.

**Fast start: “What are you here to do?”**
Present 8 initial task tiles with icon + short label + one-line description:
1. Create an image — “Make a new visual from your idea.”
2. Edit a photo — “Tell AI what to change and what to keep.”
3. Study or prepare for an exam — “Build a tutor, revision plan, or practice quiz.”
4. Write or research — “Turn a topic into a structured request.”
5. Build or debug software — “Explain the goal, environment, error and expected result.”
6. Solve an engineering task — “Set the units, data, standards and output you need.”
7. Grow a business — “Work on customers, pricing, product or marketing.”
8. Explore finance or markets — “Create an educational research brief with assumptions and risk limits.”
Also display “I’m not sure — help me choose” as a prominent guided route.

**Search-first directory**
- Heading: “Find the right starting point.”
- Search placeholder: “Try ‘my soil test results’, ‘deploy my app’, ‘make a product photo’…”
- Search accepts subjects, tasks, common abbreviations and plain-language situations.
- Show chips for “By discipline”, “By task”, “By output”, “Beginner-friendly”, and “Advanced”.
- Display the parent path on results, e.g. Engineering → Civil → Geotechnical → Soil Mechanics.
- Never suggest that semantic AI search is active unless it is actually integrated; v1 can use static full-text, aliases and guided disambiguation.

**How it works**
Use four numbered steps with short explanation:
1. Choose what you want to do.
2. Answer a few clear questions.
3. See the prompt update as you go.
4. Copy it into your preferred AI tool.
Clarify that PromptLas builds the prompt; it does not generate images or execute code unless an explicit integration is added.

**Before-and-after proof**
Show a two-column example:
- Vague prompt: “Make a nice product photo.”
- PromptLas-built prompt: a concise, structured prompt that specifies subject, setting, lighting, composition, aspect ratio, preservation/avoidance instructions and output.
Label this as an illustrative example. Do not fabricate performance metrics or claim that it guarantees a better image.
Include a “Try this form” link.

**Explore connected disciplines**
Show 6 category bands, not a giant wall of every branch:
- Creative, Photography & Image
- Engineering & Built Environment
- IT, Software, Cloud & Data
- Finance, Markets & Accounting
- Business, Entrepreneurship & Marketing
- Education, Research & Everyday Work
Each band links to a category page and shows 3–4 example branches. Use “Explore the full Atlas” for the full taxonomy.

**What makes PromptLas different**
Three points, in plain language:
- “Questions that fit your task” — a soil test and a portrait photo should not use the same form.
- “Know why we’re asking” — each specialist field includes a short explanation and an example.
- “Check the gaps” — the form points out missing information instead of quietly making it up.

**Trust and privacy strip**
- No account required for the prompt-only experience.
- No uploaded image is sent to PromptLas in prompt-only mode.
- Prompts are editable before copying or downloading.
- High-consequence workflows show their limits and missing inputs.
Do not claim privacy guarantees beyond the implemented data flow.

**FAQ**
Include concise answers to:
- Do I need to know prompt engineering? No.
- Does PromptLas generate the image/answer itself? Not in prompt-only mode; it prepares the prompt for the selected AI tool.
- What if I do not know a technical answer? Choose “I’m not sure” where available; the prompt can ask the other AI to explain or request the missing data.
- Can I use it without signing in? Yes for the core prompt-builder.
- Are engineering and finance outputs professional advice? No; high-consequence outputs require verification and qualified review.
- Can I edit the prompt? Yes.
- Are my photos uploaded? Not in prompt-only mode; local preview only.
- Which AI tools are supported? Describe configured targets only; do not imply automatic integration unless implemented.

**Footer**
- Product: How it works, Explore workflows, Examples, Request a workflow.
- Trust: Privacy, Terms, Safety and limitations, Accessibility.
- Project: Feedback, Changelog, Source repository only if public.
- Short footer notice: “PromptLas helps you prepare better prompts. It does not guarantee the output of external AI tools.”

**Visual constraints**
- Use restrained surfaces, typography and spacing. No full-screen neon gradient, floating orbs, fake chat messages or random AI stock imagery.
- The actual form-and-preview workspace should be the dominant product visual.
- All buttons must navigate or perform their stated action. No dead links or placeholder “coming soon” controls on the launch path.

### 6.2 Prompt workspace layout

**Desktop:** two-column workspace. Left: form (about 52–58% width). Right: live prompt preview (about 42–48% width), sticky within the workspace where possible. The preview should remain visible without forcing horizontal scrolling.

**Tablet:** stacked layout or adjustable split where usable.

**Mobile:** single column; a sticky bottom bar provides “View prompt” and “Copy prompt.” The prompt preview can open as a full-height sheet/panel. Never squeeze two columns onto a narrow screen.

**Workspace structure**
- Breadcrumb / category name
- Task title and one-sentence outcome
- “Beginner mode” by default
- Progress indicator only for multi-step workflows; do not make a short form feel like a mandatory wizard
- Core questions
- “Fine-tune” accordion for advanced controls
- Optional reference upload zone when relevant
- Live prompt preview with highlighted sections
- Actions: Copy, Download `.md`, Download `.txt`, Reset, Save locally, Export/Import configuration
- Capability notice: “This builds a prompt. Image generation happens in your selected AI tool unless an integrated generator is available.”

### 6.3 Live preview behaviour

- Preview updates immediately on input change with a short debounce only if rendering cost requires it.
- Build prompts from structured sections: role/context, task, subject/input, constraints, style/technical settings, output requirements, quality checks, and safety/evidence requirements.
- Reflect the user's language and units.
- Avoid exposing empty headings or literal placeholders for unanswered optional fields.
- Use sensible defaults but mark assumptions in the preview where material.
- Highlight the section affected by the last change without flashing or moving the page.
- Let the user edit the generated prompt manually. Offer a clear choice: **“Keep my edits”** or **“Rebuild from form”** if later form changes would overwrite manual edits.
- Include “Why this is here” toggles for specialist instructions so users can learn without cluttering the prompt.
- Do not imply that the live preview is a model response. It is the prompt text that will be copied/exported.

---

### 6.4 Directory and discovery UX

The landing page must not rely only on cards for a small selection of popular uses. It should provide a prominent task search and then progressively reveal the catalogue.

**Landing search placeholder:** “What are you trying to do? e.g., analyse soil compaction, edit a photo, deploy an app, research a stock, plan a business.”

Search results should show:
- Workflow title and plain-language outcome
- Parent discipline breadcrumb
- Skill level or complexity label
- One-sentence description of what the form collects
- Expected prompt/deliverable
- Whether it is a learning prompt, planning prompt, or high-consequence technical brief
- Up to three related paths when useful

Provide filter chips for “By discipline”, “By task”, “By deliverable”, “Beginner-friendly”, and “Advanced”. Add A–Z as a secondary index. The user should be able to reach “soil mechanics → consolidation” in a few interactions, but also find it by searching “settlement over time”.

### 6.5 Adaptive intake and missing-input panel

For advanced technical workflows, the interface should show a lightweight “What we still need” checklist. It should classify each item as:
- Required to produce a meaningful prompt
- Helpful but optional
- Unknown / ask the AI to explain
- Not applicable to this task

If a value is not known, the form must not coerce a fake value. It should either permit “unknown” and instruct the receiving AI to ask for the missing data, or limit the prompt to a conceptual/explanatory task. High-consequence workflows should never create false confidence by hiding missing loads, material properties, standards, data sources, units, market dates or assumptions.

### 6.6 Connected workflow UX

After a prompt is copied/downloaded, show a small next-step area based on the current task:
- **Prerequisite:** “You may need this before continuing.”
- **Companion:** “Often used with this workflow.”
- **Next step:** “Turn this into the next deliverable.”
- **Alternative:** “Use this if you meant a different task.”

Related forms do not automatically inherit state. A clear “Carry over selected context” option should list the values being reused, such as project location, units, dataset name or stack. Never pass a user’s full prior prompt into an unrelated form without consent.


### 6.7 UI placement blueprint — exact page geometry

This section is the placement contract for the design and coding agent. Dimensions are starting design specifications; validate them with real-browser screenshots and usability tests. Do not interpret the numbers as a claim that the current app has been rendered or performance-tested.

#### 6.7.1 Shared application frame

**Desktop (viewport width >= 1200 CSS px)**
- Header: 72 px tall, full width, white surface; subtle 1 px bottom border; content aligned to the same 1,200 px maximum-width container as the page.
- Main content: `max-width: 1200px`, centered; 24 px horizontal gutter at standard desktop and 20 px at compact tablet.
- Main section spacing: 72–96 px between major homepage sections; 24–32 px between related elements; 12–16 px inside field/card groups.
- Reading pages: content column around 720 px maximum; do not stretch paragraphs across the whole desktop width.
- Workspace: two-column CSS grid, approximately `minmax(0, 1.1fr) minmax(360px, 0.9fr)` with a 24 px gap; avoid horizontal overflow caused by long prompt tokens.
- Sticky prompt panel: top offset 88 px below the header, max height `calc(100vh - 112px)`, internal scrolling. Sticky behaviour must be disabled when it harms keyboard flow or when the viewport height is too short.

**Tablet (768–1199 CSS px)**
- Header about 64 px tall.
- Reduce main gutters to 24 px.
- Use two columns only when each remains readable; otherwise stack form first and prompt preview immediately after the form or expose preview as a panel.
- Search filters wrap to multiple lines; no clipped category labels.

**Mobile (<768 CSS px)**
- Header about 56 px tall; wordmark and primary CTA/menu stay visible without competing.
- Main side gutters: 16 px; on narrow screens 320–359 px, use 12 px.
- Single-column layout. Do not squeeze form and preview side-by-side.
- Cards stack; filter chips can horizontally scroll with a visible affordance or wrap—never hide required filters off-screen.
- A sticky bottom action bar may contain “View prompt” and “Copy prompt”, height 64–72 px plus safe-area inset. It must not cover the final field, validation messages, footer actions or keyboard focus. Add bottom padding equal to the action bar height.
- Prompt preview opens in a labelled drawer/full-height panel or a clearly anchored page section. Escape closes a drawer; focus returns to the opener.
- Test at 320, 360, 390 and 430 px, landscape orientation, and browser zoom up to 200%.

#### 6.7.2 Landing page — desktop composition

**Header**
- Container aligned to the hero edges.
- Wordmark on the left (not a giant logo), nav in the centre/right, primary “Build a prompt” button at far right.
- Do not place a search field in the header if it competes with the hero search; keep nav links short.

**Hero**
- Section begins 56–72 px below the header.
- Two-column grid: left 54–58%, right 42–46%; vertically align around the visual centre.
- Text column: eyebrow, H1, supporting copy, primary/secondary CTA row, then one reassurance line. Maximum text width ~620 px.
- Hero H1 must not exceed 3 lines at 1280 px desktop; use responsive type sizing rather than manually forced line breaks across all devices.
- CTA row: 12 px gap, primary indigo button first, secondary neutral link/button second. Do not place a third CTA beside them.
- Right column: interactive mini-workspace preview with a short form (two inputs and one choice) beside a short generated prompt excerpt. Frame it in a neutral surface with subtle border/shadow; no abstract AI orb as a substitute.
- The preview should look like a genuine product fragment, not a fake screenshot with unreadable microtext.

**Quick-start task section**
- Begins 72–88 px after hero.
- Title and short subheading at top; 8 task cards in a 4-column desktop grid (2 rows), gap 16 px.
- Cards: approximately 240–280 px wide depending on container; minimum 136 px height; icon at top, clear title, one sentence; entire card is keyboard-focusable if clickable.
- The ninth “I'm not sure—help me choose” route should use a clear contrasting border or full-width callout below the 8 cards, not a misleading disabled card.

**Atlas search**
- Place below the task cards with at least 72 px section spacing.
- Search box is the dominant element: full available content width, 56–60 px high; search icon left; clear control right when populated.
- Below it, filters/chips; then results, with at most 5 visible initially and “View all results”.
- A result row/card shows title, breadcrumb, short description and status. It must not rely on icons alone to communicate category/risk/status.

**How it works**
- Four columns on large desktop, two columns on tablet, one column on mobile. Numbered steps with simple line icons; keep explanations to one or two sentences.
- Place the explicit “PromptLas builds the prompt; your selected AI tool executes it” clarification directly below the steps, not hidden in an FAQ.

**Before/after example**
- Two balanced columns with labels “A vague request” and “Structured with PromptLas”.
- Use code-like/monospace framing only for prompt text, not whole cards.
- At mobile, stack vague prompt first and improved prompt second; show “Try this workflow” immediately after.

**Domain exploration**
- 6 domain group cards on desktop in a 3-column x 2-row layout; 2 columns on tablet; one column on small mobile.
- Each card shows 3–4 sample branches and one “Explore domain” link. Do not show every subject node on the home page.
- Keep deep/seed status labels visible on directory pages, not as prominent status badges on every marketing card.

**Benefits / trust / FAQ / footer**
- Benefits: 3-column layout; concise headline and explanation.
- Trust/privacy: use a pale neutral surface, not a bright success-green callout; link to Privacy and Safety pages.
- FAQ: accordion in one readable column (max width ~900 px), with visible focus and expanded state.
- Footer: 3–4 grouped columns on desktop; stacked groups on mobile. No social icons unless real destinations exist.

#### 6.7.3 Landing page — mobile order

1. Compact header
2. Eyebrow and H1
3. Supporting copy
4. Primary CTA
5. Secondary CTA
6. Reassurance line
7. Mini-workspace preview (scaled, still legible)
8. Quick-start cards
9. Atlas search
10. How it works
11. Before/after prompt example
12. Domain exploration
13. Benefits
14. Privacy/trust
15. FAQ
16. Footer

Do not move the search below a long marketing narrative. Users who arrive with a concrete task should be able to start quickly.

#### 6.7.4 Explore/search results page

- Page header: breadcrumb (if nested), H1 “Explore the PromptLas Atlas”, concise explainer.
- Search field immediately under heading, max width 900 px and 56 px high.
- Main body: desktop filter sidebar 240–260 px on the left; results on the right. On mobile, filters open in a modal/drawer and show selected filter count.
- Filter groups: domain, task intent, output type, skill level, and status/risk where meaningful. Do not use risk as a sensational marketing filter.
- Result cards/rows have consistent anatomy: title; breadcrumb; one-sentence purpose; “Produces: …”; level/status and arrow/link.
- Empty result: acknowledge no exact match, show 3–6 nearest nodes and offer universal builder.
- Search input preserves the query on back navigation and supports keyboard shortcuts only if documented.

#### 6.7.5 Domain/category page

- Top: breadcrumb → domain name → one-line ELI5 purpose → coverage status.
- Follow with a “Start with a task” module (search prefiltered to the domain).
- Show featured reviewed workflows first; then subdisciplines as grouped sections; then seed/planned areas separately.
- Each subdiscipline card links to its overview or actual workflows. Do not list child terms as clickable if no route exists.
- At page bottom: related domains, request-a-workflow and report-a-problem links.
- Indexability depends on unique content and a successful quality gate; empty category pages are noindex.

#### 6.7.6 Workflow workspace — desktop

- Workspace top row: breadcrumb at 12–14 px; workflow title and summary; status/risk/review metadata in a quiet row (do not place five badges beside H1).
- Under the title, use a two-column grid: form 54–58%, preview 42–46%.
- The form column is a clear vertical flow with “Start here”, “Make it fit”, and “Fine-tune (optional)” sections. For multi-step tasks, show 3–4 steps max with labels, current step and back/next; never use a progress bar for a one-screen form.
- Each field: label above control; help text immediately below; example/placeholder within the control where appropriate; validation text next to the relevant field. Use 16 px vertical spacing between fields and 24 px between sections.
- Use one primary next action at the bottom of each step. Secondary action (Back, Skip optional questions, Reset) must be visually subordinate.
- Show a readiness/missing-input panel only when it helps. It should list concrete missing details (“Units not specified”) rather than an arbitrary quality percentage.
- Preview column: header “Prompt preview — not the AI’s answer”; status line (“Updates as you answer”); prompt text; actions. Avoid duplicating every control from the form in the preview.
- Preview action order: Copy prompt (primary or strongest), Download `.md`, Download `.txt`, Edit prompt, then lower-frequency actions such as Save locally/Export configuration in an overflow or secondary row.
- On long prompts, show a scrollable code-like panel with wrapping; do not force horizontal scrolling.
- Preview should not jump to the top or steal focus when content changes. Announce a concise status to assistive tech only when the user requests it or an action completes.

#### 6.7.7 Workflow workspace — mobile

- Top: back to directory, breadcrumb, title, one-sentence summary.
- Form fields in one column, full width.
- The preview is a section/panel, not a permanently squeezed right sidebar.
- Sticky bottom action bar provides “View prompt” and “Next” or “Copy prompt” depending on state; never show two competing primary buttons.
- When the preview panel opens, provide close/back affordance, total prompt length only if useful, and copy/download controls.
- The virtual keyboard must not obscure the active input or sticky controls.
- On step completion, scroll to the next section heading, not the page top; preserve screen-reader context.

#### 6.7.8 Policy and help pages

- Maximum reading width 720–760 px.
- Prominent page title, last-reviewed date for time-sensitive content, short summary, meaningful H2/H3 outline, links to source documents, and a route back to the related workflow.
- Safety, privacy, terms and accessibility statements must reflect implemented behaviour. Do not publish boilerplate that says an external provider is used when it is not.

#### 6.7.9 State-specific placements

Design and implement visually distinct states for:
- Search empty, no exact match, results and filtered results.
- Workflow draft, required field missing, optional unanswered, unknown selected, prompt ready, prompt with assumptions and blocked request.
- Copy success, copy failure, download, reset confirmation, local save enabled/disabled, local draft cleared.
- Image chosen, preview ready, unsupported file, oversized file and image removed.
- Manual prompt edited, form changed after manual edit, keep edits/rebuild decision.
- Imported JSON valid/invalid, old schema version, migration required and corrupt data.
- Desktop sticky preview, mobile preview drawer open/closed, keyboard navigation and network-independent prompt generation.

All feedback should appear close to the triggering control, be screen-reader announced when appropriate, and not rely on colour alone.


## 7. ELI5 form design system

Every form must be written for a beginner but preserve domain-specific accuracy. Use the same interaction pattern while allowing each discipline to ask different questions.

### 7.1 Required field pattern

Each field should include:
1. **Plain-language question** — what decision is required?
2. **One- or two-sentence explanation** — what it changes and why it matters.
3. **Example** — realistic, domain-specific and clearly labelled as an example.
4. **Recommended/default selection** — if a safe general default exists.
5. **Technical term** — shown as a secondary label when useful.
6. **Prompt impact** — “This adds/changes … in your prompt.”
7. **Uncertainty option** — “I don't know” / “Help me choose” when the task can safely proceed.

Example:

**Question:** “How blurry should the background be?”  
**ELI5:** “A soft, blurry background helps the subject stand out. A sharper background keeps more of the scene clear.”  
**Technical term:** Depth of field; often influenced by aperture, focal length, focus distance and sensor format.  
**Prompt impact:** Updates focus and lens-style instructions.  
**Important distinction:** For an actual camera plan, settings describe physical controls; for an AI-generated image they are style cues and are not guaranteed to produce a physically exact exposure.

### 7.2 Field behaviour

- Use conditional display based on task and previous answers.
- Avoid exposing advanced questions until relevant.
- Use segmented controls for a small number of mutually exclusive choices, dropdowns for many options, checkboxes for independent choices, and textareas only for genuinely open-ended context.
- Distinguish required, optional and “recommended but can skip”.
- Accept units explicitly and preserve them through every output.
- Do not silently convert units without displaying the conversion.
- Use locale/jurisdiction fields only where they change the result.
- Keep values when switching between related workflows where semantically safe.
- Warn before discarding incompatible fields; preserve a draft locally only when the user has opted into local saving.
- Validate values in domain-aware ways. A field can be syntactically valid and still physically or professionally implausible; warnings must explain that difference.
- Avoid enormous forms. Split complex workflows into compact steps (e.g. Task → Inputs → Constraints → Output) while keeping the prompt preview accessible.
- Never force every user to define an expert-level persona, all constraints, or a model name before starting.

### 7.3 Beginner and expert modes

**Beginner mode (default):** plain-language intent questions, standard choices, examples, safe defaults, optional “I don't know”.

**Expert mode:** exposes detailed parameters, data schemas, standards/versions, advanced settings and explicit prompt sections.

Both modes use the same underlying state and schema. Switching modes must not erase answers. Expert mode is not a different product.

### 7.4 Explainability of the prompt

The prompt preview should support two toggles:
- **Prompt text:** clean, copyable output.
- **Why this is included:** a short field-to-instruction explanation, e.g. “You selected a moving subject, so the prompt asks for motion-freezing shutter guidance.”

Do not include interface help text in the copied prompt unless it helps the receiving AI complete the task.


### 7.5 Make the form feel “almost too easy”

The default flow must be understandable to a first-time user who has never written an AI prompt. A comprehensive schema is an implementation asset—not a reason to show 30 fields at once.

**Default interaction rules**
- Show no more than 3–5 core questions at once. Use short steps for tasks that genuinely need more; do not turn a one-minute task into a wizard.
- Start with the user's goal in everyday language, not with specialist terminology.
- For low-risk creative and writing tasks, offer a usable prompt after the first 2–3 answers, then invite refinement.
- For complex engineering/finance tasks, first ask whether the user wants to learn, interpret supplied data, or prepare a professional task brief. This determines how strict input completeness needs to be.
- Every choice must provide an “I don't know — help me choose” route when it is safe. Do not present it as a valid way to bypass critical inputs.
- Use “Good default” labels only when the default is genuinely sensible. Do not imply universal optimality.
- Keep advanced controls inside a clearly named accordion such as “Fine-tune (optional)” or “Expert settings”.
- Do not place a long paragraph beneath each input. Use one short sentence, an example, and an accessible “Why are we asking?” disclosure for complex settings.
- Explain technical words once, inline. Examples: “Aperture (f-stop): how wide the lens opening is”; “Runtime: where the app runs”; “Jurisdiction: which country or state rules apply”.
- Avoid asking users for details that can be derived from an earlier answer or do not change the prompt.
- Ask for only one concept per field. Never combine multiple unrelated questions in one textarea.
- Do not force account creation, model selection, persona-writing, or advanced preferences before the prompt appears.

**Progressive complexity**
- Level 0 — Start: goal and subject, with “help me choose”.
- Level 1 — Make it fit: audience/use, main constraints, desired output.
- Level 2 — Fine-tune: optional style, format, model/tool target and advanced technical inputs.
- Level 3 — Professional checks: units, source data, standards, jurisdiction, assumptions, test criteria, risk review.
Show only the level required by the task and the user's chosen mode.

**Examples of plain-language field design**
- Photography: ask “How blurry should the background be?” before “Aperture / f-stop”.
- Image editing: ask “What should change?” and “What must stay exactly as it is?” separately.
- Student: ask “What are you preparing for?” and “What topic is hardest?” before syllabus-specific detail.
- DevOps: ask “Where does your app need to run?” and “What is going wrong or what do you want to deploy?” before exposing Helm/IaC options.
- Civil engineering: ask “Do you have test results or site data?” before presenting parameter fields. If the user does not, offer “Explain the concept” or “Create a list of information needed”. Do not generate a pseudo-calculation with fabricated soil parameters.
- Finance: ask “Are you trying to learn, research a company, or analyse data you already have?” before asking for market dates, ticker and sources.

**Form success target**
A user should understand what each visible field means without needing to search the web. Test this with non-expert users. Ask them to explain the field in their own words and identify what they would do next. If they cannot, revise the wording rather than adding a longer tooltip.

## 8. Domain pack specifications

### 8.1 Photography and camera planning

**Beginner intake:** subject/type, intended use, scene/location, lighting, desired mood, main focus, composition, aspect ratio, and whether the user wants a real-world shot plan or a generated image that looks photographic.

**Advanced optional controls:** aperture, shutter speed, ISO, focal length, lens/camera, white balance, focus mode, motion freeze/blur, depth of field, exposure intent, crop and post-processing.

**Domain branches:** portrait/headshot; product/ecommerce; food; fashion/beauty; architecture/interior/real estate; landscape/travel; wildlife; sports/action; events/weddings; street/documentary; macro; night/astrophotography; studio; aerial/drone; photo restoration/retouching; colour grading; shot list and lighting plan.

**Guardrail:** do not require a camera brand/model. Explain the exposure triangle and trade-offs when a real camera is being used. For image generation, label aperture/shutter/ISO as visual direction—not guaranteed physical settings.

### 8.2 Image creation and image editing

Separate **Create new** from **Edit reference**. The edit path asks the user to specify both **what should change** and **what must remain unchanged**. Preserve product identity, people/face identity where appropriate, logo, text, geometry, labels or layout only when requested. Include composition, style, environment, colour, aspect ratio, output use and avoid-list.

In prompt-only mode, upload previews remain local; image bytes are not submitted to PromptLas or stored in localStorage. The prompt can instruct an external model to use the image the user attaches there. If generation is integrated later, disclose provider/data handling/cost and keep API keys server-side.

### 8.3 Civil engineering and geotechnical/structural workflows

**Civil engineering intake**
- Task: learn a concept, solve a worked example, interpret supplied data, prepare a design brief, compare options, review a drawing, create a report, estimate quantities, plan a test, or create a site checklist.
- Discipline: geotechnical, structural, materials, transportation, water, environmental, surveying/GIS, construction management, quantity surveying, architecture/BIM or general civil.
- Project stage, location/jurisdiction, units, source data/drawings, required output and the level of detail.
- Ask for governing code/standard and edition where it matters. If unknown, make that visible and instruct the downstream AI to ask or research rather than silently choose one.

**Geotechnical / soil mechanics workflow-specific inputs**
- Soil classification and layer/profile data
- Test type and method (for example, compaction, consolidation, shear-strength, permeability or index-property testing)
- Supplied measurements, sample condition and units
- Groundwater level and relevant site conditions
- Foundation geometry/loading context for bearing capacity or settlement tasks
- Standard/method and edition where applicable
- Desired output: explanation, calculation steps from supplied values, result interpretation, lab report, design-input checklist, or further-investigation plan

**Geotechnical task families:** classification; grain-size analysis; Atterberg limits; compaction/Proctor; OMC/MDD interpretation; consolidation and settlement/time rate; shear strength; permeability; seepage; effective stress; earth pressure; bearing capacity; shallow/deep foundations; piles; slope stability; retaining structures; liquefaction screening; ground improvement; site-investigation and bore-log review.

**Structural task families:** load path and assumptions; preliminary sizing brief; reinforced concrete; steel; masonry/timber; beam/column/slab/frame/truss concepts; stability, drift and deflection checks; wind/seismic-load research; foundation interface; drawing/detail review; condition assessment; inspection and reporting.

**Construction/quantity families:** BOQ and take-off brief, estimate assumptions, rate analysis, tender, method statement, WBS/schedule, CPM, construction risks, QA/QC, site diary, snagging, progress report and handover.

**Guardrails:** never invent load values, soil parameters, material properties, dimensions, site data or code clauses. If critical inputs are absent, change the result to a data-request checklist, conceptual explanation or explicitly illustrative worked example. Label illustrative numbers as hypothetical. No generated output is certified or construction-ready without qualified review.

### 8.4 Electrical engineering, electronics and energy

**Branches:** electrical power generation/transmission/distribution; load flow; short circuit/fault; protection coordination; earthing; cable sizing; transformers; motors/generators; power quality; energy audit; renewables/solar/wind; battery storage; EV/charging; building electrical systems; analog/digital circuits; PCB; power electronics; sensors/instrumentation; control systems; PLC/SCADA; embedded systems/firmware; IoT; telecommunications; signals/RF; calibration and test workflows.

**Adaptive fields:** task, nominal ratings, system topology, supply/frequency, load/operating conditions, components, supplied measurements, environment, applicable standard/jurisdiction and output type.

**Guardrails:** do not assume system voltage, fault current, component ratings, wiring method or applicable code. Safety-related work must ask for qualified review and must not provide false assurance that an installation is safe or compliant.

### 8.5 Mechanical, chemical, manufacturing and interdisciplinary engineering

**Mechanical:** machine design; mechanisms; stress/fatigue; gears/bearings/shafts; materials; CAD/CAE/FEA brief; thermodynamics; heat transfer; fluid mechanics; pumps/compressors; HVAC/refrigeration; automotive/EV; aerospace; robotics/mechatronics; manufacturing; maintenance; reliability and root-cause analysis.

**Chemical/process:** mass and energy balance; process flow; reaction and separation; process control; piping/instrumentation documentation; hazard analysis; environmental controls and process safety.

**Manufacturing/materials:** machining, additive manufacturing, quality planning, production control, material selection, failure analysis, corrosion, metallurgy, polymers, ceramics and inspection/testing.

**Other engineering:** aerospace, marine/ocean, mining, petroleum, nuclear, biomedical, agricultural, industrial, systems, reliability, operations research and engineering management.

Shared inputs include system boundary, units, assumptions, operating conditions, material/component data, constraints, standard/version, intended audience, source documents and output format.

### 8.6 IT, software, DevOps, data and system design

**Software development:** write, explain, refactor, debug, review, test, secure, optimise, document and release code; language/framework/version, expected behaviour, observed behaviour, error, environment, reproduction steps, constraints and acceptance criteria.

**System design:** users and requirements; scale; throughput/latency; availability/reliability; data model; API; persistence; cache; queue/eventing; security/trust boundaries; deployment; observability; cost; failure modes; backups; disaster recovery; diagram and decision-record outputs.

**DevOps/SRE/platform:** CI/CD, Git workflows, containers, Kubernetes, Helm, Terraform/IaC, configuration management, GitOps, secrets, registries, cloud deployments, release strategies, rollbacks, monitoring/logging/tracing, SLO/SLI, incident response, postmortem, backup/DR, capacity/cost, hardening and runbooks.

**Cloud:** provider and service family; IAM; networking; compute; storage; managed databases; load balancers; DNS/CDN; serverless; Kubernetes; migrations; landing zones; cost and governance.

**Data:** data ingestion, ETL/ELT, pipelines, SQL, data models, warehouse/lakehouse, orchestration, data quality, lineage, governance, BI, dashboards, analytics, statistics, ML/AI, LLM/RAG, evaluation and MLOps.

**Other branches:** networking/sysadmin; security/DevSecOps; QA/test automation; IT support; mobile/web; backend/API; databases; embedded/IoT; ERP/CRM; privacy/governance.

**Adaptive inputs:** goal, environment, versions, current architecture, expected vs actual behaviour, logs/errors (redacted), constraints, data sensitivity, latency/scale, security, tests and required deliverables. Ask users not to paste secrets or credentials. Do not claim that code was run or infrastructure was inspected unless a real execution/integration did so.

### 8.7 Finance, stock market and quantitative analysis

**Personal finance:** budget, expenses, debt scenarios, savings goals, insurance literacy, tax-document preparation and retirement concepts.

**Accounting/corporate finance:** bookkeeping, reconciliation, financial statements, cost models, budgeting/forecasting, working capital, unit economics, break-even, cash runway, valuation methods, due diligence and investor reporting.

**Investing/market research:** company/stock research, sector analysis, fundamentals, earnings, valuation, mutual funds/ETFs, portfolio concepts, diversification, risk, drawdown, correlation, investment thesis review and financial-literacy explanation.

**Trading/quant:** instrument and strategy specification, options/futures education, payoff/Greeks, volatility concepts, market-data quality, backtesting, look-ahead/survivorship bias, slippage/fees, position-sizing education, drawdown, paper trading, trading journal, risk rules and research reports.

**Required form inputs:** market/jurisdiction, asset class/instrument, time horizon, objective, data source and date range, method, assumptions, costs, risk limits, benchmark and deliverable. Allow “education only” and “research from supplied data” paths.

**Guardrails:** no guaranteed returns, no unqualified personalised recommendations, no invented prices or financial statements, no claimed live data without a real source, and no brokerage access or order placement in prompt-only v1. Distinguish observed data, assumptions, scenarios and conclusions.

### 8.8 Entrepreneurship, business ownership and startup execution

**Idea-to-business pathway**
1. Identify the user/problem and current workaround.
2. Plan customer discovery and interviews.
3. Estimate market using transparent assumptions.
4. Compare alternatives and positioning.
5. Define value proposition and business model.
6. Test willingness to pay and pricing.
7. Define MVP scope and PRD.
8. Design prototype/onboarding/activation.
9. Model costs, unit economics and runway.
10. Plan launch and go-to-market.
11. Create acquisition/SEO/content/sales experiments.
12. Define analytics, activation, retention and feedback loops.
13. Improve operations, hiring, procurement, support, SOPs and quality.
14. Prepare fundraising materials and due-diligence data room when relevant.

**Small business workflows:** service menu, pricing, local-market assumptions, customer enquiry, sales, review response, inventory, supplier comparison, cash-flow plan, staff checklist and compliance research.

**Adaptive fields:** customer, problem, evidence already collected, location/market, business stage, price/cost, constraints, capacity, timeline, goal and output format. Unknown market data must remain an assumption or research question, not fabricated fact.

### 8.9 Marketing, sales and customer operations

- Audience/problem research, positioning, product claims, content/post/carousel, image brief, campaign, landing page, SEO, ad concept, email/newsletter, sales proposal, outreach, sales discovery, objections, CRM, customer onboarding, retention, support/FAQ, social proof verification, partnerships, community, experiment design and reporting.
- Ask for product facts, audience, target action, channel, destination, brand tone, proof/assets, market, budget and capacity only when relevant.
- Never invent reviews, statistics, urgency, discounts, URLs or product capabilities.

### 8.10 Education, research and professional learning

- Explain a concept; derive a solution; solve a worked example; make flashcards; quiz; create study/revision schedule; prepare for a mock exam; analyse mistakes; generate lesson plan/worksheet; research question; literature review; lab report; literature synthesis; teach a skill; language practice.
- Ask level, subject/topic, syllabus/board/jurisdiction if relevant, learning goal, time available, exam/task format and desired feedback. Never imply official syllabus/mark-scheme alignment without evidence.

### 8.11 Science, health, law, agriculture, services and everyday tasks

These domains belong in the directory but require differentiated workflows:
- **Science/research:** hypothesis, methods, dataset/source, variables, uncertainty and reproducibility.
- **Health/wellbeing:** general education and preparation for qualified care; not diagnosis/prescribing.
- **Law/policy/compliance:** jurisdiction, date, source document and intended use; not a substitute for counsel.
- **Agriculture/environment:** region, season, species/crop, field conditions, local rules and source data.
- **Operations/logistics/manufacturing/retail/hospitality:** demand, resources, service levels, schedules, process constraints, quality and costs.
- **Personal productivity/home/hobbies/travel:** goal, personal constraints, budget/time, location when needed, accessibility and output style.

The directory must not imply that every conceivable workflow is equally safe or equally suitable for a generic prompt. Higher-risk packs require review and may be marked “educational/research only”.

### 8.12 Cross-disciplinary task templates

Reusable intent families should be available across many domains, with different field schemas:
- Learn/explain
- Calculate/derive
- Create/design
- Edit/improve
- Analyse/interpret
- Compare/select
- Plan/schedule
- Debug/troubleshoot
- Test/validate
- Review/audit
- Document/report
- Research/verify
- Decide/recommend
- Automate/implement
- Present/teach

This allows users to learn one familiar interaction pattern while preserving discipline-specific questions.

### 8.13 Universal specialist-workflow contract (required for every discipline)

Every specialist workflow—whether it concerns concrete testing, user-interface research, financial statement analysis, SQL performance, a chemistry lab report or an everyday administrative task—must follow the same completion checklist. Domain-specific variations are expected; generic forms are not.

**Workflow definition**
- A single main user outcome, audience and boundary. Split genuinely different tasks into separate workflows or explicit modes rather than one overloaded form.
- Entry routes and aliases from subject, task intent, role, situation and deliverable; all resolve to a canonical workflow ID.
- A beginner explanation of the task, when to use it, what the output will contain and what the workflow will not do.
- A short default path with 3–5 primary questions per step, and conditional follow-ups only when an answer makes them relevant.
- A full question bank, not just visible first-screen fields; expert settings are available but collapsed by default.
- “I don't know” behaviour for every material field, including when to teach a concept, defer the value, or ask for evidence instead.
- Data/source intake requirements, required units/version/jurisdiction/standard where relevant, and a clear distinction between user inputs, known registry values, examples, assumptions and missing information.
- Prompt assembly sections for role, task, context, inputs/evidence, constraints, requested method, deliverable, quality checks, uncertainty and next steps as appropriate.
- Prompt preview changes that are explainable: the user can see which information was added, can edit the prompt, and is not silently overwritten by subsequent form changes.
- Readiness/missing-input logic and a safe fallback output when critical information is absent.
- Answer-quality checklist, related workflows, sources/references and freshness information when relevant.
- Explicit risk class, review role, author, version, review date, expiry/review interval, publication status and indexing decision.
- Automated schema/prompt tests plus human review required by the risk class.

**Minimum workflow test fixtures**
- Happy path with realistic non-sensitive example inputs.
- Missing required information and the resulting fallback.
- “I don't know” on at least one material field.
- Conditional branch selected and unselected.
- Invalid or inconsistent units/values where relevant.
- User changes a previous choice and dependent questions update correctly.
- User edits the generated prompt and then changes a form value; manual edits are preserved or merged according to a disclosed rule.
- Copy/download and keyboard/screen-reader interaction states.
- High-risk boundary or misuse case where applicable.

**Do not confuse prompt preparation with task execution.** A workflow for software testing can write test cases without running them; a structural prompt can ask for a design review without certifying safety; a stock-research prompt can set out a method without fetching current prices; and an image prompt can describe an image without generating it. The interface must name the actual capability provided.

### 8.14 Guided-discovery experience and educational feedback

The form is also a small learning experience. It should build the user's ability to reason about the task without forcing them to study prompt engineering beforehand.

- Start with the user's goal or symptom in ordinary words, then translate it into a supported task family.
- Use progressive choices with meaningful labels rather than a long technical dropdown. Offer search/typeahead in registries with alias support.
- Where a choice reflects a method or discipline-specific concept, provide a short explanation and a concrete contrast (“choose this when…; choose the other when…”).
- Offer “Help me choose” for uncertain users. Use 1–3 decision questions where possible and explain the route selected.
- Show an optional “why this question matters” panel and, where it helps, a “what this answer changes in your prompt” note.
- Distinguish “not applicable,” “not known,” “not yet available” and blank. Do not force a fake answer just to advance the form.
- If the user's selected topic has no reviewed specialist workflow, keep the user moving through an explicitly labelled guided starter that gathers goal, context, evidence, constraints and expected deliverable. State which specialist checks are not included.
- As users learn more, allow them to reopen the term glossary, revise previous answers and reveal expert settings without losing progress.
- At completion, provide both the assembled prompt and a concise “before you send it” checklist: missing information, attachments they should supply to the target LLM, source/version/date details and items that require human verification.

### 8.15 Subject-to-workflow example matrix

The same subject can serve many intents. The workflow registry should explicitly support multi-intent mappings rather than assuming one page equals one prompt.

| Subject area | Example separate task routes | Key intake differences |
|---|---|---|
| Soil mechanics | Explain consolidation; interpret consolidation-test data; prepare a soil report; compare ground-improvement options | Beginner concepts versus actual lab/field data, units, soil profile, method, standard and intended decision |
| Concrete | Explain compressive strength; prepare a cube-test report; investigate low results; create an inspection/test plan | Test age, specimen dimensions, failure load/result, sampling context, mix/specification and applicable acceptance standard |
| Steel structures | Explain buckling; prepare a member-review brief; review a connection submittal checklist; create a fabrication inspection plan | Member/system, grade/section, loads and combinations, connection type, standard/edition and qualified-review needs |
| Software QA | Explain test levels; create test cases; build an API test plan; analyse a supplied defect; plan regression testing | Requirement, system/build, environment, test level, data, risks, expected/actual behaviour and acceptance criteria |
| DevOps | Learn Kubernetes; design a deployment pipeline; troubleshoot a failed deployment; create an incident postmortem | Experience level, target environment, manifests/logs/events, deployment state, impact, security constraints and rollback |
| Data analytics | Clean a dataset; define KPIs; compare cohorts; analyse an experiment; build a dashboard brief | Data dictionary, source/period, grain, metric definitions, missing data, comparison method and output audience |
| UI/UX | Plan interviews; create a user flow; review a form; write a usability-test plan; critique a supplied interface | Target users, user problem, evidence, platform, accessibility constraints, task success criteria and artifact format |
| Cybersecurity | Create a defensive hardening checklist; triage a vulnerability; organise incident evidence; prepare an audit plan | Authorised scope, assets, environment, versions, evidence, business impact, sensitivity and remediation constraints |
| Finance | Explain a financial metric; analyse supplied statements; build a research framework; backtest a strategy methodology | Market/instrument/entity, as-of date, source, assumptions, horizon, costs, benchmark and risk limits |
| Entrepreneurship | Validate a customer problem; draft a PRD; calculate unit-economics assumptions; plan a launch experiment | Customer segment, evidence, stage, budget, channels, constraints, success metric and unresolved assumptions |

This matrix is a modelling aid, not proof that these individual forms already exist. Publication state must be queried from the registry.

## 9. Prompt composition engine

### 9.1 Data-driven workflow schema

Each workflow should be defined as data, not bespoke hard-coded markup. A workflow schema should support:
- `id`, `title`, `category`, `summary`, `icon`, `tags`
- Atlas node schema fields: aliases/locales, definition, disambiguation key, graph relations, question-bank references, answer-check references, source registry references, risk class, tier and review metadata
- Six axes: `subjectId`, `intent`, `personLevel`, `context`, `modality`, `deliverable`
- `intentModes` and output type
- `fields[]` with type, label, help, examples, default, required status, options, visibility conditions and prompt mapping
- `advancedFields[]`
- `promptSections[]` with ordering and conditional inclusion
- `guardrails[]`
- `outputFormats[]`
- `version`, `locale`, risk class (`R0`–`R4`), content tier (`T1`–`T3`), `status`, review owner/role, `reviewedAt`, `reviewDueAt`, source refs, and test fixtures

The rendering engine interprets the schema and creates the form, ELI5 help and prompt preview. Use TypeScript types and schema validation to prevent invalid workflow definitions.

### 9.2 Prompt assembly rules

- Deterministic assembly: the same form state and workflow version should produce the same prompt, excluding explicit date/time fields.
- Omit empty optional answers instead of inserting “N/A” or invented defaults.
- Separate user-provided facts from generated suggestions and assumptions.
- Include the desired output structure, constraints, success criteria, and verification instructions.
- For source-based tasks, request citations and uncertainty disclosure; do not manufacture references.
- Keep a copyable plain-text version without UI-only annotations.
- Include model-specific variants only when clearly labelled and maintained.
- Allow manual prompt editing without silently losing the form-generated version.
- Provide a short “Prompt explained” view that maps major prompt sections to the user’s form answers.

### 9.3 Prompt QA

Before copy/download, run local checks for:
- Empty task or subject
- Contradictory choices (e.g. “preserve all text” and “remove all text”)
- Missing required context for high-consequence workflows
- Invalid aspect ratios or camera values
- Excessive or duplicate instructions
- Unclear output format
- Unverified claims and invented-source requests
- Sensitive information warning when a user pastes likely credentials or personal data (best-effort; do not claim perfect detection)

Prompt QA should explain problems and suggest a fix, not silently rewrite user intent.

### 9.4 Registry architecture: nodes, patterns, workflows and references

Keep four canonical record types separate:

- **Subject node:** the Atlas concept and its graph links.
- **Intent pattern:** a reusable operation such as “explain”, “compare”, “debug”, “revise for an exam” or “interpret supplied data”.
- **Workflow:** the approved form definition that combines one or more nodes, an intent pattern, fields, prompt mapping, guards and output format.
- **Reference registry entry:** an external standard, official source, exam board, tool/version, language, unit, jurisdiction or market identifier.

Do not generate a permanent page for every possible combination. A workflow may reference several nodes, and one node may use multiple patterns. Stable IDs must survive title edits. Renames should add aliases rather than breaking old links.

### 9.5 Target-tool profiles

The target-tool selector should be an explicit, context-sensitive setting—not a mandatory model brand choice on every form. Options can include “general / works in most chat assistants”, text assistants, code assistants, and modality-specific image/video/audio tools. A profile should contain supported prompt shape, constraints, known formatting conventions, last-reviewed date and test fixtures. Model interfaces and features change; do not hard-code claims about a provider without maintenance ownership.

If a tool cannot accept pre-filled prompts safely through a URL, use Copy and show the destination link only. Do not automate insertion into a third-party site or browser extension in v1.

### 9.6 Readiness score and quality rubric

A “Prompt readiness” score may be shown as a **completeness indicator**, not an accuracy or success probability. It should be based on weighted fields in the selected schema (e.g. 70% complete; add unit system and applicable standard), and explain missing information. Never imply “90% likely to be correct”.

A separate internal prompt-quality rubric should inspect task clarity, relevant context, required inputs, constraints, output format, evidence/uncertainty instructions, safety controls and redundancy. A score cannot replace domain review or guarantee a better AI answer; validate whether the score correlates with usefulness before publicising it.

### 9.7 Response Checker

A future “Check an AI answer” workflow lets the user paste an answer and applies node-specific review questions. It should highlight checks such as units and dimensional consistency, whether cited standards and clauses exist, whether assumptions were stated, whether the answer extrapolates beyond input data, and whether claims are sourced. It must not certify an answer as correct based solely on its own generated checklist. High-consequence answer checking may require external sources, domain reviewers, calculation engines or independent verification.


---

### 9.8 Workflow graph and schema contract

A workflow is a node in a versioned graph, not a standalone page. Required metadata should include:
- Stable workflow ID and schema version
- Parent path(s), primary discipline and secondary browse categories
- Human-readable title, short outcome description and search aliases
- Task intents supported and deliverables produced
- Skill level and risk classification
- Required, optional and conditionally-required inputs
- “I don't know” behaviour per field
- Prompt sections and the form fields that populate them
- Prerequisites, companions, alternatives and next steps
- Locale, unit system, jurisdiction or standard requirements where relevant
- Owner/reviewer, validation fixtures, last reviewed date and status (draft, reviewed, published, deprecated)

The same workflow may be found from multiple categories, but there must be one canonical definition to avoid divergent copies.

### 9.9 Anticipation rules and confidence

“Anticipate needs” means the form engine detects the likely questions and missing inputs for the selected task:
- **Deterministic requirements:** e.g. engineering tasks need units and source values; a debugging task needs expected vs actual behaviour; stock research needs an instrument, data window and source; photo editing needs both preserve and change instructions.
- **Conditional questions:** reveal only when an earlier answer makes them relevant.
- **Safe unknowns:** offer “I don't know” and construct a prompt that asks the receiving AI to explain or request the missing detail.
- **Blocking missing inputs:** prevent framing the output as a completed calculation/design when a critical input is absent; offer a checklist or conceptual path instead.
- **Assumption ledger:** show assumptions separately from supplied facts and let users edit/remove them.
- **Next-step rules:** recommend only a few connected forms that logically follow from the present task.
- **No silent transfer:** context may move between forms only with an explicit carry-over choice.

For arbitrary free-text routing, the prompt-only MVP should use a static synonym/alias index, token search and a small guided disambiguation flow. A true language-model-based intake is a later integration and must be labelled as such; do not simulate model reasoning with opaque rules.

### 9.10 Domain QA fixtures

Each published workflow needs test fixtures representing:
- Happy-path complete inputs
- Missing critical input
- Optional input omitted
- Conflicting answers
- Unrecognised alias/search phrase
- Beginner path and expert path
- Locale/unit/jurisdiction variation where applicable
- Unsafe or unsupported request
- Expected prompt sections and forbidden claims
- Related-workflow links

High-consequence engineering and financial workflows need domain-reviewed fixtures, not only generic software tests.

## 10. Visual identity and colour system

### 10.1 Design direction

Use a **calm, confident, contemporary global utility** aesthetic. The product should feel creative enough for image-makers and serious enough for engineers, students and business users. Avoid a neon-heavy “AI cyberpunk” style, which can reduce trust and readability for educational and professional tasks. Use a light-first default for long forms and readable prompt text, with an optional dark theme later.

### 10.2 Recommended palette

| Token | Hex | Use |
|---|---|---|
| Ink / primary text | `#172033` | Headings and body text |
| Deep navy | `#182742` | Brand anchor, nav and dark surfaces |
| Indigo | `#4F46E5` | Primary actions, active navigation, focus accents |
| Teal | `#0F9D91` | Progress, successful state, secondary emphasis |
| Warm amber | `#F4B544` | Highlights, tips and attention states; not long body text |
| Canvas | `#F7F8FC` | Main background |
| Surface | `#FFFFFF` | Cards and form panels |
| Border | `#D9DFEA` | Field and card boundaries |
| Muted text | `#596579` | Helper text with verified contrast |
| Success | `#18794E` | Success feedback |
| Warning | `#9A5B00` | Warning text/icon |
| Error | `#B42318` | Validation and destructive-action state |

**Palette rules**
- Use colour for hierarchy and state, not decoration.
- Use one dominant primary action colour; avoid multiple competing gradients.
- Never communicate status using colour alone; pair it with text or an icon.
- Validate all text/background pairs against WCAG 2.2 AA contrast targets.
- Do not force one category to have a separate saturated colour if that complicates the interface. Category identity can use small icons and restrained accents.
- Preserve a coherent palette across image-generation prompts only when the user asks for a consistent visual brand; otherwise the generated image palette should be task-specific.

### 10.3 Typography and layout

- Use a highly legible sans-serif stack with robust system fallbacks.
- Headings should be compact and descriptive; avoid oversized marketing copy inside the workspace.
- Body text: target 16 px equivalent; helper text should remain readable and not become tiny.
- Use consistent spacing tokens, clear focus rings, 8–12 px field radii and 12–16 px card radii.
- Use icons as supporting cues, never as the only label.
- Avoid layout shifts when help text or conditional fields appear.

---


### 10.4 Exact v1 design tokens for implementation

Use the following tokens in CSS variables/Tailwind theme. Do not invent a second palette per page.

**Fonts**
- Display/headings: `Manrope`, weights 600–800.
- Body, labels and controls: `Inter`, weights 400–700.
- Monospace prompt preview/code/technical values: `IBM Plex Mono`, weights 400–500.
- Load from a privacy-reviewed font source or self-host if practical; include `Arial, sans-serif` and `ui-monospace, SFMono-Regular, Consolas, monospace` fallbacks. If external font loading fails, layout must remain stable.

**Typography scale**
- Hero: `clamp(2.5rem, 5vw, 4.25rem)`, line-height 1.04, slightly negative letter spacing.
- Page H1: 2rem–2.75rem, 700.
- H2: 1.5rem–2rem, 700.
- H3/card title: 1rem–1.125rem, 650–700.
- Body: 1rem, line-height 1.55–1.7.
- Helper text: 0.875rem minimum on desktop and mobile where feasible; never use tiny low-contrast 10–11px helper text.
- Eyebrow/meta: 0.75rem, 700, uppercase only when short.

**Core CSS tokens**
- `--sh-ink: #172033`
- `--sh-navy: #182742`
- `--sh-indigo: #4F46E5`
- `--sh-indigo-hover: #4338CA`
- `--sh-teal: #0F9D91`
- `--sh-amber: #F4B544`
- `--sh-canvas: #F7F8FC`
- `--sh-surface: #FFFFFF`
- `--sh-border: #D9DFEA`
- `--sh-muted: #596579`
- `--sh-success: #18794E`
- `--sh-warning: #9A5B00`
- `--sh-error: #B42318`
- `--sh-focus: #4F46E5`
- Main content max width: 1200px; reading measure: 65–75 characters.
- Spacing base: 4px; use consistent 4/8/12/16/24/32/48/64px steps.
- Card radius: 16px; input/button radius: 10–12px; pill radius only for filter chips.
- Border width: 1px; use shadows sparingly and only to communicate elevation.
- Primary button height: 44–48px; minimum touch target: 44px.
- Workspace desktop split: form 54%, prompt panel 46%; stack under 900px. On narrow mobile, show a single column with a sticky “View prompt / Copy prompt” action row.
- Use a 12-column grid for marketing pages where helpful; use simple one-column reading flows for policy/help pages.

**Component rules**
- Buttons: primary indigo with accessible contrast, secondary outlined/neutral, destructive actions explicitly labelled.
- Form controls: white surface, visible border, 12px radius, label above, helper text below, visible focus ring, error text directly associated.
- Cards: white surface, subtle border, consistent internal padding; icon + title + short description; cards must be fully clickable only if the destination is clear.
- Prompt preview: light neutral or very pale indigo surface with readable monospace text, line wrapping, copy/download actions and a visible “This is the prompt—not the AI answer” label.
- Focus: 2px visible focus ring plus offset; keyboard interaction must work.
- Animation: restrained 120–220ms transitions; respect `prefers-reduced-motion`.
- Contrast: verify all actual combinations against WCAG 2.2 AA. Do not use amber as small text on white or muted text on tinted cards without verification.


### 10.5 Component dimensions, placement and behaviour

| Component | Desktop specification | Mobile specification | Required states |
|---|---|---|---|
| Header | 72 px; max-width aligned to content | 56 px compact | default, menu open, focused nav |
| Primary button | 44–48 px high; horizontal padding 18–24 px | full-width where primary on form flow | default, hover, focus, disabled, loading only when real work occurs |
| Search input | 56–60 px; max-width 900 px on Explore | full width; 52–56 px high | empty, typed, clearable, loading only if real index work occurs, no-results |
| Task card | 136–176 px high; consistent content alignment | 2 columns only at widths where text remains readable; otherwise 1 | default, hover, focus, unavailable |
| Standard text field | full parent width; label above; helper below | full width | untouched, focus, valid, invalid, disabled |
| Choice card/radio option | 48 px minimum height, clickable whole row/card | 48 px minimum; adequate gaps | unselected, selected, focus, unavailable |
| Advanced accordion | collapsed by default; full form width | same; avoid multiple nested accordions | closed, open, focus |
| Prompt preview | sticky desktop panel; readable monospaced text | separate panel/drawer | live, empty, ready, manual edit, copy feedback |
| Missing-input panel | inline in form/preview column, not a blocking modal for all cases | full-width inline panel | informational, blocking, resolved |
| Toast/status | near top/bottom without covering field; disappears only if safe | above sticky bar or inline | success, error, neutral |
| Modal/drawer | limited use; focus trap and close action | full-height or near-full-height when needed | open, close, Escape, focus return |
| Footer | 3–4 content groups; clear legal links | stacked content groups | normal, keyboard-focused links |

Additional rules:
- Prefer semantic HTML and native controls. Use custom controls only when their accessibility and keyboard behaviour are implemented.
- Avoid hover transformations that move cards and cause visual instability.
- Loading indicators appear only during actual asynchronous operations; local prompt assembly should feel immediate and should not show fake spinners.
- Destructive operations such as clearing all local drafts require a confirmation and clear scope.
- Icon labels must be present for icon-only buttons; icon-only actions need accessible names and visible focus.

### 10.6 Brand system for PromptLas

- Brand name written exactly as **PromptLas**. Do not alternate with Promptlas, Prompt LAS, PromptLas or other forms.
- Product label: **PromptLas Prompt Studio**; product layers: **PromptLas Atlas** and **PromptLas Studio**.
- The wordmark may use the Manrope display face but must remain legible in plain text and at small mobile sizes. Do not encode the name inside a raster image.
- Proposed mark direction: a simple compass/target made from a subtle ring and one directional notch, paired with the wordmark. It should imply finding the right question/route, not surveillance, hunting or a generic sparkle effect.
- The mark is a proposal, not approved trademark artwork. Domain, company-name, app-store and trademark checks remain unresolved.
- Use the navy/indigo system as the durable identity. Teal is a supporting accent; amber is used sparingly for attention or editorial highlights, not as a dominant CTA.
- Do not create different product palettes per domain. Use icons and taxonomy labels instead.

## 11. Technical architecture for SSG and no-login

### 11.1 Recommended v1 stack: Astro + React islands

**Recommendation:** Astro for the static Atlas, landing, category, glossary and workflow explanation pages; React + TypeScript for the interactive Studio workspace; Tailwind CSS for tokens and layout; Zod for registry/schema validation; Pagefind for the static full-text index; GitHub Actions for content validation, testing and deployment; Cloudflare Pages as the initial static host.

Rationale: most Atlas pages are read-oriented content, while only the Studio workspace needs sustained client-side interactivity. Astro renders content pages to HTML and hydrates only the explicitly marked interactive components (“islands”). Astro content collections support schema validation and generated TypeScript types. Pagefind builds a static index after site generation and searches locally without a search server. References: [Astro islands](https://docs.astro.build/en/concepts/islands/), [Astro content collections](https://docs.astro.build/en/guides/content-collections/), [Pagefind docs](https://pagefind.app/docs/).

**Alternative:** Next.js with `output: 'export'` remains viable if the team wants one React-centric framework. The decision must be made before hundreds of page templates are built. Next.js static export cannot run general request-dependent server functionality such as API routes and middleware in the same way as a server deployment; an AI-provider proxy would need a separate runtime such as a Cloudflare Worker. See [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports).

**Not recommended as the long-term architecture:** a single hand-written HTML/JS file for the full directory. It is appropriate for an interaction prototype, not a maintained subject graph with hundreds of schemas, review metadata, locales, and automated QA.

### 11.2 Stack decision record

| Concern | Decision | Reason / caveat |
|---|---|---|
| Static content pages | Astro | Low client-side JS by default; page templates and content schema checks suit an Atlas |
| Interactive prompt builder | React island | Rich client state, conditional fields and live preview; load it on workspace routes only |
| Language | TypeScript | Types across schema engine and generator tools |
| Styling | Tailwind + CSS tokens | Consistent visual system and responsive constraints |
| Schema validation | Zod | Validate content at build time and user configuration at runtime |
| Static search | Pagefind | Full-text search over built pages with static chunked index; measure total generated file count |
| Small local lookup | In-memory indexed JSON | Alias routing and fast field suggestions; do not load the full node graph into every page if it becomes large |
| Testing | Vitest + Playwright + axe-core | Unit/prompt fixture tests, realistic browser journeys and automated accessibility checks |
| Hosting | Cloudflare Pages initially | Suitable for static hosting; observe file/build limits and deployment mode |
| CI/CD | GitHub Actions | Lint, type-check, schema validation, test fixtures, link checks, build and publish gates |
| Future AI execution | Cloudflare Worker or another server-side runtime | Provider keys, quotas, abuse controls and external calls must not live in static client bundles |

### 11.3 Static-site boundary and cost model

Prompt assembly, field validation, local prompt-quality checks, copy/download, local draft management and URL-fragment sharing can run entirely in the browser. Core v1 needs no database, login or server-side user profile.

However, SSG does **not** make secret API calls safe. If PromptLas integrates paid models or external data, use a server-side Worker/API proxy with secrets stored as server-side environment variables, rate limits, quotas, request-size limits, abuse monitoring, provider timeouts and privacy disclosures. A dynamic Worker can coexist with the otherwise static site; a strict static export cannot provide a private secret-bearing API endpoint by itself.

Cost posture for prompt-only v1: static hosting, build pipeline, domain and optional privacy-aware analytics; no inference cost. Main costs are founder time, content/reviewer capacity, and maintaining sources. Future execution changes the economics: model costs, image generation costs, abuse controls and support become recurring costs.

### 11.4 Build and data pipeline

1. Author/modify canonical Atlas node or workflow source (YAML/JSON/TypeScript/Markdown, chosen consistently).
2. Validate schema, IDs, references, risk class, required source metadata and graph links.
3. Run automated prompt fixtures and content checks.
4. Run lint, unit tests, Playwright end-to-end tests, accessibility checks and link/alias checks.
5. Produce static HTML and static search index.
6. Apply indexing policy (index, noindex, or route only in client-side registry).
7. Count generated files/assets and verify limits before deployment.
8. Deploy only after CI passes; preserve a versioned release/changelog.

Use a single canonical record per subject/workflow. Generated pages and aliases must resolve to canonical IDs; do not create duplicate source files for every browse door.

### 11.5 Cloudflare Pages capacity constraint

Cloudflare's official Pages limits currently state a **20,000-file per-site limit on Free** and up to **100,000 on paid plans when the documented Wrangler v4 setting is used**; builds have a 20-minute timeout, and plan-specific build quotas apply. These are platform limits, not targets to approach. Pagefind produces additional assets, and localisation, images, JSON chunks, redirects and route pages all consume files. See [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/) and [Pages changelog](https://developers.cloudflare.com/changelog/product/pages/).

Mitigation: index only pages that pass the unique-value test; generate only necessary public HTML; use one compiled node-data file or per-domain chunks for non-indexable seed nodes; resolve aliases in the static search index/runtime rather than creating thousands of redirect rules; count files in CI; split large generated datasets by domain if build time or asset size requires it. Do not solve a content-quality problem by simply paying for a larger file cap.

### 11.6 Privacy and local state

- No login or server-side user profile in prompt-only v1.
- Local drafts should be opt-in, deletable, and clearly described as device/browser-specific.
- Do not store reference-image bytes in localStorage; use a temporary object URL for local preview and revoke it when the image is removed or the workspace closes.
- Exported JSON and share links must exclude images, credentials, API keys and clearly sensitive text fields by default.
- URL-fragment sharing may encode non-sensitive workflow state; fragment content is not sent in ordinary HTTP requests but can still be exposed through the shared URL, browser history, screenshots or clipboard. Warn users not to share secrets or personal data.
- Do not send prompt contents or sensitive form values to analytics.
- Provide local-draft clear/delete controls and a plain-language privacy page.
- If a provider integration is introduced, disclose what is sent, the recipient, purpose, likely retention limits if known, costs and how to remove/avoid sending the data.
- For India and international users, obtain legal review of privacy notices and applicable data-protection obligations before external data processing. India's DPDP Rules were notified in November 2025; check the current official Act/Rules and commencement provisions at implementation time rather than relying on a static summary. Official starting point: [MeitY Act and Policies](https://www.meity.gov.in/documents/act-and-policies) and [PIB notice](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&lang=2&reg=3).

## 12. Accessibility, localisation and global readiness

- Target WCAG 2.2 AA.
- Keyboard-accessible controls, visible focus states, semantic headings, labelled form fields and screen-reader announcements for copy/download/status feedback.
- Do not rely on hover for help; tooltips must be keyboard and touch accessible.
- Respect reduced-motion preferences.
- Ensure the preview is navigable and its updates do not repeatedly steal screen-reader focus.
- Responsive layouts must work at 320 px width and at 200% zoom.
- Support long labels and translated content without clipping.
- Use locale-aware date, number and unit formatting.
- Let workflows specify metric/imperial units and preserve the user's selected unit throughout the prompt.
- Do not assume the user is in the US or India. Geography, currency, education systems, regulations, spelling and platform availability should be explicitly chosen or left for the AI to clarify.
- Plan for interface localisation, beginning with English; add languages based on validated demand and translation QA rather than machine-translating specialist instructions without review.

---

## 13. SEO, Atlas publishing and content operations

### 13.1 The indexability gate

A page should be indexable only if it contains a real, useful contribution that a simple title/substitution template could not produce. At minimum, a subject page needs subject-specific questions or mistakes, a real form or usable question bank, meaningful cross-links and source/context notes where relevant. Tier 1 pages may be indexed after review. Tier 2 pages must pass a value test and human spot-check. Empty domains, aliases, low-value auto-generated combinations and user-generated prompt states should not be indexed. One universal builder is sufficient for Tier 3.

This is not merely an SEO optimisation. Google explicitly identifies mass generation of substantially similar or unoriginal pages that primarily aim to manipulate rankings as “scaled content abuse”, regardless of whether content is produced by AI, automation, humans or a mixture. See [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies). The strategy is not “generate 3,000 pages and hope”; it is “generate candidate data, publish only pages that add distinct value”.

### 13.2 Page classes

| Page class | Default index policy | Minimum content bar |
|---|---|---|
| Home and top-level domain | Index | Clear product value, useful discovery, supported workflow examples and limitations |
| Tier 1 workflow | Index after review | Working form, field explanations, sample prompt, missing-input behaviour, risk framing and tested related links |
| Atlas subject node | Index only after unique-value test | Original explainer, aliases/disambiguation, useful question ladder, misconceptions/answer checks, related forms and source metadata where needed |
| Tier 2 pattern | Noindex/draft until spot-checked and unique-value test passes | Subject-specific questions and prompt mapping, not only title substitution |
| Tier 3 universal builder | One indexable landing/workspace page as appropriate | Clear broad fallback and honest limits |
| Alias / redirect | Canonicalise/resolve to one ID | No duplicate content page |
| Empty domain / placeholder | Noindex or do not publish | No “coming soon” pages mass-generated for SEO |
| Private user prompt / config | Never index | Must remain local or explicit share URL only |

### 13.3 Content operations factory

The content pipeline is: **proposal → AI-assisted draft → structured validation → automated checks → human review proportional to risk → publish/noindex decision → monitor feedback and freshness → revise or deprecate**. AI can draft; it cannot approve its own high-consequence content.

Every subject/workflow must have a canonical ID, owner, version, status, source notes, review date, risk class, and a changelog entry. All standards, laws, exam syllabi, tool/version references and locale packs must have a valid-as-of date. If content becomes stale, visibly mark it and suspend high-risk claims until it is reviewed.

Automated checks should verify:
- schema integrity, duplicate IDs, broken graph links and orphan nodes;
- canonical aliases, ambiguous aliases and disambiguation pathways;
- required fields and prompt sections are present;
- examples do not masquerade as actual user data;
- no unsupported guaranteed outcome, fake statistic, fake review or invented citation appears in authored content;
- cited standard/law/tool/exam links resolve and their metadata is complete (link resolution alone does not prove validity);
- no prohibited content patterns or unsafe routing appears;
- readability of ELI5 help, prompt fixture outcomes, and repeated template language;
- generated file counts, indexable page counts, page size and search payload size.

### 13.4 Editorial and review governance

- **Owner/editor:** approves taxonomy consistency, voice, duplication, release batching and content status.
- **Domain reviewer:** verifies the assumptions, terminology, question bank and guardrails for R2 workflows.
- **Qualified/licensed reviewer:** required for R3 content that is permitted at all; R3 should default to education-only.
- **Automation:** checks schemas, references, link integrity, content duplication signals and fixtures, but does not substitute for expert review.
- **User feedback:** “Report a bad prompt”, “This question confused me”, and “Suggest a missing workflow”. Do not require an account to send feedback; provide a low-data contact mechanism and protect against spam.
- **Release workflow:** batch releases and inspect search performance before publishing the next batch; roll back or noindex pages with material quality issues.

### 13.5 Search and discovery

Use Pagefind for search over static page text and a small curated client-side alias index for workflow/node metadata. If the catalogue becomes very large, load per-domain JSON chunks instead of shipping every node into each page. Search should include titles, aliases, acronyms, example phrases, tasks, roles, output types and language aliases. For ambiguous terms, present a disambiguation chooser rather than guessing.

### 13.6 Content licensing and data provenance

Use public classification datasets as structure/alias seeds only after checking current terms. Wikidata states that structured data in its core namespaces is public domain/CC0; its non-core text namespaces have different terms. Wikipedia article text is CC BY-SA and should not be copied into proprietary or differently licensed content without respecting the applicable terms. See [Wikidata licensing](https://www.wikidata.org/wiki/Wikidata:Licensing). Check source-specific rights for occupational lists, classification data, exam syllabi, user-generated examples and community content.

For standards such as BIS/IS, ASTM, IEC, ISO, Eurocodes or other professional standards, store identifiers, official URLs, edition metadata and a brief original description; do not copy the standard text unless an appropriate licence permits it. The product needs a deliberate content licence and a contributor agreement before accepting external contributions or selling packs.

### 13.7 Search-demand strategy and competitor positioning

Do not write invented search-volume estimates into the PRD. Prioritise candidate workflows using a documented score: demand signal, pain of poor prompting, benefit from structured fields, safe publishability, and review availability. Validate via live SERP review, keyword tools if available, Search Console after launch, internal zero-result searches, and workflow feedback. Label demand estimates as hypotheses until measured.

The differentiator is not “we have lots of prompts”. Prompt libraries, prompt marketplaces, optimisation tools and browser extensions already occupy that area. PromptLas's intended wedge is **reviewed subject question banks + adaptive forms + domain-specific missing-input gates + answer-check checklists + regional/standard/tool context + cross-workflow journeys**, while retaining no-login, local-first prompt creation. The competitive feature table and limitations are in Section 21.

## 14. Performance and reliability requirements

- Landing, Atlas and category pages should be static HTML. Hydrate the React workspace only on routes that need it.
- **Core Web Vitals target at the 75th percentile:** LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, segmented by mobile/desktop. These are targets, not guarantees; use field measurement when enough traffic exists. See [Google Search Central: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals).
- Initial performance budgets (engineering targets to validate, not universal truths): landing-page JavaScript ≤ 100 KB gzip excluding browser-native platform code; interactive workspace JavaScript ≤ 180 KB gzip before optional providers; first search interaction should not require downloading the whole Atlas graph.
- Do not load image/video generation SDKs in prompt-only routes.
- Lazy-load optional advanced-editor and image-preview code.
- Split node/workflow datasets by route/domain if bundles grow.
- Avoid layout shift when form questions, help text or preview sections update.
- Core prompt generation should remain usable with no backend and tolerate brief/offline periods after the necessary assets have loaded; PWA/offline package support is a later phase.
- Provide graceful fallbacks for clipboard failure, browser-storage quota errors, corrupted JSON imports, unsupported file types and invalid links.
- CI must count static files and page bundles; keep material safety/review state out of client-only assumptions if future server actions depend on it.
- Do not claim offline availability in private browsing or across devices.

## 15. Safety, content-risk classes and trust requirements

### 15.1 Risk class policy

Every node and workflow carries one risk class. Assign the **highest realistic risk of the intended use**, not only the lowest-risk example. Reassess if a general learning workflow is repurposed for operational decisions.

| Class | Meaning | Examples | Publication requirement | Form behaviour |
|---|---|---|---|---|
| R0 — Everyday / creative | A wrong answer usually has low direct consequence | Creative image prompts, hobbies, general recipes, low-risk writing | Automated checks and editor spot-check | Standard form and normal prompt QA |
| R1 — Learning / general business | Mistakes cost time or money but usually do not directly create safety-critical outcomes | Study help, general coding, marketing drafts, general career content | Automated checks, editor review against sources where factual | Show uncertainty checks and verification tips |
| R2 — Professional / consequential | Blind use can cause material financial loss, safety risk or non-compliance | Engineering calculations, electrical design, finance/tax analysis, defensive security design, commercial compliance | Named domain reviewer; required inputs, units and jurisdiction/standard; missing-input gate; fixtures; review date | Assumptions ledger, explicit scope and qualified verification notice |
| R3 — Sensitive / restricted | Health, mental health, children, legal action, belief-based prediction or risky physical activity | Health-professions learning, certain nutrition, legal-action support, grief, belief practices | Qualified reviewer where permissible; education-only or support-routing framing; reviewed notice | No diagnosis, prescribing, personalised legal/financial/medical advice, or false certainty |
| R4 — Blocked | Directly harmful, abusive or deceptive facilitation | See blocked list below | Do not build a workflow | Neutral decline and safe alternative |

Recommended review cadence: R0 on report/major change; R1 at least annually for factual packs; R2 at least every six months and when a cited standard or rule changes; R3 at least every six months, and more often where guidance changes rapidly. Review dates are management controls, not guarantees that a source is current.

### 15.2 Blocked workflow classes (R4)

PromptLas must not publish workflows intended to facilitate:
- Weapons, explosives, or chemical/biological/radiological/nuclear harm.
- Malware, unauthorised system intrusion, credential theft or evasion of defensive controls.
- Fraud/deception kits, phishing, fake IDs, certificates, receipts, invoices, reviews or testimonials.
- Stalking, doxxing, covert surveillance or non-consensual intimate imagery.
- Sexual content involving minors, targeted harassment, hateful abuse or impersonation/deepfake abuse of real people.
- Self-harm or suicide methods, eating-disorder coaching, or illegal drug production.
- Exam impersonation, cheating services, leaked-paper access or plagiarism intended to evade academic rules.
- Election, health or financial disinformation; guaranteed-return schemes or deceptive investment solicitations.
- Weapon design/targeting or other violent facilitation.

Detection on a static no-login website can be a simple client-side pattern list plus safe routing. That is a usability precaution, not a strong security boundary and not a guarantee that every harmful query is detected. The primary control is not publishing harmful workflow content.

### 15.3 Crisis and urgent-situation routing

When an intake signals imminent danger, self-harm, abuse or a medical emergency, do not continue into a generic prompt form. Route to a short support page with locally relevant verified resources and date of verification. The content must be calm, non-judgmental, and avoid diagnosis or promises about what a service will do. Resource numbers and official services require a regional review/freshness owner.

### 15.4 Domain-specific guardrails

- Engineering: never fabricate loads, material properties, soil parameters, dimensions, test results, standards or code clauses. If key inputs are missing, switch to educational explanation or a requirements checklist.
- Finance/markets: no return guarantees, fabricated quotes or personalised buy/sell certainty. Require instrument, market, timeframe, data source/date, costs and assumptions for quantitative research.
- Law/policy/tax: record jurisdiction and date; prompt for official-source checks; no assertion that a general form is legal advice or current-law verification.
- Health/care: general education/preparation only unless a properly scoped, qualified-reviewed offering is implemented; no diagnosis, dosing or unsafe triage.
- Cybersecurity: defensive/authorised framing only; no unauthorised access or credential theft.
- Education: support practice, explanation and integrity; no leaked papers or impersonation; do not claim official syllabus alignment without verification.
- Belief/traditional practices: label as cultural/traditional practice and distinguish it from empirical evidence; no fear-based predictions or high-consequence advice.
- Images and marketing: no fake reviews, fabricated logos/endorsements, fake scarcity, deceptive before/after or misleading claims.
- Uploaded/pasted content is untrusted data; instructions inside a file must not automatically override the user's stated task or platform safety constraints.

### 15.5 Quality and trust indicators

Show only verifiable trust indicators: Tier (Deep/Pattern/Universal), status (Reviewed/Draft), review date, reviewer role, and source/reference links where applicable. Do not claim reviewer credentials not verified. A `Reviewed` label must have a real review record. The readiness score measures completeness, not truth or success likelihood.

## 16. Delivery strategy, feasibility gates and roadmap

### 16.1 Foundational rule: breadth-first Atlas, depth-first workflow release

PromptLas has two parallel delivery goals. **Atlas breadth** makes all 39 domain families navigable, helps users discover the subject/task even when they do not know the right term, and shows a truthful capability state. **Workflow depth** publishes specialist forms only after their question banks, conditional logic, prompt assembly, quality checks, tests and review have passed. Both goals are required; one does not replace the other.

The interface/data model must be broad from the start, while production-grade depth grows in measured clusters. This means the initial product should not be reduced to six visible examples, but neither should it claim that every specialist branch has a finished form. For priority domains civil engineering and IT, include detailed browsable subtrees and enough task mappings to demonstrate the intended depth; publish each specialist form as it passes review. Keep thin pages out of search indexes and do not call a taxonomy node a workflow.

### 16.2 Phase 0 — Foundation (weeks 1–4; target, not guarantee)
- Finalise stable node/workflow IDs, taxonomy, six axes, graph relation types and content tiers.
- Implement Astro shell and the React Studio island; choose this stack unless the team has a compelling Next.js requirement.
- Define schemas for Atlas nodes, workflows, question banks, standards/source registries, locale packs and review records.
- Build the Tier 3 universal builder, prompt preview, manual edit/rebuild handling, copy/download and responsive workspace.
- Implement search aliases/disambiguation and workflow relationship rendering.
- Implement R0–R4 policy and blocked-intent routing; define high-risk review process before drafting R2/R3 content.
- Set up CI for schema checks, prompt fixtures, type checking, lint, Playwright, axe checks, link checks, duplicate detection and file count.

### 16.3 Phase 1 — Launch (target by month 3, gated on quality)

The launch candidate remains a small set of Tier 1 deep workflows across different interaction patterns, but it is **not the whole directory scope**. Select the first set from measured user demand, content/reviewer capacity and interaction coverage; likely candidates include image creation/editing, photography planning, civil/geotechnical data interpretation, software QA/debugging, DevOps deployment/incident preparation, and study or business validation. This set is a pilot vertical slice, not a definition of the product's total supported disciplines.

Before public launch, the product must also have: (a) all 39 domain families in the canonical navigation/search model; (b) useful, non-empty family-level descriptions and curated child branches; (c) granular priority trees for civil engineering and IT; (d) alias/synonym routing; (e) a universal “I don't know what this is called” builder; (f) clearly labelled starter routes when specialist forms are not yet reviewed; and (g) no dead cards or misleading completion claims. At least one tested end-to-end workflow must exercise each distinct form behaviour that the system claims to support.

Required launch assets: landing page, working task search and discovery, broad Atlas browse, civil and IT taxonomy trees, canonical domain/subject/task records with coverage states, universal/starter builder, pilot deep forms, relevant question-bank and answer-check records, risk labels, review dates, privacy/limitations/terms/contact pages, feedback/reporting path and CI. Do not use thin pages or “coming soon” pages as SEO substitutes for useful content.

### 16.4 Tier 2 expansion and the 39-domain coverage goal

Numerical content targets remain planning hypotheses and must be recalibrated using actual authoring/review throughput:
- Initial Tier 1 workflow count is selected for coverage of distinct interaction patterns and validated user needs, not as a proxy for total domain coverage.
- 50 Tier 1 deep workflows by month 3 is **very aggressive for one founder** if each includes source validation, conditional logic, fixtures and qualified review; do not promise it before measuring throughput.
- 100 Tier 1 by month 6 and 200 by month 12 are stretch goals contingent on reviewer capacity and a validated authoring factory, not baseline commitments.
- Large numbers of Tier 2 nodes may be useful as internal structured knowledge, but they are **not equivalent to an equal number of useful, indexable pages or finished forms**.
- The 39 domain families require navigable, useful discovery coverage; civil engineering and IT require especially granular subject/task maps; each branch still has its own workflow-completion status.

Recommended stage gates: track first-pass schema pass rate, average authoring time, review lead time, defect rate, share of drafts rejected/reworked, and the proportion of pages that pass the indexability gate. Reforecast quarterly using actual throughput.

### 16.5 Content clusters to expand

Expand in clusters where the same form mechanics and reviewer base can be reused: civil/geotechnical and structural; electrical/power and electronics; software/DevOps/cloud/data; productivity software; creative/photography/image; education/exam; entrepreneur/business/marketing; finance/accounting/markets; and local India language/place packs. Add healthcare/legal/trades/industrial safety content only as review and safety capacity permit.

### 16.6 Future phases

**Phase 2 (months 4–6):** question banks and glossary expansion, curated Tier 2 patterns, Response Checker prototype, multi-step playbooks for situations/business types, shareable URL-fragment config for non-sensitive state, workflow feedback/report feature, reviewer metadata and changelog, domain/locale freshness monitoring.

**Phase 3 (months 7–12):** prompt version comparison/diff, local prompt library with tags/search, variables/placeholders, multilingual aliases and “prompt in X, answer in Y”, PWA/lite mode if use data justifies it, tool-specific prompt profiles, stronger eval harness with test cases across two or three model families, limited embed widget.

**Phase 4 (after demand and cost tests):** optional model-assisted routing and response checking, image/model execution through a Worker, public JSON/API/CLI/MCP only when a genuine consumer exists, classroom and institution modes, enterprise/revenue features. Do not add AI inference merely to label the product “AI-powered”.


### 16.8 AI Studio Build-mode implementation contract

Google AI Studio Build mode commonly generates a React web frontend and Node.js server runtime. The first build should use a compatible React + TypeScript application, with Tailwind/CSS design tokens and a clean separation between static registry data and interactive form components. The long-term production architecture may use Astro for static Atlas pages with React islands; do not attempt an unsupported framework migration inside the initial visual prototype.

The first AI Studio build must:
- Generate a running application, not merely a plan, wireframe or code samples.
- Implement the landing page, search/discovery, Atlas category view, workflow workspace, live prompt builder, copy/download, local draft opt-in and privacy/limitations pages.
- Include a real, functioning schema-driven form engine and representative workflows; do not create dozens of dead cards.
- Use the exact font, colour, spacing and component tokens in Section 10.4.
- Include desktop, tablet and mobile layouts and keyboard focus states.
- Use local static data only for the prompt-only MVP. Do not add Firebase, authentication, database, Gemini API calls or other backend dependency unless explicitly approved.
- Do not claim image generation, live research, current stock data, code execution or expert verification has occurred.
- Implement all visible buttons/actions; remove or clearly disable anything not implemented.
- Run the app, resolve build/type/runtime errors, and test actual flows before reporting completion.
- Provide a concise summary of implemented routes/components, tests performed, known limitations and steps to export/sync the source.

The master build prompt should ask the code agent to finish the implementation in working code. It should not return only a proposed architecture or ask the user to approve basic design decisions already specified here.

### 16.7 Launch gate

No workflow is considered published unless its schema validates, its canonical ID and graph relations resolve, its form has a specific user outcome, its ELI5 fields are understandable, its prompt fixtures pass, critical missing inputs are handled, its risk class/review record is present, related links work, and its indexing decision is explicit. R2 and R3 must meet the applicable human-review requirement before publication.

## 17. Success metrics

Measure product usefulness rather than raw page views alone.

**Primary**
- Workflow-start to prompt-copy/download completion rate
- Median time to first usable prompt
- Percentage of users who edit or fine-tune a generated prompt
- Repeat use of a different workflow (privacy-aware, aggregate only)
- User-rated prompt usefulness

**Secondary**
- Landing CTA click-through
- Workflow search success / zero-result rate
- Form abandonment by field or section (only with consent and privacy review)
- Copy/download error rate
- Prompt QA warning frequency
- Accessibility and performance regressions

**Suggested initial hypotheses, not guaranteed targets**
- A first-time user can complete a common workflow in under 5 minutes.
- A user can explain at least one major setting after reading its ELI5 help.
- Most core workflows can produce a useful prompt without completing advanced settings.
- Users understand whether PromptLas itself generated an image or only built the prompt.

Do not collect personal or sensitive field values as analytics. Prefer event counts and workflow IDs, not the prompt text.

**Atlas/content-operations metrics**
- Zero-result searches by entry door and alias (aggregate and privacy-reviewed).
- Share of Tier 2 nodes promoted to Tier 1, as a demand signal.
- Review backlog and median wait by risk class.
- Percentage of R2/R3 pages within their review window.
- Percentage of indexable pages receiving meaningful impressions/clicks after an adequate measurement period.
- Index gate pass/rejection rate and thin/duplicate page rate.
- Workflow defect report rate and time to resolution.
- Authoring time per workflow, first-pass schema/fixture pass rate and re-review workload.

**Business-model metrics (only when commercial features exist)**
- Qualified institutional leads, paid-pack conversion, renewal/retention and support burden.
- Revenue by product type without using prompt contents for profiling.
- Affiliate link disclosure compliance and complaint rate.

---


### 17.1 Event dictionary and analytics rules

Analytics should be optional/privacy-reviewed and must never capture raw prompt contents, pasted code/logs, image bytes, personal financial data, personal identifiers or form answers. If analytics are not approved for launch, use manual user tests and aggregate operational counters without persistent tracking.

Permitted event candidates, if an approved analytics solution is enabled:
- `landing_primary_cta_clicked` — route/entry point only.
- `atlas_search_submitted` — query length bucket and result count; raw query not stored by default.
- `atlas_search_no_result` — normalized known alias/category where non-sensitive; avoid the raw free-text query.
- `workflow_opened` — canonical workflow ID and source route.
- `workflow_step_completed` — workflow ID, step ID and completion boolean, not field value.
- `prompt_generated` — workflow ID and schema version; no prompt text.
- `prompt_copied` / `prompt_downloaded` — action type and workflow ID only.
- `local_draft_saved` / `local_draft_cleared` — action, not draft content.
- `workflow_feedback_submitted` — optional rating and selected issue category; no raw prompt by default.
- `accessibility_or_runtime_error` — error category and route; scrub stack traces of input content.

Before enabling events, document lawful basis/consent where applicable, retention period, processor/subprocessor, opt-out and deletion requirements. A “cookieless” analytics label alone does not replace a privacy assessment.

### 17.2 KPI definitions and guardrails

- **Prompt completion rate:** sessions with copy or download divided by sessions opening a workflow; define bot filtering and consent boundaries.
- **Time to first prompt:** median time from opening workflow to first valid preview/copy; segment by workflow complexity.
- **Search success:** searches with a useful workflow open or subsequent prompt action; a click alone is not enough to prove success.
- **Unknown/abandonment rate:** count of “I don't know” and exits by field ID; never collect the answer value unless explicitly necessary and consented.
- **Workflow defect rate:** confirmed inaccurate, confusing, unsafe or broken workflow reports per usage denominator where available.
- **Review freshness:** percentage of time-sensitive pages within required review window.
- **User comprehension:** non-expert test participants correctly paraphrase fields and describe what will happen after copy. Use moderated testing early, not analytics alone.

Initial numeric targets should be marked as hypotheses and revisited after usability testing; do not fabricate conversion baselines before the product launches.

## 18. Acceptance criteria

### Directory and taxonomy
- [ ] A user can find a workflow by discipline, task intent, output type or alias.
- [ ] A–Z index is available but is not the only way to browse.
- [ ] Each workflow displays its taxonomy breadcrumb and what it produces.
- [ ] Parent-child relationships and up to six contextually relevant related workflows are represented.
- [ ] Aliases/abbreviations map to canonical workflow IDs rather than duplicated pages.
- [ ] “I don't know what this is called” supports a guided fallback path.
- [ ] Empty search results show useful adjacent categories and a custom-task route.
- [ ] Search does not claim semantic AI interpretation unless such a capability is integrated.

### Atlas breadth, subject discovery and workflow depth
- [ ] The canonical taxonomy and navigation represent all 39 domain families in Section 5.3.2, with useful family-level explanations, working routes and truthful coverage states.
- [ ] Civil engineering has a granular browse/search tree for geotechnical/soil mechanics, structural analysis, steel, concrete/RC, materials/QA, transportation, water/hydraulics, environmental engineering, surveying/GIS/BIM and construction/project controls.
- [ ] IT has a granular browse/search tree for software/system design, frontend/backend/mobile, QA/testing, DevOps/SRE/platform, cloud/infrastructure, networking/sysadmin/support, databases/data engineering/analytics, AI/ML/LLM engineering, cybersecurity/privacy, UI/UX/product design and IT service/project management.
- [ ] Users can enter through problem description, discipline, deliverable, role or situation and reach the same canonical subject/workflow rather than duplicate content.
- [ ] Every node/workflow status distinguishes taxonomy seed, explainer-ready, starter-ready, draft/review-required, published and deprecated.
- [ ] A listed subject is never automatically counted as a completed workflow; analytics and release notes report breadth nodes and reviewed forms separately.
- [ ] A subject page states what the task is, when to use it, what information to gather, common questions/misconceptions, related routes and the current capability level.
- [ ] A domain without a reviewed specialist workflow may use a clearly labelled guided starter; it must not imply specialist checks are included.
- [ ] All task routes resolve to canonical IDs; aliases and common novice wording work without producing duplicate pages.

### Workflow and question-bank completeness
- [ ] Every published specialist workflow has a complete structured question bank, conditional branching, field explanations, examples, “I don't know” behaviour, missing-input rules and prompt-impact mapping.
- [ ] Each workflow is tested for happy path, missing information, unknown answers, conditional branches, invalid/inconsistent values where applicable, backtracking, manual prompt edits, copy/download and keyboard access.
- [ ] Field prompts explain what is asked, why it matters and what changes in the generated prompt when the answer changes.
- [ ] The form differentiates unknown, not applicable, blank and not-yet-supported states.
- [ ] High-consequence forms require appropriate units, jurisdiction/standard/version, source/evidence, assumptions and qualified-review boundaries where applicable.
- [ ] Prompt-only mode never claims to execute tests, perform calculations beyond supplied/implemented logic, retrieve live data, generate an image, or provide professional approval.

### Adaptive forms and live prompt
- [ ] Each workflow uses a versioned schema; UI is rendered from the schema.
- [ ] Fields include plain-language help, examples, and prompt-impact explanations where needed.
- [ ] Conditional fields appear only when relevant.
- [ ] Missing critical inputs are visible; the engine does not invent them.
- [ ] “I don't know” can yield a safe explanatory or requirements-gathering prompt.
- [ ] Live preview updates as users change answers.
- [ ] Users can toggle between prompt text and explanations.
- [ ] Manual prompt edits are not silently overwritten.
- [ ] Copy/download works and provides accessible feedback.
- [ ] Local save is opt-in and deletable.
- [ ] Configuration export excludes uploaded image bytes and credentials.

### Domain coverage and quality
- [ ] Civil engineering includes geotechnical/soil mechanics, structural, construction, materials, transportation, water, environmental, surveying/GIS and BIM/quantity-surveying branches in its coverage map.
- [ ] Soil mechanics workflows cover relevant distinctions such as classification, compaction, consolidation, shear strength, permeability, bearing capacity and slope stability.
- [ ] Electrical engineering covers power, protection, machines, electronics, embedded, control, instrumentation, communications and energy.
- [ ] IT covers software, system design, DevOps/SRE, cloud, data engineering, analytics, security, databases, QA and operations.
- [ ] Finance covers personal finance education, accounting/corporate finance, market research and quantitative-methodology workflows with clear guardrails.
- [ ] Entrepreneurship covers customer discovery, validation, product/MVP, unit economics, marketing/sales and operations.
- [ ] Photography differentiates real-camera planning from generated-image style guidance.
- [ ] High-consequence workflows ask for relevant standards/jurisdiction, inputs and assumptions, and state review limits.
- [ ] Workflow pages distinguish verified data, user-provided data, assumptions and examples.

### Accessibility, privacy and static-site behaviour
- [ ] Core prompts work without login or a database.
- [ ] Core prompt assembly runs in the browser.
- [ ] No uploaded image or prompt content is submitted to PromptLas in prompt-only mode.
- [ ] All key interactions work by keyboard; labels and live status are accessible.
- [ ] Mobile layout works at narrow widths without horizontal scrolling.
- [ ] No provider keys are present in client assets.
- [ ] CI validates schema, prompt fixtures, type checks, lint and production build.
- [ ] Published pages have useful metadata, canonical URLs and internal links.


### Visual and user-comprehension acceptance
- [ ] Landing page contains the required hero, task entry, search, How-it-works, before/after example, domain exploration, trust/privacy, FAQ and footer sections.
- [ ] The UI uses the specified Manrope/Inter/IBM Plex Mono type system with fallbacks and a consistent token palette.
- [ ] The default form shows no more than 3–5 core questions at a time.
- [ ] Each visible field uses plain-language wording and an example/help path where needed.
- [ ] Expert parameters are hidden under “Fine-tune” unless essential for the selected task.
- [ ] Every relevant form supports “I don't know / help me choose” without bypassing safety-critical requirements.
- [ ] The prompt preview is visibly distinct from an AI-generated answer.
- [ ] Non-expert usability tests confirm users understand visible questions and can complete a common workflow without external research.
- [ ] No unimplemented button, dead-end route, fake output or fabricated test result is presented as functional.
- [ ] AI Studio implementation reports what was actually built and tested, not a generic completion claim.

## 19. Key risks and mitigations

| Risk | Why it matters | Mitigation |
|---|---|---|
| “A–Z” becomes an unmanageable promise | Hundreds of shallow forms hurt trust and maintenance | Treat taxonomy as coverage map; publish workflow packs only after QA |
| Flat navigation overwhelms users | Users do not know the specialist label | Search by task, output, role, aliases and guided “I don't know” intake |
| Cross-links become noise | Every workflow could link to many adjacent fields | Limit relationships to prerequisites, companions, alternatives and next steps; show 3–6 relevant links |
| Forms ask too many questions | Users abandon before getting a prompt | Progressive disclosure; required vs optional; only ask fields relevant to selected task |
| Critical inputs are guessed | Engineering/finance prompts can create false confidence | Missing-input gates, assumptions ledger, safe conceptual path and expert review |
| Rules-based search is marketed as AI | User expectations exceed actual capability | Label static search honestly; optional AI routing is a future integration |
| Overly generic forms | Domain experts get an unusable prompt | Discipline-specific schemas and domain-reviewed examples/tests |
| AI prompt output appears executable | Users may believe image generation, live research or code execution occurred | Separate actions, clear status, external-provider notices |
| Standards/regulations change | Stale jurisdictional guidance can harm users | Record source/version/review date and route current-law/standard tasks to verified research |
| Finance tools imply investment advice | Users may rely on outputs for financial decisions | Educational/research framing, data/date/source requirements, no return guarantees or execution |
| Image upload privacy is unclear | Users may provide sensitive photos/drawings | Local preview only in prompt mode; explicit disclosure if a provider integration is enabled |
| Static architecture is mistaken for secure AI execution | Public client bundles expose keys | Backend proxy for provider calls; rate limits and secure secrets |
| Search-driven pages become thin SEO pages | Large templated directories may be low value | Unique useful explanations, representative inputs/outputs and reviewed limitations |

## 20. Decisions to lock before coding at scale

1. **Approve Astro + React islands** for the initial content-heavy SSG; retain Next.js static export only if the team has a concrete reason.
2. **Freeze the Atlas and workflow schemas:** six dimensions, canonical IDs, aliases, disambiguation, graph links, tiers, risk metadata, review records and source registry.
3. **Select the six launch workflows** based on user research and available reviewers; at least one should test deep conditional input handling and one should be a low-risk creative workflow.
4. **Name actual reviewers** for each R2/R3 workflow; do not publish in these classes when reviewers are unavailable.
5. **Adopt the R0–R4 policy, blocked list and response/checklist boundary** before public forms ship.
6. **Choose content/code licences** and contributor terms after checking all source-specific restrictions.
7. **Set the indexability gate** to noindex Tier 2 by default until it passes unique-value and human-check criteria.
8. **Establish the authoring/review pipeline** manually for the first end-to-end workflows; build a schema authoring UI only after the schema has survived real use.
9. **Validate institutional willingness to pay** before building billing, account systems or premium packs.
10. **Complete name/domain/trademark checks** before full brand expenditure; no clearance is established in this PRD.
11. **Decide initial measurement policy** (no analytics or aggregate, privacy-reviewed analytics); never collect prompt text as telemetry.
12. **Set the first regional scope** (English plus aliases for selected locales, and India-specific packs only when official sources/reviewers are available).

## 21. Competitive positioning, monetisation and product extensions

### 21.1 Competitive landscape (directional, not a full market study)

| Category | Example alternatives | Typical strength | PromptLas opportunity / risk |
|---|---|---|---|
| Prompt libraries and communities | FlowGPT, PromptHero | Discovery, community examples and creative inspiration | PromptLas should not compete on raw template count; provide structured forms, reviewed subject knowledge and response checks |
| Browser extensions / in-chat prompt catalogues | AIPRM and similar extensions | Low-friction reuse inside a chat interface | PromptLas can remain cross-tool, no-login and local-first, but browser insertion is a possible later product feature |
| Prompt optimisers | PromptPerfect and other rewriters | Improve an existing prompt | Product status and availability change quickly; verify active products in a formal competitor review before citing them as live alternatives |
| Native AI chat interfaces | ChatGPT, Claude, Gemini and other assistants | Ask clarifying questions, reason over supplied context and generate outputs | This is PromptLas's largest substitution risk: a generic form is easy to reproduce natively |
| Vertical/domain tools | Calculators, code assistants, engineering software, finance platforms | Domain functions and data integration | PromptLas should complement these tools, not claim to replace calculations, market data or professional software |

**Positioning hypothesis:** “A guided, domain-aware prompt and question system that helps people specify the right inputs, inspect what they are asking, and check the answer afterwards.” Its defensible wedge is the reviewed Atlas, task-specific question banks, missing-input and answer checks, locale/standard/tool registries, and workflow connections. Validate the wedge with user tests; do not assert it is unique without a rigorous competitive audit. Competitor starting points: [AIPRM](https://app.aiprm.com/), [FlowGPT](https://flowgpt.ai/), [PromptHero](https://prompthero.com/faq), and general market review only as leads, not authoritative evidence. Feature/pricing data changes and must be checked before publication.

### 21.2 Monetisation and sustainability

**Do not gate basic prompt assembly behind login or payment in v1.** It aligns with the product promise and keeps infrastructure small. The likely scarce resource is reviewed domain content, not generation tokens.

Potential models, in priority order to test:
1. **Institutional licensing / sponsored deployment:** universities, training centres, professional bodies and colleges pay for a curated private or white-label collection, authoring/review workflows and usage reporting. This has clearer value than charging individuals for a copy button, but requires sales, support and maintenance.
2. **Premium reviewed workflow packs:** advanced, maintained question banks and workflow packs for teams/professionals. Only do this after demonstrating that review quality saves users time or reduces errors.
3. **API/embeds/registry distribution:** structured workflow IDs/schemas exposed to other apps, with paid service level or support if there is genuine usage.
4. **Clearly disclosed affiliate links or sponsorship:** must never alter ranking, workflow wording, guardrails or the recommendation of tools. Separate commercial placement visually and editorially.
5. **Pay-per-AI-run:** only after model execution exists and token/image costs, quotas, abuse mitigation and user willingness to pay are measured.

Avoid relying on display ads as the first business model: they weaken a high-trust technical workspace and can create incentives for mass low-value pages. No revenue projections are available; this PRD intentionally does not invent them. Use experiments with a small number of likely institutional buyers before building billing or accounts.

### 21.3 Target-tool profiles and model-specific outputs

The builder should support a default “general prompt” plus optional output-target profiles. The list should be data-driven and reviewed, potentially including ChatGPT, Claude, Gemini, Midjourney, FLUX-based interfaces, image editing tools, video/audio tools and code assistants. Do not promise exact compatibility with every version/model. Each profile needs a version/review date, formatting rules, supported capability notes, examples and test fixtures. If no profile is maintained, use a generic, model-agnostic prompt.

Do not add direct “Open in tool with prompt prefilled” buttons unless the provider supports a stable, documented mechanism. Otherwise Copy is the truthful path. Native model features evolve quickly, so target-tool support requires an owner and review cadence.

### 21.4 Before/after demonstration and prompt quality score

The landing page should contain a real, controlled demonstration: a vague prompt, the guided intake questions, the resulting structured prompt, and (where legally and operationally possible) the actual output from named models. State the model/version/date, input settings and what is being compared. Do not claim “better results” from a single cherry-picked example.

A score may indicate completeness and instruction structure; it must not claim ground-truth accuracy. A meaningful evaluation plan compares prompts across representative tasks, target models, repeated runs and blind human rubrics. Evaluate task completion, factuality/source quality, constraint adherence, edit burden and user satisfaction, not just aesthetic preference or a subjective prompt score.

### 21.5 Response checker

Include Response Checker as a planned differentiator. It takes a user-pasted model answer and applies the selected workflow's verification checklist. Tier 1 subject nodes should store “what to check” items. The checker may flag missing assumptions, unit errors, unsupported citations, stale standards or ignored constraints, but it must say “checks to perform / possible issue”, not “certified correct”. A checker powered only by a language model can also be wrong; higher-risk checks require deterministic calculation, primary-source verification or qualified review.

### 21.6 Local prompt library, variables, sharing, PWA, API and voice

- **Local prompt library:** opt-in, browser-only; save, tag, search, compare and delete prompts. Avoid syncing by default.
- **Prompt versioning/diff:** compare generated version and manual edits; show changes by section and never overwrite silently.
- **Variables/templates:** support user-defined placeholders such as `{{project_name}}` only with safe escaping and clear substitution review.
- **Shareable config link:** encode non-sensitive inputs in URL fragment, with a preview of what will be shared. Exclude images, credentials and marked-sensitive fields; long URLs should fall back to JSON download.
- **Browser extension/bookmarklet:** later only after privacy, permission, browser-store and prompt-injection review; not required for v1.
- **PWA/offline:** build only after the content chunking and cache strategy is defined. A large Atlas should not be pre-cached wholesale on low-storage phones.
- **Voice input:** later; treat transcribed words as uncertain input and allow user correction. Voice can accidentally capture sensitive information, so avoid background recording.
- **Embed widget / API / CLI / MCP:** treat as separate products with versioned schemas, usage terms, rate limits and compatibility policy. Do not expose private draft fields or any provider secrets.

### 21.7 Workflow authoring tool and content factory

The internal authoring tool is a high-value enabler, but build it after the workflow schema and first end-to-end manual workflows work. An authoring form should generate a schema draft and starter fixtures from fields such as node, intent, target user, required/optional inputs, conditional logic, prompt mapping, risk class, sources and review metadata.

LLM-assisted drafting can propose aliases, beginner questions, common mistakes, and pattern text. It must never self-approve sources, standards, risk classifications or safety claims. The pipeline needs an audit trail showing what AI drafted, what a human changed, what sources were checked and who approved the final version. The generator itself needs fixtures proving it creates valid schemas and does not duplicate near-identical workflows.

## 22. Full feasibility assessment and implementation economics

### 22.1 Overall finding

**Technically feasible as a staged product; not feasible as a complete, expert-reviewed “everything directory” for one person to publish rapidly.** The core client-side prompt engine is comparatively straightforward. A broad Atlas is feasible if most nodes are structured metadata, only a subset become deep forms, and public pages are gated on unique value. The critical constraint is the ongoing human work of defining question banks, verifying source context, reviewing high-risk tasks and refreshing content—not the React/Astro code.

### 22.2 Feasibility by capability

| Capability | Feasibility | Effort / dependency | Recommendation |
|---|---|---|---|
| SSG landing, domain pages, static workflows | High | Standard web build; editorial content remains the main variable | Build in Astro |
| Schema-driven forms and live prompt | High | Requires robust condition engine, typed schema and tests | Build now |
| Local copy/download/drafts | High | Browser API fallbacks and storage handling | Build in v1 |
| Taxonomy graph and aliases | High technically; medium operationally | Node IDs, duplicate resolution and governance | Start with curated node set; import seed data only with licence checks |
| Search by phrase / synonyms | High for alias/full-text search; medium for ambiguous intent | Static index and curated disambiguation | Pagefind + alias registry; add guided clarification |
| Natural-language semantic routing with LLM | Medium | Backend/provider, latency, cost, privacy, refusal and fallback design | Defer; v1 must be honest about rules-based search |
| Tier 2 generation at scale | High for drafts, medium for usable pages | Quality evaluation, duplication detection, review | Generate draft nodes; no automatic indexing |
| Tier 1 expert workflows | Medium | Domain design, examples, safety and reviewer time | Publish a demand-selected pilot set; expand by measured authoring and review capacity |
| R2/R3 packs | Low-to-medium without qualified reviewers | Reviewer access, liability and frequent updates | Delay or restrict to educational/organisational use |
| 300–3,000 subject nodes | Medium for metadata; low if interpreted as deep pages | Source licensing, canonicalisation, quality and SEO policy | Separate node count from workflow/page count |
| Response Checker | Medium | Needs per-node checklists; model-only checker can hallucinate | Start with deterministic checklist UX, not correctness certification |
| AI execution / image generation | Medium technically; medium/high ongoing cost and support | Worker, API secrets, usage/cost controls, privacy | Phase 4 after demand and budget proof |
| Multilingual labels / romanised aliases | Medium | Translation review, script/normalisation, technical vocabulary | Begin with search aliases and English prompt language selector; review translations |
| Monetisation | Unproven; institution sales plausible | Need buyers and value evidence, not code alone | Interview institutions before billing |
| Global compliance/regional packs | Medium-to-low at broad scale | Current regulations, jurisdiction experts, freshness process | Start with narrow regions and official links |

### 22.3 Effort and schedule assumptions

These are planning estimates for one capable full-time builder with AI coding assistance, not guaranteed delivery dates:
- **Technical skeleton and schema contracts:** roughly 1–2 weeks after the taxonomy/schema choices are frozen.
- **Working universal builder + search + prompt preview + copy/export:** roughly 2–4 additional weeks, depending on accessibility and conditional form complexity.
- **A small reviewed Tier 1 pilot set:** approximately 4–8 additional weeks if each is tightly scoped and reviewer access exists; the required time grows with workflow count and R2 technical workflows can take longer.
- **Public-ready launch (privacy, legal pages, testing, visual QA and CI):** approximately 6–12 weeks total is more credible than promising a polished universal directory in a few days. Parallel domain-review time is the main uncertainty.

Workload rule of thumb: a simple R0/R1 pattern can be drafted faster once the engine exists, but a deep R2 workflow may require several days to define fields, source assumptions, tests and review. With 50 deep workflows, even a modest 2–4 person-days per workflow implies 100–200 person-days before broad maintenance; review and rework can add materially. Therefore, “50 in three months” is a stretch target only if most are low-risk, patterns are highly reusable and reviewers are available. Keep quality gates fixed and adjust counts.

### 22.4 Hosting and search-index feasibility

Thousands of nodes can be stored as compact JSON, but thousands of **separately rendered, indexable pages** create costs in build time, static-file ceilings, duplicate content, review maintenance and search quality. Pagefind handles large static indexes with chunked downloads, but its generated assets still count toward host storage/file limits. Start with a file-count and bundle-size measurement in CI before scaling.

Cloudflare Pages Free has a 20,000-file/site cap; paid plans can support up to 100,000 under the documented setting. These figures can change; re-check the official limits before deployment decisions. More capacity does not justify publishing thin pages. Keep Tier 2 nodes as JSON/noindex until they pass the content gate.

### 22.5 Risks to schedule and success

1. Overbuilding the taxonomy before validating user journeys.
2. Draft generation creates many nominally different but functionally duplicate forms.
3. No supply of qualified civil/electrical/finance/legal/health reviewers.
4. Stale standards, laws, exam syllabi, tool versions or financial data.
5. Search pages fail to add unique value and are not indexed or are demoted.
6. User cannot distinguish prompt generation from actual output generation.
7. Future LLM features add cost and data-processing obligations without validated willingness to pay.
8. Domain name, trademark or licensing conflicts are discovered after launch.

### 22.6 Kill, pause, or narrow criteria

Pause expansion and fix the foundation if any of these occur:
- More than 10% of tested prompts omit an explicitly required field or contradict the user's choices.
- R2/R3 content is published without the required reviewer record.
- The content factory creates persistent duplicate/near-duplicate pages.
- Users cannot reliably tell the output is a prompt, not an executed result.
- The static build approaches the host file limit or time limit before reviewable content is available.
- No meaningful usage, qualified feedback or institutional interest is demonstrated after the first launch period.

The response is to improve the core workflow, not to increase the number of pages.

## 23. Sources, legal preparation and open decisions

### 23.1 Current technical and policy references

- Astro Islands: https://docs.astro.build/en/concepts/islands/
- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- Next.js Static Exports: https://nextjs.org/docs/app/guides/static-exports
- Pagefind: https://pagefind.app/docs/
- Cloudflare Pages Limits: https://developers.cloudflare.com/pages/platform/limits/
- Google Search Spam Policies, including scaled content abuse: https://developers.google.com/search/docs/essentials/spam-policies
- Core Web Vitals thresholds: https://developers.google.com/search/docs/appearance/core-web-vitals
- Wikidata licensing: https://www.wikidata.org/wiki/Wikidata:Licensing
- UNESCO ISCED-F 2013: https://uis.unesco.org/en/files/isced-fields-education-and-training-2013-en-pdf
- India National Classification of Occupations: https://www.dge.gov.in/national_classification_of_occupations
- India DPDP Act/Rules resources: https://www.meity.gov.in/documents/act-and-policies
- IP India trademark search starting point: https://ipindia.gov.in/trade-marks-before-you-apply-search-existing-trademarks

These links are starting points, not legal advice or proof that any specific tool, licence, standard or brand is cleared. Verify live at implementation time.

### 23.2 Pre-launch legal and brand checklist

- Verify the PromptLas name, domain and social handles; conduct relevant trademark searches, including India and intended international classes/markets. A search-engine result is not legal clearance.
- Have counsel review terms of use, privacy policy, disclaimer, content licence, contributor agreement, takedown/copyright contact and policy for high-risk content.
- Decide content licensing before public contribution or commercial premium packs.
- Confirm compliance obligations for the actual data-processing design. A no-login local-only builder reduces data collected but does not remove every legal obligation.
- Provide a truthful affiliation statement for named third-party tools, standards, exams and organisations.

### 23.3 Decisions that must be resolved before implementation

1. Approve Astro + React islands as default; only choose Next.js if a team/feature need justifies it.
2. Freeze the six-dimensional data model and Tier 1/2/3 distinction.
3. Select the first pilot set of deep workflows and name the reviewer for each R2 topic; do not treat the pilot set as the directory scope.
4. Select the initial risk/review policy and blocked workflow list.
5. Choose content/code licence and contributor terms.
6. Decide whether the initial analytics policy is no analytics or a privacy-aware aggregate tool; never capture prompt contents.
7. Set Tier 2 default to noindex until the unique-value check passes.
8. Decide how the authoring tool will be used after the first manually authored workflows prove the schema.
9. Validate demand and willingness to pay through interviews before building subscriptions, billing or broad AI execution.
10. Conduct PromptLas trademark/domain clearance before investing in full branding.

## 24. Requirement traceability matrix

This matrix connects the product promise to testable outcomes. P0 requirements are launch gates.

| ID | Requirement | Priority | Verification |
|---|---|---|---|
| PL-FR-001 | User can enter via task search, domain browse, output type or universal builder | P0 | Playwright navigation/search smoke tests |
| PL-ATLAS-001 | All 39 domain families are represented in canonical navigation/search with truthful coverage states | P0 | Graph coverage audit and route tests |
| PL-ATLAS-002 | Civil engineering taxonomy includes the named soil, structural, steel, concrete, materials, transportation, water, environmental, survey/BIM and construction branches | P0 | Taxonomy fixture audit |
| PL-ATLAS-003 | IT taxonomy includes software, QA/testing, DevOps/SRE, cloud, networking, data/analytics, UI/UX, cybersecurity, databases and AI/ML branches | P0 | Taxonomy fixture audit |
| PL-ATLAS-004 | Taxonomy presence is not counted or displayed as a completed specialist workflow | P0 | Coverage-state tests and content audit |
| PL-WF-001 | Published specialist workflow has a complete question bank, conditional logic, help, examples, unknown-answer path and test fixtures | P0 | Workflow completeness validator |
| PL-WF-002 | Each material field explains what it asks, why it matters and how it changes the prompt | P0 | Content/UX audit |
| PL-WF-003 | Every unsupported specialist branch has an honest guided-starter fallback or is not presented as a finished workflow | P0 | Route-state tests and manual review |
| PL-FR-002 | Published workflows render from validated schema data | P0 | Schema tests and route fixtures |
| PL-FR-003 | Form asks 3–5 core questions at a time by default | P0 | Component tests and manual usability review |
| PL-FR-004 | ELI5 help and examples are available for non-obvious visible fields | P0 | Workflow content audit |
| PL-FR-005 | Prompt preview updates correctly and omits empty optional values | P0 | Unit tests against expected prompt fixtures |
| PL-FR-006 | Critical missing inputs cannot be silently invented | P0 | Domain-specific negative fixtures |
| PL-FR-007 | Copy/download and clipboard-failure fallback work | P0 | Browser E2E tests |
| PL-FR-008 | Manual edits are not silently overwritten | P0 | E2E state-transition test |
| PL-FR-009 | Local drafts are opt-in, clearable and device-specific | P0 if included | Browser storage tests and user-facing notice |
| PL-FR-010 | Reference-image preview remains local in prompt-only mode | P0 | Network inspection and code review |
| PL-FR-011 | Atlas aliases route to canonical IDs without duplicate content | P0 | Alias resolution tests |
| PL-FR-012 | Related workflow links are valid and limited to relevant relations | P1 | Graph validation and link tests |
| PL-FR-013 | Target-tool profiles are clearly optional and do not promise unsupported integrations | P1 | Prompt fixtures and content review |
| PL-NFR-001 | No horizontal overflow at 320 CSS px or 200% zoom | P0 | Visual regression/manual QA |
| PL-NFR-002 | WCAG 2.2 AA review for contrast, keyboard, focus, labels and status announcements | P0 release gate | axe plus manual keyboard/screen-reader checks |
| PL-NFR-003 | Core Web Vitals targets: LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1 at p75 when measurable | P1 initial target | PageSpeed/field data after enough traffic |
| PL-NFR-004 | No prompt/image payload sent to a server in prompt-only mode | P0 | Network log inspection |
| PL-NFR-005 | Published workflow changes are versioned and test fixtures pass | P0 | CI pipeline |
| PL-CONT-001 | R2/R3 content has required review, source and date metadata | P0 for such content | Publication gate |
| PL-SEO-001 | Only unique-value pages are indexable; planned/seed content is noindex | P0 | Build metadata test and crawl check |
| PL-OPS-001 | Public feedback/report route works and has an owner | P1 | Route and intake check |

## 25. UX validation and user research plan

### 25.1 Before development is considered complete
Test with at least five people who have not authored the forms; include at least two non-technical users and one person who does not know prompt-engineering vocabulary. This is a minimum qualitative smoke test, not statistically representative research.

### 25.2 Tasks to test
1. Create a product-image prompt without using any camera terminology.
2. Find a soil-mechanics workflow from “my soil keeps settling”.
3. Build a prompt to deploy or troubleshoot a software service.
4. Create an exam-study prompt while leaving some optional fields blank.
5. Find the right software-testing workflow from “I need to know whether this feature works.”
6. Find a UI/UX or data-analysis route from an ordinary-language goal.
7. Identify whether PromptLas generated an answer or only prepared a prompt.
8. Use the page on a phone, copy the prompt and return to the workflow.

### 25.3 Observe, do not coach
Record task completion, hesitation points, misunderstood field labels, use of help, wrong route selection, time to first usable prompt and whether the user can explain what will happen after copy. Do not lead users to the correct choice during the first attempt. Fix comprehension failures in the wording and information architecture before adding more help text.

### 25.4 Usability release gates
- At least 4 of 5 participants should complete the common low-risk task without facilitator help.
- At least 4 of 5 should correctly state that the preview is a prompt, not an AI-generated answer.
- No participant should be able to trigger an apparently complete high-consequence calculation from invented critical values.
- Any critical accessibility blocker or misleading execution claim blocks release.
These are minimum qualitative release gates, not evidence of broad market fit.

## 26. Test strategy and release quality

- **Unit tests:** prompt assembly, condition visibility, default handling, field validation, aliases, graph traversal, risk policy, migration/import/export.
- **Component tests:** field help, disclosure controls, drawers, search filters, copy/download feedback, manual-edit conflict.
- **End-to-end tests:** landing → search → workflow → fill → prompt preview → copy/download → back navigation; desktop and mobile viewports.
- **Accessibility tests:** axe or equivalent automated testing plus manual keyboard, zoom, contrast and screen-reader review.
- **Visual regression:** capture key routes at 1440×900, 1024×768, 768×1024, 390×844 and 320×720; review expected differences rather than blindly updating snapshots.
- **Content QA:** validate links, aliases, IDs, required fields, standard identifiers, reviewer dates, risk class, indexability and duplicates.
- **Security/privacy review:** check network requests for prompt/image data, no client-side secrets, safe file handling, untrusted input assumptions and storage clearing.
- **Performance:** run production build, inspect bundle size, use Lighthouse/PageSpeed and field data when available.
- **Release candidate:** no known P0 defects, no dead CTA, no unreviewed R2/R3 workflow, no failing schema/prompt fixture, and privacy/terms statements match the code.

## 27. Content operations and ownership

Every published workflow has an owner role, a reviewer status and a review date. Roles can be held by one person in early development, but the distinctions must remain explicit:
- Product owner: scope, priority and acceptance criteria.
- Design/UX owner: task comprehension, layout, responsive behaviour and accessibility.
- Workflow author: question bank, fields, prompt mapping, examples and related links.
- Domain reviewer: verifies professional correctness at the required risk class.
- Release owner: build, tests, deployment, rollback and changelog.

Workflow lifecycle:
1. Candidate requested or created from an observed user need.
2. Priority score and risk class assigned.
3. Author drafts node/workflow content from original writing and approved references.
4. Schema and prompt fixture generated.
5. Automated checks run: schema, links, duplicated text, missing inputs, prohibited claims, standards metadata and alias collisions.
6. Human review based on risk.
7. Preview and mobile/accessibility checks.
8. Publication metadata set: version, review date, sources, indexability and status.
9. Monitor feedback and source changes.
10. Revise, deprecate or remove stale workflows; keep a changelog and redirect canonical URLs when warranted.

AI may draft content and tests but cannot self-approve R2/R3 workflows. A passed schema check does not prove technical correctness.

## 28. Operational, support and incident requirements

- Provide a visible “Report a confusing or incorrect workflow” action on workflow pages.
- The feedback form must ask for workflow ID, issue category and optional description. Warn users not to submit personal data, passwords, financial account details or confidential drawings/code.
- Feedback must go to a real destination before launch; a non-functional local form must not display a false “submitted” success. If no backend is ready, use a clear mailto/report link or public issue tracker and state what opens.
- Assign an owner for critical workflow reports and establish an emergency unpublish/de-index procedure.
- Keep previous versions of high-risk workflow schemas and prompt fixtures in version control.
- Use a rollback strategy for website deployments; preserve the previous known-good build.
- Time-sensitive pages must show a reviewed date and a stale-content warning once their review window expires.
- Document how to remove a compromised external provider, revoke credentials and stop an unsafe workflow in later integration phases.
- No uptime/SLO commitment is made until hosting, alerting and support ownership are configured.

## 29. Legal, privacy and commercial launch checklist

Before public release:
- [ ] Confirm PromptLas domain, trademark, company-name and relevant social/app handles. The PRD does not establish availability.
- [ ] Publish Terms, Privacy, Safety and Limitations, Accessibility and Contact/Feedback pages.
- [ ] Ensure privacy text matches actual network traffic, analytics, storage and upload behaviour.
- [ ] Add any required consent, processor/subprocessor and retention information before analytics or model providers are enabled.
- [ ] Define content/code licence, source-attribution policy, contributor terms and takedown/contact process.
- [ ] Confirm rights for image assets, icons, fonts, public taxonomy data, exam material, standards identifiers and user submissions.
- [ ] Review sponsored/affiliate link disclosures and separation between sponsorship and workflow recommendations before monetising.
- [ ] Add no-affiliation notes for named software tools, exams and providers where needed.
- [ ] High-consequence disclaimers are specific and reviewed; generic disclaimers do not compensate for a dangerous or misleading form.
- [ ] Establish the policy for age-related use and avoid collecting children's personal details.

## 30. Decisions and non-assumptions register

| Item | Current state | Required action / owner |
|---|---|---|
| PromptLas name/domain/trademark | Unverified | Product owner conducts clearance before branding lock |
| Production architecture | Astro + React islands recommended for content-heavy SSG; AI Studio prototype may be React | Confirm after prototype and deployment test |
| Initial Tier 1 pilot set | Proposed, not final | Product owner selects based on user need, interaction coverage and review access |
| R2/R3 domain reviewers | Not assumed available | Name reviewers before publishing professional workflows |
| Analytics | Not enabled by default | Decide only after privacy/data minimisation review |
| Monetisation | Hypotheses only | Interview institutions/users; do not build payments before evidence |
| AI execution provider | Deferred | Decide after cost/privacy/abuse test; server-side only |
| Multilingual UI | Later phase; aliases first | Choose language priorities with real usage evidence |
| Search indexability thresholds | Policy defined; numeric threshold to be calibrated | Test pages and inspect search/user data |
| PWA/offline | Later candidate | Validate demand and offline requirements |
| Prompt quality score | Rubric must be calibrated; avoid unsupported percentages | Use transparent checks first, add a score only after validation |

## 31. PRD completeness cross-check

This v1.5 cross-check includes the domain breadth/depth distinction and the question-bank contract; the existing v1.4 implementation and UI requirements remain in force unless explicitly superseded above.

| Conventional PRD area | Status in v1.4 |
|---|---|
| Problem statement and positioning | Specified as hypotheses pending user research |
| Goals and non-goals | Specified |
| Personas, jobs and user stories | Specified |
| Taxonomy and information architecture | Specified |
| User journeys and interaction rules | Specified |
| Page-by-page layout and responsive placement | Specified |
| Design tokens and component states | Specified |
| Functional requirements and priorities | Specified with traceability IDs |
| Data model and prompt assembly | Specified |
| Safety, privacy and legal preparation | Specified; legal clearance remains required |
| Content governance and review | Specified |
| SEO and indexability | Specified |
| Performance and reliability | Targets specified; not yet measured |
| Analytics and success metrics | Specified with privacy limits |
| Testing and acceptance criteria | Specified |
| Release, rollback and support | Specified |
| Monetisation and competition | Directional hypotheses, not validated market research |
| Budget and exact delivery dates | Not asserted; require scope/team/vendor decisions |
| Trademark/domain availability | Explicitly unresolved |
| Market demand and product-market fit | Not established; user research required |

## Appendix A — Example of the intended live prompt behaviour

**Selected workflow:** Photography → Product photograph  
**User answers:** “A handmade ceramic mug; warm morning light; clean editorial style; pale stone surface; 4:5 portrait; moderately blurred background.”

**Prompt preview should assemble into:**

> Create a polished editorial product photograph of a handmade ceramic mug on a pale stone surface. Use warm, soft morning window light with natural shadows and a restrained, tactile colour palette. Frame the mug as the clear primary subject in a 4:5 portrait composition, with a moderately soft background that does not compete with the product. Preserve believable ceramic texture, glaze variation and physical proportions. Keep the scene uncluttered; do not add labels, logos, text, extra handles, or decorative objects unless requested. Produce one finished still image suitable for a product/social post.
>
> Camera-style direction: natural 50 mm lens character, moderate depth of field, realistic perspective. These are visual cues for an image model, not guaranteed physical camera settings.

As the user changes “moderately blurred” to “mostly sharp,” the corresponding focus/depth-of-field instruction changes immediately in the preview.

## Appendix B — Reference file interpretation

The attached **AdvertFloz Prompt Studio v5.1 — Product-Adaptive Framework** is treated as the primary UX reference. Relevant patterns to carry forward:
- Form on one side and a persistent generated-prompt panel on the other.
- Beginner-friendly help under labels.
- Advanced options behind expandable sections.
- Clear copy and Markdown-download actions.
- Contextual modes rather than one giant form.
- Honest limitations: prompt generation does not itself guarantee web research, image generation, campaign execution or other external actions.
- Evidence/accuracy guardrails, explicit context isolation, and distinction between prompt QA and actual output QA.

PromptLas should reuse these interaction principles, not copy AdvertFloz's campaign-specific content model, campaign CSV requirements, or exact visual styling.

## Appendix C — Taxonomy and accessibility reference sources

These sources are reference frameworks to help check coverage. They do not dictate PromptLas's exact navigation and are not intended as a complete list of tasks.

- **UNESCO Institute for Statistics — ISCED Fields of Education and Training 2013 (ISCED-F 2013):** broad, narrow and detailed fields useful for ensuring cross-disciplinary coverage across education, arts/humanities, social sciences, business/law, natural sciences, ICT, engineering/manufacturing/construction, agriculture/veterinary, health/welfare and services.  
  https://uis.unesco.org/sites/default/files/documents/isced-fields-of-education-and-training-2013-en.pdf
- **Government of India, Directorate General of Employment — National Classification of Occupations (NCO):** an India-specific occupation-classification reference that can help localise job/role search and terminology.  
  https://www.dge.gov.in/national_classification_of_occupations
- **U.S. National Center for Science and Engineering Statistics — Survey of Earned Doctorates discipline taxonomy:** an example of an engineering and research-discipline breakdown that includes civil, electrical/electronics/communications, mechanical, environmental, geotechnical/geoenvironmental, structural and other specialisations. It is a reference cross-check, not a global taxonomy.  
  https://ncses.nsf.gov/pubs/nsf20301/assets/technical-notes/tables/nsf20301-taba-005.pdf
- **W3C — Web Content Accessibility Guidelines (WCAG) 2.2:** accessibility requirements for interface controls, keyboard access, focus, text alternatives and robust interaction.  
  https://www.w3.org/TR/wcag/

## Appendix D — Current technical references and evidence limits

The following official sources support selected implementation constraints. Review dates and relevant product behaviour can change; check the source again when implementation begins.

- Google AI Studio Build mode: web-app generation, React frontend, Node.js runtime, GitHub sync, ZIP export and deployment options. https://ai.google.dev/gemini-api/docs/aistudio-build-mode
- Astro content collections: schema-validated structured content and build-time route generation. https://docs.astro.build/en/guides/content-collections/ and https://docs.astro.build/en/reference/routing-reference/
- W3C WCAG 2.2: testable accessibility requirements, including contrast, resizing, keyboard operation and target size. https://www.w3.org/TR/WCAG22/
- Google Search Central spam policies: scaled content abuse and requirements for useful, non-manipulative pages. https://developers.google.com/search/docs/essentials/spam-policies
- Google Core Web Vitals: good experience thresholds currently include LCP <= 2.5 seconds, INP <= 200 milliseconds and CLS <= 0.1 at the 75th percentile. https://developers.google.com/search/docs/appearance/core-web-vitals

These sources do not validate PromptLas's market demand, name availability, user comprehension, SEO performance, or product-market fit. Those remain open empirical questions.

## Appendix E — Example connected journeys

**1. Civil engineer — soil settlement.** Search “soil settlement over time” and select Civil → Geotechnical → Soil Mechanics → Consolidation/Settlement. Choose concept learning, interpretation of supplied data, a calculation brief or a report. Ask for only the relevant soil profile, layer thickness, test results, groundwater/context, units and method/standard; surface missing critical inputs and link to foundation options or site-investigation forms.

**2. IT engineer — Kubernetes deployment.** Search “deploy app with Kubernetes”. Ask for target cluster/cloud, application/runtime, image registry, exposure, configuration/secrets, health checks, resource constraints and release/rollback. Beginner mode explains the choices; expert mode reveals Helm/IaC/GitOps details. Include validation, externalised secrets and rollback checks.

**3. Founder — startup idea.** Ask about the customer/problem, evidence, market, stage and constraints. Suggest the sequence customer discovery → validation → unit economics → MVP/PRD → go-to-market → measurement. Carry context forward only with user approval and label assumptions distinctly from evidence.

**4. Finance user — stock research.** Ask whether the user wants education, company research, a valuation framework or analysis of supplied data. Capture market/ticker, date range, data sources, method, benchmark, horizon and output. Never imply live data access that is not integrated or present the output as a guaranteed/personalised buy/sell instruction.

**5. Photographer — product visual.** Ask product, use, setting, lighting, composition and ratio, then distinguish a real camera-shoot plan from AI image generation. Advanced mode may expose aperture, shutter, ISO and focal length. For edits, collect both a change list and a preserve list; label camera values as style cues when the output is AI-generated.
