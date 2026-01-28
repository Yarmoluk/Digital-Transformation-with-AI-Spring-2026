---
title: Learning Graph for Tracking AI Course
description: Interactive visualization of concept dependencies in the Tracking AI curriculum
image: sims/learning-graph/learning-graph.png
social:
   cards: false
og:image: /sims/learning-graph/learning-graph.png
---

# Learning Graph for Tracking AI Course

<iframe src="./view-graph.html" width="100%" height="600px" scrolling="no"
  style="overflow: hidden; border: 1px solid lightgray;"></iframe>

[Open Full Screen](./view-graph.html){ .md-button }

## About This Visualization

This interactive network graph visualizes the **251 concepts** covered in the Tracking AI Course and their dependencies. It provides a visual map of how ideas connect and build upon each other, helping learners understand the prerequisite relationships between topics.

## Understanding the Graph

### Nodes (Concepts)

Each **node** (circle) in the graph represents a concept covered in the course. Nodes are color-coded by category to help you quickly identify related topics:

| Color | Category | Description |
|-------|----------|-------------|
| Red | Foundational Concepts | Core AI principles like Artificial Intelligence, Machine Learning, Neural Networks |
| Orange | AI Evolution and History | Historical milestones including Dartmouth Conference, AI Winters, AlphaGo |
| Gold | AI Architectures and Technologies | Technical implementations like Transformers, GPT, BERT, Diffusion Models |
| Green | AI Capabilities and Applications | Practical applications including Code Generation, Speech Recognition, Question Answering |
| Blue | Content Generation and Creativity | Creative AI applications for generating text, summaries, and educational content |
| Deep Sky Blue | Image Generation | Visual AI including DALL-E, Midjourney, Stable Diffusion |
| Royal Blue | Language Generation | Natural language processing and text generation |
| Indigo | Knowledge Management | Organizational knowledge, knowledge graphs, institutional memory |
| Violet | Educational Transformation | AI in education including personalized learning, adaptive systems, curriculum development |
| Brown | Organizational Strategy | Business strategy, competitive advantage, change management |
| Gray | Performance Evaluation | Benchmarks, metrics, ROI analysis |
| Black | Ethical and Regulatory | AI safety, bias, governance, privacy regulations like FERPA |
| Olive | Best Practices | Quality assurance, testing protocols, version control |
| Teal | Future Trends | Predictions about AGI timelines, workforce transformation, AI forecasting |
| Slate Gray | Implementation | Technical infrastructure, API management, deployment strategies |
| Gold (star) | Final Goals | Ultimate outcomes like Innovation Strategy, Future Readiness |

### Edges (Dependencies)

The **arrows** (edges) connecting nodes represent prerequisite relationships. An arrow pointing from Concept A to Concept B means:

- **Concept A should be understood before Concept B**
- B builds upon or requires knowledge of A
- When learning the material, follow the arrows to find a logical learning path

## Using the Interface

### Left Sidebar

The left sidebar contains:

1. **Legend & Controls** - Color-coded legend showing all concept categories
2. **Check All / Uncheck All** - Buttons to quickly show or hide all categories
3. **Category Checkboxes** - Toggle individual categories on/off
4. **Graph Statistics** - Live counts of visible nodes, edges, and orphan nodes

### Search Function

The **search bar** at the top allows you to find specific concepts:

1. Start typing a concept name (e.g., "neural" or "GPT")
2. Matching concepts appear in a dropdown list
3. Click a result to zoom and focus on that node
4. The graph will animate to center on your selection

### Filtering by Category

Use the **checkboxes** in the sidebar to filter the graph by concept category:

1. **Uncheck a category** to hide all concepts in that group
2. **Check a category** to show those concepts
3. Use **Uncheck All** to clear the graph, then selectively enable categories you want to explore
4. The statistics update in real-time to show how many nodes and edges are currently visible

**Tip:** Try unchecking all categories, then enabling just "Foundational Concepts" to see the core building blocks of AI knowledge.

### Interacting with the Graph

- **Drag nodes** to rearrange the layout
- **Scroll** to zoom in/out
- **Click and drag** the background to pan
- **Click a node** to select it and see its connections highlighted
- The graph **stabilizes after 5 seconds** to prevent continuous movement

## Learning Paths

The graph reveals natural learning progressions. Some suggested paths:

1. **AI Foundations Path**: Start with red (Foundational) nodes, then follow arrows to orange (History) and gold (Architectures)

2. **Practical Applications Path**: Begin with Foundational Concepts, move to AI Capabilities (green), then explore Content Generation (blue)

3. **Strategic Planning Path**: Start with Organizational Strategy (brown), connect to Performance Evaluation (gray), and end with Future Trends (teal)

4. **Education Focus Path**: Begin with Educational Transformation (violet), explore Knowledge Management (indigo), and connect to Implementation (slate gray)

## Data Source

The graph data is stored in `tracking-ai.json` and contains:

- **251 nodes** representing course concepts
- **618 edges** representing prerequisite dependencies
- **16 concept categories** for organization

This visualization was generated using the vis-network JavaScript library.

## Self-Assessment Quiz

Test your understanding of learning graphs and concept dependencies.

<div class="upper-alpha" markdown>
**Question 1: What do the nodes (circles) represent in the learning graph?**

1. Individual students
2. Course concepts that need to be learned
3. Test questions
4. Chapter numbers
</div>

??? success "Answer"
    B) Course concepts that need to be learned - Each node represents a specific concept covered in the course, such as "Machine Learning," "Neural Networks," or "Transformers."

<div class="upper-alpha" markdown>
**Question 2: What do the arrows (edges) between nodes indicate?**

1. The order in which concepts were invented
2. Prerequisite relationships showing which concepts should be learned first
3. Which concepts are most popular
4. Random connections for visual appeal
</div>

??? success "Answer"
    B) Prerequisite relationships showing which concepts should be learned first - An arrow from Concept A to Concept B means A should be understood before learning B, indicating a dependency relationship.

<div class="upper-alpha" markdown>
**Question 3: Why are nodes color-coded in the learning graph?**

1. To make the graph more colorful
2. To group concepts by category or taxonomy for easy identification
3. To show which concepts are easiest
4. Colors are assigned randomly
</div>

??? success "Answer"
    B) To group concepts by category or taxonomy for easy identification - Color coding helps users quickly identify related concepts, such as foundational concepts (red), AI architectures (gold), or ethical considerations (black).

<div class="upper-alpha" markdown>
**Question 4: How can a learning graph help students plan their studies?**

1. It tells them exactly how long to study each topic
2. It shows logical learning paths by following prerequisite arrows
3. It replaces the need to read textbooks
4. It automatically grades their assignments
</div>

??? success "Answer"
    B) It shows logical learning paths by following prerequisite arrows - By following the directed edges, students can identify which foundational concepts to learn first and trace paths to more advanced topics they want to master.

<div class="upper-alpha" markdown>
**Question 5: What does filtering by category allow users to do?**

1. Delete concepts permanently
2. Focus on specific areas of interest while hiding unrelated concepts
3. Change the course curriculum
4. Add new concepts to the course
</div>

??? success "Answer"
    B) Focus on specific areas of interest while hiding unrelated concepts - Category filtering allows users to simplify the view by showing only relevant concept groups, making it easier to explore specific learning paths or topic areas.
