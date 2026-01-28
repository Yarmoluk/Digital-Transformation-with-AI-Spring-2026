// AI Use Case Prioritization Tool
// Educational MicroSim for Chapter 10: Business Applications
// Purpose: Enable students to practice prioritizing AI use cases using a structured framework

// Canvas dimensions
let canvasWidth = 1100;
let drawHeight = 550;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 15;
let defaultTextSize = 12;

// Mouse tracking
let mouseOverCanvas = false;

// Matrix dimensions
let matrixX, matrixY, matrixW, matrixH;

// Use cases data
let useCases = [];
let selectedCase = null;
let dragging = false;
let dragOffset = { x: 0, y: 0 };

// Controls
let scenarioSelect;
let addButton;
let clearButton;

// Pre-loaded scenarios
const scenarios = {
  'healthcare': {
    name: 'Healthcare Provider',
    cases: [
      { name: 'Patient Scheduling AI', value: 7, complexity: 3, investment: 150, color: '#4A90D9' },
      { name: 'Diagnostic Imaging', value: 9, complexity: 8, investment: 500, color: '#50C878' },
      { name: 'Claims Processing', value: 6, complexity: 4, investment: 200, color: '#F4A460' },
      { name: 'Drug Interaction Check', value: 8, complexity: 5, investment: 250, color: '#9B59B6' },
      { name: 'Patient Chatbot', value: 5, complexity: 3, investment: 100, color: '#E74C3C' }
    ]
  },
  'financial': {
    name: 'Financial Services',
    cases: [
      { name: 'Fraud Detection', value: 9, complexity: 6, investment: 400, color: '#4A90D9' },
      { name: 'Credit Scoring', value: 8, complexity: 5, investment: 300, color: '#50C878' },
      { name: 'Customer Service Bot', value: 6, complexity: 3, investment: 150, color: '#F4A460' },
      { name: 'Document Processing', value: 7, complexity: 4, investment: 200, color: '#9B59B6' },
      { name: 'Market Prediction', value: 8, complexity: 9, investment: 600, color: '#E74C3C' }
    ]
  },
  'retail': {
    name: 'Retail Company',
    cases: [
      { name: 'Demand Forecasting', value: 8, complexity: 5, investment: 250, color: '#4A90D9' },
      { name: 'Personalization', value: 9, complexity: 6, investment: 350, color: '#50C878' },
      { name: 'Inventory Optimization', value: 7, complexity: 4, investment: 200, color: '#F4A460' },
      { name: 'Visual Search', value: 6, complexity: 7, investment: 400, color: '#9B59B6' },
      { name: 'Price Optimization', value: 8, complexity: 5, investment: 280, color: '#E74C3C' }
    ]
  },
  'manufacturing': {
    name: 'Manufacturing',
    cases: [
      { name: 'Predictive Maintenance', value: 9, complexity: 6, investment: 400, color: '#4A90D9' },
      { name: 'Quality Inspection', value: 8, complexity: 5, investment: 300, color: '#50C878' },
      { name: 'Supply Chain Opt', value: 7, complexity: 7, investment: 450, color: '#F4A460' },
      { name: 'Energy Management', value: 6, complexity: 4, investment: 200, color: '#9B59B6' },
      { name: 'Robot Coordination', value: 7, complexity: 8, investment: 550, color: '#E74C3C' }
    ]
  }
};

let currentScenario = 'healthcare';

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  canvas.mouseOver(() => mouseOverCanvas = true);
  canvas.mouseOut(() => mouseOverCanvas = false);

  // Calculate matrix dimensions
  updateMatrixDimensions();

  // Create controls
  createControls();

  // Load initial scenario
  loadScenario('healthcare');

  describe('AI Use Case Prioritization Tool with 2x2 value-complexity matrix and bubble chart visualization', LABEL);
}

function updateMatrixDimensions() {
  matrixX = 60;
  matrixY = 60;
  matrixW = canvasWidth * 0.55;
  matrixH = drawHeight - 100;
}

function createControls() {
  // Scenario selector
  scenarioSelect = createSelect();
  scenarioSelect.position(80, drawHeight + 15);
  scenarioSelect.option('Healthcare Provider', 'healthcare');
  scenarioSelect.option('Financial Services', 'financial');
  scenarioSelect.option('Retail Company', 'retail');
  scenarioSelect.option('Manufacturing', 'manufacturing');
  scenarioSelect.changed(() => {
    loadScenario(scenarioSelect.value());
  });

  // Clear button
  clearButton = createButton('Clear All');
  clearButton.position(10, drawHeight + 50);
  clearButton.mousePressed(() => {
    useCases = [];
    selectedCase = null;
  });
}

function loadScenario(scenarioKey) {
  currentScenario = scenarioKey;
  let scenario = scenarios[scenarioKey];

  useCases = scenario.cases.map((c, i) => ({
    ...c,
    id: i,
    x: valueToX(c.value),
    y: complexityToY(c.complexity)
  }));

  selectedCase = null;
}

function valueToX(value) {
  return matrixX + (value / 10) * matrixW;
}

function complexityToY(complexity) {
  return matrixY + matrixH - (complexity / 10) * matrixH;
}

function xToValue(x) {
  return constrain(((x - matrixX) / matrixW) * 10, 0, 10);
}

function yToComplexity(y) {
  return constrain((1 - (y - matrixY) / matrixH) * 10, 0, 10);
}

function draw() {
  updateCanvasSize();

  // Drawing area background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area background
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('black');
  textSize(20);
  textAlign(CENTER, TOP);
  noStroke();
  text('AI Use Case Prioritization Matrix', canvasWidth * 0.35, 10);

  // Reset text settings
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Draw matrix
  drawMatrix();

  // Draw use cases
  drawUseCases();

  // Draw ranked list panel
  drawRankedList();

  // Draw selected case details
  if (selectedCase !== null) {
    drawCaseDetails();
  }

  // Draw control labels
  drawControlLabels();
}

function drawMatrix() {
  // Matrix background
  fill(255, 255, 255);
  stroke(180);
  strokeWeight(1);
  rect(matrixX, matrixY, matrixW, matrixH);

  // Quadrant backgrounds
  let halfW = matrixW / 2;
  let halfH = matrixH / 2;

  // Quick Wins (high value, low complexity) - top right
  fill(144, 238, 144, 60);
  noStroke();
  rect(matrixX + halfW, matrixY, halfW, halfH);

  // Strategic (high value, high complexity) - bottom right
  fill(135, 206, 250, 60);
  rect(matrixX + halfW, matrixY + halfH, halfW, halfH);

  // Low Priority (low value, low complexity) - top left
  fill(255, 255, 200, 60);
  rect(matrixX, matrixY, halfW, halfH);

  // Avoid (low value, high complexity) - bottom left
  fill(255, 182, 193, 60);
  rect(matrixX, matrixY + halfH, halfW, halfH);

  // Quadrant labels
  textSize(14);
  fill(0, 100, 0);
  textAlign(CENTER, TOP);
  text('Quick Wins', matrixX + halfW + halfW / 2, matrixY + 8);

  fill(0, 0, 139);
  text('Strategic', matrixX + halfW + halfW / 2, matrixY + halfH + 8);

  fill(139, 119, 0);
  text('Low Priority', matrixX + halfW / 2, matrixY + 8);

  fill(139, 0, 0);
  text('Avoid', matrixX + halfW / 2, matrixY + halfH + 8);

  // Grid lines
  stroke(220);
  strokeWeight(1);
  for (let i = 1; i < 10; i++) {
    let x = matrixX + (i / 10) * matrixW;
    let y = matrixY + (i / 10) * matrixH;
    line(x, matrixY, x, matrixY + matrixH);
    line(matrixX, y, matrixX + matrixW, y);
  }

  // Center lines (bold)
  stroke(150);
  strokeWeight(2);
  line(matrixX + halfW, matrixY, matrixX + halfW, matrixY + matrixH);
  line(matrixX, matrixY + halfH, matrixX + matrixW, matrixY + halfH);

  // Axis labels
  fill('black');
  textSize(14);
  textAlign(CENTER, TOP);
  text('Business Value →', matrixX + matrixW / 2, matrixY + matrixH + 10);

  push();
  translate(matrixX - 35, matrixY + matrixH / 2);
  rotate(-PI / 2);
  textAlign(CENTER, BOTTOM);
  text('← Implementation Complexity', 0, 0);
  pop();

  // Scale labels
  textSize(10);
  textAlign(CENTER, TOP);
  fill(100);
  text('Low', matrixX, matrixY + matrixH + 25);
  text('High', matrixX + matrixW, matrixY + matrixH + 25);

  textAlign(RIGHT, CENTER);
  text('Low', matrixX - 8, matrixY + matrixH);
  text('High', matrixX - 8, matrixY);
}

function drawUseCases() {
  for (let uc of useCases) {
    let radius = map(uc.investment, 100, 600, 30, 70);

    // Bubble
    if (selectedCase && selectedCase.id === uc.id) {
      stroke(0);
      strokeWeight(3);
    } else {
      stroke(80);
      strokeWeight(1);
    }

    fill(uc.color + 'CC');
    ellipse(uc.x, uc.y, radius, radius);

    // Label
    fill('black');
    noStroke();
    textSize(10);
    textAlign(CENTER, CENTER);

    // Wrap text for long names
    let words = uc.name.split(' ');
    if (words.length > 1) {
      text(words[0], uc.x, uc.y - 6);
      text(words.slice(1).join(' '), uc.x, uc.y + 6);
    } else {
      text(uc.name, uc.x, uc.y);
    }
  }
}

function drawRankedList() {
  let panelX = matrixX + matrixW + 30;
  let panelY = matrixY;
  let panelW = canvasWidth - panelX - 15;
  let panelH = matrixH * 0.6;

  // Panel background
  fill(255, 255, 255, 240);
  stroke(180);
  strokeWeight(1);
  rect(panelX, panelY, panelW, panelH, 8);

  // Panel title
  fill('black');
  noStroke();
  textSize(14);
  textAlign(CENTER, TOP);
  text('Priority Ranking', panelX + panelW / 2, panelY + 8);

  // Calculate priority scores and sort
  let rankedCases = useCases.map(uc => ({
    ...uc,
    score: calculatePriorityScore(uc.value, uc.complexity)
  })).sort((a, b) => b.score - a.score);

  // Draw ranked list
  textSize(11);
  textAlign(LEFT, TOP);
  let y = panelY + 35;

  for (let i = 0; i < rankedCases.length; i++) {
    let uc = rankedCases[i];

    // Background highlight for selected
    if (selectedCase && selectedCase.id === uc.id) {
      fill(uc.color + '40');
      noStroke();
      rect(panelX + 5, y - 2, panelW - 10, 30, 4);
    }

    // Rank number
    fill(80);
    text((i + 1) + '.', panelX + 10, y);

    // Name with color indicator
    fill(uc.color);
    ellipse(panelX + 35, y + 8, 10, 10);

    fill('black');
    text(uc.name, panelX + 45, y);

    // Score
    fill(100);
    textAlign(RIGHT, TOP);
    text(uc.score.toFixed(1), panelX + panelW - 10, y);

    // Quadrant indicator
    textSize(9);
    fill(getQuadrantColor(uc.value, uc.complexity));
    text(getQuadrantLabel(uc.value, uc.complexity), panelX + panelW - 10, y + 13);

    textAlign(LEFT, TOP);
    textSize(11);

    y += 32;
  }
}

function calculatePriorityScore(value, complexity) {
  // Higher value and lower complexity = higher score
  return (value * 1.5) - (complexity * 0.5) + 5;
}

function getQuadrantLabel(value, complexity) {
  if (value >= 5 && complexity < 5) return 'Quick Win';
  if (value >= 5 && complexity >= 5) return 'Strategic';
  if (value < 5 && complexity < 5) return 'Low Priority';
  return 'Avoid';
}

function getQuadrantColor(value, complexity) {
  if (value >= 5 && complexity < 5) return color(0, 100, 0);
  if (value >= 5 && complexity >= 5) return color(0, 0, 139);
  if (value < 5 && complexity < 5) return color(139, 119, 0);
  return color(139, 0, 0);
}

function drawCaseDetails() {
  let panelX = matrixX + matrixW + 30;
  let panelY = matrixY + matrixH * 0.65;
  let panelW = canvasWidth - panelX - 15;
  let panelH = matrixH * 0.35;

  // Panel background
  fill(255, 255, 255, 240);
  stroke(selectedCase.color);
  strokeWeight(2);
  rect(panelX, panelY, panelW, panelH, 8);

  // Panel title
  fill('black');
  noStroke();
  textSize(13);
  textAlign(CENTER, TOP);
  text('Selected: ' + selectedCase.name, panelX + panelW / 2, panelY + 8);

  // Details
  textSize(11);
  textAlign(LEFT, TOP);
  let y = panelY + 35;

  fill(80);
  text('Business Value:', panelX + 10, y);
  fill('black');
  textAlign(RIGHT, TOP);
  text(selectedCase.value.toFixed(1) + ' / 10', panelX + panelW - 10, y);

  y += 22;
  textAlign(LEFT, TOP);
  fill(80);
  text('Complexity:', panelX + 10, y);
  fill('black');
  textAlign(RIGHT, TOP);
  text(selectedCase.complexity.toFixed(1) + ' / 10', panelX + panelW - 10, y);

  y += 22;
  textAlign(LEFT, TOP);
  fill(80);
  text('Est. Investment:', panelX + 10, y);
  fill('black');
  textAlign(RIGHT, TOP);
  text('$' + selectedCase.investment + 'K', panelX + panelW - 10, y);

  y += 22;
  textAlign(LEFT, TOP);
  fill(80);
  text('Priority Score:', panelX + 10, y);
  let score = calculatePriorityScore(selectedCase.value, selectedCase.complexity);
  fill(score > 10 ? '#50C878' : score > 7 ? '#F4A460' : '#E74C3C');
  textAlign(RIGHT, TOP);
  text(score.toFixed(1), panelX + panelW - 10, y);

  y += 22;
  textAlign(LEFT, TOP);
  fill(80);
  text('Quadrant:', panelX + 10, y);
  fill(getQuadrantColor(selectedCase.value, selectedCase.complexity));
  textAlign(RIGHT, TOP);
  text(getQuadrantLabel(selectedCase.value, selectedCase.complexity), panelX + panelW - 10, y);
}

function drawControlLabels() {
  fill('black');
  textSize(12);
  textAlign(LEFT, CENTER);

  text('Scenario:', 10, drawHeight + 27);

  textSize(11);
  fill(80);
  text('Click bubbles to select. Drag to reposition and explore "what-if" scenarios.', 10, drawHeight + 80);

  // Legend
  let legendX = 250;
  fill('black');
  textSize(11);
  text('Bubble size = Investment amount', legendX, drawHeight + 27);

  // Quadrant legend
  legendX += 200;
  fill(144, 238, 144);
  rect(legendX, drawHeight + 20, 12, 12);
  fill('black');
  text('Quick Win', legendX + 16, drawHeight + 27);

  legendX += 80;
  fill(135, 206, 250);
  rect(legendX, drawHeight + 20, 12, 12);
  fill('black');
  text('Strategic', legendX + 16, drawHeight + 27);

  legendX += 70;
  fill(255, 255, 200);
  rect(legendX, drawHeight + 20, 12, 12);
  fill('black');
  text('Low Priority', legendX + 16, drawHeight + 27);

  legendX += 85;
  fill(255, 182, 193);
  rect(legendX, drawHeight + 20, 12, 12);
  fill('black');
  text('Avoid', legendX + 16, drawHeight + 27);
}

function mousePressed() {
  // Check if clicking on a use case
  for (let uc of useCases) {
    let radius = map(uc.investment, 100, 600, 30, 70);
    let d = dist(mouseX, mouseY, uc.x, uc.y);

    if (d < radius / 2) {
      selectedCase = uc;
      dragging = true;
      dragOffset.x = mouseX - uc.x;
      dragOffset.y = mouseY - uc.y;
      return;
    }
  }

  // Clicked outside bubbles
  if (mouseX > matrixX && mouseX < matrixX + matrixW &&
      mouseY > matrixY && mouseY < matrixY + matrixH) {
    // Clicked in matrix but not on bubble
    selectedCase = null;
  }
}

function mouseDragged() {
  if (dragging && selectedCase) {
    let newX = constrain(mouseX - dragOffset.x, matrixX, matrixX + matrixW);
    let newY = constrain(mouseY - dragOffset.y, matrixY, matrixY + matrixH);

    selectedCase.x = newX;
    selectedCase.y = newY;
    selectedCase.value = xToValue(newX);
    selectedCase.complexity = yToComplexity(newY);
  }
}

function mouseReleased() {
  dragging = false;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  updateMatrixDimensions();

  // Recalculate positions
  for (let uc of useCases) {
    uc.x = valueToX(uc.value);
    uc.y = complexityToY(uc.complexity);
  }
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = Math.max(900, container.offsetWidth);
    updateMatrixDimensions();
  }
}
