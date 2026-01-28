# Quiz 4: Prompt Engineering

Test your understanding of prompt engineering techniques and strategies.

---

## Questions

### Question 1 (Remember)
**What is zero-shot prompting?**

<div class="upper-alpha" markdown>
1. Asking the model to perform a task without providing examples
1. Using no system prompt
1. Generating zero tokens
1. A technique that always fails
</div>


??? success "Answer"
    **A) Asking the model to perform a task without providing examples** - Zero-shot prompting relies on the model's pre-trained knowledge without task-specific examples. The model must understand the task from instructions alone.

---

### Question 2 (Remember)
**What is chain-of-thought prompting?**

<div class="upper-alpha" markdown>
1. Linking multiple prompts together
1. Encouraging the model to show step-by-step reasoning
1. Using multiple models in sequence
1. A type of system prompt
</div>


??? success "Answer"
    **B) Encouraging the model to show step-by-step reasoning** - Chain-of-thought prompting asks the model to "think step by step," which improves accuracy on complex reasoning tasks by making intermediate steps explicit.

---

### Question 3 (Understand)
**Why does few-shot prompting often outperform zero-shot for specialized tasks?**

<div class="upper-alpha" markdown>
1. It uses more tokens
1. It costs more
1. Examples demonstrate the desired pattern and format
1. It always produces longer outputs
</div>


??? success "Answer"
    **C) Examples demonstrate the desired pattern and format** - Few-shot examples show the model exactly what input/output patterns you expect, reducing ambiguity and improving consistency for specialized tasks.

---

### Question 4 (Understand)
**What is the purpose of a system prompt?**

<div class="upper-alpha" markdown>
1. To increase token count
1. To define the AI's behavior, persona, and constraints
1. To bypass safety features
1. To reduce costs
</div>


??? success "Answer"
    **B) To define the AI's behavior, persona, and constraints** - System prompts establish context, role, communication style, and boundaries that persist throughout the conversation.

---

### Question 5 (Apply)
**You need consistent JSON output from an LLM. Which technique is most effective?**

<div class="upper-alpha" markdown>
1. Ask politely for JSON
1. Provide JSON schema and examples, specify "respond only with valid JSON"
1. Use maximum temperature
1. Avoid all instructions
</div>


??? success "Answer"
    **B) Provide JSON schema and examples, specify "respond only with valid JSON"** - Structured output requires clear format specification, examples of the expected structure, and explicit instructions to output only the specified format.

---

### Question 6 (Apply)
**A user complains that AI responses are too verbose. What prompt modification would help?**

- "Give me more details"
- "Respond in 2-3 sentences maximum"
<div class="upper-alpha" markdown>
1. Remove the system prompt
1. Increase temperature
</div>


??? success "Answer"
    **B) "Respond in 2-3 sentences maximum"** - Explicit length constraints in the prompt directly address verbosity. Being specific about desired output length helps control response size.

---

### Question 7 (Analyze)
**Compare tree-of-thought with chain-of-thought prompting:**

<div class="upper-alpha" markdown>
1. They are identical techniques
1. Tree-of-thought is simpler
1. Tree-of-thought explores multiple reasoning branches before selecting
1. Chain-of-thought explores more options
</div>


??? success "Answer"
    **C) Tree-of-thought explores multiple reasoning branches before selecting** - Chain-of-thought follows a single reasoning path, while tree-of-thought explores multiple branches and evaluates alternatives before choosing the best approach.

---

### Question 8 (Analyze)
**Why might a prompt template with placeholders be preferable to writing prompts from scratch?**

<div class="upper-alpha" markdown>
1. Templates are always cheaper
1. Templates require no customization
1. Templates ensure consistency and encode best practices
1. Templates eliminate the need for prompt engineering
</div>


??? success "Answer"
    **C) Templates ensure consistency and encode best practices** - Templates standardize effective prompt patterns, making them reusable, consistent, and incorporating lessons learned from iteration.

---

### Question 9 (Evaluate)
**Which scenario would benefit MOST from self-consistency prompting?**

<div class="upper-alpha" markdown>
1. Simple factual questions
1. Creative writing
1. Complex reasoning with multiple valid approaches
1. Generating random content
</div>


??? success "Answer"
    **C) Complex reasoning with multiple valid approaches** - Self-consistency generates multiple reasoning paths and selects the most common answer, which is most valuable when problems have multiple solution approaches.

---

### Question 10 (Create)
**Design a prompt strategy for a customer service bot that must: (1) maintain a friendly tone, (2) provide accurate product information, (3) escalate complex issues.**

<div class="upper-alpha" markdown>
1. Just use zero-shot with "be helpful"
1. Maximum temperature for creativity
1. System prompt defining persona and escalation rules, few-shot examples of good responses, structured output for escalation flags
1. No prompt engineering needed
</div>


??? success "Answer"
    **C) System prompt defining persona and escalation rules, few-shot examples of good responses, structured output for escalation flags** - This combines multiple techniques: system prompt for behavior, few-shot for quality patterns, and structured output for actionable escalation.

---

## Score Interpretation

- **9-10 correct**: Excellent understanding of prompt engineering
- **7-8 correct**: Good grasp, review missed concepts
- **5-6 correct**: Fair understanding, revisit chapter sections
- **Below 5**: Re-read Chapter 4 before proceeding

---

[Previous: Quiz 3](quiz-03.md) | [Back to Quizzes](index.md) | [Next: Quiz 5 - Custom GPTs & RAG](quiz-05.md)
