---
title: AI Use Case Prioritization Tool
description: Interactive 2x2 matrix for prioritizing AI initiatives based on business value and implementation complexity
image: /sims/ai-use-case-prioritization/ai-use-case-prioritization.png
og:image: /sims/ai-use-case-prioritization/ai-use-case-prioritization.png
twitter:image: /sims/ai-use-case-prioritization/ai-use-case-prioritization.png
quality_score: 88
social:
   cards: false
---

# AI Use Case Prioritization Tool

<iframe src="main.html" height="652px" width="100%" scrolling="no"></iframe>

[Run the AI Use Case Prioritization Tool Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This interactive tool enables students to practice prioritizing AI use cases using the classic value-complexity matrix framework. Use cases are visualized as bubbles in a 2x2 matrix, with bubble size representing estimated investment. Students can explore different industry scenarios and manipulate use case positions to understand how changes affect prioritization.

### Iframe Embedding

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/Digital-Transformation-with-AI-Spring-2026/sims/ai-use-case-prioritization/main.html"
        height="652px"
        width="100%"
        scrolling="no">
</iframe>
```

## How to Use

1. **Select a Scenario**: Choose from Healthcare, Financial Services, Retail, or Manufacturing
2. **Observe the Matrix**: Each bubble represents an AI use case positioned by value and complexity
3. **Click Bubbles**: Select a use case to view detailed information
4. **Drag Bubbles**: Reposition use cases to explore "what-if" scenarios
5. **Review Rankings**: The priority list automatically updates based on positions

## The 2x2 Matrix Framework

| Quadrant | Characteristics | Strategy |
|----------|-----------------|----------|
| **Quick Wins** (High value, Low complexity) | Fast ROI, build momentum | Implement immediately |
| **Strategic** (High value, High complexity) | Transformational but risky | Plan carefully, phase approach |
| **Low Priority** (Low value, Low complexity) | Easy but limited impact | Consider if resources available |
| **Avoid** (Low value, High complexity) | Poor investment | Deprioritize or eliminate |

## Visual Elements

- **Bubble Position**: X-axis = Business Value, Y-axis = Implementation Complexity
- **Bubble Size**: Estimated investment amount (larger = higher investment)
- **Bubble Color**: Distinguishes different use cases within a scenario
- **Quadrant Colors**: Green (Quick Win), Blue (Strategic), Yellow (Low Priority), Pink (Avoid)

## Priority Score Calculation

The tool calculates a priority score for each use case:

```
Priority Score = (Value × 1.5) - (Complexity × 0.5) + 5
```

This formula emphasizes high-value, low-complexity initiatives while still giving credit to strategic high-complexity projects.

## Learning Objectives

After using this tool, students should be able to:

- **Evaluate** (Bloom's L5): Evaluate and prioritize AI opportunities using structured criteria
- **Analyze** (Bloom's L4): Analyze the trade-offs between value and complexity
- **Apply** (Bloom's L3): Apply prioritization frameworks to real business scenarios

## Lesson Plan

### Activity 1: Scenario Exploration (10 minutes)
Cycle through all four industry scenarios. For each:
- Identify which use cases fall into each quadrant
- Note patterns: Which types of AI initiatives tend to be "Quick Wins"?
- Compare priority rankings across industries

### Activity 2: What-If Analysis (15 minutes)
Select the Healthcare scenario. Then:
1. Drag "Diagnostic Imaging" from Strategic to Quick Wins (reduce complexity)
2. Observe how this changes the priority ranking
3. Discuss: What would need to change for this use case to become easier to implement?

### Activity 3: Portfolio Balance (10 minutes)
Analyze the overall portfolio distribution:
- How many use cases in each quadrant?
- Is the portfolio balanced or concentrated?
- What risks exist if all use cases are "Strategic"?

### Discussion Questions
1. Why should organizations pursue "Quick Wins" before "Strategic" initiatives?
2. What factors might cause a use case to move between quadrants over time?
3. How would you handle pressure to implement an "Avoid" quadrant initiative?

## Related Concepts

- [Chapter 10: Business Applications and AI Transformation](../../chapters/10-business-applications-transformation/index.md)
- ROI Estimation
- Feasibility Analysis
- Quick Wins and Strategic Initiatives

## References

1. McFarland, K. R. (2017). *The Breakthrough Imperative*. Crown Business.
2. Brynjolfsson, E., & McAfee, A. (2017). *Machine, Platform, Crowd*. W.W. Norton.
3. Fountaine, T., McCarthy, B., & Saleh, T. (2019). Building the AI-Powered Organization. *Harvard Business Review*, 97(4).
