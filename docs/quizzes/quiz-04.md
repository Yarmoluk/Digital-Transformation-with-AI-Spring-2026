# Quiz 4: Prompt Engineering

Test your understanding of prompt engineering techniques and strategies.

---

## Questions

### Question 1 (Remember)
**What is zero-shot prompting?**

- [x] A) Asking the model to perform a task without providing examples
- [ ] B) Using no system prompt
- [ ] C) Generating zero tokens
- [ ] D) A technique that always fails

??? success "Answer"
    **A) Asking the model to perform a task without providing examples** - Zero-shot prompting relies on the model's pre-trained knowledge without task-specific examples. The model must understand the task from instructions alone.

---

### Question 2 (Remember)
**What is chain-of-thought prompting?**

- [ ] A) Linking multiple prompts together
- [x] B) Encouraging the model to show step-by-step reasoning
- [ ] C) Using multiple models in sequence
- [ ] D) A type of system prompt

??? success "Answer"
    **B) Encouraging the model to show step-by-step reasoning** - Chain-of-thought prompting asks the model to "think step by step," which improves accuracy on complex reasoning tasks by making intermediate steps explicit.

---

### Question 3 (Understand)
**Why does few-shot prompting often outperform zero-shot for specialized tasks?**

- [ ] A) It uses more tokens
- [ ] B) It costs more
- [x] C) Examples demonstrate the desired pattern and format
- [ ] D) It always produces longer outputs

??? success "Answer"
    **C) Examples demonstrate the desired pattern and format** - Few-shot examples show the model exactly what input/output patterns you expect, reducing ambiguity and improving consistency for specialized tasks.

---

### Question 4 (Understand)
**What is the purpose of a system prompt?**

- [ ] A) To increase token count
- [x] B) To define the AI's behavior, persona, and constraints
- [ ] C) To bypass safety features
- [ ] D) To reduce costs

??? success "Answer"
    **B) To define the AI's behavior, persona, and constraints** - System prompts establish context, role, communication style, and boundaries that persist throughout the conversation.

---

### Question 5 (Apply)
**You need consistent JSON output from an LLM. Which technique is most effective?**

- [ ] A) Ask politely for JSON
- [x] B) Provide JSON schema and examples, specify "respond only with valid JSON"
- [ ] C) Use maximum temperature
- [ ] D) Avoid all instructions

??? success "Answer"
    **B) Provide JSON schema and examples, specify "respond only with valid JSON"** - Structured output requires clear format specification, examples of the expected structure, and explicit instructions to output only the specified format.

---

### Question 6 (Apply)
**A user complains that AI responses are too verbose. What prompt modification would help?**

- [ ] A) "Give me more details"
- [x] B) "Respond in 2-3 sentences maximum"
- [ ] C) Remove the system prompt
- [ ] D) Increase temperature

??? success "Answer"
    **B) "Respond in 2-3 sentences maximum"** - Explicit length constraints in the prompt directly address verbosity. Being specific about desired output length helps control response size.

---

### Question 7 (Analyze)
**Compare tree-of-thought with chain-of-thought prompting:**

- [ ] A) They are identical techniques
- [ ] B) Tree-of-thought is simpler
- [x] C) Tree-of-thought explores multiple reasoning branches before selecting
- [ ] D) Chain-of-thought explores more options

??? success "Answer"
    **C) Tree-of-thought explores multiple reasoning branches before selecting** - Chain-of-thought follows a single reasoning path, while tree-of-thought explores multiple branches and evaluates alternatives before choosing the best approach.

---

### Question 8 (Analyze)
**Why might a prompt template with placeholders be preferable to writing prompts from scratch?**

- [ ] A) Templates are always cheaper
- [ ] B) Templates require no customization
- [x] C) Templates ensure consistency and encode best practices
- [ ] D) Templates eliminate the need for prompt engineering

??? success "Answer"
    **C) Templates ensure consistency and encode best practices** - Templates standardize effective prompt patterns, making them reusable, consistent, and incorporating lessons learned from iteration.

---

### Question 9 (Evaluate)
**Which scenario would benefit MOST from self-consistency prompting?**

- [ ] A) Simple factual questions
- [ ] B) Creative writing
- [x] C) Complex reasoning with multiple valid approaches
- [ ] D) Generating random content

??? success "Answer"
    **C) Complex reasoning with multiple valid approaches** - Self-consistency generates multiple reasoning paths and selects the most common answer, which is most valuable when problems have multiple solution approaches.

---

### Question 10 (Create)
**Design a prompt strategy for a customer service bot that must: (1) maintain a friendly tone, (2) provide accurate product information, (3) escalate complex issues.**

- [ ] A) Just use zero-shot with "be helpful"
- [ ] B) Maximum temperature for creativity
- [x] C) System prompt defining persona and escalation rules, few-shot examples of good responses, structured output for escalation flags
- [ ] D) No prompt engineering needed

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
