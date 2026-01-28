# SEIS 666: Digital Transformation 2.0 with Generative AI

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://yarmoluk.github.io/Digital-Transformation-with-AI-Spring-2026/)
[![GitHub](https://img.shields.io/badge/GitHub-Yarmoluk%2FDigital--Transformation--with--AI--Spring--2026-blue?logo=github)](https://github.com/Yarmoluk/Digital-Transformation-with-AI-Spring-2026)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![Claude Skills](https://img.shields.io/badge/Uses-Claude%20Skills-DA7857?logo=anthropic)](https://github.com/dmccreary/claude-skills)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![vis-network](https://img.shields.io/badge/vis--network-1976D2?logo=javascript&logoColor=white)](https://visjs.github.io/vis-network/docs/network/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive textbook at: [https://yarmoluk.github.io/Digital-Transformation-with-AI-Spring-2026/](https://yarmoluk.github.io/Digital-Transformation-with-AI-Spring-2026/)

## Overview

This is an interactive, AI-generated intelligent textbook for **SEIS 666: Digital Transformation 2.0 with Generative AI** at the University of St. Thomas. The course explores how generative AI technologies are reshaping digital transformation, business models, and workforce dynamics.

Built using MkDocs with the Material theme, this textbook incorporates learning graphs, concept dependencies, interactive MicroSims (p5.js and Chart.js simulations), and AI-assisted content generation. It follows Bloom's Taxonomy (2001 revision) for learning outcomes and uses a 200-concept dependency graph to ensure proper prerequisite sequencing.

Whether you're a graduate student exploring AI-driven business transformation or a professional seeking to understand how generative AI is changing the enterprise landscape, this textbook provides comprehensive coverage with hands-on interactive elements that make complex concepts accessible and engaging.

## Site Status and Metrics

| Metric | Count |
|--------|-------|
| Concepts in Learning Graph | 200 |
| Chapters | 11 |
| Markdown Files | 80 |
| Total Words | 106,053 |
| MicroSims | 33 |
| Glossary Terms | 223 |
| FAQ Questions | 59 |
| Chapter Quiz Questions | 127 |
| MicroSim Quiz Questions | 182 |
| Images | 41 |

**Completion Status:** Content generation complete with full chapter coverage, 33 interactive simulations, and comprehensive assessments including quizzes for all chapters and MicroSims.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Yarmoluk/Digital-Transformation-with-AI-Spring-2026.git
cd Digital-Transformation-with-AI-Spring-2026
```

### Install Dependencies

This project uses MkDocs with the Material theme:

```bash
pip install mkdocs
pip install mkdocs-material
```

### Build and Serve Locally

Build the site:

```bash
mkdocs build
```

Serve locally for development (with live reload):

```bash
mkdocs serve
```

Open your browser to `http://localhost:8000`

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This will build the site and push it to the `gh-pages` branch.

### Using the Book

**Navigation:**
- Use the left sidebar to browse chapters
- Click on the search icon to search all content
- Each chapter includes quizzes and practice exercises

**Interactive MicroSims:**
- Found in the "MicroSims" section with 33 interactive visualizations
- Categories include: AI Capability Assessment, LLM Architecture, Strategic Frameworks, Technology Trends
- Each simulation runs standalone in your browser
- Adjust parameters with sliders and controls
- All MicroSims include 5-question self-assessment quizzes

**Customization:**
- Edit markdown files in `docs/` to modify content
- Modify `mkdocs.yml` to change site structure
- Add your own MicroSims in `docs/sims/`
- Customize theme in `docs/css/extra.css`

## Repository Structure

```
Digital-Transformation-with-AI-Spring-2026/
├── docs/                              # MkDocs documentation source
│   ├── chapters/                      # 11 course chapters
│   │   ├── 01-digital-transformation-ai-foundations/
│   │   ├── 01b-tracking-ai/           # AI progress tracking & trends
│   │   ├── 02-llm-architecture/
│   │   └── ...
│   ├── sims/                          # 33 interactive MicroSims
│   │   ├── ai-benchmarks-timeline/    # AI benchmark evolution
│   │   ├── ai-cmm/                    # AI Capability Maturity Model
│   │   ├── neural-network-visualization/
│   │   ├── self-attention-visualization/
│   │   ├── tokenization-process/
│   │   ├── vector-similarity/
│   │   └── ...
│   ├── quizzes/                       # Chapter quizzes (11 total)
│   ├── learning-graph/                # 200-concept dependency graph
│   │   ├── learning-graph.csv         # Editable concept data
│   │   ├── learning-graph.json        # vis-network format
│   │   └── quality-metrics.md
│   ├── overrides/                     # MkDocs theme overrides
│   ├── glossary.md                    # 223 ISO 11179-compliant terms
│   ├── faq.md                         # 59 frequently asked questions
│   └── references.md                  # Curated references
├── plugins/                           # Custom MkDocs plugins
│   └── social_override.py             # Custom social media images
├── mkdocs.yml                         # MkDocs configuration
├── CLAUDE.md                          # Claude Code guidance
└── README.md                          # This file
```

## Chapters

1. **Digital Transformation and AI Foundations** - Core concepts of digital transformation and AI
1b. **Tracking AI Progress and Trends** - Measuring, benchmarking, and projecting AI capabilities (METR research, Moore's Law, AI benchmarks)
2. **Large Language Model Architecture** - How LLMs work (transformers, attention, embeddings)
3. **AI Platform Landscape** - Overview of major AI platforms and providers
4. **Prompt Engineering Fundamentals** - Techniques for effective AI interaction
5. **Custom GPTs, Agents, and RAG Systems** - Building specialized AI applications
6. **LLM API Integration** - Programmatic access to AI models
7. **Multimodal AI** - Vision, audio, and cross-modal AI capabilities
8. **AI Governance, Ethics, and Responsible AI** - Policy, regulation, and ethical frameworks
9. **Future of Work and Workforce Transformation** - AI's impact on jobs and skills
10. **Business Applications and AI Transformation** - Enterprise AI use cases and strategy

## MicroSims Highlights

The textbook includes 33 interactive MicroSims covering:

**AI Capability & Strategy:**
- AI Capability Maturity Model
- AI Strategy Assessment
- AI Use Case Prioritization
- Digital Maturity Quadrant
- SWOT Analysis
- Porter's Five Forces

**LLM Architecture & Concepts:**
- Neural Network Visualization
- Self-Attention Visualization
- Tokenization Process
- Tokenizer Comparison
- Vector Similarity
- Autoregressive Model

**Technology Trends:**
- AI Benchmarks Timeline
- AI Doubling Rate
- Moore's Law
- Power Wall
- Projecting AI to 2030
- Deep Learning Timeline

**Business Frameworks:**
- Technology Adoption Curve
- Hype Cycle
- Human-AI Task Allocation
- Four AI Futures

## Reporting Issues

Found a bug, typo, or have a suggestion for improvement? Please report it:

[GitHub Issues](https://github.com/Yarmoluk/Digital-Transformation-with-AI-Spring-2026/issues)

When reporting issues, please include:

- Description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/environment details (for MicroSims)

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**

- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit with a link to the original
- **NonCommercial** — No commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

## Acknowledgements

This project is built on the shoulders of giants in the open source community:

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Beautiful, responsive theme
- **[p5.js](https://p5js.org/)** - Creative coding library from NYU ITP
- **[Chart.js](https://www.chartjs.org/)** - Flexible JavaScript charting library
- **[vis-network](https://visjs.org/)** - Network visualization library for learning graphs
- **[Claude AI](https://claude.ai)** by Anthropic - AI-assisted content generation
- **[Claude Skills](https://github.com/dmccreary/claude-skills)** by Dan McCreary - Intelligent textbook generation framework
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for open source projects

Special thanks to the University of St. Thomas and the educators who contribute to making educational resources accessible and interactive.

## Contact

**Daniel Yarmoluk**

- GitHub: [@Yarmoluk](https://github.com/Yarmoluk)

Questions, suggestions, or collaboration opportunities? Feel free to open an issue on GitHub.

---

*Last updated: January 2026*
