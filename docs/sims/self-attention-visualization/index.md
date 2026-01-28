---
title: Self-Attention Visualization
description: Interactive visualization of how tokens attend to other tokens in transformer self-attention mechanisms
image: sims/self-attention-visualization/self-attention.png
og:image: /sims/self-attention-visualization/self-attention.png
twitter:image: /sims/self-attention-visualization/self-attention.png
quality_score: 87
social:
   cards: false
---

# Self-Attention Visualization

<iframe src="main.html" height="652px" width="100%" scrolling="no"></iframe>

[Run the Self-Attention Visualization Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This interactive visualization demonstrates how the self-attention mechanism in transformers works. Self-attention is the key innovation that allows LLMs to understand context and relationships between words in a sentence.

### Iframe Embedding

```html
<iframe src="https://dmccreary.github.io/Digital-Transformation-with-AI-Spring-2026/sims/self-attention-visualization/main.html"
        height="652px"
        width="100%"
        scrolling="no">
</iframe>
```

## How to Use

1. **Select a Sentence**: Choose from different example sentences to see various attention patterns
2. **Click a Token**: Click on any token in the row to see which other tokens it attends to
3. **Read the Matrix**: The attention matrix shows strength of attention from each token (row) to each token (column)
4. **Observe Patterns**: Notice how certain linguistic patterns create strong attention connections

## Key Attention Patterns

| Pattern Type | Description | Example |
|-------------|-------------|---------|
| **Pronoun Resolution** | Pronouns attend strongly to their referents | "it" → "cat" |
| **Subject-Verb Agreement** | Verbs attend to their subjects | "passed" → "students" |
| **Adjective-Noun** | Adjectives attend to nouns they modify | "quick" → "fox" |
| **Positional** | Nearby tokens generally have higher attention | Local context matters |

## Understanding the Attention Matrix

The attention matrix is a square grid where:

- **Rows** represent the "from" token (the one doing the attending)
- **Columns** represent the "to" token (the one being attended to)
- **Cell color** indicates attention strength (darker = stronger)
- **Each row sums to 1** (softmax normalization)

## Self-Attention Mechanism

The self-attention mechanism computes attention scores using three learned projections:

1. **Query (Q)**: What am I looking for?
2. **Key (K)**: What do I contain?
3. **Value (V)**: What information do I provide?

The attention score between token $i$ and token $j$ is:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

## Learning Objectives

After using this tool, students should be able to:

- **Understand** (Bloom's L2): Explain how self-attention captures token relationships
- **Analyze** (Bloom's L4): Interpret attention patterns and their linguistic significance
- **Evaluate** (Bloom's L5): Assess why certain patterns emerge in attention distributions

## Lesson Plan

### Activity 1: Pattern Discovery (10 minutes)
1. Select "Pronoun Reference" sentence
2. Click on "it" and observe what it attends to
3. Explain why "cat" has high attention

### Activity 2: Linguistic Analysis (15 minutes)
1. For each sentence type, identify the primary attention pattern
2. Document which token pairs have strong connections
3. Hypothesize why these patterns help language understanding

### Discussion Questions

1. Why does the "it" token need to attend to "cat" to generate correct text?
2. How does attention help models understand long-range dependencies?
3. What happens when multiple valid referents exist for a pronoun?

## Related Concepts

- [Chapter 2: Large Language Model Architecture](../../chapters/02-llm-architecture/index.md)
- Transformer Architecture
- Multi-Head Attention
- Query-Key-Value Mechanism

## References

1. Vaswani, A., et al. (2017). Attention Is All You Need. *NeurIPS*.
2. Clark, K., et al. (2019). What Does BERT Look At? *ACL Workshop BlackboxNLP*.
3. Vig, J. (2019). A Multiscale Visualization of Attention in the Transformer Model. *ACL Demo*.

## Self-Assessment Quiz

Test your understanding of the self-attention mechanism.

<div class="upper-alpha" markdown>
**Question 1: What is the primary purpose of self-attention in transformer models?**

1. To reduce the size of the model
2. To capture relationships and context between all tokens in a sequence
3. To make the model run faster
4. To save memory during training
</div>

??? success "Answer"
    B) To capture relationships and context between all tokens in a sequence - Self-attention allows each token to "attend to" all other tokens, learning which words are most relevant for understanding each position in the text.

<div class="upper-alpha" markdown>
**Question 2: In the attention matrix visualization, what do the rows and columns represent?**

1. Rows are inputs, columns are outputs
2. Rows are the "from" tokens (doing the attending), columns are the "to" tokens (being attended)
3. Rows are layers, columns are neurons
4. Rows are words, columns are letters
</div>

??? success "Answer"
    B) Rows are the "from" tokens (doing the attending), columns are the "to" tokens (being attended) - Each cell shows how much attention one token pays to another, with darker colors indicating stronger attention.

<div class="upper-alpha" markdown>
**Question 3: What are the three learned projections used in self-attention?**

1. Input, Output, and Hidden
2. Query (Q), Key (K), and Value (V)
3. Forward, Backward, and Lateral
4. Beginning, Middle, and End
</div>

??? success "Answer"
    B) Query (Q), Key (K), and Value (V) - Each token is projected into Query ("what am I looking for?"), Key ("what do I contain?"), and Value ("what information do I provide?") representations.

<div class="upper-alpha" markdown>
**Question 4: Why does the pronoun "it" typically show high attention to its referent (like "cat" in "The cat sat because it was tired")?**

1. Random chance
2. The model needs to understand what "it" refers to in order to generate contextually appropriate text
3. Pronouns always attend to the first noun
4. Attention is alphabetical
</div>

??? success "Answer"
    B) The model needs to understand what "it" refers to in order to generate contextually appropriate text - Self-attention learns to connect pronouns with their referents because this relationship is crucial for understanding and generating coherent language.

<div class="upper-alpha" markdown>
**Question 5: Why is self-attention considered a breakthrough for processing sequences?**

1. It is cheaper than previous methods
2. It allows direct connections between any positions, solving the long-range dependency problem
3. It requires less training data
4. It only works on English text
</div>

??? success "Answer"
    B) It allows direct connections between any positions, solving the long-range dependency problem - Unlike recurrent networks that must pass information step-by-step, self-attention creates direct connections between all positions, enabling effective modeling of relationships across long sequences.
