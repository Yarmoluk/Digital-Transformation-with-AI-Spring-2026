# Learning Graph Mermaid Diagram

This page provides a visual representation of the SEIS 666 learning graph using Mermaid diagrams.

## High-Level Taxonomy Overview

This diagram shows the 12 taxonomy categories and their primary relationships:

```mermaid
flowchart TD
    subgraph FOUND["Foundation Concepts"]
        F1[Digital Transformation]
        F2[Artificial Intelligence]
    end

    subgraph ARCH["LLM Architecture"]
        A1[Large Language Models]
        A2[Transformer Architecture]
        A3[Attention Mechanism]
        A4[Embeddings]
    end

    subgraph PLAT["AI Platforms"]
        P1[OpenAI/GPT-4]
        P2[Anthropic/Claude]
        P3[Google Gemini]
        P4[Open-Source Models]
    end

    subgraph PROMPT["Prompt Engineering"]
        PR1[Zero-Shot Prompting]
        PR2[Few-Shot Prompting]
        PR3[Chain-of-Thought]
        PR4[System Prompts]
    end

    subgraph CUSTOM["Custom Solutions"]
        C1[Custom GPT]
        C2[AI Agents]
        C3[RAG]
        C4[Vector Database]
    end

    subgraph API["API Integration"]
        AP1[REST API]
        AP2[OpenAI API]
        AP3[API Parameters]
    end

    subgraph MULTI["Multimodal AI"]
        M1[Text-to-Image]
        M2[Vision Capabilities]
        M3[Audio AI]
    end

    subgraph GOV["Governance"]
        G1[GAI Center of Excellence]
        G2[AI Strategy]
        G3[Change Management]
    end

    subgraph ETHICS["Ethics"]
        E1[Responsible AI]
        E2[AI Bias]
        E3[Data Privacy]
    end

    subgraph WORK["Workforce"]
        W1[Future of Work]
        W2[Human-AI Collaboration]
        W3[Skill Transformation]
    end

    subgraph BIZ["Business Applications"]
        B1[AI Use Cases]
        B2[Value Mapping]
        B3[Industry Applications]
    end

    subgraph ADV["Advanced Topics"]
        AD1[AI Transformation]
        AD2[Converging Technologies]
        AD3[Capstone Project]
    end

    %% Primary Learning Paths
    F2 --> ARCH
    ARCH --> PLAT
    PLAT --> PROMPT
    PROMPT --> CUSTOM
    ARCH --> API
    ARCH --> MULTI

    F1 --> GOV
    GOV --> ETHICS
    F2 --> ETHICS

    F1 --> WORK
    F2 --> WORK

    F1 --> BIZ
    F2 --> BIZ

    GOV --> ADV
    BIZ --> ADV
    WORK --> ADV

    style FOUND fill:#F08080
    style ARCH fill:#FFDAB9
    style PLAT fill:#FFFFE0
    style PROMPT fill:#F0FFF0
    style CUSTOM fill:#98FB98
    style API fill:#AFEEEE
    style MULTI fill:#B0E0E6
    style GOV fill:#E6E6FA
    style ETHICS fill:#FFF0F5
    style WORK fill:#D8BFD8
    style BIZ fill:#FFE4E1
    style ADV fill:#DDA0DD
```

## Core Learning Path: AI Fundamentals

```mermaid
flowchart LR
    AI[Artificial Intelligence] --> ML[Machine Learning]
    ML --> DL[Deep Learning]
    DL --> NN[Neural Networks]
    DL --> GenAI[Generative AI]
    GenAI --> LLM[Large Language Models]
    LLM --> Trans[Transformer Architecture]
    Trans --> Attn[Attention Mechanism]

    style AI fill:#F08080,color:white
    style GenAI fill:#F08080,color:white
    style LLM fill:#FFDAB9
    style Trans fill:#FFDAB9
    style Attn fill:#FFDAB9
```

## Prompt Engineering Learning Path

```mermaid
flowchart TD
    PE[Prompt Engineering] --> ZS[Zero-Shot Prompting]
    ZS --> FS[Few-Shot Prompting]
    FS --> ICL[In-Context Learning]
    ICL --> CoT[Chain-of-Thought]
    CoT --> ToT[Tree-of-Thought]

    PE --> SP[System Prompt]
    SP --> UP[User Prompt]
    SP --> PD[Persona Design]

    PE --> OF[Output Formatting]
    OF --> SO[Structured Output]
    SO --> JSON[JSON Output]
    SO --> MD[Markdown Output]

    style PE fill:#F0FFF0
    style CoT fill:#F0FFF0
    style ToT fill:#F0FFF0
```

## Platform Ecosystem

```mermaid
flowchart TD
    GenAI[Generative AI] --> OpenAI[OpenAI]
    GenAI --> Anthropic[Anthropic]
    GenAI --> Google[Google Gemini]
    GenAI --> OSS[Open-Source Models]

    OpenAI --> GPT4[GPT-4]
    GPT4 --> GPT4T[GPT-4 Turbo]
    GPT4 --> GPT4o[GPT-4o]
    GPT4 --> ChatGPT[ChatGPT]

    Anthropic --> Claude[Claude]
    Claude --> Sonnet[Claude 3 Sonnet]
    Claude --> Opus[Claude 3 Opus]

    Google --> Pro[Gemini Pro]
    Google --> Ultra[Gemini Ultra]

    OSS --> Llama[Meta Llama]
    OSS --> Mistral[Mistral AI]

    style GenAI fill:#F08080,color:white
    style OpenAI fill:#FFFFE0
    style Anthropic fill:#FFFFE0
    style Google fill:#FFFFE0
    style OSS fill:#FFFFE0
```

## Governance and Ethics Path

```mermaid
flowchart TD
    DT[Digital Transformation] --> Strategy[AI Strategy]
    Strategy --> GAICoE[GAI Center of Excellence]

    GAICoE --> Charter[GAICoE Charter]
    GAICoE --> Gov[AI Governance]
    GAICoE --> CM[Change Management]

    Gov --> Policy[AI Policy]
    CM --> SE[Stakeholder Engagement]
    SE --> ES[Executive Sponsorship]

    GenAI[Generative AI] --> RAI[Responsible AI]
    RAI --> Ethics[AI Ethics]
    RAI --> Bias[AI Bias]
    RAI --> Privacy[Data Privacy]

    Bias --> Detection[Bias Detection]
    Detection --> Mitigation[Bias Mitigation]

    RAI --> RedTeam[Red-Teaming]
    RedTeam --> Guardrails[Safety Guardrails]

    style DT fill:#F08080,color:white
    style GAICoE fill:#E6E6FA
    style RAI fill:#FFF0F5
```

## Business Applications Path

```mermaid
flowchart TD
    UseCase[AI Use Case] --> Identify[Use Case Identification]
    Identify --> ValueMap[Value Mapping]
    ValueMap --> ROI[ROI Estimation]

    Identify --> Prioritize[Prioritization Framework]
    Prioritize --> Feasibility[Feasibility Analysis]
    Feasibility --> Impact[Impact Assessment]

    Impact --> Quick[Quick Wins]
    Impact --> Strategic[Strategic Initiatives]

    UseCase --> Industry[Industry Use Cases]
    Industry --> Healthcare[Healthcare AI]
    Industry --> Finance[Finance AI]
    Industry --> Retail[Retail AI]
    Industry --> Mfg[Manufacturing AI]

    style UseCase fill:#FFE4E1
    style Industry fill:#FFE4E1
```

## Capstone Project Dependencies

```mermaid
flowchart BT
    Cap[Capstone Project] --> Strategy[AI Strategy Document]
    Cap --> Charter[GAICoE Charter]
    Cap --> Transform[AI Transformation]

    Strategy --> Roadmap[AI Roadmap]
    Strategy --> AIStrat[AI Strategy]

    Transform --> DT[Digital Transformation]
    Transform --> GenAI[Generative AI]

    style Cap fill:#DDA0DD,color:white
    style Transform fill:#DDA0DD,color:white
```

## Taxonomy Legend

| Category | Color | Description |
|----------|-------|-------------|
| **Foundation** | LightCoral | Core concepts like Digital Transformation and AI |
| **LLM Architecture** | PeachPuff | Technical architecture concepts |
| **AI Platforms** | LightYellow | Commercial and open-source AI platforms |
| **Prompt Engineering** | Honeydew | Techniques for effective AI interaction |
| **Custom Solutions** | PaleGreen | Building custom AI applications |
| **API Integration** | PaleTurquoise | Technical integration patterns |
| **Multimodal AI** | PowderBlue | Image, video, and audio AI |
| **Governance** | Lavender | Organizational AI governance |
| **Ethics** | LavenderBlush | Responsible AI and ethics |
| **Workforce** | Thistle | Future of work and skills |
| **Business Applications** | MistyRose | Business use cases and value |
| **Advanced Topics** | Plum | Emerging and capstone concepts |
