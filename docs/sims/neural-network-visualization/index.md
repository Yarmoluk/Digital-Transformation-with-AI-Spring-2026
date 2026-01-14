---
title: Neural Network Architecture Visualization
description: Interactive visualization of how neural networks process information through layers with configurable architecture
image: /sims/neural-network-visualization/neural-network.png
og:image: /sims/neural-network-visualization/neural-network.png
twitter:image: /sims/neural-network-visualization/neural-network.png
quality_score: 89
social:
   cards: false
---

# Neural Network Architecture Visualization

<iframe src="main.html" height="652px" width="100%" scrolling="no"></iframe>

[Run the Neural Network Visualization Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This interactive visualization demonstrates how information flows through a neural network. Students can configure the network architecture, visualize forward propagation, and understand how activations change as data moves through layers.

### Iframe Embedding

```html
<iframe src="https://dmccreary.github.io/Digital-Transformation-with-AI-Spring-2026/sims/neural-network-visualization/main.html"
        height="652px"
        width="100%"
        scrolling="no">
</iframe>
```

## How to Use

1. **Start Animation**: Click "Start" to watch data flow through the network
2. **Configure Architecture**: Adjust hidden layers and nodes per layer
3. **Randomize Inputs**: Click "Random Inputs" to see different activation patterns
4. **Hover Nodes**: Hover over any node to see its activation and weights
5. **Observe Patterns**: Watch how connection colors indicate positive/negative weights

## Neural Network Components

| Component | Description |
|-----------|-------------|
| **Input Layer** | Receives initial data values (fixed at 4 nodes) |
| **Hidden Layers** | Intermediate processing layers (configurable 1-4 layers) |
| **Output Layer** | Final predictions (fixed at 3 nodes) |
| **Weights** | Learned parameters connecting nodes |
| **Activations** | Node output values (0-1 range shown) |

## Understanding the Visualization

### Node Colors
- **Gray** → Low activation (close to 0)
- **Blue** → High activation (close to 1)

### Connection Colors
- **Green** → Positive weight (increases activation)
- **Red** → Negative weight (decreases activation)
- **Thickness** → Magnitude of weight

### Forward Propagation

The animation shows how data flows through the network:

1. Input values are set in the input layer
2. Each hidden layer computes weighted sums of previous layer
3. Activation function (ReLU-like) determines output
4. Process continues until reaching output layer

## Mathematical Foundations

For a node $j$ in layer $l$, the activation is computed as:

$$a_j^{(l)} = \sigma\left(\sum_{i} w_{ij}^{(l)} a_i^{(l-1)} + b_j^{(l)}\right)$$

Where:
- $a_i^{(l-1)}$ = activation from previous layer
- $w_{ij}^{(l)}$ = weight connecting node $i$ to node $j$
- $b_j^{(l)}$ = bias term
- $\sigma$ = activation function

## Learning Objectives

After using this tool, students should be able to:

- **Understand** (Bloom's L2): Explain how information flows through network layers
- **Apply** (Bloom's L3): Trace information flow through a neural network
- **Analyze** (Bloom's L4): Relate network architecture to parameter count

## Lesson Plan

### Activity 1: Architecture Exploration (10 minutes)
1. Start with 1 hidden layer, 3 nodes
2. Gradually increase complexity
3. Observe how parameter count changes
4. Discuss the implications for training

### Activity 2: Activation Patterns (15 minutes)
1. Run animation with different input values
2. Identify which connections have most impact
3. Discuss why some neurons "die" (stay at 0)

### Discussion Questions

1. How does adding hidden layers affect the network's representational power?
2. Why might a network with more parameters be harder to train?
3. What happens when many weights are negative?

## Network Architecture Guidelines

| Use Case | Recommended Architecture |
|----------|-------------------------|
| Simple patterns | 1 hidden layer, 4-8 nodes |
| Moderate complexity | 2 hidden layers, 8-16 nodes |
| Complex relationships | 3+ hidden layers, 32+ nodes |

## Related Concepts

- [Chapter 1: Digital Transformation and AI Foundations](../../chapters/01-digital-transformation-ai-foundations/index.md)
- Perceptron
- Deep Learning
- Backpropagation

## References

1. Nielsen, M. (2015). *Neural Networks and Deep Learning*. Determination Press.
2. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
3. 3Blue1Brown Neural Network Series: https://www.3blue1brown.com/topics/neural-networks
