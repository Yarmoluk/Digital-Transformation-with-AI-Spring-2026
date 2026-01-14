# Learning Graph

The learning graph is a directed acyclic graph (DAG) that maps the relationships between 200 concepts in the **SEIS 666: Digital Transformation 2.0 with Generative AI** course.

## Graph Statistics

| Metric | Value |
|--------|-------|
| Total Concepts | 200 |
| Foundational Concepts | 4 |
| Total Dependencies | 294 |
| Taxonomy Categories | 12 |
| Maximum Chain Length | 14 |
| Average Dependencies | 1.50 |

## Foundational Concepts

These concepts have no prerequisites and serve as entry points:

1. **Digital Transformation** - Core concept for the entire course
2. **Artificial Intelligence** - Foundation for all AI topics
3. **Token** - Fundamental unit for LLM operations
4. **API Fundamentals** - Basis for technical integration

## Taxonomy Categories

| Category | TaxonomyID | Color | Count |
|----------|------------|-------|-------|
| Foundation Concepts | FOUND | LightCoral | 15 |
| LLM Architecture | ARCH | PeachPuff | 19 |
| AI Platforms | PLAT | LightYellow | 20 |
| Prompt Engineering | PROMPT | Honeydew | 18 |
| Custom Solutions | CUSTOM | PaleGreen | 17 |
| API Integration | API | PaleTurquoise | 17 |
| Multimodal AI | MULTI | PowderBlue | 17 |
| Governance | GOV | Lavender | 13 |
| Ethics | ETHICS | LavenderBlush | 23 |
| Workforce | WORK | Thistle | 13 |
| Business Applications | BIZ | MistyRose | 19 |
| Advanced Topics | ADV | Plum | 13 |

## Interactive Viewer

*The interactive vis-network viewer can be added using the `installer` skill with the `learning-graph-viewer` option.*

## Related Documents

- [Course Description Assessment](course-description-assessment.md) - Quality analysis of the course description
- [Concept List](concept-list.md) - Complete list of 200 concepts
- [Quality Metrics](quality-metrics.md) - Graph structure validation
- [Concept Taxonomy](concept-taxonomy.md) - Category definitions
- [Taxonomy Distribution](taxonomy-distribution-report.md) - Distribution analysis

## Files in This Directory

| File | Description |
|------|-------------|
| `learning-graph.csv` | Source data with dependencies and taxonomy |
| `learning-graph.json` | vis-network.js format for visualization |
| `metadata.json` | Graph metadata (title, creator, etc.) |
| `analyze-graph.py` | Quality validation script |
| `csv-to-json.py` | CSV to JSON conversion script |
| `taxonomy-distribution.py` | Distribution analysis script |

## Next Steps

1. Add interactive viewer with `installer` skill
2. Generate chapter structure with `book-chapter-generator`
3. Create chapter content with `chapter-content-generator`
