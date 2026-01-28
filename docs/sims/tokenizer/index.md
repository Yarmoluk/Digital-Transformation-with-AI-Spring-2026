---
title: Tokenizer MicroSim
description: Interactive visualization demonstrating how text is tokenized for language model processing
image: sims/tokenizer/thumbnail.png
social:
   cards: false
quality_score: 67
hide:
  - toc
---
# Tokenizer MicroSim

<iframe src="./main.html" height="470px" scrolling="no"
  style="overflow: hidden;"></iframe>

To use this MicroSim in your course, just add the following HTML line to your website:

```html
<iframe src="https://dmccreary.github.io/tracking-ai-course/sims/tokenizer/main.html"  height="470px" scrolling="no"
  style="overflow: hidden;"></iframe>
```

[Run the Tokenizer MicroSim](./main.html){ .md-button .md-button--primary }

[Edit the Tokenizer MicroSim](https://editor.p5js.org/dmccreary/sketches/gYNlH9dHu)


## References

* [OpenAI Tokenizer Demo](https://platform.openai.com/tokenizer) - uses the text background color to show individual tokens.

* [HuggingFace Xenova Tokenizer Playground](https://huggingface.co/spaces/Xenova/the-tokenizer-playground) - Allows you to compare 14 different tokenizers!.  This one also color codes each word.

## Self-Assessment Quiz

Test your understanding of tokenizers and how they work.

<div class="upper-alpha" markdown>
**Question 1: What is the main purpose of a tokenizer?**

1. To check grammar and spelling
2. To convert text into numerical representations that AI models can process
3. To translate text between languages
4. To encrypt sensitive data
</div>

??? success "Answer"
    B) To convert text into numerical representations that AI models can process - Tokenizers break text into tokens and assign each a unique numerical ID from the model's vocabulary.

<div class="upper-alpha" markdown>
**Question 2: Why do different AI models use different tokenizers?**

1. For marketing differentiation only
2. Each model's tokenizer is optimized for its training data and architecture
3. Tokenizers are all identical
4. Government regulations require different tokenizers
</div>

??? success "Answer"
    B) Each model's tokenizer is optimized for its training data and architecture - Different tokenizers have different vocabulary sizes, subword algorithms, and handling of special characters optimized for their specific model.

<div class="upper-alpha" markdown>
**Question 3: What does color-coding tokens in a visualization help users understand?**

1. Which tokens are most expensive
2. How text is segmented into individual tokens, showing word boundaries
3. The age of each token
4. Which tokens are errors
</div>

??? success "Answer"
    B) How text is segmented into individual tokens, showing word boundaries - Color-coding makes it visually clear where the tokenizer splits text, revealing whether words become one or multiple tokens.

<div class="upper-alpha" markdown>
**Question 4: What happens when a word is not in a tokenizer's vocabulary?**

1. The model crashes
2. The word is split into smaller subword pieces that are in the vocabulary
3. The word is ignored completely
4. A new vocabulary is created
</div>

??? success "Answer"
    B) The word is split into smaller subword pieces that are in the vocabulary - Modern tokenizers use subword algorithms to handle unknown words by breaking them into recognized smaller pieces.

<div class="upper-alpha" markdown>
**Question 5: Why is comparing multiple tokenizers useful?**

1. To find the most colorful one
2. To understand how different models handle the same text and estimate relative token counts
3. Comparison serves no purpose
4. To find spelling errors
</div>

??? success "Answer"
    B) To understand how different models handle the same text and estimate relative token counts - Comparing tokenizers reveals differences in how models process text, which affects context window usage, costs, and model behavior.