---
title: AI Task Completion Time Horizons
description: Interactive visualization showing how long AI models can work on tasks based on METR research
image: sims/ai-task-horizons/thumbnail.png
social:
   cards: false
quality_score: 72
---
# AI Task Completion Time Horizons

An interactive visualization showing how long different AI models can work on tasks before failing, based on METR's research on measuring AI ability to complete long tasks.

<iframe src="./main.html" width="100%" height="588"></iframe>

[Run the MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

To use this interactive chart on any website simply copy this line of HTML into your web page:
```html
<iframe src="https://dmccreary.github.io/tracking-ai-course/sims/ai-task-horizons/main.html" width="100%" height="588"></iframe>
```

This MicroSim is based on the wonderful chart at the [METR.org blob post](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)

## Overview

This MicroSim visualizes the **task-completion time horizons** for various AI language models, showing the relationship between model capabilities and their ability to sustain work on extended tasks. The data represents predictions about how long AI agents can operate before encountering failures.

The visualization demonstrates that:

- **Frontier models** (shown in green) generally achieve longer task-completion horizons
- **Success probability** significantly impacts time horizons - models perform better at 50% success thresholds than 80%
- There is substantial variation among models, even within the same category
- The trend shows exponential growth in AI capabilities over time

## Key Findings

According to METR's research, the length of tasks models can complete is well predicted by an **exponential trend with a doubling time of around 7 months**. This suggests rapid improvement in AI's ability to handle longer, more complex tasks.

## Interactive Features

### Scale Toggle
- **Linear Scale**: Shows absolute differences between models
- **Log Scale**: Better visualizes the exponential growth pattern and compresses the range for easier comparison

### Success Probability Toggle
- **50% Success**: The time horizon where a model has a 50% chance of successfully completing a task
- **80% Success**: The more conservative metric requiring 80% success probability (typically shows shorter horizons)

### Hover Tooltips
Hover over any data point to see:
- Model name
- Time horizon in minutes and hours
- Release date
- Success probability level

### Color Coding
- **Green points**: Frontier models (state-of-the-art)
- **Gray points**: Non-frontier models

## Model Data

### Frontier Models
- **GPT-5**: 8,239 min / 137 hrs (50%) / 1,583 min / 26 hrs (80%)
- **Grok-4**: 6,605 min / 110 hrs (50%) / 895 min / 15 hrs (80%)
- **o3**: 5,531 min / 92 hrs (50%) / 1,223 min / 20 hrs (80%)
- **Claude 3.7 Sonnet**: 3,254 min / 54 hrs (50%) / 909 min / 15 hrs (80%)
- **o1-elicited**: 2,354 min / 39 hrs (50%) / 358 min / 6 hrs (80%)
- **Claude 3.5 Sonnet 20241022**: 1,739 min / 29 hrs (50%) / 278 min / 5 hrs (80%)
- **o1-preview**: 1,326 min / 22 hrs (50%) / 277 min / 5 hrs (80%)
- **Claude 3.5 Sonnet**: 1,093 min / 18 hrs (50%) / 192 min / 3 hrs (80%)

### Non-Frontier Models
- **Claude Sonnet 4.5**: 6,798 min / 113 hrs (50%) / 1,209 min / 20 hrs (80%)
- **Claude 4.1 Opus**: 6,330 min / 106 hrs (50%) / 1,265 min / 21 hrs (80%)
- **Claude 4 Opus**: 4,792 min / 80 hrs (50%) / 1,218 min / 20 hrs (80%)
- **Claude 4 Sonnet**: 4,063 min / 68 hrs (50%) / 1,000 min / 17 hrs (80%)
- **Claude 3 Opus**: 385 min / 6 hrs (50%) / 68 min / 1 hr (80%)

## Customization Guide

### Modifying the Data

To update the visualization with new models or data, edit the `modelData` object in `main.html`:

```javascript
const modelData = {
    frontier: [
        {
            name: 'Model Name',
            horizon50: 100.0,  // 50% success time in minutes
            horizon80: 20.0,   // 80% success time in minutes
            date: '2025-MM-DD' // Release date
        }
    ],
    nonFrontier: [
        // Similar structure for non-frontier models
    ]
};
```

### Changing Colors

Modify the background and border colors for each dataset:

```javascript
datasets: [
    {
        label: 'Frontier Models',
        backgroundColor: 'rgba(39, 174, 96, 0.8)',  // Green
        borderColor: 'rgba(39, 174, 96, 1)',
        // ...
    },
    {
        label: 'Non-Frontier Models',
        backgroundColor: 'rgba(149, 165, 166, 0.8)',  // Gray
        borderColor: 'rgba(149, 165, 166, 1)',
        // ...
    }
]
```

### Adjusting Chart Dimensions

For iframe embedding, modify the height in `index.md`:

```html
<iframe src="./main.html" width="100%" height="650" frameborder="0"></iframe>
```

Or adjust the chart container height in the CSS within `main.html`:

```css
.chart-container {
    height: 500px;  /* Adjust as needed */
}
```

## Technical Details

- **Library**: Chart.js 4.4.0
- **Chart Type**: Scatter plot
- **Data Points**: 30 AI models (14 frontier, 16 non-frontier)
- **Time Range**: From 0.3 minutes (GPT-2) to 8,239 minutes / 137 hours (GPT-5)
- **Data Source**: [METR Research (March 2025)](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
- **Interactive Controls**: Scale toggle (linear/log), Success probability toggle (50%/80%)
- **Browser Compatibility**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Dependencies**: Chart.js (loaded from CDN)
- **Responsive**: Yes, adapts to container width with mobile optimizations

## Interpretation Guide

### Reading the Chart

1. **X-axis**: Models are arranged chronologically by release date
2. **Y-axis**: Time horizon in minutes (how long the model can work on tasks)
3. **Higher points**: Indicate models can work on longer tasks
4. **Color**: Distinguishes frontier (green) vs non-frontier (gray) models

### Understanding Success Probabilities

- **50% horizon of 100 minutes**: The model has a 50% chance of successfully completing a 100-minute task
- **80% horizon of 20 minutes**: The model has an 80% chance of successfully completing a 20-minute task
- Higher success probabilities generally correspond to shorter time horizons (more conservative estimates)

### Using Log Scale

The log scale is particularly useful for:
- Visualizing exponential growth trends
- Comparing models with widely varying capabilities
- Identifying patterns in capability improvements over time

## Use Cases

This visualization is useful for:

- **Understanding AI progress**: Track how model capabilities improve over time
- **Comparing models**: Evaluate different AI systems' ability to handle extended tasks
- **Planning AI deployment**: Choose appropriate models based on task duration requirements
- **Educational content**: Demonstrate exponential growth in AI capabilities
- **Research presentations**: Show empirical data on AI task-completion abilities

## References

- [METR: Measuring AI Ability to Complete Long Tasks (March 2025)](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Chart.js Scatter Plot Guide](https://www.chartjs.org/docs/latest/charts/scatter.html)

## About This MicroSim

This MicroSim replicates the interactive chart from METR's research on AI task-completion capabilities. It demonstrates the exponential growth trend in AI systems' ability to handle longer, more complex tasks over time, with a doubling period of approximately 7 months.

The visualization helps students and researchers understand both current AI capabilities and the rapid pace of improvement in this critical dimension of AI performance.

## Self-Assessment Quiz

Test your understanding of AI task completion time horizons.

<div class="upper-alpha" markdown>
**Question 1: What does "task horizon" measure in the context of AI performance?**

1. How far into the future AI can see
2. The length of tasks AI can complete autonomously with a specified success rate
3. The maximum number of users AI can serve
4. The geographical reach of AI systems
</div>

??? success "Answer"
    B) The length of tasks AI can complete autonomously with a specified success rate - Task horizon indicates how long (in human work time) a task can be while still having a specified probability of successful AI completion.

<div class="upper-alpha" markdown>
**Question 2: What is the difference between "frontier" and "non-frontier" models in this visualization?**

1. Frontier models are older; non-frontier are newer
2. Frontier models represent state-of-the-art at their release; non-frontier are other capable models
3. Frontier models work on simple tasks; non-frontier on complex tasks
4. There is no difference; it's just random categorization
</div>

??? success "Answer"
    B) Frontier models represent state-of-the-art at their release; non-frontier are other capable models - Frontier models (shown in green) were the most capable models available at their time of release, while non-frontier models (gray) are other capable but not leading-edge models.

<div class="upper-alpha" markdown>
**Question 3: Why is the logarithmic scale option useful for viewing this data?**

1. It makes the chart more colorful
2. It better visualizes exponential growth patterns across a wide range of values
3. It is required by scientific standards
4. It hides poor-performing models
</div>

??? success "Answer"
    B) It better visualizes exponential growth patterns across a wide range of values - The log scale compresses the range to show the consistent doubling pattern and allows comparison of models that vary by orders of magnitude in capability.

<div class="upper-alpha" markdown>
**Question 4: What does the gap between 50% and 80% success metrics indicate about a model?**

1. The model is broken
2. The model's consistency and reliability across different task lengths
3. The model's cost difference
4. The model's age
</div>

??? success "Answer"
    B) The model's consistency and reliability across different task lengths - A large gap indicates the model is less consistent, while a smaller gap suggests more reliable performance across the capability range.

<div class="upper-alpha" markdown>
**Question 5: Based on the trend data, what type of tasks might AI reliably handle by 2027-2028?**

1. Only simple 5-minute tasks
2. Complex multi-day to week-long tasks
3. Tasks requiring physical labor
4. Tasks that have not been invented yet
</div>

??? success "Answer"
    B) Complex multi-day to week-long tasks - If the 7-month doubling trend continues, projections suggest AI could handle tasks equivalent to multiple days or even weeks of human work by 2027-2028.
