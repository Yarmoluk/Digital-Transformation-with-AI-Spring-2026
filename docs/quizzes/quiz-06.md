# Quiz 6: LLM API Integration

Test your understanding of API integration concepts and parameters.

---

## Questions

### Question 1 (Remember)
**What does REST API stand for?**

<div class="upper-alpha" markdown>
1. Rapid Execution Service Technology
1. Representational State Transfer Application Programming Interface
1. Remote System Transfer API
1. Real-time Streaming Technology
</div>


??? success "Answer"
    **B) Representational State Transfer Application Programming Interface** - REST is an architectural style for web services that uses standard HTTP methods (GET, POST, etc.) to interact with resources.

---

### Question 2 (Remember)
**What is the purpose of an API key?**

<div class="upper-alpha" markdown>
1. To encrypt messages
1. To increase response speed
1. To authenticate and identify the calling application
1. To reduce token count
</div>


??? success "Answer"
    **C) To authenticate and identify the calling application** - API keys verify the identity of applications making requests and track usage for billing and rate limiting purposes.

---

### Question 3 (Understand)
**What does the temperature parameter control in LLM APIs?**

<div class="upper-alpha" markdown>
1. Processing speed
1. Randomness/creativity of outputs
1. Cost per request
1. Maximum context length
</div>


??? success "Answer"
    **B) Randomness/creativity of outputs** - Temperature (0-2) controls output variability. Lower values produce more focused, deterministic responses; higher values produce more creative, varied outputs.

---

### Question 4 (Understand)
**What is the relationship between tokens and API pricing?**

<div class="upper-alpha" markdown>
1. Pricing is fixed regardless of tokens
1. Costs are typically calculated per 1,000 tokens processed
1. Only output tokens are charged
1. Tokens have no impact on pricing
</div>


??? success "Answer"
    **B) Costs are typically calculated per 1,000 tokens processed** - Most LLM APIs charge based on input and output token counts, with prices varying by model capability. Understanding token usage is essential for cost management.

---

### Question 5 (Apply)
**You need deterministic, reproducible outputs for a compliance application. How should you configure the API?**

<div class="upper-alpha" markdown>
1. Temperature = 1.5, no seed
1. Temperature = 0, fixed seed value
1. Maximum temperature, random seed
1. Default settings
</div>


??? success "Answer"
    **B) Temperature = 0, fixed seed value** - Temperature 0 minimizes randomness, and a fixed seed (where supported) ensures identical inputs produce identical outputs for reproducibility.

---

### Question 6 (Apply)
**Your API calls are being rejected with rate limit errors. What's the appropriate response?**

<div class="upper-alpha" markdown>
1. Send more requests immediately
1. Switch to a different model
1. Implement exponential backoff and request queuing
1. Ignore the errors
</div>


??? success "Answer"
    **C) Implement exponential backoff and request queuing** - Rate limiting requires backing off (waiting longer between retries) and queuing requests to stay within limits while ensuring all requests eventually complete.

---

### Question 7 (Analyze)
**Compare streaming responses versus standard responses in terms of user experience and complexity:**

<div class="upper-alpha" markdown>
1. Streaming is simpler to implement
1. Standard responses are always faster
1. Streaming improves perceived speed but adds implementation complexity
1. They are identical in all aspects
</div>


??? success "Answer"
    **C) Streaming improves perceived speed but adds implementation complexity** - Streaming delivers tokens as they're generated (better UX), but requires handling partial responses and managing connection state (more complex code).

---

### Question 8 (Analyze)
**Why might you choose the OpenAI API over the Anthropic API for a specific project?**

<div class="upper-alpha" markdown>
1. OpenAI is always cheaper
1. Anthropic has no API
1. Different strengths: ecosystem/plugins (OpenAI) vs. long context/reasoning (Anthropic)
1. There is no meaningful difference
</div>


??? success "Answer"
    **C) Different strengths: ecosystem/plugins (OpenAI) vs. long context/reasoning (Anthropic)** - API choice depends on requirements: OpenAI offers broader ecosystem and plugins; Anthropic offers longer context and different reasoning characteristics.

---

### Question 9 (Evaluate)
**Your team is debating API cost optimization strategies. Which approach provides the best balance of cost and quality?**

<div class="upper-alpha" markdown>
1. Always use the cheapest model
1. Always use the most expensive model
1. Route simple queries to cheaper models; use premium models for complex tasks
1. Ignore costs entirely
</div>


??? success "Answer"
    **C) Route simple queries to cheaper models; use premium models for complex tasks** - Intelligent routing matches query complexity to model capability, using efficient models for simple tasks and reserving expensive models for tasks that require them.

---

### Question 10 (Create)
**Design an API integration architecture for a high-volume customer service application with: variable query complexity, cost constraints, and uptime requirements.**

<div class="upper-alpha" markdown>
1. Single API endpoint, no caching
1. Premium model only, no optimization
1. Load balancing, model routing by complexity, response caching, fallback providers
1. Manual API calls
</div>


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
