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
- `/docs/sims/` - 8 interactive MicroSims using p5.js (each has `index.md`, `main.html`, `*.js`)
- `/docs/learning-graph/` - 200-concept dependency graph with vis-network.js viewer

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
Questions use checkbox syntax with collapsible answers:
```markdown
- [ ] Wrong answer
- [x] Correct answer
- [ ] Wrong answer

??? success "Answer"
    Explanation of correct answer.
```

### MicroSim Embedding
Simulations are embedded via iframe in their `index.md`:
```html
<iframe src="main.html" height="600px" width="100%"></iframe>
```

### Admonitions
Use MkDocs Material admonitions: `!!! tip`, `!!! info`, `!!! warning`, `??? success` (collapsible)
