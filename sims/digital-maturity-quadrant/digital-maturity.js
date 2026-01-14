// Digital Maturity Quadrant Model MicroSim
// Purpose: Interactive exploration of digital maturity archetypes
// Chapter 1: Digital Transformation and AI Foundations

let canvasWidth = 1000;
let drawHeight = 500;
let controlHeight = 100;
let margin = 20;

// Quadrant definitions
const quadrants = {
  beginners: {
    name: "Beginners",
    color: [169, 169, 169], // Gray
    description: "Low digital intensity and low transformation management",
    recommendation: "Start with digital literacy programs and small pilot projects",
    examples: "Traditional manufacturing, local retail stores"
  },
  fashionistas: {
    name: "Fashionistas",
    color: [255, 165, 0], // Orange
    description: "High digital intensity but low transformation management",
    recommendation: "Develop governance frameworks and integration strategies",
    examples: "Tech startups without process maturity"
  },
  conservatives: {
    name: "Conservatives",
    color: [70, 130, 180], // Steel blue
    description: "Low digital intensity but high transformation management",
    recommendation: "Accelerate technology adoption while maintaining discipline",
    examples: "Traditional banks with strong governance"
  },
  digirati: {
    name: "Digirati",
    color: [34, 139, 34], // Forest green
    description: "High digital intensity and high transformation management",
    recommendation: "Focus on innovation and competitive advantage",
    examples: "Leading tech companies, digital-native banks"
  }
};

// Sample organizations
let organizations = [
  { name: "TechCorp", x: 0.75, y: 0.8, color: [100, 149, 237] },
  { name: "TradiBank", x: 0.3, y: 0.7, color: [220, 20, 60] },
  { name: "RetailCo", x: 0.2, y: 0.25, color: [255, 215, 0] },
  { name: "StartupX", x: 0.85, y: 0.35, color: [147, 112, 219] }
];

let selectedOrg = -1;
let dragging = false;
let hoveredQuadrant = null;

// Grid dimensions
let gridX, gridY, gridWidth, gridHeight;

function setup() {
  updateCanvasSize();
  let canvas = createCanvas(canvasWidth, drawHeight + controlHeight);
  canvas.parent('canvas-container');
  textFont('Arial');

  calculateGridDimensions();
}

function updateCanvasSize() {
  let container = select('#canvas-container');
  if (container) {
    canvasWidth = max(800, container.width - 20);
  } else {
    canvasWidth = max(800, windowWidth - 40);
  }
}

function calculateGridDimensions() {
  gridWidth = min(450, canvasWidth - 400);
  gridHeight = 380;
  gridX = margin + 80;
  gridY = 80;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, drawHeight + controlHeight);
  calculateGridDimensions();
}

function draw() {
  background(250);

  // Title
  fill(50);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Digital Maturity Quadrant Model", margin, margin);

  textSize(12);
  fill(100);
  text("Drag organizations to assess their digital maturity position", margin, margin + 28);

  // Draw the quadrant grid
  drawQuadrantGrid();

  // Draw organizations
  drawOrganizations();

  // Draw info panel
  drawInfoPanel();

  // Draw legend
  drawLegend();
}

function drawQuadrantGrid() {
  // Draw quadrant backgrounds
  let halfWidth = gridWidth / 2;
  let halfHeight = gridHeight / 2;

  // Beginners (bottom-left)
  fill(quadrants.beginners.color[0], quadrants.beginners.color[1], quadrants.beginners.color[2], 100);
  stroke(150);
  strokeWeight(1);
  rect(gridX, gridY + halfHeight, halfWidth, halfHeight);

  // Fashionistas (bottom-right)
  fill(quadrants.fashionistas.color[0], quadrants.fashionistas.color[1], quadrants.fashionistas.color[2], 100);
  rect(gridX + halfWidth, gridY + halfHeight, halfWidth, halfHeight);

  // Conservatives (top-left)
  fill(quadrants.conservatives.color[0], quadrants.conservatives.color[1], quadrants.conservatives.color[2], 100);
  rect(gridX, gridY, halfWidth, halfHeight);

  // Digirati (top-right)
  fill(quadrants.digirati.color[0], quadrants.digirati.color[1], quadrants.digirati.color[2], 100);
  rect(gridX + halfWidth, gridY, halfWidth, halfHeight);

  // Quadrant labels
  textSize(14);
  fill(50);
  textAlign(CENTER, CENTER);

  text("CONSERVATIVES", gridX + halfWidth/2, gridY + halfHeight/2 - 30);
  textSize(10);
  fill(80);
  text("Strong governance,", gridX + halfWidth/2, gridY + halfHeight/2 - 10);
  text("limited technology", gridX + halfWidth/2, gridY + halfHeight/2 + 5);

  textSize(14);
  fill(50);
  text("DIGIRATI", gridX + halfWidth * 1.5, gridY + halfHeight/2 - 30);
  textSize(10);
  fill(80);
  text("Digital leaders with", gridX + halfWidth * 1.5, gridY + halfHeight/2 - 10);
  text("mature processes", gridX + halfWidth * 1.5, gridY + halfHeight/2 + 5);

  textSize(14);
  fill(50);
  text("BEGINNERS", gridX + halfWidth/2, gridY + halfHeight * 1.5 - 30);
  textSize(10);
  fill(80);
  text("Starting the digital", gridX + halfWidth/2, gridY + halfHeight * 1.5 - 10);
  text("journey", gridX + halfWidth/2, gridY + halfHeight * 1.5 + 5);

  textSize(14);
  fill(50);
  text("FASHIONISTAS", gridX + halfWidth * 1.5, gridY + halfHeight * 1.5 - 30);
  textSize(10);
  fill(80);
  text("Tech-forward but", gridX + halfWidth * 1.5, gridY + halfHeight * 1.5 - 10);
  text("lacking integration", gridX + halfWidth * 1.5, gridY + halfHeight * 1.5 + 5);

  // Axis labels
  fill(50);
  textSize(12);

  // X-axis
  textAlign(CENTER, TOP);
  text("Digital Intensity", gridX + gridWidth/2, gridY + gridHeight + 15);

  textSize(10);
  textAlign(LEFT, TOP);
  text("Low", gridX, gridY + gridHeight + 5);
  textAlign(RIGHT, TOP);
  text("High", gridX + gridWidth, gridY + gridHeight + 5);

  // Y-axis
  push();
  translate(gridX - 35, gridY + gridHeight/2);
  rotate(-HALF_PI);
  textAlign(CENTER, BOTTOM);
  textSize(12);
  text("Transformation Management", 0, 0);
  pop();

  textSize(10);
  textAlign(RIGHT, BOTTOM);
  text("Low", gridX - 5, gridY + gridHeight);
  textAlign(RIGHT, TOP);
  text("High", gridX - 5, gridY);

  // Draw grid lines
  stroke(180);
  strokeWeight(1);
  setLineDash([5, 5]);
  line(gridX + halfWidth, gridY, gridX + halfWidth, gridY + gridHeight);
  line(gridX, gridY + halfHeight, gridX + gridWidth, gridY + halfHeight);
  setLineDash([]);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function drawOrganizations() {
  for (let i = 0; i < organizations.length; i++) {
    let org = organizations[i];
    let x = gridX + org.x * gridWidth;
    let y = gridY + (1 - org.y) * gridHeight; // Invert Y

    let isSelected = (i === selectedOrg);
    let isHovered = isOverOrg(i);

    // Draw shadow for selected
    if (isSelected) {
      fill(0, 0, 0, 30);
      noStroke();
      ellipse(x + 3, y + 3, 45, 45);
    }

    // Draw circle
    fill(org.color[0], org.color[1], org.color[2]);
    stroke(isSelected ? 0 : 100);
    strokeWeight(isSelected ? 3 : (isHovered ? 2 : 1));
    ellipse(x, y, 40, 40);

    // Draw label
    fill(255);
    noStroke();
    textSize(9);
    textAlign(CENTER, CENTER);
    text(org.name, x, y);
  }
}

function drawInfoPanel() {
  let panelX = gridX + gridWidth + 40;
  let panelY = gridY;
  let panelWidth = canvasWidth - panelX - margin;
  let panelHeight = 300;

  // Panel background
  fill(245);
  stroke(200);
  strokeWeight(1);
  rect(panelX, panelY, panelWidth, panelHeight, 8);

  fill(50);
  textSize(14);
  textAlign(LEFT, TOP);

  if (selectedOrg >= 0) {
    let org = organizations[selectedOrg];
    let quadrant = getQuadrant(org.x, org.y);
    let q = quadrants[quadrant];

    // Organization name
    fill(org.color[0], org.color[1], org.color[2]);
    text(org.name, panelX + 15, panelY + 15);

    // Quadrant name
    fill(q.color[0], q.color[1], q.color[2]);
    textSize(16);
    text(q.name, panelX + 15, panelY + 40);

    // Position metrics
    fill(80);
    textSize(11);
    text("Digital Intensity: " + (org.x * 100).toFixed(0) + "%", panelX + 15, panelY + 70);
    text("Transformation Mgmt: " + (org.y * 100).toFixed(0) + "%", panelX + 15, panelY + 88);

    // Description
    fill(50);
    textSize(12);
    text("Profile:", panelX + 15, panelY + 115);
    fill(80);
    textSize(11);
    text(q.description, panelX + 15, panelY + 135, panelWidth - 30, 40);

    // Recommendation
    fill(50);
    textSize(12);
    text("Recommendation:", panelX + 15, panelY + 180);
    fill(34, 139, 34);
    textSize(11);
    text(q.recommendation, panelX + 15, panelY + 200, panelWidth - 30, 50);

    // Examples
    fill(50);
    textSize(12);
    text("Typical Examples:", panelX + 15, panelY + 255);
    fill(100);
    textSize(10);
    text(q.examples, panelX + 15, panelY + 275, panelWidth - 30, 30);

  } else {
    fill(80);
    textSize(12);
    text("Organization Details", panelX + 15, panelY + 15);

    fill(100);
    textSize(11);
    text("Click or drag an organization\nto see its maturity assessment\nand recommendations.", panelX + 15, panelY + 45);

    text("Try moving organizations\nbetween quadrants to see\nhow recommendations change.", panelX + 15, panelY + 110);
  }
}

function drawLegend() {
  let legendY = drawHeight + 15;

  fill(50);
  textSize(13);
  textAlign(LEFT, TOP);
  text("Organizations:", margin, legendY);

  let x = margin + 100;
  textSize(11);

  for (let org of organizations) {
    fill(org.color[0], org.color[1], org.color[2]);
    ellipse(x, legendY + 10, 16, 16);

    fill(50);
    textAlign(LEFT, CENTER);
    text(org.name, x + 15, legendY + 10);

    x += 100;
  }

  // Add organization button hint
  fill(100);
  textSize(10);
  textAlign(RIGHT, CENTER);
  text("Drag organizations to reposition", canvasWidth - margin, legendY + 10);
}

function getQuadrant(x, y) {
  if (x < 0.5 && y < 0.5) return 'beginners';
  if (x >= 0.5 && y < 0.5) return 'fashionistas';
  if (x < 0.5 && y >= 0.5) return 'conservatives';
  return 'digirati';
}

function isOverOrg(index) {
  let org = organizations[index];
  let x = gridX + org.x * gridWidth;
  let y = gridY + (1 - org.y) * gridHeight;

  return dist(mouseX, mouseY, x, y) < 25;
}

function mousePressed() {
  // Check if clicking on an organization
  for (let i = 0; i < organizations.length; i++) {
    if (isOverOrg(i)) {
      selectedOrg = i;
      dragging = true;
      return;
    }
  }
  selectedOrg = -1;
}

function mouseDragged() {
  if (dragging && selectedOrg >= 0) {
    // Update organization position
    let newX = (mouseX - gridX) / gridWidth;
    let newY = 1 - (mouseY - gridY) / gridHeight;

    organizations[selectedOrg].x = constrain(newX, 0.05, 0.95);
    organizations[selectedOrg].y = constrain(newY, 0.05, 0.95);
  }
}

function mouseReleased() {
  dragging = false;
}

// Called from HTML buttons
function resetPositions() {
  organizations = [
    { name: "TechCorp", x: 0.75, y: 0.8, color: [100, 149, 237] },
    { name: "TradiBank", x: 0.3, y: 0.7, color: [220, 20, 60] },
    { name: "RetailCo", x: 0.2, y: 0.25, color: [255, 215, 0] },
    { name: "StartupX", x: 0.85, y: 0.35, color: [147, 112, 219] }
  ];
  selectedOrg = -1;
}

function addOrganization() {
  let name = prompt("Enter organization name:");
  if (name && name.trim()) {
    let colors = [
      [255, 99, 71], [60, 179, 113], [255, 140, 0],
      [138, 43, 226], [0, 191, 255], [255, 20, 147]
    ];
    let randomColor = colors[organizations.length % colors.length];

    organizations.push({
      name: name.trim().substring(0, 10),
      x: 0.5 + random(-0.2, 0.2),
      y: 0.5 + random(-0.2, 0.2),
      color: randomColor
    });
  }
}
