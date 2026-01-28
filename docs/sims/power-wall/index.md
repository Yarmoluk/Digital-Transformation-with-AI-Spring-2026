---
title: Power Wall MicroSim
description: Interactive visualization showing CPU clock speed evolution and the Power Wall phenomenon
image: sims/power-wall/thumbnail.png
social:
   cards: false
quality_score: 67
hide:
  - toc
---
# Power Wall MicroSim

<iframe src="./main.html" height="605px" scrolling="no"
  style="overflow: hidden;"></iframe>

```html
<iframe src="https://dmccreary.github.io/tracking-ai-course/sims/power-wall/main.html"  height="605px" scrolling="no"
  style="overflow: hidden;"></iframe>
```

[Run the MicroSim](./main.html){ .md-button .md-button--primary }

[Edit the MicroSim]()

## Notes for CPU Clock Speed "Power Wall" Visualization

I've created a new MicroSim visualization that shows the evolution of CPU clock speeds from 1965 to 2025, highlighting the "Power Wall" phenomenon. This visualization illustrates how CPU clock speeds increased exponentially until around 2004, then hit thermal and power constraints that limited further increases in frequency.

## Key Features of the Visualization

1.  **Timeline**: Covers 1965-2025, showing the complete history of CPU clock speeds from early computing to present day
2.  **Data Points**: Each point represents a significant CPU release with its clock speed in MHz
    -   Color-coded by manufacturer (Intel blue, AMD red, others gray)
    -   Hoverable points with detailed information including:
        -   CPU name and year
        -   Clock speed (MHz/GHz)
        -   Manufacturer
        -   Process node
        -   Power consumption (TDP in watts)
        -   Description of the CPU's significance
3.  **Annotations**: Three key moments in CPU history are highlighted:
    -   **The Power Wall (2004)**: When the Pentium 4 Prescott hit 3.4 GHz but faced severe thermal issues
    -   **Multi-core Transition (2006)**: When the industry shifted focus to adding more cores rather than increasing frequency
    -   **Advanced Process Nodes (2023)**: When newer manufacturing processes enabled clock speeds to rise again
4.  **Scale Options**: Toggle between linear and logarithmic scales
    -   Linear scale shows the dramatic plateauing effect after 2004
    -   Logarithmic scale shows the overall growth pattern across the decades
5.  **Responsive Design**: Automatically resizes to fit the container width

## The "Power Wall" Story

The visualization effectively tells the story of how CPU clock speeds:

1.  **1965-2000**: Started very low (under 1 MHz) and grew slowly but steadily
2.  **2000-2004**: Increased rapidly from 1.5 GHz to 3.4 GHz (the "clock speed race" era)
3.  **2004-2010**: Hit the "Power Wall" where thermal constraints prevented further increases
4.  **2010-2020**: Remained relatively flat, with the industry focusing on multi-core designs
5.  **2020-2025**: Began to rise again as advanced manufacturing processes improved efficiency

Technical Implementation
------------------------

The visualization uses p5.js with the following technical approaches:

-   **Data Structure**: Contains 40+ data points with comprehensive information for each CPU
-   **Interactive Elements**: Hoverable data points with detailed information cards
-   **Trendline**: Connected points showing the overall trajectory of clock speeds
-   **Annotations**: Highlighted key moments with explanatory text
-   **Responsive Design**: Adapts to container width changes
-   **Scale Toggle**: Button to switch between linear and logarithmic scales

This visualization complements the Moore's Law transistor count visualization by showing how another aspect of CPU performance (clock speed) faced fundamental physical limitations that transistor counts did not, illustrating why the industry shifted to multi-core designs as the primary way to improve performance.

## Self-Assessment Quiz

Test your understanding of the Power Wall phenomenon in CPU development.

<div class="upper-alpha" markdown>
**Question 1: What was the "Power Wall" that CPUs encountered around 2004?**

1. A physical wall built around data centers
2. Thermal and power consumption limits that prevented further increases in clock speed
3. A legal barrier to CPU manufacturing
4. A marketing campaign limitation
</div>

??? success "Answer"
    B) Thermal and power consumption limits that prevented further increases in clock speed - Higher clock speeds generate more heat, and by 2004, CPUs like the Pentium 4 Prescott were producing so much heat that further frequency increases became impractical.

<div class="upper-alpha" markdown>
**Question 2: How did the CPU industry respond to hitting the Power Wall?**

1. They stopped making CPUs
2. They shifted focus from higher clock speeds to multi-core processors
3. They made clock speeds even higher
4. They returned to vacuum tube technology
</div>

??? success "Answer"
    B) They shifted focus from higher clock speeds to multi-core processors - Instead of faster single cores, manufacturers added multiple cores to increase total processing power while keeping each core at manageable heat levels.

<div class="upper-alpha" markdown>
**Question 3: What trend characterized CPU clock speeds from 2000-2004?**

1. Steady decline in speeds
2. Rapid increase from 1.5 GHz to 3.4 GHz (the "clock speed race" era)
3. No change in clock speeds
4. Speeds oscillated randomly
</div>

??? success "Answer"
    B) Rapid increase from 1.5 GHz to 3.4 GHz (the "clock speed race" era) - This period saw intense competition to reach higher clock speeds, with both Intel and AMD pushing frequencies higher before thermal limits intervened.

<div class="upper-alpha" markdown>
**Question 4: Why is understanding the Power Wall relevant to AI strategy?**

1. It has no relevance to AI
2. It shows how physical limits can redirect technology development, similar to potential AI limits
3. It only affects game consoles
4. AI does not use processors
</div>

??? success "Answer"
    B) It shows how physical limits can redirect technology development, similar to potential AI limits - The Power Wall illustrates how exponential trends can hit fundamental barriers, causing technology to evolve in new directions rather than continuing on the same path.

<div class="upper-alpha" markdown>
**Question 5: What recent development has allowed clock speeds to rise again after the Power Wall era?**

1. Magic
2. Advanced manufacturing processes (smaller nanometer nodes) that improve power efficiency
3. Clock speeds have not risen since 2004
4. Removing all cooling systems
</div>

??? success "Answer"
    B) Advanced manufacturing processes (smaller nanometer nodes) that improve power efficiency - Newer fabrication processes at 7nm, 5nm, and smaller have enabled modest clock speed increases by improving transistor efficiency and reducing power consumption.