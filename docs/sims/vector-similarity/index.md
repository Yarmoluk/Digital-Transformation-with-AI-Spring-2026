---
title: Vector Similarity Visualization
description: Interactive visualization of how semantic similarity works with word embeddings in 2D projection space
image: /sims/vector-similarity/vector-similarity.png
og:image: /sims/vector-similarity/vector-similarity.png
twitter:image: /sims/vector-similarity/vector-similarity.png
quality_score: 86
social:
   cards: false
---

# Vector Similarity Visualization

<iframe src="main.html" height="652px" width="100%" scrolling="no"></iframe>

[Run the Vector Similarity Visualization Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This visualization demonstrates how word embeddings capture semantic relationships. Words with similar meanings cluster together in the embedding space, and cosine similarity measures how closely related two words are.

### Iframe Embedding

```html
<iframe src="https://dmccreary.github.io/Digital-Transformation-with-AI-Spring-2026/sims/vector-similarity/main.html"
        height="652px"
        width="100%"
        scrolling="no">
</iframe>
```

## How to Use

1. **Explore Clusters**: Notice how semantically related words cluster together
2. **Click Two Words**: Select any two words to calculate their similarity
3. **Compare Metrics**: View cosine similarity and Euclidean distance
4. **Test Hypotheses**: Try words from same vs. different categories

## Understanding Word Embeddings

| Concept | Description |
|---------|-------------|
| **Embedding** | Dense vector representation of a word |
| **Dimension** | Number of values in the vector (typically 300-1536) |
| **Cosine Similarity** | Measure of angle between vectors (0-1) |
| **Semantic Space** | Geometric space where meaning is encoded |

## Cosine Similarity

Cosine similarity measures the angle between two vectors:

$$\text{similarity} = \cos(\theta) = \frac{\mathbf{A} \cdot \mathbf{B}}{|\mathbf{A}| |\mathbf{B}|}$$

| Value | Interpretation |
|-------|----------------|
| **0.8 - 1.0** | Very similar (synonyms, same category) |
| **0.6 - 0.8** | Related concepts |
| **0.4 - 0.6** | Loosely related |
| **0.0 - 0.4** | Unrelated or opposite |

## Why Semantic Search Outperforms Keyword Matching

| Keyword Search | Semantic Search |
|----------------|-----------------|
| Requires exact word match | Finds conceptually similar content |
| "car" won't find "automobile" | "car" finds "automobile", "vehicle" |
| Fails with synonyms | Understands synonymy |
| No context understanding | Captures meaning |

## Learning Objectives

After using this tool, students should be able to:

- **Understand** (Bloom's L2): Explain how vector similarity captures semantic relationships
- **Apply** (Bloom's L3): Interpret cosine similarity values
- **Analyze** (Bloom's L4): Compare semantic search with keyword matching

## Lesson Plan

### Activity 1: Cluster Analysis (10 minutes)
1. Identify the 5 semantic clusters in the visualization
2. Predict which words will have highest similarity
3. Test your predictions by clicking word pairs

### Activity 2: Cross-Category Comparison (15 minutes)
1. Find the highest similarity between words in DIFFERENT categories
2. Find the lowest similarity between words in the SAME category
3. Explain the results

### Discussion Questions

1. Why do words in the same category have higher similarity?
2. What business problems can semantic search solve that keyword search cannot?
3. How does embedding quality affect RAG system performance?

## Applications in RAG Systems

| Component | Role of Embeddings |
|-----------|-------------------|
| **Document Chunking** | Split documents into embeddable segments |
| **Vector Storage** | Store embeddings in vector database |
| **Query Embedding** | Convert user query to same vector space |
| **Retrieval** | Find chunks with highest similarity to query |
| **Context Assembly** | Provide relevant chunks to LLM |

## Related Concepts

- [Chapter 5: Custom GPTs, Agents, and RAG Systems](../../chapters/05-custom-gpts-agents-rag/index.md)
- Vector Database
- Retrieval Augmented Generation
- Embedding Models

## References

1. Mikolov, T., et al. (2013). Efficient Estimation of Word Representations in Vector Space. *ICLR*.
2. Pennington, J., Socher, R., & Manning, C. (2014). GloVe: Global Vectors for Word Representation. *EMNLP*.
3. Reimers, N., & Gurevych, I. (2019). Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks. *EMNLP*.
