// AI Strategy Completeness Assessment
// Educational MicroSim for Chapter 10: Business Applications
// Purpose: Enable students to assess the completeness and quality of AI strategy documents

// Canvas dimensions
let canvasWidth = 1000;
let drawHeight = 520;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 15;
let defaultTextSize = 12;

// Mouse tracking
let mouseOverCanvas = false;

// Radar chart dimensions
let radarCenterX, radarCenterY, radarRadius;

// Strategy dimensions
const dimensions = [
  { id: 'exec', name: 'Executive Summary', short: 'Exec Summary' },
  { id: 'current', name: 'Current State', short: 'Current State' },
  { id: 'vision', name: 'Vision/Objectives', short: 'Vision' },
  { id: 'usecases', name: 'Use Case Portfolio', short: 'Use Cases' },
  { id: 'tech', name: 'Technology Strategy', short: 'Technology' },
  { id: 'org', name: 'Organization Plan', short: 'Organization' },
  { id: 'governance', name: 'Governance Framework', short: 'Governance' },
  { id: 'roadmap', name: 'Implementation Roadmap', short: 'Roadmap' },
  { id: 'investment', name: 'Investment Case', short: 'Investment' },
  { id: 'risk', name: 'Risk Assessment', short: 'Risk' }
];

// Scores (0-5 for each dimension)
let scores = {};
let checkboxes = {};
let sliders = {};

// UI state
let selectedDimension = null;
let resetButton;

// Improvement suggestions per dimension
const suggestions = {
  'exec': [
    'Add clear strategic rationale',
    'Include key outcome projections',
    'Summarize resource requirements'
  ],
  'current': [
    'Include AI maturity assessment',
    'Document existing capabilities',
    'Analyze competitive landscape'
  ],
  'vision': [
    'Define 3-5 year AI vision',
    'Set measurable objectives',
    'Align with business strategy'
  ],
  'usecases': [
    'Prioritize by value and feasibility',
    'Include quick wins and strategic initiatives',
    'Document dependencies'
  ],
  'tech': [
    'Define build vs. buy approach',
    'Address data infrastructure needs',
    'Plan vendor partnerships'
  ],
  'org': [
    'Define AI operating model',
    'Identify skill gaps',
    'Plan training programs'
  ],
  'governance': [
    'Establish AI ethics guidelines',
    'Define accountability structure',
    'Create risk management framework'
  ],
  'roadmap': [
    'Create phased implementation plan',
    'Define milestones and gates',
    'Allocate resources by phase'
  ],
  'investment': [
    'Quantify expected ROI',
    'Detail funding requirements',
    'Create business case'
  ],
  'risk': [
    'Identify key risks',
    'Define mitigation strategies',
    'Plan contingency approaches'
  ]
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  canvas.mouseOver(() => mouseOverCanvas = true);
  canvas.mouseOut(() => mouseOverCanvas = false);

  // Initialize scores
  for (let dim of dimensions) {
    scores[dim.id] = { present: false, quality: 3 };
  }

  // Calculate radar dimensions
  updateRadarDimensions();

  // Create controls
  createControls();

  describe('AI Strategy Completeness Assessment with radar chart visualization and interactive scoring', LABEL);
}

function updateRadarDimensions() {
  radarCenterX = canvasWidth * 0.35;
  radarCenterY = drawHeight / 2 + 20;
  radarRadius = Math.min(canvasWidth * 0.25, drawHeight * 0.38);
}

function createControls() {
  // Create checkboxes and sliders for each dimension
  let startY = 55;
  let spacing = 44;

  for (let i = 0; i < dimensions.length; i++) {
    let dim = dimensions[i];
    let y = startY + (i * spacing);

    // Checkbox for "present"
    checkboxes[dim.id] = createCheckbox('', false);
    checkboxes[dim.id].position(canvasWidth * 0.65 + 10, y);
    checkboxes[dim.id].changed(() => {
      scores[dim.id].present = checkboxes[dim.id].checked();
    });

    // Slider for quality (1-5)
    sliders[dim.id] = createSlider(1, 5, 3, 1);
    sliders[dim.id].position(canvasWidth * 0.65 + 150, y);
    sliders[dim.id].size(80);
    sliders[dim.id].input(() => {
      scores[dim.id].quality = sliders[dim.id].value();
    });
  }

  // Reset button
  resetButton = createButton('Reset All');
  resetButton.position(10, drawHeight + 15);
  resetButton.mousePressed(resetScores);

  // Preset buttons
  let weakButton = createButton('Weak Example');
  weakButton.position(90, drawHeight + 15);
  weakButton.mousePressed(() => loadPreset('weak'));

  let strongButton = createButton('Strong Example');
  strongButton.position(200, drawHeight + 15);
  strongButton.mousePressed(() => loadPreset('strong'));
}

function loadPreset(type) {
  if (type === 'weak') {
    for (let dim of dimensions) {
      let present = Math.random() > 0.4;
      scores[dim.id].present = present;
      scores[dim.id].quality = present ? Math.floor(Math.random() * 2) + 1 : 1;
      checkboxes[dim.id].checked(scores[dim.id].present);
      sliders[dim.id].value(scores[dim.id].quality);
    }
  } else if (type === 'strong') {
    for (let dim of dimensions) {
      scores[dim.id].present = true;
      scores[dim.id].quality = Math.floor(Math.random() * 2) + 4;
      checkboxes[dim.id].checked(true);
      sliders[dim.id].value(scores[dim.id].quality);
    }
  }
}

function resetScores() {
  for (let dim of dimensions) {
    scores[dim.id] = { present: false, quality: 3 };
    checkboxes[dim.id].checked(false);
    sliders[dim.id].value(3);
  }
  selectedDimension = null;
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
  text('AI Strategy Completeness Assessment', canvasWidth * 0.35, 10);

  // Reset text settings
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Draw radar chart
  drawRadarChart();

  // Draw scoring panel
  drawScoringPanel();

  // Draw summary panel
  drawSummaryPanel();

  // Draw suggestions panel
  drawSuggestionsPanel();

  // Draw control labels
  drawControlLabels();
}

function drawRadarChart() {
  // Draw concentric circles (scale)
  stroke(220);
  strokeWeight(1);
  noFill();
  for (let i = 1; i <= 5; i++) {
    let r = (i / 5) * radarRadius;
    ellipse(radarCenterX, radarCenterY, r * 2, r * 2);
  }

  // Draw axes
  stroke(180);
  let angleStep = TWO_PI / dimensions.length;

  for (let i = 0; i < dimensions.length; i++) {
    let angle = -PI / 2 + i * angleStep;
    let x = radarCenterX + cos(angle) * radarRadius;
    let y = radarCenterY + sin(angle) * radarRadius;
    line(radarCenterX, radarCenterY, x, y);

    // Axis labels
    let labelRadius = radarRadius + 25;
    let labelX = radarCenterX + cos(angle) * labelRadius;
    let labelY = radarCenterY + sin(angle) * labelRadius;

    fill(selectedDimension === i ? '#2E86AB' : 'black');
    textSize(10);
    textAlign(CENTER, CENTER);
    text(dimensions[i].short, labelX, labelY);
  }

  // Draw data polygon
  let points = [];
  for (let i = 0; i < dimensions.length; i++) {
    let dim = dimensions[i];
    let score = scores[dim.id].present ? scores[dim.id].quality : 0;
    let angle = -PI / 2 + i * angleStep;
    let r = (score / 5) * radarRadius;
    points.push({
      x: radarCenterX + cos(angle) * r,
      y: radarCenterY + sin(angle) * r
    });
  }

  // Fill polygon
  fill(70, 130, 180, 80);
  stroke(70, 130, 180);
  strokeWeight(2);
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);

  // Draw points
  for (let i = 0; i < points.length; i++) {
    let dim = dimensions[i];
    let score = scores[dim.id].present ? scores[dim.id].quality : 0;

    if (score > 0) {
      fill(scores[dim.id].quality >= 4 ? '#50C878' : scores[dim.id].quality >= 2 ? '#F4A460' : '#E74C3C');
    } else {
      fill('#E74C3C');
    }
    stroke(255);
    strokeWeight(2);
    ellipse(points[i].x, points[i].y, 12, 12);
  }

  // Scale labels
  fill(150);
  textSize(9);
  textAlign(RIGHT, CENTER);
  for (let i = 1; i <= 5; i++) {
    let y = radarCenterY - (i / 5) * radarRadius;
    text(i, radarCenterX - radarRadius - 8, y);
  }
}

function drawScoringPanel() {
  let panelX = canvasWidth * 0.64;
  let panelY = 35;
  let panelW = canvasWidth * 0.35;
  let panelH = drawHeight - 50;

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
  text('Strategy Components', panelX + panelW / 2, panelY + 8);

  // Column headers
  textSize(10);
  fill(100);
  textAlign(LEFT, TOP);
  text('Present?', panelX + 15, panelY + 32);
  text('Quality (1-5)', panelX + 155, panelY + 32);

  // Dimension labels
  textSize(11);
  let startY = 55;
  let spacing = 44;

  for (let i = 0; i < dimensions.length; i++) {
    let dim = dimensions[i];
    let y = startY + (i * spacing);

    // Highlight if dimension is weak
    let score = scores[dim.id].present ? scores[dim.id].quality : 0;
    if (score < 3) {
      fill(255, 200, 200, 100);
      noStroke();
      rect(panelX + 5, y - 5, panelW - 10, 40, 4);
    }

    fill('black');
    textAlign(LEFT, CENTER);
    text(dim.name, panelX + 15, y + 15);

    // Quality value display
    fill(100);
    textAlign(LEFT, CENTER);
    text(scores[dim.id].quality, panelX + 240, y + 15);
  }
}

function drawSummaryPanel() {
  let panelX = 15;
  let panelY = drawHeight - 170;
  let panelW = canvasWidth * 0.28;
  let panelH = 160;

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
  text('Overall Assessment', panelX + panelW / 2, panelY + 8);

  // Calculate metrics
  let totalScore = 0;
  let presentCount = 0;
  let maxPossible = dimensions.length * 5;

  for (let dim of dimensions) {
    if (scores[dim.id].present) {
      totalScore += scores[dim.id].quality;
      presentCount++;
    }
  }

  let completeness = (presentCount / dimensions.length) * 100;
  let qualityAvg = presentCount > 0 ? totalScore / presentCount : 0;
  let overallScore = (totalScore / maxPossible) * 100;

  // Display metrics
  textSize(12);
  textAlign(LEFT, TOP);
  let y = panelY + 35;

  fill('black');
  text('Completeness:', panelX + 15, y);
  fill(completeness >= 80 ? '#50C878' : completeness >= 50 ? '#F4A460' : '#E74C3C');
  textAlign(RIGHT, TOP);
  text(completeness.toFixed(0) + '%', panelX + panelW - 15, y);

  y += 25;
  textAlign(LEFT, TOP);
  fill('black');
  text('Avg Quality:', panelX + 15, y);
  fill(qualityAvg >= 4 ? '#50C878' : qualityAvg >= 2.5 ? '#F4A460' : '#E74C3C');
  textAlign(RIGHT, TOP);
  text(qualityAvg.toFixed(1) + ' / 5', panelX + panelW - 15, y);

  y += 25;
  textAlign(LEFT, TOP);
  fill('black');
  text('Overall Score:', panelX + 15, y);
  fill(overallScore >= 70 ? '#50C878' : overallScore >= 40 ? '#F4A460' : '#E74C3C');
  textAlign(RIGHT, TOP);
  text(overallScore.toFixed(0) + '%', panelX + panelW - 15, y);

  // Rating
  y += 35;
  textAlign(CENTER, TOP);
  textSize(14);
  let rating, ratingColor;
  if (overallScore >= 80) {
    rating = 'Excellent - Ready for Implementation';
    ratingColor = '#50C878';
  } else if (overallScore >= 60) {
    rating = 'Good - Minor Improvements Needed';
    ratingColor = '#90EE90';
  } else if (overallScore >= 40) {
    rating = 'Adequate - Several Gaps to Address';
    ratingColor = '#F4A460';
  } else {
    rating = 'Needs Work - Major Revision Required';
    ratingColor = '#E74C3C';
  }

  fill(ratingColor);
  text(rating, panelX + panelW / 2, y);
}

function drawSuggestionsPanel() {
  let panelX = 15;
  let panelY = 40;
  let panelW = canvasWidth * 0.28;
  let panelH = drawHeight - 225;

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
  text('Improvement Suggestions', panelX + panelW / 2, panelY + 8);

  // Find weak dimensions
  let weakDimensions = dimensions.filter(dim => {
    let score = scores[dim.id].present ? scores[dim.id].quality : 0;
    return score < 3;
  });

  textSize(11);
  textAlign(LEFT, TOP);
  let y = panelY + 35;

  if (weakDimensions.length === 0) {
    fill('#50C878');
    textAlign(CENTER, TOP);
    text('All dimensions are adequately addressed!', panelX + panelW / 2, y + 20);
    text('Consider strengthening any', panelX + panelW / 2, y + 40);
    text('dimensions below 4/5 quality.', panelX + panelW / 2, y + 55);
  } else {
    // Show up to 3 weak dimensions with suggestions
    for (let i = 0; i < Math.min(3, weakDimensions.length); i++) {
      let dim = weakDimensions[i];

      fill('#E74C3C');
      text('• ' + dim.name, panelX + 10, y);
      y += 18;

      fill(80);
      textSize(10);
      let dimSuggestions = suggestions[dim.id];
      for (let j = 0; j < Math.min(2, dimSuggestions.length); j++) {
        text('  - ' + dimSuggestions[j], panelX + 15, y);
        y += 15;
      }
      textSize(11);
      y += 10;
    }

    if (weakDimensions.length > 3) {
      fill(100);
      text('+ ' + (weakDimensions.length - 3) + ' more areas need attention', panelX + 10, y);
    }
  }
}

function drawControlLabels() {
  fill('black');
  textSize(11);
  textAlign(LEFT, CENTER);

  text('Use checkboxes to mark sections as present. Use sliders to rate quality (1=Poor, 5=Excellent).', 320, drawHeight + 27);

  fill(80);
  textSize(10);
  text('This tool helps assess AI strategy documents for the capstone project.', 320, drawHeight + 50);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  updateRadarDimensions();

  // Reposition controls
  let startY = 55;
  let spacing = 44;

  for (let i = 0; i < dimensions.length; i++) {
    let dim = dimensions[i];
    let y = startY + (i * spacing);

    if (checkboxes[dim.id]) {
      checkboxes[dim.id].position(canvasWidth * 0.65 + 10, y);
    }
    if (sliders[dim.id]) {
      sliders[dim.id].position(canvasWidth * 0.65 + 150, y);
    }
  }
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = Math.max(850, container.offsetWidth);
    updateRadarDimensions();
  }
}
