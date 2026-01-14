# Frequently Asked Questions

This FAQ addresses common questions about the SEIS 666: Digital Transformation 2.0 with Generative AI course.

---

## Course Overview

### What is this course about?

This graduate-level course explores how generative AI technologies are revolutionizing digital transformation. You'll learn to apply AI tools like ChatGPT, Claude, and Gemini to business challenges, design AI governance frameworks, and develop strategies for organizational AI adoption.

### Who should take this course?

This course is designed for graduate students in software engineering, information systems, business analytics, and technology management. It's ideal for professionals seeking to lead AI initiatives in their organizations.

### What are the prerequisites?

No programming experience is required. You should have basic technology literacy (understanding of internet, cloud services, web applications) and be willing to create free accounts with ChatGPT, Claude, Perplexity, and Gemini before the course begins.

### How is this course different from other AI courses?

Unlike technical AI courses focused on coding and model development, this course emphasizes strategic application of AI in business contexts. You'll gain hands-on experience with commercial AI platforms while learning governance, ethics, and organizational transformation frameworks.

---

## AI Platforms & Tools

### Which AI platforms will we use?

You'll work with multiple platforms including:

- **ChatGPT** (OpenAI) - conversation, analysis, custom GPTs
- **Claude** (Anthropic) - reasoning, analysis, long documents
- **Gemini** (Google) - multimodal tasks, search integration
- **Perplexity AI** - research and search-augmented generation
- **DALL-E/Midjourney** - image generation

### Do I need to pay for AI platform subscriptions?

Free tiers of all platforms are sufficient for course requirements. However, students often find value in ChatGPT Plus ($20/month) for access to GPT-4 and custom GPTs.

### What is the difference between ChatGPT, Claude, and Gemini?

Each platform has distinct strengths:

- **ChatGPT**: Best for creative tasks, has custom GPT ecosystem
- **Claude**: Excels at analysis, handles longer documents, strong reasoning
- **Gemini**: Native multimodal capabilities, Google ecosystem integration

### Can I use open-source models like Llama instead?

Yes, we discuss open-source models and their trade-offs. However, hands-on labs focus on commercial platforms due to their accessibility and enterprise relevance.

---

## Technical Concepts

### What is a Large Language Model (LLM)?

An LLM is a neural network trained on massive text datasets to understand and generate human language. Examples include GPT-4, Claude, and Gemini. They predict the next most likely token based on input context.

### What is prompt engineering?

Prompt engineering is the practice of designing effective inputs to get optimal outputs from AI models. Techniques include zero-shot prompting, few-shot learning, chain-of-thought reasoning, and system prompt design.

### What is the difference between zero-shot and few-shot prompting?

- **Zero-shot**: Ask the model to perform a task with no examples
- **Few-shot**: Provide 2-5 examples of the desired input/output pattern

Few-shot typically produces more consistent results for complex or specialized tasks.

### What is RAG (Retrieval-Augmented Generation)?

RAG combines information retrieval with text generation. Instead of relying solely on trained knowledge, the model retrieves relevant documents from a knowledge base and uses them to generate accurate, grounded responses.

### What are embeddings and why do they matter?

Embeddings are numerical representations of text that capture semantic meaning. They enable similarity search, clustering, and RAG systems. When you search for "similar documents," embeddings make that possible.

### What is the context window?

The context window is the maximum amount of text a model can process in a single interaction. GPT-4 Turbo has a 128K context window (~300 pages), while Claude 3 offers 200K tokens.

### What is temperature in API parameters?

Temperature controls randomness in outputs. Lower values (0-0.3) produce consistent, focused responses. Higher values (0.7-1.0) produce more creative, varied outputs.

---

## APIs & Integration

### Do I need to know how to code?

No coding is required. The API labs provide guided exercises, and we focus on conceptual understanding rather than development skills. That said, basic familiarity with JSON and REST concepts is helpful.

### What is an API?

An Application Programming Interface (API) allows software applications to communicate. LLM APIs let you send prompts programmatically and receive generated responses, enabling integration into applications and workflows.

### How much do API calls cost?

Costs vary by model and usage:

- GPT-4 Turbo: ~$0.01-0.03 per 1K tokens
- Claude 3 Sonnet: ~$0.003-0.015 per 1K tokens
- Embeddings: ~$0.0001 per 1K tokens

Course labs typically cost less than $5-10 total.

### What is the difference between using ChatGPT and the OpenAI API?

ChatGPT is a consumer product with a chat interface. The API provides programmatic access for building applications, automating workflows, and integrating AI into existing systems.

---

## Custom GPTs & Agents

### What is a Custom GPT?

A Custom GPT is a specialized version of ChatGPT configured with specific instructions, knowledge files, and optional external integrations (Actions). You can create GPTs for particular use cases without coding.

### What are AI Agents?

AI Agents are systems that autonomously perform tasks by perceiving their environment and taking actions to achieve goals. They can chain multiple operations, use tools, and make decisions.

### How do Custom GPTs differ from API integrations?

Custom GPTs are no-code solutions within ChatGPT's ecosystem. API integrations require development work but offer more flexibility, customization, and can be embedded in any application.

---

## Multimodal AI

### What is multimodal AI?

Multimodal AI can process and generate multiple types of content—text, images, audio, and video—within a single system. GPT-4 Vision and Gemini are examples.

### How does text-to-image generation work?

Models like DALL-E and Stable Diffusion use diffusion processes: they start with random noise and iteratively refine it based on text descriptions until a coherent image emerges.

### What is GPT-4 Vision?

GPT-4 Vision is GPT-4's ability to analyze images. You can upload images and ask questions about them, extract text, or get descriptions and analysis.

### Will we create videos with AI?

We discuss text-to-video technologies like Sora, but hands-on work focuses on more mature text and image capabilities.

---

## Governance & Strategy

### What is a GAI Center of Excellence (GAICoE)?

A GAICoE is an organizational unit dedicated to developing and scaling generative AI capabilities. It provides governance, best practices, training, and support for AI initiatives across the organization.

### What should a GAICoE Charter include?

Key elements include:

- Mission and objectives
- Scope of services
- Governance structure
- Roles and responsibilities
- Success metrics
- Resource requirements
- Stakeholder engagement plan

### How do you measure AI ROI?

AI ROI can include:

- Cost savings (automation, efficiency)
- Revenue enhancement (new capabilities, better decisions)
- Risk reduction (compliance, accuracy)
- Time savings (faster processes)

The course teaches frameworks for identifying and quantifying these benefits.

### What is AI governance?

AI governance encompasses the policies, processes, and organizational structures that ensure AI is developed and used responsibly. It covers data privacy, bias mitigation, accountability, and compliance.

---

## Ethics & Responsible AI

### What is AI bias?

AI bias refers to systematic errors in AI outputs that reflect prejudices in training data or algorithm design. It can lead to unfair outcomes for certain groups.

### What are AI hallucinations?

Hallucinations occur when AI generates plausible-sounding but factually incorrect information. They result from the model predicting likely text rather than verified facts.

### How do you mitigate hallucinations?

Strategies include:

- RAG (grounding in verified sources)
- Lower temperature settings
- Explicit fact-checking instructions
- Human review processes
- Source citation requirements

### What is red-teaming in AI?

Red-teaming involves deliberately testing AI systems to find vulnerabilities, biases, or failure modes. Teams try to "break" the system to improve its safety and robustness.

### What regulations apply to AI?

Key regulations include:

- **EU AI Act**: Risk-based framework for AI in Europe
- **GDPR**: Data privacy requirements
- Industry-specific regulations (healthcare, finance)
- Emerging state/national AI policies

---

## Future of Work

### Will AI take my job?

AI is more likely to transform jobs than eliminate them entirely. The course prepares you to work alongside AI, leveraging it to enhance your capabilities rather than compete against it.

### What skills will be most valuable in an AI-augmented workplace?

High-value skills include:

- Prompt engineering and AI literacy
- Critical evaluation of AI outputs
- Strategic thinking and problem framing
- Domain expertise
- Human skills (empathy, creativity, judgment)

### How should organizations prepare their workforce for AI?

Key strategies include:

- AI literacy training for all employees
- Reskilling programs for affected roles
- Creating human-AI collaboration workflows
- Identifying new roles AI will create
- Building a culture of continuous learning

---

## Course Project

### What is the capstone project?

The capstone project is a comprehensive AI transformation strategy for a real organization. It integrates course concepts including maturity assessment, use case prioritization, governance design, implementation roadmap, and change management.

### Can I use my own organization for the project?

Yes, using your employer is encouraged (with appropriate confidentiality considerations). You may also use a realistic fictional organization.

### What makes a strong project?

Strong projects demonstrate:

- Deep organizational analysis
- Realistic use case prioritization
- Comprehensive governance framework
- Feasible implementation roadmap
- Thoughtful ethical considerations
- Clear success metrics

---

## Practical Tips

### How should I prepare before the course starts?

1. Create free accounts with ChatGPT, Claude, Gemini, and Perplexity
2. Explore each platform with basic prompts
3. Review the course syllabus and learning objectives
4. Identify an organization you might use for your project

### How can I get the most out of this course?

- Experiment with AI platforms beyond class requirements
- Apply concepts to your own work immediately
- Engage in discussions and share experiences
- Start your project early
- Build a prompt library for your common tasks

### What resources are available for continued learning?

- Platform documentation (OpenAI, Anthropic, Google)
- Prompt engineering guides
- AI research papers and blogs
- Professional communities and conferences
- Course textbook and supplementary materials

---

## Technical Support

### The AI gave me an incorrect answer. What should I do?

This is expected behavior—AI models can hallucinate. Always verify important information, use multiple sources, and apply critical thinking. This is a key course learning outcome.

### My API calls aren't working. What should I check?

Common issues include:

- Invalid or expired API key
- Exceeded rate limits
- Insufficient account balance
- Incorrect endpoint URL
- Malformed request body

### Can I use AI to complete assignments?

AI tools can assist with learning and exploration, but submitted work must represent your own understanding and analysis. Plagiarism policies apply. When in doubt, ask the instructor.

---

*Have a question not answered here? Contact the instructor or post in the course discussion forum.*
