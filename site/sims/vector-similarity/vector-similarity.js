// Vector Similarity Visualization MicroSim
// Purpose: Interactive visualization of semantic similarity in embedding space
// Chapter 5: Custom GPTs, Agents, and RAG Systems

let canvasWidth = 1000;
let drawHeight = 500;
let controlHeight = 100;
let margin = 20;

// Word embeddings (simulated 2D projections)
const wordData = {
  animals: {
    color: [70, 130, 180],
    words: [
      { word: "dog", x: 0.15, y: 0.75 },
      { word: "cat", x: 0.18, y: 0.68 },
      { word: "puppy", x: 0.12, y: 0.78 },
      { word: "kitten", x: 0.20, y: 0.72 },
      { word: "pet", x: 0.17, y: 0.70 }
    ]
  },
  vehicles: {
    color: [34, 139, 34],
    words: [
      { word: "car", x: 0.75, y: 0.25 },
      { word: "truck", x: 0.80, y: 0.30 },
      { word: "automobile", x: 0.72, y: 0.22 },
      { word: "vehicle", x: 0.77, y: 0.28 },
      { word: "bus", x: 0.82, y: 0.35 }
    ]
  },
  food: {
    color: [255, 140, 0],
    words: [
      { word: "apple", x: 0.40, y: 0.85 },
      { word: "banana", x: 0.45, y: 0.82 },
      { word: "fruit", x: 0.42, y: 0.80 },
      { word: "orange", x: 0.38, y: 0.88 },
      { word: "grape", x: 0.48, y: 0.85 }
    ]
  },
  technology: {
    color: [147, 112, 219],
    words: [
      { word: "computer", x: 0.65, y: 0.55 },
      { word: "laptop", x: 0.68, y: 0.52 },
      { word: "software", x: 0.62, y: 0.58 },
      { word: "program", x: 0.60, y: 0.55 },
      { word: "code", x: 0.58, y: 0.52 }
    ]
  },
  actions: {
    color: [220, 20, 60],
    words: [
      { word: "run", x: 0.25, y: 0.35 },
      { word: "walk", x: 0.28, y: 0.38 },
      { word: "sprint", x: 0.22, y: 0.32 },
      { word: "jog", x: 0.26, y: 0.36 },
      { word: "move", x: 0.30, y: 0.40 }
    ]
  }
};

// All words flattened
let allWords = [];
let selectedWords = [];
let hoveredWord = null;

// Plot dimensions
let plotX, plotY, plotWidth, plotHeight;

function setup() {
  updateCanvasSize();
  let canvas = createCanvas(canvasWidth, drawHeight + controlHeight);
  canvas.parent('canvas-container');
  textFont('Arial');

  // Flatten word data
  for (let category in wordData) {
    let cat = wordData[category];
    for (let w of cat.words) {
      allWords.push({
        word: w.word,
        x: w.x,
        y: w.y,
        category: category,
        color: cat.color
      });
    }
  }

  calculatePlotDimensions();
}

function updateCanvasSize() {
  let container = select('#canvas-container');
  if (container) {
    canvasWidth = max(800, container.width - 20);
  } else {
    canvasWidth = max(800, windowWidth - 40);
  }
}

function calculatePlotDimensions() {
  plotX = margin + 50;
  plotY = 70;
  plotWidth = canvasWidth - 400;
  plotHeight = 380;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, drawHeight + controlHeight);
  calculatePlotDimensions();
}

function draw() {
  background(250);

  // Title
  fill(50);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Vector Similarity Visualization", margin, margin);

  // Subtitle
  fill(100);
  textSize(12);
  text("Click two words to calculate their similarity", margin, margin + 28);

  // Draw embedding space plot
  drawEmbeddingPlot();

  // Draw info panel
  drawInfoPanel();

  // Draw legend
  drawLegend();
}

function drawEmbeddingPlot() {
  // Plot background
  fill(255);
  stroke(200);
  strokeWeight(1);
  rect(plotX, plotY, plotWidth, plotHeight);

  // Grid lines
  stroke(240);
  strokeWeight(0.5);
  for (let i = 1; i < 5; i++) {
    let x = plotX + (plotWidth / 5) * i;
    let y = plotY + (plotHeight / 5) * i;
    line(x, plotY, x, plotY + plotHeight);
    line(plotX, y, plotX + plotWidth, y);
  }

  // Draw similarity line if two words selected
  if (selectedWords.length === 2) {
    let w1 = selectedWords[0];
    let w2 = selectedWords[1];
    let x1 = plotX + w1.x * plotWidth;
    let y1 = plotY + (1 - w1.y) * plotHeight;
    let x2 = plotX + w2.x * plotWidth;
    let y2 = plotY + (1 - w2.y) * plotHeight;

    // Draw line
    stroke(100, 149, 237, 150);
    strokeWeight(2);
    setLineDash([5, 5]);
    line(x1, y1, x2, y2);
    setLineDash([]);

    // Draw distance label
    let midX = (x1 + x2) / 2;
    let midY = (y1 + y2) / 2;
    let similarity = calculateCosineSimilarity(w1, w2);

    fill(255, 255, 255, 200);
    noStroke();
    rect(midX - 35, midY - 12, 70, 24, 5);

    fill(50);
    textSize(11);
    textAlign(CENTER, CENTER);
    text("Sim: " + similarity.toFixed(2), midX, midY);
  }

  // Draw words
  hoveredWord = null;
  for (let w of allWords) {
    let x = plotX + w.x * plotWidth;
    let y = plotY + (1 - w.y) * plotHeight;

    // Check hover
    let isHovered = dist(mouseX, mouseY, x, y) < 20;
    if (isHovered) hoveredWord = w;

    // Check if selected
    let isSelected = selectedWords.includes(w);

    // Draw point
    fill(w.color[0], w.color[1], w.color[2]);
    stroke(isSelected ? 0 : 150);
    strokeWeight(isSelected ? 3 : (isHovered ? 2 : 1));
    ellipse(x, y, isSelected ? 18 : (isHovered ? 16 : 12), isSelected ? 18 : (isHovered ? 16 : 12));

    // Draw label
    fill(50);
    noStroke();
    textSize(10);
    textAlign(CENTER, BOTTOM);
    text(w.word, x, y - 10);
  }

  // Axis labels
  fill(80);
  textSize(11);
  textAlign(CENTER, TOP);
  text("Dimension 1", plotX + plotWidth/2, plotY + plotHeight + 10);

  push();
  translate(plotX - 30, plotY + plotHeight/2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  text("Dimension 2", 0, 0);
  pop();

  // Note about projection
  fill(120);
  textSize(9);
  textAlign(LEFT, BOTTOM);
  text("* 2D projection of high-dimensional embeddings", plotX, plotY - 5);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function drawInfoPanel() {
  let panelX = plotX + plotWidth + 30;
  let panelY = plotY;
  let panelWidth = canvasWidth - panelX - margin;
  let panelHeight = 320;

  // Panel background
  fill(245);
  stroke(200);
  strokeWeight(1);
  rect(panelX, panelY, panelWidth, panelHeight, 8);

  fill(50);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Similarity Analysis", panelX + 15, panelY + 12);

  let y = panelY + 40;

  if (selectedWords.length === 2) {
    let w1 = selectedWords[0];
    let w2 = selectedWords[1];

    // Show selected words
    fill(80);
    textSize(12);
    text("Comparing:", panelX + 15, y);
    y += 22;

    // Word 1
    fill(w1.color[0], w1.color[1], w1.color[2]);
    ellipse(panelX + 25, y + 8, 12, 12);
    fill(50);
    textSize(11);
    text(w1.word + " (" + w1.category + ")", panelX + 40, y);
    y += 22;

    // Word 2
    fill(w2.color[0], w2.color[1], w2.color[2]);
    ellipse(panelX + 25, y + 8, 12, 12);
    fill(50);
    text(w2.word + " (" + w2.category + ")", panelX + 40, y);
    y += 35;

    // Similarity score
    let similarity = calculateCosineSimilarity(w1, w2);
    let euclidean = calculateEuclideanDistance(w1, w2);

    fill(50);
    textSize(12);
    text("Similarity Metrics:", panelX + 15, y);
    y += 22;

    // Draw similarity bar
    let barWidth = panelWidth - 90;
    fill(220);
    noStroke();
    rect(panelX + 15, y, barWidth, 20, 5);

    fill(100, 149, 237);
    rect(panelX + 15, y, barWidth * similarity, 20, 5);

    fill(50);
    textSize(10);
    textAlign(LEFT, CENTER);
    text("Cosine:", panelX + 15, y + 30);
    textAlign(CENTER, CENTER);
    fill(255);
    text((similarity * 100).toFixed(0) + "%", panelX + 15 + barWidth * similarity / 2, y + 10);

    y += 45;

    // Euclidean distance
    fill(80);
    textSize(10);
    textAlign(LEFT, TOP);
    text("Euclidean distance: " + euclidean.toFixed(3), panelX + 15, y);
    y += 25;

    // Interpretation
    fill(50);
    textSize(11);
    text("Interpretation:", panelX + 15, y);
    y += 18;

    fill(80);
    textSize(10);
    let interpretation = getInterpretation(similarity, w1.category === w2.category);
    text(interpretation, panelX + 15, y, panelWidth - 30, 60);

  } else if (selectedWords.length === 1) {
    fill(80);
    textSize(11);
    text("Selected: " + selectedWords[0].word, panelX + 15, y);
    y += 25;
    fill(100);
    textSize(10);
    text("Click another word to\ncalculate similarity", panelX + 15, y);

  } else if (hoveredWord) {
    fill(80);
    textSize(11);
    text("Hovering: " + hoveredWord.word, panelX + 15, y);
    y += 20;

    fill(100);
    textSize(10);
    text("Category: " + hoveredWord.category, panelX + 15, y);
    y += 15;
    text("Position: (" + hoveredWord.x.toFixed(2) + ", " + hoveredWord.y.toFixed(2) + ")", panelX + 15, y);
    y += 25;
    text("Click to select for comparison", panelX + 15, y);

  } else {
    fill(100);
    textSize(11);
    text("Click any two words to", panelX + 15, y);
    text("compare their similarity.", panelX + 15, y + 18);
    y += 50;
    textSize(10);
    text("Words in the same cluster", panelX + 15, y);
    text("have similar meanings and", panelX + 15, y + 15);
    text("higher cosine similarity.", panelX + 15, y + 30);
  }
}

function drawLegend() {
  let legendY = drawHeight + 15;

  fill(50);
  textSize(13);
  textAlign(LEFT, TOP);
  text("Categories:", margin, legendY);

  let x = margin + 90;
  textSize(11);

  for (let category in wordData) {
    let cat = wordData[category];

    fill(cat.color[0], cat.color[1], cat.color[2]);
    ellipse(x, legendY + 10, 14, 14);

    fill(50);
    textAlign(LEFT, CENTER);
    text(category, x + 12, legendY + 10);

    x += 100;
  }

  // Clear button hint
  fill(100);
  textSize(10);
  textAlign(RIGHT, CENTER);
  text("Click 'Clear' to reset selection", canvasWidth - margin, legendY + 10);
}

function calculateCosineSimilarity(w1, w2) {
  // Simulated cosine similarity based on positions
  // In real embeddings, this would use actual vector representations

  // Add category bonus
  let categoryBonus = (w1.category === w2.category) ? 0.3 : 0;

  // Position-based similarity
  let dx = w1.x - w2.x;
  let dy = w1.y - w2.y;
  let distance = Math.sqrt(dx * dx + dy * dy);

  // Convert distance to similarity (closer = more similar)
  let baseSimilarity = Math.exp(-distance * 3);

  return Math.min(1, baseSimilarity + categoryBonus);
}

function calculateEuclideanDistance(w1, w2) {
  let dx = w1.x - w2.x;
  let dy = w1.y - w2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function getInterpretation(similarity, sameCategory) {
  if (similarity > 0.8) {
    return "Very high similarity. These words have closely related meanings and would retrieve similar documents in semantic search.";
  } else if (similarity > 0.6) {
    return "High similarity. These words are semantically related" + (sameCategory ? " within the same category." : ", though from different categories.");
  } else if (similarity > 0.4) {
    return "Moderate similarity. Some semantic relationship exists, but the words serve different purposes.";
  } else {
    return "Low similarity. These words have distinct meanings and would match different documents in semantic search.";
  }
}

function mousePressed() {
  // Check if clicked on a word
  for (let w of allWords) {
    let x = plotX + w.x * plotWidth;
    let y = plotY + (1 - w.y) * plotHeight;

    if (dist(mouseX, mouseY, x, y) < 15) {
      // Toggle selection
      let idx = selectedWords.indexOf(w);
      if (idx >= 0) {
        selectedWords.splice(idx, 1);
      } else if (selectedWords.length < 2) {
        selectedWords.push(w);
      } else {
        // Replace oldest selection
        selectedWords.shift();
        selectedWords.push(w);
      }
      return;
    }
  }
}

// Called from HTML
function clearSelection() {
  selectedWords = [];
}
