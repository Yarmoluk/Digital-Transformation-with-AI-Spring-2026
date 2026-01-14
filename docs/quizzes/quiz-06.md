# Quiz 6: LLM API Integration

Test your understanding of API integration concepts and parameters.

---

## Questions

### Question 1 (Remember)
**What does REST API stand for?**

- [ ] A) Rapid Execution Service Technology
- [x] B) Representational State Transfer Application Programming Interface
- [ ] C) Remote System Transfer API
- [ ] D) Real-time Streaming Technology

??? success "Answer"
    **B) Representational State Transfer Application Programming Interface** - REST is an architectural style for web services that uses standard HTTP methods (GET, POST, etc.) to interact with resources.

---

### Question 2 (Remember)
**What is the purpose of an API key?**

- [ ] A) To encrypt messages
- [ ] B) To increase response speed
- [x] C) To authenticate and identify the calling application
- [ ] D) To reduce token count

??? success "Answer"
    **C) To authenticate and identify the calling application** - API keys verify the identity of applications making requests and track usage for billing and rate limiting purposes.

---

### Question 3 (Understand)
**What does the temperature parameter control in LLM APIs?**

- [ ] A) Processing speed
- [x] B) Randomness/creativity of outputs
- [ ] C) Cost per request
- [ ] D) Maximum context length

??? success "Answer"
    **B) Randomness/creativity of outputs** - Temperature (0-2) controls output variability. Lower values produce more focused, deterministic responses; higher values produce more creative, varied outputs.

---

### Question 4 (Understand)
**What is the relationship between tokens and API pricing?**

- [ ] A) Pricing is fixed regardless of tokens
- [x] B) Costs are typically calculated per 1,000 tokens processed
- [ ] C) Only output tokens are charged
- [ ] D) Tokens have no impact on pricing

??? success "Answer"
    **B) Costs are typically calculated per 1,000 tokens processed** - Most LLM APIs charge based on input and output token counts, with prices varying by model capability. Understanding token usage is essential for cost management.

---

### Question 5 (Apply)
**You need deterministic, reproducible outputs for a compliance application. How should you configure the API?**

- [ ] A) Temperature = 1.5, no seed
- [x] B) Temperature = 0, fixed seed value
- [ ] C) Maximum temperature, random seed
- [ ] D) Default settings

??? success "Answer"
    **B) Temperature = 0, fixed seed value** - Temperature 0 minimizes randomness, and a fixed seed (where supported) ensures identical inputs produce identical outputs for reproducibility.

---

### Question 6 (Apply)
**Your API calls are being rejected with rate limit errors. What's the appropriate response?**

- [ ] A) Send more requests immediately
- [ ] B) Switch to a different model
- [x] C) Implement exponential backoff and request queuing
- [ ] D) Ignore the errors

??? success "Answer"
    **C) Implement exponential backoff and request queuing** - Rate limiting requires backing off (waiting longer between retries) and queuing requests to stay within limits while ensuring all requests eventually complete.

---

### Question 7 (Analyze)
**Compare streaming responses versus standard responses in terms of user experience and complexity:**

- [ ] A) Streaming is simpler to implement
- [ ] B) Standard responses are always faster
- [x] C) Streaming improves perceived speed but adds implementation complexity
- [ ] D) They are identical in all aspects

??? success "Answer"
    **C) Streaming improves perceived speed but adds implementation complexity** - Streaming delivers tokens as they're generated (better UX), but requires handling partial responses and managing connection state (more complex code).

---

### Question 8 (Analyze)
**Why might you choose the OpenAI API over the Anthropic API for a specific project?**

- [ ] A) OpenAI is always cheaper
- [ ] B) Anthropic has no API
- [x] C) Different strengths: ecosystem/plugins (OpenAI) vs. long context/reasoning (Anthropic)
- [ ] D) There is no meaningful difference

??? success "Answer"
    **C) Different strengths: ecosystem/plugins (OpenAI) vs. long context/reasoning (Anthropic)** - API choice depends on requirements: OpenAI offers broader ecosystem and plugins; Anthropic offers longer context and different reasoning characteristics.

---

### Question 9 (Evaluate)
**Your team is debating API cost optimization strategies. Which approach provides the best balance of cost and quality?**

- [ ] A) Always use the cheapest model
- [ ] B) Always use the most expensive model
- [x] C) Route simple queries to cheaper models; use premium models for complex tasks
- [ ] D) Ignore costs entirely

??? success "Answer"
    **C) Route simple queries to cheaper models; use premium models for complex tasks** - Intelligent routing matches query complexity to model capability, using efficient models for simple tasks and reserving expensive models for tasks that require them.

---

### Question 10 (Create)
**Design an API integration architecture for a high-volume customer service application with: variable query complexity, cost constraints, and uptime requirements.**

- [ ] A) Single API endpoint, no caching
- [ ] B) Premium model only, no optimization
- [x] C) Load balancing, model routing by complexity, response caching, fallback providers
- [ ] D) Manual API calls

??? success "Answer"
    **C) Load balancing, model routing by complexity, response caching, fallback providers** - Enterprise architecture requires: load balancing (scale), routing (cost optimization), caching (efficiency), and fallbacks (reliability).

---

## Score Interpretation

- **9-10 correct**: Excellent understanding of API integration
- **7-8 correct**: Good grasp, review missed concepts
- **5-6 correct**: Fair understanding, revisit chapter sections
- **Below 5**: Re-read Chapter 6 before proceeding

---

[Previous: Quiz 5](quiz-05.md) | [Back to Quizzes](index.md) | [Next: Quiz 7 - Multimodal AI](quiz-07.md)
