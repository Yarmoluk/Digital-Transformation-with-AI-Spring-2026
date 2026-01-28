---
title: Vector Similarity Visualization
description: Interactive visualization of how semantic similarity works with word embeddings in 2D projection space
image: sims/vector-similarity/vector-similarity.png
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

## Self-Assessment Quiz

Test your understanding of vector similarity and word embeddings.

<div class="upper-alpha" markdown>
**Question 1: What is a word embedding?**

1. A physical object embedded in text
2. A dense numerical vector that represents the meaning of a word
3. A type of font style
4. A grammar checking tool
</div>

??? success "Answer"
    B) A dense numerical vector that represents the meaning of a word - Word embeddings convert words into multi-dimensional vectors where semantic relationships are preserved as geometric relationships.

<div class="upper-alpha" markdown>
**Question 2: What does cosine similarity measure?**

1. The physical distance between two objects
2. The angle between two vectors, indicating how similar their directions are
3. The size of two vectors
4. The color difference between vectors
</div>

??? success "Answer"
    B) The angle between two vectors, indicating how similar their directions are - Cosine similarity measures the cosine of the angle between vectors, with values closer to 1 indicating more similar meanings.

<div class="upper-alpha" markdown>
**Question 3: In a well-trained embedding space, what happens to words with similar meanings?**

1. They are placed far apart
2. They cluster together in the vector space
3. They are deleted
4. They become identical
</div>

??? success "Answer"
    B) They cluster together in the vector space - Words with similar meanings (like "car" and "automobile") are positioned near each other in the embedding space.

<div class="upper-alpha" markdown>
**Question 4: Why does semantic search outperform keyword matching?**

1. Semantic search is always faster
2. Semantic search finds conceptually similar content even without exact word matches
3. Keyword matching is illegal
4. Semantic search uses less computing power
</div>

??? success "Answer"
    B) Semantic search finds conceptually similar content even without exact word matches - Semantic search using embeddings can find documents about "automobiles" when searching for "cars" because it understands meaning, not just word presence.

<div class="upper-alpha" markdown>
**Question 5: How are vector embeddings used in RAG (Retrieval Augmented Generation) systems?**

1. They are not used in RAG
2. They enable finding relevant document chunks based on semantic similarity to user queries
3. They replace the language model
4. They generate random content
</div>

??? success "Answer"
    B) They enable finding relevant document chunks based on semantic similarity to user queries - RAG systems embed both documents and queries into the same vector space, then retrieve chunks with high similarity to provide relevant context to the LLM.
