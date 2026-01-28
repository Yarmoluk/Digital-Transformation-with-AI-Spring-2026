# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **MkDocs Material** educational textbook for SEIS 666 (Digital Transformation 2.0 with Generative AI) at the University of St. Thomas. The site combines static documentation with interactive p5.js simulations and a vis-network.js learning graph visualization.

## Commands

```bash
# Build and serve locally
mkdocs serve              # Local preview at http://localhost:8000

# Build static site
mkdocs build              # Generates /site directory

# Deploy to GitHub Pages
mkdocs gh-deploy          # Deploys to GitHub Pages

# Learning graph utilities
python3 docs/learning-graph/csv-to-json.py <input.csv> <output.json>    # Convert CSV to vis.js JSON
python3 docs/learning-graph/analyze-graph.py                             # Analyze graph metrics
```

## Architecture

### Content Structure
- `/docs/chapters/` - 10 course chapters, each in its own directory with `index.md`
- `/docs/quizzes/` - Self-assessment quizzes (one per chapter) with collapsible answers
- `/docs/sims/` - 33 interactive MicroSims using p5.js, Chart.js, and vis-network.js (each has `index.md`, `main.html`, `*.js`)
- `/docs/learning-graph/` - 200-concept dependency graph with vis-network.js viewer
- `/plugins/` - Custom MkDocs plugins including social media image override

### Configuration
- `mkdocs.yml` - Site navigation, theme settings, markdown extensions
- `docs/css/extra.css` - Custom teal/purple tech theme styling
- `docs/learning-graph/color-config.json` - Taxonomy color definitions

### Data Files
- `docs/learning-graph/learning-graph.json` - Main concept graph (200 nodes, 294 edges)
- `docs/learning-graph/learning-graph.csv` - Editable source for concepts
- `docs/sims/*/metadata.json` - Educational metadata for each simulation

## Conventions

### Markdown Frontmatter
All content files use YAML frontmatter:
```yaml
---
title: Chapter Title
description: Brief description
generated_by: claude skill chapter-content-generator
date: 2026-01-14
version: 0.03
quality_score: 0.85
---
```

### Taxonomy IDs
Concepts use taxonomy codes: `FOUND`, `ARCH`, `PLAT`, `PROMPT`, `CUSTOM`, `API`, `MULTI`, `GOV`, `ETHICS`, `WORK`, `BIZ`, `ADV`

### Quiz Format
Questions use numbered lists with upper-alpha CSS styling and collapsible answers:
```markdown
<div class="upper-alpha" markdown>
**Question 1: What is the question?**

1. Wrong answer
2. Correct answer
3. Wrong answer
4. Wrong answer
</div>

??? success "Answer"
    B) Correct answer - Explanation of why this is correct.
```

The `upper-alpha` CSS class converts numbered lists to A, B, C, D format for display.

### MicroSim Embedding
Simulations are embedded via iframe in their `index.md`:
```html
<iframe src="main.html" height="600px" width="100%"></iframe>
```

### Admonitions
Use MkDocs Material admonitions: `!!! tip`, `!!! info`, `!!! warning`, `??? success` (collapsible)

### Social Media Images
MicroSims support custom social media preview images via frontmatter:
```yaml
---
title: MicroSim Title
image: sims/microsim-name/thumbnail.png
social:
   cards: false
---
```

The `social_override` plugin in `/plugins/` replaces auto-generated social cards with custom images when the `image` frontmatter is present.

## Recent Changes (January 2026)

### MicroSim Expansion
- Copied 27 MicroSims from tracking-ai-course repository
- Total MicroSims increased from 8 to 33
- Added MicroSims covering: AI benchmarks, capability maturity models, technology adoption, neural networks, tokenization, vector similarity, self-attention, and more

### Navigation Restructuring
- Chapter quizzes now nested under each chapter with "Content" and "Quiz" sub-items
- All 33 MicroSims added to navigation in alphabetical order
- Updated `docs/sims/index.md` to use mkdocs-material grid format with cards

### Quiz Format Standardization
- Converted all quizzes from checkbox format (`- [ ]`, `- [x]`) to numbered lists
- Added `<div class="upper-alpha" markdown>` wrappers for CSS letter formatting
- Removed letter prefixes (A), B), etc.) from answer options (CSS handles this)
- Added 5-question self-assessment quizzes to all 33 MicroSim index.md files

### Social Media Plugin
- Installed custom `social_override` plugin for per-page og:image support
- Added `image:` frontmatter to all MicroSim files with PNG thumbnails
- Plugin located at `/plugins/social_override.py`

### Files Modified
- `mkdocs.yml` - Navigation structure, plugin configuration
- `docs/sims/index.md` - Grid layout with MicroSim cards
- `docs/sims/*/index.md` - All 33 MicroSims with quizzes and image frontmatter
- `docs/quizzes/*.md` - All chapter quizzes reformatted
- `docs/css/extra.css` - Contains `.upper-alpha` list styling
- `docs/overrides/main.html` - Social media meta tag templates
