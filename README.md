<div align="center">

# PromptLaz Prompt Studio

**Know what to ask. Build better prompts.**

🌐 **Live:** [promptlaz.pages.dev](https://promptlaz.pages.dev/)

</div>

## What is PromptLaz?

PromptLaz is a **cross-disciplinary, beginner-friendly prompt builder** that helps anyone—even those with zero domain knowledge—craft expert-level prompts for ChatGPT, Claude, Perplexity, DeepSeek and other LLMs.

Instead of staring at a blank text box, users pick from **guided dropdowns and forms** that translate complex professional concepts into plain English. Every field comes with ELI5 explanations, technical term labels, and 1-click recipe presets.

## Coverage

| Metric | Count |
|---|---|
| Domain families | 39 |
| Subject branches | 211 |
| Situation phrases | 143 |
| Detailed workflow schemas | 30 |
| 1-click recipes | 70+ |
| Sample task suggestions | 801 |

### Featured Workflow Domains

- 📸 **Photography** — Aperture, lens, lighting, sensor format
- 🎬 **Video & Cinematography** — Frame rate, shutter angle, camera movement, codec
- 🏗️ **Civil & Structural** — Soil compaction, RC beam checks, concrete mix QA
- ☸️ **DevOps & K8s** — Crashing pods, manifests, incident triage
- 💻 **Software QA** — Playwright, Jest, test strategy
- 📈 **Finance & Valuation** — DCF, equity research, cash flow
- 🚀 **Startup & MVP** — PRD spec, market validation
- 🎓 **Exam Tutoring** — Active recall, Socratic method
- 🌐 **Universal Builder** — Any domain, any task

## Tech Stack

- **React 19** + TypeScript
- **Vite 8** (Rolldown bundler)
- **Lucide React** icons
- Vanilla CSS (no Tailwind)
- Local-first: no backend, no API keys required to build prompts

## Run Locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The app starts at `http://localhost:3000/`.

## Build for Production

```bash
npm run build
```

Output is in `dist/`. Deploy to Cloudflare Pages, Vercel, Netlify or any static host.

## Project Structure

```
src/
├── components/     # React UI components (Studio, Atlas, Picker, etc.)
├── data/
│   ├── taxonomy.ts            # 39 domain families × 211 branches
│   ├── workflows.ts           # Core workflow schemas
│   ├── workflows-founder.ts   # Founder Playbook workflows
│   └── workflows-encyclopedia.ts  # Encyclopedia workflows
├── types/          # TypeScript interfaces
├── utils/
│   ├── promptBuilder.ts   # Prompt assembly engine
│   └── fuzzySearch.ts     # Situation phrase matching (143 phrases)
└── context/        # Theme provider
```

## License

Proprietary — © PromptLaz 2026
