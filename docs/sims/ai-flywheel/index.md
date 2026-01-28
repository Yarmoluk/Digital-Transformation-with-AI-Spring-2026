---
title: The AI Flywheel
description: An infographic MicroSim of the AI Flywheel causal loop.
quality_score: 75
image: sims/ai-flywheel/ai-flywheel.png
og:image: /sims/ai-flywheel/ai-flywheel.png
twitter:image: /sims/ai-flywheel/ai-flywheel.png
social:
   cards: false
hide:
  - toc
---
# AI Flywheel

<iframe src="./main.html" height="470px" scrolling="no"
  style="overflow: hidden;"></iframe>

[Run the AI Flywheel MicroSim](./main.html){ .md-button .md-button--primary }
[Edit the AI Flywheel MicroSim](https://editor.p5js.org/dmccreary/sketches/HC-HjkNpm)

You can include this MicroSim infographic in your web page by adding the following line to your web page:

```html
<iframe src="https://dmccreary.github.io/tracking-ai-course/sims/ai-flywheel/main.html" height="470px" scrolling="no"
  style="overflow: hidden;"></iframe>
```

!!! prompt
    AI Flywheel Infographic

    Please generate a new MicroSim using vis.js.  The MicroSim is a causal loop diagram that illustrates the AI flywheel architype.  

    The title should be at the top and centered.  The title is "AI Flywheel"

    Here are the four components:

    There are for concepts in the diagram arraged in a circle: "Data", "Model", "Prediction" and "Feedback"

    At the top of the diagram we have concept of "Data"

    Data is connected through an arc called "Used to Create" to "Model"

    At the right of the diagram is ithe concept "Model"

    "Model" is connected through an arc to "Prediction" with the label "Used to Create"

    "Prediction" is at the bottom of the diagram

    "Prediction" is connected with an arc to "Feedback" with the label "Generates"

    "Feedback" is connected with an arc to "Data" with the label "Provides More"

    Freese the positions and do not allow the objects to move.

    When the user hovers over an object, display an infobox at the bottom of the canvas that describes what the object is and its function in the AI Flywheel.

    Make the background of the canvas aliceblue.  Recenter the objects if the container is resized.

## Response

I've created an AI Flywheel MicroSim using vis.js that displays the cyclical relationship between the four key components of an AI system. Here are the key features:
Design Elements

**Circular Layout:** The four concepts (Data, Model, Prediction, Feedback) are arranged in a circle with fixed positions
**Directional Flow:** Curved arrows show the flow between concepts with descriptive labels
**Color Coding:** Each concept has a distinct color (Data=Green, Model=Blue, Prediction=Orange, Feedback=Purple)
**Interactive Hover:** Hovering over any concept displays a detailed description in the control area below

## Components Flow

Data (top) → "Used to Create" → Model (right)
Model (right) → "Used to Create" → Prediction (bottom)
Prediction (bottom) → "Generates" → Feedback (left)
Feedback (left) → "Provides More" → Data (top)

Responsive Features

Automatically adjusts to container width changes
Recalculates node positions when window is resized
Scales text and descriptions appropriately
Maintains circular layout proportions

The diagram effectively illustrates how AI systems create a self-reinforcing cycle where each component feeds into the next, creating continuous improvement over time. The flywheel concept shows how initial momentum builds upon itself to create increasingly better AI systems.

## Self-Assessment Quiz

Test your understanding of the AI Flywheel concept.

<div class="upper-alpha" markdown>
**Question 1: What are the four components of the AI Flywheel in the correct sequence?**

1. Input, Processing, Output, Storage
2. Data, Model, Prediction, Feedback
3. Training, Testing, Deployment, Monitoring
4. Hardware, Software, Users, Revenue
</div>

??? success "Answer"
    B) Data, Model, Prediction, Feedback - The AI Flywheel shows how Data is used to create a Model, which generates Predictions, which in turn generates Feedback that provides more Data, completing the cycle.

<div class="upper-alpha" markdown>
**Question 2: Why is the AI Flywheel concept called a "flywheel"?**

1. Because it spins like a mechanical wheel
2. Because once the cycle starts, momentum builds and improvement accelerates
3. Because it was invented by a company called Flywheel
4. Because it only works with wheeled robots
</div>

??? success "Answer"
    B) Because once the cycle starts, momentum builds and improvement accelerates - Like a mechanical flywheel that stores rotational energy, the AI flywheel concept describes how initial effort creates self-reinforcing momentum that makes subsequent improvements easier and faster.

<div class="upper-alpha" markdown>
**Question 3: How does "Feedback" contribute to the AI Flywheel?**

1. It provides more data to improve the model
2. It stops the flywheel from spinning
3. It replaces the need for initial training data
4. It only affects the prediction quality
</div>

??? success "Answer"
    A) It provides more data to improve the model - Feedback from predictions generates additional data that can be used to retrain and improve the model, creating a virtuous cycle of continuous improvement.

<div class="upper-alpha" markdown>
**Question 4: Which real-world example best illustrates the AI Flywheel in action?**

1. A library storing physical books
2. A recommendation system that improves as users interact with it
3. A calculator performing math operations
4. A word processor creating documents
</div>

??? success "Answer"
    B) A recommendation system that improves as users interact with it - Netflix or Amazon recommendations exemplify the AI Flywheel: user interaction data trains models that make predictions, user feedback on those predictions provides more data, continuously improving recommendations.

<div class="upper-alpha" markdown>
**Question 5: What strategic advantage does understanding the AI Flywheel provide to organizations?**

1. It eliminates the need for initial investment in AI
2. It helps identify where to invest to accelerate AI capability growth
3. It guarantees immediate return on investment
4. It removes the need for human oversight
</div>

??? success "Answer"
    B) It helps identify where to invest to accelerate AI capability growth - Understanding the flywheel helps organizations see how investments in data collection, model development, or feedback mechanisms can create compounding returns over time.