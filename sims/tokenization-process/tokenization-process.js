// Tokenization Process Visualization MicroSim
// Purpose: Interactive demonstration of how text is converted to tokens
// Chapter 2: Large Language Model Architecture

let canvasWidth = 1000;
let drawHeight = 450;
let controlHeight = 150;
let margin = 20;

// Input text area
let inputText = "Hello, how are you doing today? The quick brown fox jumps over the lazy dog.";
let tokens = [];
let tokenColors = [];

// UI elements
let inputField;
let analyzeButton;
let clearButton;
let exampleButtons = [];

// Example texts for demonstration
const examples = [
  { name: "Simple", text: "Hello world" },
  { name: "Contractions", text: "I'm can't won't wouldn't" },
  { name: "Numbers", text: "The year 2024 has 365 days" },
  { name: "Code", text: "function add(a, b) { return a + b; }" },
  { name: "Mixed", text: "Dr. Smith's email is john.smith@company.com" }
];

// Simulated tokenizer (BPE-like behavior)
function tokenize(text) {
  let result = [];

  // Simple tokenization rules mimicking BPE behavior
  let words = text.split(/(\s+)/);

  for (let word of words) {
    if (word.match(/^\s+$/)) {
      // Whitespace tokens
      result.push({ text: word.replace(/ /g, '·').replace(/\n/g, '↵'), type: 'whitespace' });
    } else if (word.length === 0) {
      continue;
    } else {
      // Process word into subword tokens
      let subTokens = splitIntoSubTokens(word);
      result.push(...subTokens);
    }
  }

  return result;
}

function splitIntoSubTokens(word) {
  let tokens = [];

  // Common subword patterns (simulating BPE)
  const commonPrefixes = ['un', 'pre', 'dis', 're', 'im', 'in', 'over', 'under'];
  const commonSuffixes = ['ing', 'ed', 'er', 'est', 'tion', 'ness', 'ment', 'able', 'ible', 'ly', 'ful', 'less', "'s", "'t", "'m", "'re", "'ve", "'ll"];

  let remaining = word;
  let parts = [];

  // Check for punctuation at start
  let startPunct = remaining.match(/^[^\w]+/);
  if (startPunct) {
    for (let char of startPunct[0]) {
      parts.push({ text: char, type: 'punctuation' });
    }
    remaining = remaining.substring(startPunct[0].length);
  }

  // Check for punctuation at end
  let endPunct = remaining.match(/[^\w]+$/);
  let endPunctParts = [];
  if (endPunct) {
    for (let char of endPunct[0]) {
      endPunctParts.push({ text: char, type: 'punctuation' });
    }
    remaining = remaining.substring(0, remaining.length - endPunct[0].length);
  }

  if (remaining.length > 0) {
    // Check if it's a number
    if (remaining.match(/^\d+$/)) {
      // Split numbers into individual digits for large numbers
      if (remaining.length > 3) {
        for (let digit of remaining) {
          parts.push({ text: digit, type: 'number' });
        }
      } else {
        parts.push({ text: remaining, type: 'number' });
      }
    } else if (remaining.match(/^[A-Z][a-z]*$/)) {
      // Capitalized word - might split capital
      parts.push({ text: remaining, type: 'word' });
    } else if (remaining.length <= 4) {
      // Short words usually single token
      parts.push({ text: remaining, type: 'word' });
    } else {
      // Try to split longer words
      let foundSplit = false;

      // Check for suffix
      for (let suffix of commonSuffixes) {
        if (remaining.toLowerCase().endsWith(suffix) && remaining.length > suffix.length + 2) {
          let root = remaining.substring(0, remaining.length - suffix.length);
          let actualSuffix = remaining.substring(remaining.length - suffix.length);
          parts.push({ text: root, type: 'word' });
          parts.push({ text: actualSuffix, type: 'suffix' });
          foundSplit = true;
          break;
        }
      }

      // Check for prefix
      if (!foundSplit) {
        for (let prefix of commonPrefixes) {
          if (remaining.toLowerCase().startsWith(prefix) && remaining.length > prefix.length + 2) {
            let actualPrefix = remaining.substring(0, prefix.length);
            let root = remaining.substring(prefix.length);
            parts.push({ text: actualPrefix, type: 'prefix' });
            parts.push({ text: root, type: 'word' });
            foundSplit = true;
            break;
          }
        }
      }

      if (!foundSplit) {
        parts.push({ text: remaining, type: 'word' });
      }
    }
  }

  // Add end punctuation
  parts.push(...endPunctParts);

  return parts;
}

function getTokenColor(type) {
  switch(type) {
    case 'word': return color(100, 149, 237); // Cornflower blue
    case 'prefix': return color(147, 112, 219); // Medium purple
    case 'suffix': return color(144, 238, 144); // Light green
    case 'number': return color(255, 182, 108); // Light orange
    case 'punctuation': return color(255, 182, 193); // Light pink
    case 'whitespace': return color(211, 211, 211); // Light gray
    default: return color(200, 200, 200);
  }
}

function setup() {
  updateCanvasSize();
  let canvas = createCanvas(canvasWidth, drawHeight + controlHeight);
  canvas.parent('canvas-container');
  textFont('Arial');

  // Analyze initial text
  analyzeText();
}

function updateCanvasSize() {
  let container = select('#canvas-container');
  if (container) {
    canvasWidth = max(800, container.width - 20);
  } else {
    canvasWidth = max(800, windowWidth - 40);
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, drawHeight + controlHeight);
}

function analyzeText() {
  let textInput = select('#text-input');
  if (textInput) {
    inputText = textInput.value();
  }
  tokens = tokenize(inputText);
}

function draw() {
  background(250);

  // Title
  fill(50);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Tokenization Process Visualization", margin, margin);

  // Draw input section
  drawInputSection();

  // Draw token visualization
  drawTokenVisualization();

  // Draw statistics
  drawStatistics();

  // Draw legend
  drawLegend();
}

function drawInputSection() {
  let y = 55;

  fill(80);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Input Text:", margin, y);

  // Draw text box background
  fill(255);
  stroke(200);
  strokeWeight(1);
  rect(margin, y + 22, canvasWidth - 2 * margin, 60, 5);

  // Draw input text
  fill(50);
  noStroke();
  textSize(14);
  let displayText = inputText.length > 200 ? inputText.substring(0, 200) + "..." : inputText;
  text(displayText, margin + 10, y + 32, canvasWidth - 2 * margin - 20, 50);
}

function drawTokenVisualization() {
  let startY = 160;

  fill(80);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Tokens (" + tokens.length + " total):", margin, startY);

  // Token display area
  let tokenY = startY + 25;
  let tokenX = margin;
  let tokenHeight = 32;
  let tokenSpacing = 5;
  let maxY = drawHeight - 80;

  textSize(13);
  for (let i = 0; i < tokens.length && tokenY < maxY; i++) {
    let token = tokens[i];
    let tokenWidth = textWidth(token.text) + 20;

    // Wrap to next line if needed
    if (tokenX + tokenWidth > canvasWidth - margin) {
      tokenX = margin;
      tokenY += tokenHeight + tokenSpacing;
      if (tokenY >= maxY) break;
    }

    // Draw token chip
    let col = getTokenColor(token.type);
    fill(col);
    stroke(red(col) * 0.8, green(col) * 0.8, blue(col) * 0.8);
    strokeWeight(1);
    rect(tokenX, tokenY, tokenWidth, tokenHeight, 5);

    // Draw token text
    fill(50);
    noStroke();
    textAlign(CENTER, CENTER);
    text(token.text, tokenX + tokenWidth/2, tokenY + tokenHeight/2);

    // Draw token ID below
    fill(120);
    textSize(9);
    textAlign(CENTER, TOP);
    text(i + 1, tokenX + tokenWidth/2, tokenY + tokenHeight + 2);
    textSize(13);

    tokenX += tokenWidth + tokenSpacing;
  }

  // Show overflow indicator
  let displayedTokens = 0;
  tokenX = margin;
  tokenY = startY + 25;
  for (let i = 0; i < tokens.length; i++) {
    let tokenWidth = textWidth(tokens[i].text) + 20;
    if (tokenX + tokenWidth > canvasWidth - margin) {
      tokenX = margin;
      tokenY += tokenHeight + tokenSpacing;
    }
    if (tokenY >= maxY) break;
    displayedTokens++;
    tokenX += tokenWidth + tokenSpacing;
  }

  if (displayedTokens < tokens.length) {
    fill(100);
    textSize(12);
    textAlign(RIGHT, BOTTOM);
    text("+" + (tokens.length - displayedTokens) + " more tokens...", canvasWidth - margin, maxY + 15);
  }
}

function drawStatistics() {
  let statsY = drawHeight - 60;

  // Statistics background
  fill(245);
  stroke(220);
  strokeWeight(1);
  rect(margin, statsY, canvasWidth - 2 * margin, 50, 5);

  // Calculate statistics
  let charCount = inputText.length;
  let wordCount = inputText.split(/\s+/).filter(w => w.length > 0).length;
  let tokenCount = tokens.length;
  let ratio = charCount > 0 ? (tokenCount / charCount * 4).toFixed(2) : 0;

  // Type counts
  let typeCounts = {};
  for (let token of tokens) {
    typeCounts[token.type] = (typeCounts[token.type] || 0) + 1;
  }

  fill(50);
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);

  let statsX = margin + 15;
  let statSpacing = 160;

  text("Characters: " + charCount, statsX, statsY + 17);
  text("Words: " + wordCount, statsX + statSpacing, statsY + 17);
  text("Tokens: " + tokenCount, statsX + statSpacing * 2, statsY + 17);
  text("Tokens/4 chars: " + ratio, statsX + statSpacing * 3, statsY + 17);

  // Estimated cost context
  textSize(11);
  fill(100);
  let costEstimate = (tokenCount * 0.00001).toFixed(5);
  text("Est. input cost @ $0.01/1K tokens: $" + costEstimate, statsX, statsY + 37);
  text("Context usage: " + tokenCount + " / 128,000 tokens (GPT-4)", statsX + 300, statsY + 37);
}

function drawLegend() {
  let legendY = drawHeight + 10;

  fill(50);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Token Types:", margin, legendY);

  let legendX = margin;
  let legendItemY = legendY + 25;
  let legendSpacing = 130;

  let types = [
    { type: 'word', label: 'Word' },
    { type: 'prefix', label: 'Prefix' },
    { type: 'suffix', label: 'Suffix' },
    { type: 'number', label: 'Number' },
    { type: 'punctuation', label: 'Punctuation' },
    { type: 'whitespace', label: 'Whitespace' }
  ];

  textSize(12);
  for (let i = 0; i < types.length; i++) {
    let x = legendX + (i % 6) * legendSpacing;
    let y = legendItemY;

    // Draw color swatch
    fill(getTokenColor(types[i].type));
    stroke(150);
    strokeWeight(1);
    rect(x, y, 18, 18, 3);

    // Draw label
    fill(50);
    noStroke();
    textAlign(LEFT, CENTER);
    text(types[i].label, x + 24, y + 9);
  }

  // Example buttons label
  fill(50);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Try Examples:", margin, legendY + 60);
}

// Called from HTML buttons
function setExample(index) {
  if (index >= 0 && index < examples.length) {
    let textInput = select('#text-input');
    if (textInput) {
      textInput.value(examples[index].text);
    }
    inputText = examples[index].text;
    analyzeText();
  }
}

function clearInput() {
  let textInput = select('#text-input');
  if (textInput) {
    textInput.value('');
  }
  inputText = '';
  tokens = [];
}
