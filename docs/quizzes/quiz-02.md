# Quiz 2: LLM Architecture

Test your understanding of large language model architecture and training concepts.

---

## Questions

### Question 1 (Remember)
**What is a token in the context of large language models?**

<div class="upper-alpha" markdown>
1. A security credential
1. The basic unit of text processed by the model
1. A type of neural network
1. An API parameter
</div>


??? success "Answer"
    **B) The basic unit of text processed by the model** - Tokens are typically words or subwords that LLMs process. The model predicts the next most likely token based on the input sequence.

---

### Question 2 (Remember)
**What neural network architecture underlies most modern LLMs?**

<div class="upper-alpha" markdown>
1. Convolutional Neural Network (CNN)
1. Recurrent Neural Network (RNN)
1. Transformer
1. Perceptron
</div>


??? success "Answer"
    **C) Transformer** - The transformer architecture, introduced in 2017's "Attention is All You Need" paper, is the foundation of GPT, Claude, Gemini, and other modern LLMs.

---

### Question 3 (Understand)
**What is the primary function of the attention mechanism in transformers?**

<div class="upper-alpha" markdown>
1. To reduce model size
1. To allow the model to focus on relevant parts of input
1. To speed up training
1. To encrypt data
</div>


??? success "Answer"
    **B) To allow the model to focus on relevant parts of input** - Attention mechanisms enable the model to weigh the importance of different input tokens when generating each output token, capturing relationships regardless of distance.

---

### Question 4 (Understand)
**What does RLHF stand for and why is it important?**

<div class="upper-alpha" markdown>
1. Rapid Learning from Historical Files - speeds up training
1. Reinforcement Learning from Human Feedback - aligns outputs with human preferences
1. Recursive Language Handling Framework - improves grammar
1. Real-time Learning for Higher Fidelity - improves accuracy
</div>


??? success "Answer"
    **B) Reinforcement Learning from Human Feedback - aligns outputs with human preferences** - RLHF is a training method where human evaluators rate model outputs, and the model learns to produce responses that align with human preferences.

---

### Question 5 (Apply)
**If a model has a 128K token context window and you want to process a 200-page document (~100K tokens), what approach should you use?**

<div class="upper-alpha" markdown>
1. Process the document directly—it fits within the context window
1. Use a model with a larger context window
1. Split the document and process separately
1. Convert to images first
</div>


??? success "Answer"
    **A) Process the document directly—it fits within the context window** - A 100K token document fits within a 128K token context window. Models like GPT-4 Turbo (128K) and Claude 3 (200K) can handle long documents directly.

---

### Question 6 (Apply)
**You notice that LLM responses are too predictable and lack creativity. Which parameter should you adjust?**

<div class="upper-alpha" markdown>
1. Increase max tokens
1. Increase temperature
1. Decrease context window
1. Add more system prompts
</div>


??? success "Answer"
    **B) Increase temperature** - Temperature controls randomness. Higher values (0.7-1.0) produce more creative, varied outputs. Lower values (0-0.3) produce more consistent, predictable responses.

---

### Question 7 (Analyze)
**Compare pre-training and fine-tuning in terms of data requirements and purpose:**

<div class="upper-alpha" markdown>
1. Both require the same amount of data
1. Fine-tuning requires more data than pre-training
1. Pre-training uses massive general data; fine-tuning uses smaller task-specific data
1. Pre-training is optional; fine-tuning is required
</div>


??? success "Answer"
    **C) Pre-training uses massive general data; fine-tuning uses smaller task-specific data** - Pre-training on billions of tokens teaches general language understanding. Fine-tuning with smaller datasets adapts the model to specific tasks or domains.

---

### Question 8 (Analyze)
**Why does multi-head attention provide advantages over single-head attention?**

<div class="upper-alpha" markdown>
1. It requires less computation
1. It uses fewer parameters
1. It captures different types of relationships simultaneously
1. It eliminates the need for training
</div>


??? success "Answer"
    **C) It captures different types of relationships simultaneously** - Multiple attention heads can learn different aspects of relationships (syntax, semantics, coreference) in parallel, providing richer representations.

---

### Question 9 (Evaluate)
**A company wants to process sensitive legal documents. They're comparing a 7B parameter open-source model versus GPT-4. What is the most important consideration?**

<div class="upper-alpha" markdown>
1. The open-source model is always better for privacy
1. GPT-4 is always more accurate
1. Privacy requirements, accuracy needs, and deployment options must be balanced
1. Parameter count is the only factor that matters
</div>


??? success "Answer"
    **C) Privacy requirements, accuracy needs, and deployment options must be balanced** - The decision involves trade-offs: open-source allows on-premise deployment for privacy, but may have lower accuracy. GPT-4 offers better performance but sends data to external servers.

---

### Question 10 (Create)
**You need to design a system that generates consistent customer support responses. Which combination of architecture decisions is most appropriate?**

<div class="upper-alpha" markdown>
1. High temperature, no system prompt, minimal context
1. Random temperature, long context, no fine-tuning
1. Low temperature, structured system prompt, relevant context, possibly fine-tuned
1. Maximum tokens, no constraints, creative mode
</div>


??? success "Answer"
    **C) Low temperature, structured system prompt, relevant context, possibly fine-tuned** - Consistent responses require low temperature (predictability), clear system prompts (behavior guidance), relevant context (accuracy), and potentially fine-tuning on support examples.

---

## Score Interpretation

- **9-10 correct**: Excellent understanding of LLM architecture
- **7-8 correct**: Good grasp, review missed concepts
- **5-6 correct**: Fair understanding, revisit chapter sections
- **Below 5**: Re-read Chapter 2 before proceeding

---

[Previous: Quiz 1](quiz-01.md) | [Back to Quizzes](index.md) | [Next: Quiz 3 - AI Platforms](quiz-03.md)
