---
title: AI Use Case Prioritization Tool
description: Interactive 2x2 matrix for prioritizing AI initiatives based on business value and implementation complexity
image: sims/ai-use-case-prioritization/ai-use-case-prioritization.png
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

## Self-Assessment Quiz

Test your understanding of AI use case prioritization.

<div class="upper-alpha" markdown>
**Question 1: What are the two axes used in the AI Use Case Prioritization matrix?**

1. Cost and Time
2. Business Value and Implementation Complexity
3. Risk and Reward
4. Technology and People
</div>

??? success "Answer"
    B) Business Value and Implementation Complexity - The matrix plots use cases based on their potential business value (X-axis) and the complexity of implementing them (Y-axis).

<div class="upper-alpha" markdown>
**Question 2: Which quadrant represents "Quick Wins" in the prioritization matrix?**

1. Low value, Low complexity
2. Low value, High complexity
3. High value, Low complexity
4. High value, High complexity
</div>

??? success "Answer"
    C) High value, Low complexity - Quick Wins are initiatives that deliver high business value with relatively low implementation complexity, making them ideal for immediate implementation.

<div class="upper-alpha" markdown>
**Question 3: What strategy is recommended for use cases in the "Avoid" quadrant?**

1. Implement immediately
2. Plan carefully with a phased approach
3. Deprioritize or eliminate from consideration
4. Consider if resources are available
</div>

??? success "Answer"
    C) Deprioritize or eliminate from consideration - The "Avoid" quadrant (low value, high complexity) represents poor investments that should be deprioritized or removed from the portfolio.

<div class="upper-alpha" markdown>
**Question 4: What does bubble size represent in this visualization?**

1. Number of employees needed
2. Estimated investment amount
3. Project duration
4. Risk level
</div>

??? success "Answer"
    B) Estimated investment amount - Larger bubbles indicate use cases requiring higher investment, adding a third dimension to the value-complexity analysis.

<div class="upper-alpha" markdown>
**Question 5: Why should organizations pursue "Quick Wins" before "Strategic" initiatives?**

1. Quick Wins are more profitable in the long term
2. Quick Wins build momentum, credibility, and organizational learning
3. Strategic initiatives are always failures
4. Quick Wins require no investment
</div>

??? success "Answer"
    B) Quick Wins build momentum, credibility, and organizational learning - Starting with Quick Wins demonstrates AI value early, builds organizational capabilities, and creates support for tackling more complex Strategic initiatives later.
