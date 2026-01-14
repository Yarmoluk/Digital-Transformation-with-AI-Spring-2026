# Quiz 5: Custom GPTs, Agents & RAG

Test your understanding of custom AI solutions, agents, and retrieval-augmented generation.

---

## Questions

### Question 1 (Remember)
**What is a Custom GPT?**

- [ ] A) A completely new language model
- [x] B) A configured version of ChatGPT with specific instructions and knowledge
- [ ] C) An open-source alternative to GPT
- [ ] D) A fine-tuned model

??? success "Answer"
    **B) A configured version of ChatGPT with specific instructions and knowledge** - Custom GPTs are ChatGPT instances configured with custom instructions, uploaded knowledge files, and optional Actions—no coding required.

---

### Question 2 (Remember)
**What does RAG stand for?**

- [ ] A) Rapid AI Generation
- [x] B) Retrieval-Augmented Generation
- [ ] C) Recursive Algorithm Gateway
- [ ] D) Random Access Generator

??? success "Answer"
    **B) Retrieval-Augmented Generation** - RAG combines information retrieval from external knowledge bases with text generation, grounding AI responses in verified information.

---

### Question 3 (Understand)
**Why is RAG important for reducing hallucinations?**

- [ ] A) It uses more tokens
- [ ] B) It increases model size
- [x] C) It grounds responses in retrieved factual information
- [ ] D) It requires no prompting

??? success "Answer"
    **C) It grounds responses in retrieved factual information** - By retrieving relevant documents and using them as context, RAG ensures responses are based on actual sources rather than potentially incorrect model memory.

---

### Question 4 (Understand)
**What is the role of embeddings in a RAG system?**

- [ ] A) To generate images
- [x] B) To represent text as vectors for semantic similarity search
- [ ] C) To encrypt data
- [ ] D) To reduce costs

??? success "Answer"
    **B) To represent text as vectors for semantic similarity search** - Embeddings convert text into numerical vectors that capture semantic meaning, enabling efficient similarity search to find relevant documents.

---

### Question 5 (Apply)
**You want to create an AI assistant that answers questions about your company's 500-page employee handbook. What's the best approach?**

- [ ] A) Copy the entire handbook into every prompt
- [ ] B) Train a new LLM from scratch
- [x] C) Build a RAG system that retrieves relevant sections
- [ ] D) Ignore the handbook

??? success "Answer"
    **C) Build a RAG system that retrieves relevant sections** - RAG efficiently handles large knowledge bases by retrieving only relevant chunks for each query, rather than processing the entire document every time.

---

### Question 6 (Apply)
**You're building a Custom GPT for legal contract review. Which feature would be most valuable?**

- [ ] A) DALL-E image generation
- [x] B) Uploaded knowledge files with contract templates and legal guidelines
- [ ] C) Web browsing capability
- [ ] D) Code interpreter

??? success "Answer"
    **B) Uploaded knowledge files with contract templates and legal guidelines** - Domain-specific knowledge files provide the Custom GPT with accurate reference material for specialized tasks like legal review.

---

### Question 7 (Analyze)
**Compare Custom GPTs with API-based integrations in terms of flexibility and ease of use:**

- [ ] A) Custom GPTs offer more flexibility
- [x] B) Custom GPTs are easier but APIs offer more flexibility
- [ ] C) APIs are easier to use
- [ ] D) They have identical capabilities

??? success "Answer"
    **B) Custom GPTs are easier but APIs offer more flexibility** - Custom GPTs require no coding and are quick to create, but APIs provide more customization, integration options, and control over the user experience.

---

### Question 8 (Analyze)
**What distinguishes AI agents from simple chatbots?**

- [ ] A) Agents use more tokens
- [ ] B) Chatbots are always better
- [x] C) Agents can autonomously execute multi-step tasks and use tools
- [ ] D) There is no difference

??? success "Answer"
    **C) Agents can autonomously execute multi-step tasks and use tools** - AI agents perceive their environment, make decisions, and take actions autonomously, including using tools and chaining operations without human intervention.

---

### Question 9 (Evaluate)
**An organization is choosing between building a Custom GPT versus a full RAG pipeline. They need to query internal documents but have limited technical resources. What would you recommend?**

- [x] A) Start with Custom GPT and uploaded files; migrate to RAG if limitations emerge
- [ ] B) Always build the RAG pipeline first
- [ ] C) Avoid both approaches
- [ ] D) Use neither until they hire developers

??? success "Answer"
    **A) Start with Custom GPT and uploaded files; migrate to RAG if limitations emerge** - Custom GPTs provide a low-code starting point. If document volume, update frequency, or customization needs exceed Custom GPT capabilities, then invest in RAG infrastructure.

---

### Question 10 (Create)
**Design a knowledge management system for a consulting firm with: diverse client projects, frequently updated methodologies, and need for accurate, cited responses.**

- [ ] A) Single Custom GPT with all documents
- [ ] B) ChatGPT without customization
- [x] C) RAG system with vector database, organized knowledge bases by domain, citation tracking
- [ ] D) Manual document search

??? success "Answer"
    **C) RAG system with vector database, organized knowledge bases by domain, citation tracking** - Complex knowledge management requires: vector database for efficient retrieval, organized knowledge structure, and citation capability to verify sources.

---

## Score Interpretation

- **9-10 correct**: Excellent understanding of Custom GPTs and RAG
- **7-8 correct**: Good grasp, review missed concepts
- **5-6 correct**: Fair understanding, revisit chapter sections
- **Below 5**: Re-read Chapter 5 before proceeding

---

[Previous: Quiz 4](quiz-04.md) | [Back to Quizzes](index.md) | [Next: Quiz 6 - API Integration](quiz-06.md)
