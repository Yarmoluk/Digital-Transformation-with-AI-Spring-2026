// Self-Attention Visualization MicroSim
// Purpose: Interactive visualization of how tokens attend to other tokens
// Chapter 2: Large Language Model Architecture

let canvasWidth = 1000;
let drawHeight = 500;
let controlHeight = 100;
let margin = 20;

// Sample sentences with pre-computed attention patterns
const sentences = [
  {
    name: "Pronoun Reference",
    tokens: ["The", "cat", "sat", "on", "the", "mat", "because", "it", "was", "tired"],
    description: "Watch how 'it' strongly attends to 'cat' to resolve the pronoun reference."
  },
  {
    name: "Subject-Verb Agreement",
    tokens: ["The", "students", "who", "studied", "hard", "passed", "the", "exam"],
    description: "Notice how 'passed' attends to 'students' despite intervening words."
  },
  {
    name: "Adjective-Noun",
    tokens: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
    description: "See how adjectives attend to their corresponding nouns."
  },
  {
    name: "Question Formation",
    tokens: ["What", "is", "the", "capital", "of", "France", "?"],
    description: "Observe how 'What' and '?' form strong attention connections."
  }
];

let currentSentence = 0;
let tokens = [];
let attentionMatrix = [];
let selectedToken = -1;
let hoveredToken = -1;
let hoveredCell = { row: -1, col: -1 };

// Colors
const tokenBaseColor = [100, 149, 237]; // Cornflower blue
const tokenSelectedColor = [255, 165, 0]; // Orange
const tokenHighlightColor = [144, 238, 144]; // Light green

function setup() {
  updateCanvasSize();
  let canvas = createCanvas(canvasWidth, drawHeight + controlHeight);
  canvas.parent('canvas-container');
  textFont('Arial');

  loadSentence(0);
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

function loadSentence(index) {
  currentSentence = index;
  tokens = sentences[index].tokens;
  generateAttentionMatrix();
  selectedToken = -1;
}

function generateAttentionMatrix() {
  // Generate realistic-looking attention patterns
  let n = tokens.length;
  attentionMatrix = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    let total = 0;

    for (let j = 0; j < n; j++) {
      // Base attention: higher for nearby tokens
      let distance = abs(i - j);
      let baseAttention = exp(-distance * 0.3);

      // Add semantic patterns based on token relationships
      let semanticBoost = getSemanticAttention(i, j);

      let attention = baseAttention + semanticBoost + random(0.1);
      row.push(max(0, attention));
      total += row[j];
    }

    // Normalize to sum to 1 (softmax-like)
    for (let j = 0; j < n; j++) {
      row[j] = row[j] / total;
    }

    attentionMatrix.push(row);
  }
}

function getSemanticAttention(fromIdx, toIdx) {
  let fromToken = tokens[fromIdx].toLowerCase();
  let toToken = tokens[toIdx].toLowerCase();

  // Pronoun resolution patterns
  if (fromToken === "it" || fromToken === "they" || fromToken === "he" || fromToken === "she") {
    // Pronouns attend to nouns
    if (["cat", "dog", "fox", "students", "student", "mat"].includes(toToken)) {
      return 0.8;
    }
  }

  // Verb-subject patterns
  if (["passed", "sat", "jumps", "is", "was", "studied"].includes(fromToken)) {
    if (["cat", "students", "fox", "it"].includes(toToken)) {
      return 0.5;
    }
  }

  // Adjective-noun patterns
  if (["quick", "brown", "lazy", "tired", "hard"].includes(fromToken)) {
    if (["fox", "dog", "cat", "exam"].includes(toToken)) {
      return 0.6;
    }
  }

  // Question patterns
  if (fromToken === "?" && toToken === "what") return 0.7;
  if (fromToken === "what" && toToken === "?") return 0.7;
  if (fromToken === "capital" && toToken === "france") return 0.5;

  // Preposition patterns
  if (fromToken === "on" && toToken === "mat") return 0.4;
  if (fromToken === "over" && toToken === "dog") return 0.4;
  if (fromToken === "of" && toToken === "france") return 0.5;

  return 0;
}

function draw() {
  background(250);

  // Title
  fill(50);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Self-Attention Visualization", margin, margin);

  // Subtitle with sentence name
  fill(100);
  textSize(14);
  text("Sentence: " + sentences[currentSentence].name, margin, margin + 28);

  // Draw token row
  drawTokenRow();

  // Draw attention matrix
  drawAttentionMatrix();

  // Draw explanation panel
  drawExplanation();

  // Draw controls area
  drawControlsArea();
}

function drawTokenRow() {
  let startY = 70;
  let tokenHeight = 35;
  let tokenSpacing = 8;
  let startX = margin + 50;

  fill(80);
  textSize(12);
  textAlign(LEFT, CENTER);
  text("Tokens:", margin, startY + tokenHeight/2);

  textSize(14);
  let x = startX;

  for (let i = 0; i < tokens.length; i++) {
    let tokenWidth = textWidth(tokens[i]) + 20;

    // Determine color based on selection state
    let isSelected = (i === selectedToken);
    let isHighlighted = (selectedToken >= 0 && attentionMatrix[selectedToken][i] > 0.15);
    let isHovered = (i === hoveredToken);

    if (isSelected) {
      fill(tokenSelectedColor[0], tokenSelectedColor[1], tokenSelectedColor[2]);
    } else if (isHighlighted) {
      let alpha = map(attentionMatrix[selectedToken][i], 0.15, 0.5, 100, 255);
      fill(tokenHighlightColor[0], tokenHighlightColor[1], tokenHighlightColor[2], alpha);
    } else if (isHovered) {
      fill(220, 220, 240);
    } else {
      fill(tokenBaseColor[0], tokenBaseColor[1], tokenBaseColor[2], 150);
    }

    stroke(100);
    strokeWeight(isSelected ? 2 : 1);
    rect(x, startY, tokenWidth, tokenHeight, 5);

    // Token text
    fill(isSelected ? 255 : 50);
    noStroke();
    textAlign(CENTER, CENTER);
    text(tokens[i], x + tokenWidth/2, startY + tokenHeight/2);

    // Store position for click detection
    tokens[i].x = x;
    tokens[i].y = startY;
    tokens[i].w = tokenWidth;
    tokens[i].h = tokenHeight;

    x += tokenWidth + tokenSpacing;
  }

  // Instructions
  fill(100);
  textSize(11);
  textAlign(LEFT, TOP);
  text("Click a token to see its attention pattern", startX, startY + tokenHeight + 8);
}

function drawAttentionMatrix() {
  let matrixStartX = margin + 80;
  let matrixStartY = 150;
  let cellSize = min(35, (canvasWidth - matrixStartX - 200) / tokens.length);
  let matrixSize = cellSize * tokens.length;

  // Matrix title
  fill(80);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Attention Matrix (row = from, column = to)", matrixStartX, matrixStartY - 25);

  // Draw column headers (to)
  textSize(10);
  textAlign(CENTER, BOTTOM);
  for (let j = 0; j < tokens.length; j++) {
    push();
    translate(matrixStartX + j * cellSize + cellSize/2, matrixStartY - 5);
    rotate(-PI/4);
    fill(hoveredCell.col === j ? 0 : 80);
    text(tokens[j], 0, 0);
    pop();
  }

  // Draw row headers (from)
  textAlign(RIGHT, CENTER);
  for (let i = 0; i < tokens.length; i++) {
    fill(hoveredCell.row === i || selectedToken === i ? 0 : 80);
    text(tokens[i], matrixStartX - 8, matrixStartY + i * cellSize + cellSize/2);
  }

  // Draw matrix cells
  for (let i = 0; i < tokens.length; i++) {
    for (let j = 0; j < tokens.length; j++) {
      let x = matrixStartX + j * cellSize;
      let y = matrixStartY + i * cellSize;
      let attention = attentionMatrix[i][j];

      // Color intensity based on attention weight
      let intensity = map(attention, 0, 0.5, 255, 50);
      let isHighlighted = (selectedToken === i);
      let isHoveredCell = (hoveredCell.row === i && hoveredCell.col === j);

      if (isHighlighted) {
        fill(255, intensity, intensity * 0.5);
      } else {
        fill(intensity, intensity, 255);
      }

      stroke(isHoveredCell ? 0 : 200);
      strokeWeight(isHoveredCell ? 2 : 1);
      rect(x, y, cellSize, cellSize);

      // Show value on hover
      if (isHoveredCell) {
        fill(0);
        noStroke();
        textSize(9);
        textAlign(CENTER, CENTER);
        text(attention.toFixed(2), x + cellSize/2, y + cellSize/2);
      }
    }
  }

  // Draw color legend
  let legendX = matrixStartX + matrixSize + 30;
  let legendY = matrixStartY;

  fill(80);
  textSize(11);
  textAlign(LEFT, TOP);
  text("Attention\nStrength", legendX, legendY);

  let legendHeight = 100;
  for (let i = 0; i < legendHeight; i++) {
    let attention = map(i, 0, legendHeight, 0.5, 0);
    let intensity = map(attention, 0, 0.5, 255, 50);
    stroke(intensity, intensity, 255);
    line(legendX, legendY + 35 + i, legendX + 20, legendY + 35 + i);
  }

  noStroke();
  fill(80);
  textSize(9);
  textAlign(LEFT, CENTER);
  text("High", legendX + 25, legendY + 35);
  text("Low", legendX + 25, legendY + 35 + legendHeight);

  // Store matrix bounds for click detection
  this.matrixBounds = {
    x: matrixStartX,
    y: matrixStartY,
    cellSize: cellSize,
    size: tokens.length
  };
}

function drawExplanation() {
  let panelX = canvasWidth - 280;
  let panelY = 150;
  let panelWidth = 260;
  let panelHeight = 200;

  // Panel background
  fill(245);
  stroke(200);
  strokeWeight(1);
  rect(panelX, panelY, panelWidth, panelHeight, 8);

  fill(50);
  textSize(13);
  textAlign(LEFT, TOP);
  text("Explanation", panelX + 15, panelY + 12);

  textSize(11);
  fill(80);

  if (selectedToken >= 0) {
    let tokenName = tokens[selectedToken];

    // Find top 3 attended tokens
    let attentions = [];
    for (let j = 0; j < tokens.length; j++) {
      attentions.push({ idx: j, value: attentionMatrix[selectedToken][j] });
    }
    attentions.sort((a, b) => b.value - a.value);

    text("'" + tokenName + "' attends to:", panelX + 15, panelY + 35);

    for (let i = 0; i < min(5, attentions.length); i++) {
      let att = attentions[i];
      let barWidth = map(att.value, 0, 0.5, 0, 120);

      // Draw bar
      fill(100, 149, 237, 200);
      noStroke();
      rect(panelX + 80, panelY + 58 + i * 22, barWidth, 16, 3);

      // Draw label
      fill(50);
      textAlign(RIGHT, CENTER);
      text(tokens[att.idx], panelX + 75, panelY + 66 + i * 22);

      // Draw value
      textAlign(LEFT, CENTER);
      fill(80);
      text((att.value * 100).toFixed(0) + "%", panelX + 85 + barWidth, panelY + 66 + i * 22);
    }
  } else {
    // Show sentence description
    let desc = sentences[currentSentence].description;
    text(desc, panelX + 15, panelY + 35, panelWidth - 30, panelHeight - 50);

    fill(100);
    textSize(10);
    text("Click a token in the row above\nto see its attention distribution.", panelX + 15, panelY + 140);
  }
}

function drawControlsArea() {
  let y = drawHeight + 15;

  fill(50);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Select Sentence:", margin, y);
}

function mousePressed() {
  // Check if clicked on a token in the row
  let startY = 70;
  let tokenHeight = 35;
  let startX = margin + 50;
  let x = startX;

  for (let i = 0; i < tokens.length; i++) {
    let tokenWidth = textWidth(tokens[i]) + 20;

    if (mouseX >= x && mouseX <= x + tokenWidth &&
        mouseY >= startY && mouseY <= startY + tokenHeight) {
      selectedToken = (selectedToken === i) ? -1 : i;
      return;
    }

    x += tokenWidth + 8;
  }
}

function mouseMoved() {
  // Check hover on token row
  let startY = 70;
  let tokenHeight = 35;
  let startX = margin + 50;
  let x = startX;

  hoveredToken = -1;
  for (let i = 0; i < tokens.length; i++) {
    let tokenWidth = textWidth(tokens[i]) + 20;

    if (mouseX >= x && mouseX <= x + tokenWidth &&
        mouseY >= startY && mouseY <= startY + tokenHeight) {
      hoveredToken = i;
      break;
    }

    x += tokenWidth + 8;
  }

  // Check hover on matrix cells
  hoveredCell = { row: -1, col: -1 };
  if (this.matrixBounds) {
    let mb = this.matrixBounds;
    let col = floor((mouseX - mb.x) / mb.cellSize);
    let row = floor((mouseY - mb.y) / mb.cellSize);

    if (col >= 0 && col < mb.size && row >= 0 && row < mb.size) {
      hoveredCell = { row: row, col: col };
    }
  }
}

// Called from HTML buttons
function selectSentence(index) {
  loadSentence(index);
}
