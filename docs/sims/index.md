---
title: Interactive MicroSims
description: A collection of interactive educational MicroSims for Digital Transformation with AI covering AI progress, strategy frameworks, and technical concepts
hide:
    - toc
---
# Interactive MicroSims

This section contains interactive MicroSims covering topics in Digital Transformation with Generative AI including AI progress tracking, strategy frameworks, technology adoption, and technical concepts. Each simulation allows students to explore concepts through hands-on experimentation and visualization.

<div class="grid cards" markdown>

- **[AI Benchmarks Timeline](./ai-benchmarks-timeline/index.md)**

    ![AI Benchmarks Timeline](./ai-benchmarks-timeline/thumbnail.png)
    Interactive timeline showing key AI benchmarks and when they were introduced.

- **[AI Capability Maturity Model](./ai-cmm/index.md)**

    ![AI Capability Maturity Model](./ai-cmm/ai-cmm.png)
    Interactive visualization of five AI maturity levels from Ad Hoc to Transformative.

- **[AI Causes](./ai-causes/index.md)**

    ![AI Causes](./ai-causes/ai-causes.png)
    A causal loop diagram showing how AI feedback is accelerating AI progress.

- **[AI Doubling Rate](./ai-doubling-rate/index.md)**

    ![AI Doubling Rate](./ai-doubling-rate/ai-doubling-rate.png)
    Analysis of AI task completion doubling rate based on METR research showing exponential growth.

- **[AI Flywheel](./ai-flywheel/index.md)**

    ![AI Flywheel](./ai-flywheel/ai-flywheel.png)
    An infographic MicroSim of the AI Flywheel causal loop showing reinforcing feedback.

- **[AI Pace Accelerating](./ai-pace-accelerating/index.md)**

    ![AI Pace Accelerating](./ai-pace-accelerating/thumbnail.png)
    Interactive visualization demonstrating how AI capabilities are accelerating.

- **[AI Strategy Assessment](./ai-strategy-assessment/index.md)**

    Interactive radar chart tool for assessing AI strategy document completeness across ten dimensions.

- **[AI Task Horizons](./ai-task-horizons/index.md)**

    ![AI Task Horizons](./ai-task-horizons/thumbnail.png)
    Interactive visualization showing how long AI models can work on tasks based on METR research.

- **[AI Use Case Prioritization](./ai-use-case-prioritization/index.md)**

    Interactive 2x2 matrix for prioritizing AI initiatives based on business value and complexity.

- **[Autoregressive Model](./autoregressive/index.md)**

    ![Autoregressive Model](./autoregressive/thumbnail.png)
    Interactive simulation showing how language models predict the next token using neural networks.

- **[Bloom's Taxonomy](./blooms-taxonomy/index.md)**

    ![Bloom's Taxonomy](./blooms-taxonomy/blooms-taxonomy.png)
    Infographic with infobox hovers showing layers of Bloom's Taxonomy cognitive levels.

- **[Book Generation Workflow](./book-gen-workflow/index.md)**

    ![Book Generation Workflow](./book-gen-workflow/book-gen-workflow.png)
    Interactive infographic showing the workflow for generating intelligent textbooks.

- **[Book Levels](./book-levels/index.md)**

    ![Book Levels](./book-levels/thumbnail.png)
    Interactive visualization of five levels of intelligent textbooks from static to AI-driven.

- **[Digital Maturity Quadrant](./digital-maturity-quadrant/index.md)**

    Interactive 2x2 matrix for assessing organizational digital maturity archetypes.

- **[Four AI Futures](./four-futures/index.md)**

    ![Four AI Futures](./four-futures/four-futures.png)
    Interactive chart showing four possible scenarios for AI development growth patterns.

- **[Human-AI Task Allocation](./human-ai-task-allocation/index.md)**

    Interactive simulation for experimenting with human-AI task allocation strategies.

- **[Hype Cycle](./hype-cycle/index.md)**

    ![Hype Cycle](./hype-cycle/hype-cycle.png)
    Interactive visualization of the Gartner Technology Hype Cycle phases.

- **[Idea Funnel](./idea-funnel/index.md)**

    ![Idea Funnel](./idea-funnel/thumbnail.png)
    Interactive infographic showing the steps in managing a GenAI Center of Excellence.

- **[Learning Graph](./learning-graph/index.md)**

    ![Learning Graph](./learning-graph/learning-graph.png)
    Interactive visualization of concept dependencies in the curriculum as a network graph.

- **[LM Arena Timeline](./lm-arena-timeline/index.md)**

    ![LM Arena Timeline](./lm-arena-timeline/thumbnail.png)
    Interactive visualization of LMArena benchmark rankings for AI models over time.

- **[MMLU Timeline](./mmlu-timeline/index.md)**

    ![MMLU Timeline](./mmlu-timeline/thumbnail.png)
    Interactive visualization showing AI model progress on the MMLU benchmark.

- **[Moore's Law](./moores-law/index.md)**

    ![Moore's Law](./moores-law/moores-law.png)
    Interactive infographic showing transistor growth with linear and log scale views.

- **[Neural Network Visualization](./neural-network-visualization/index.md)**

    Interactive visualization of how neural networks process information through layers.

- **[Porter's Five Forces](./porters-five-forces/index.md)**

    ![Porter's Five Forces](./porters-five-forces/thumbnail.png)
    Interactive visualization of Porter's Five Forces competitive analysis framework.

- **[Power Wall](./power-wall/index.md)**

    ![Power Wall](./power-wall/thumbnail.png)
    Interactive visualization showing CPU clock speed evolution and the Power Wall phenomenon.

- **[Projecting AI to 2030](./projecting-ai/index.md)**

    ![Projecting AI](./projecting-ai/projecting-ai.png)
    Interactive visualization showing exponential growth of AI task completion to 2030.

- **[Self-Attention Visualization](./self-attention-visualization/index.md)**

    Interactive visualization of how tokens attend to other tokens in transformer self-attention.

- **[SWOT Analysis](./swot/index.md)**

    ![SWOT Analysis](./swot/thumbnail.png)
    Interactive SWOT analysis diagram for AI strategy development with hover descriptions.

- **[Technology Adoption Curve](./technology-adoption/index.md)**

    ![Technology Adoption Curve](./technology-adoption/technology-adoption.png)
    Interactive infographic visualizing the Technology Adoption Lifecycle Curve.

- **[Deep Learning Timeline](./timeline/index.md)**

    ![Deep Learning Timeline](./timeline/thumbnail.png)
    Interactive timeline showing over 100 key events in Deep Learning history from 1935 to present.

- **[Tokenization Process](./tokenization-process/index.md)**

    Interactive demonstration of how text is converted to tokens with cost implications.

- **[Tokenizer](./tokenizer/index.md)**

    ![Tokenizer](./tokenizer/thumbnail.png)
    Interactive visualization demonstrating how text is tokenized for language model processing.

- **[Vector Similarity](./vector-similarity/index.md)**

    Interactive visualization of semantic similarity in word embedding space.

</div>

## Libraries Used

MicroSims in this textbook use various JavaScript visualization libraries:

| Library | Purpose |
|---------|---------|
| p5.js | General interactive graphics |
| Chart.js | Data visualization charts |
| vis-network | Network graph visualization |
| Mermaid | Diagrams and flowcharts |
| Plotly | Scientific plotting |

## Creating New MicroSims

New simulations can be created using the `microsim-generator` skill, which routes to the appropriate visualization library based on requirements.
