// Neural Network Architecture Visualization MicroSim
// Purpose: Interactive visualization of how neural networks process information
// Chapter 1: Digital Transformation and AI Foundations

let canvasWidth = 1000;
let drawHeight = 480;
let controlHeight = 120;
let margin = 20;

// Network configuration
let inputNodes = 4;
let hiddenLayers = 2;
let nodesPerHidden = 5;
let outputNodes = 3;

// Animation state
let activations = [];
let weights = [];
let isAnimating = false;
let animationProgress = 0;
let animationSpeed = 0.015;

// Colors
const nodeInactive = [200, 200, 200];
const nodeActive = [100, 149, 237];
const connectionBase = [180, 180, 180];
const connectionActive = [255, 165, 0];

// Selected node for info
let hoveredNode = null;

function setup() {
  updateCanvasSize();
  let canvas = createCanvas(canvasWidth, drawHeight + controlHeight);
  canvas.parent('canvas-container');
  textFont('Arial');

  initializeNetwork();
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

function initializeNetwork() {
  // Initialize activations for all layers
  activations = [];

  // Input layer
  let inputActivations = [];
  for (let i = 0; i < inputNodes; i++) {
    inputActivations.push(random(0.3, 1));
  }
  activations.push(inputActivations);

  // Hidden layers
  for (let l = 0; l < hiddenLayers; l++) {
    let layerActivations = [];
    for (let i = 0; i < nodesPerHidden; i++) {
      layerActivations.push(0);
    }
    activations.push(layerActivations);
  }

  // Output layer
  let outputActivations = [];
  for (let i = 0; i < outputNodes; i++) {
    outputActivations.push(0);
  }
  activations.push(outputActivations);

  // Initialize weights
  weights = [];
  let layerSizes = [inputNodes];
  for (let i = 0; i < hiddenLayers; i++) {
    layerSizes.push(nodesPerHidden);
  }
  layerSizes.push(outputNodes);

  for (let l = 0; l < layerSizes.length - 1; l++) {
    let layerWeights = [];
    for (let i = 0; i < layerSizes[l]; i++) {
      let nodeWeights = [];
      for (let j = 0; j < layerSizes[l + 1]; j++) {
        nodeWeights.push(random(-1, 1));
      }
      layerWeights.push(nodeWeights);
    }
    weights.push(layerWeights);
  }
}

function draw() {
  background(250);

  // Title
  fill(50);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Neural Network Architecture Visualization", margin, margin);

  // Subtitle
  fill(100);
  textSize(12);
  text("Watch information flow through the network layers", margin, margin + 28);

  // Draw the network
  drawNetwork();

  // Draw info panel
  drawInfoPanel();

  // Update animation
  if (isAnimating) {
    animationProgress += animationSpeed;
    if (animationProgress >= 1) {
      animationProgress = 0;
      propagateActivations();
    }
  }
}

function drawNetwork() {
  let networkStartX = margin + 100;
  let networkWidth = canvasWidth - 450;
  let networkStartY = 80;
  let networkHeight = 340;

  let totalLayers = 2 + hiddenLayers; // input + hidden + output
  let layerSpacing = networkWidth / (totalLayers - 1);

  // Get layer sizes
  let layerSizes = [inputNodes];
  for (let i = 0; i < hiddenLayers; i++) {
    layerSizes.push(nodesPerHidden);
  }
  layerSizes.push(outputNodes);

  // Calculate node positions
  let nodePositions = [];
  for (let l = 0; l < totalLayers; l++) {
    let layerPositions = [];
    let nodeCount = layerSizes[l];
    let nodeSpacing = networkHeight / (nodeCount + 1);

    for (let n = 0; n < nodeCount; n++) {
      layerPositions.push({
        x: networkStartX + l * layerSpacing,
        y: networkStartY + (n + 1) * nodeSpacing
      });
    }
    nodePositions.push(layerPositions);
  }

  // Draw connections with weights
  for (let l = 0; l < totalLayers - 1; l++) {
    for (let i = 0; i < layerSizes[l]; i++) {
      for (let j = 0; j < layerSizes[l + 1]; j++) {
        let from = nodePositions[l][i];
        let to = nodePositions[l + 1][j];
        let weight = weights[l][i][j];

        // Determine if connection is active during animation
        let connectionActive = isAnimating && animationProgress > l / (totalLayers - 1);

        // Line thickness based on weight magnitude
        let thickness = map(abs(weight), 0, 1, 0.5, 3);

        // Color based on weight sign and activation
        if (connectionActive && activations[l][i] > 0.3) {
          let alpha = map(activations[l][i], 0.3, 1, 100, 255);
          if (weight > 0) {
            stroke(100, 200, 100, alpha); // Green for positive
          } else {
            stroke(200, 100, 100, alpha); // Red for negative
          }
        } else {
          stroke(connectionBase[0], connectionBase[1], connectionBase[2], 100);
        }

        strokeWeight(thickness);
        line(from.x, from.y, to.x, to.y);
      }
    }
  }

  // Draw nodes
  hoveredNode = null;
  for (let l = 0; l < totalLayers; l++) {
    for (let n = 0; n < layerSizes[l]; n++) {
      let pos = nodePositions[l][n];
      let activation = activations[l][n];

      // Check hover
      let isHovered = dist(mouseX, mouseY, pos.x, pos.y) < 20;
      if (isHovered) {
        hoveredNode = { layer: l, node: n, activation: activation, x: pos.x, y: pos.y };
      }

      // Node color based on activation
      let nodeColor = lerpColor(
        color(nodeInactive[0], nodeInactive[1], nodeInactive[2]),
        color(nodeActive[0], nodeActive[1], nodeActive[2]),
        activation
      );

      fill(nodeColor);
      stroke(isHovered ? 0 : 100);
      strokeWeight(isHovered ? 2 : 1);
      ellipse(pos.x, pos.y, 35, 35);

      // Show activation value
      fill(activation > 0.5 ? 255 : 50);
      noStroke();
      textSize(9);
      textAlign(CENTER, CENTER);
      text(activation.toFixed(2), pos.x, pos.y);
    }
  }

  // Layer labels
  let labels = ["Input", ...Array(hiddenLayers).fill(0).map((_, i) => "Hidden " + (i + 1)), "Output"];
  fill(80);
  textSize(12);
  textAlign(CENTER, TOP);

  for (let l = 0; l < totalLayers; l++) {
    let x = networkStartX + l * layerSpacing;
    text(labels[l], x, networkStartY + networkHeight + 20);
  }

  // Animation progress indicator
  if (isAnimating) {
    let progressWidth = networkWidth;
    let progressY = networkStartY - 25;

    fill(220);
    noStroke();
    rect(networkStartX, progressY, progressWidth, 6, 3);

    fill(100, 149, 237);
    rect(networkStartX, progressY, progressWidth * animationProgress, 6, 3);

    fill(80);
    textSize(10);
    textAlign(LEFT, CENTER);
    text("Forward Pass: " + (animationProgress * 100).toFixed(0) + "%", networkStartX, progressY - 10);
  }
}

function drawInfoPanel() {
  let panelX = canvasWidth - 280;
  let panelY = 80;
  let panelWidth = 260;
  let panelHeight = 340;

  // Panel background
  fill(245);
  stroke(200);
  strokeWeight(1);
  rect(panelX, panelY, panelWidth, panelHeight, 8);

  fill(50);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Network Information", panelX + 15, panelY + 12);

  textSize(11);
  fill(80);

  // Network stats
  let y = panelY + 40;
  text("Architecture:", panelX + 15, y);
  y += 20;

  fill(100);
  textSize(10);
  text("• Input nodes: " + inputNodes, panelX + 20, y); y += 16;
  text("• Hidden layers: " + hiddenLayers, panelX + 20, y); y += 16;
  text("• Nodes per hidden: " + nodesPerHidden, panelX + 20, y); y += 16;
  text("• Output nodes: " + outputNodes, panelX + 20, y); y += 25;

  // Total parameters
  let totalParams = 0;
  let layerSizes = [inputNodes];
  for (let i = 0; i < hiddenLayers; i++) layerSizes.push(nodesPerHidden);
  layerSizes.push(outputNodes);

  for (let i = 0; i < layerSizes.length - 1; i++) {
    totalParams += layerSizes[i] * layerSizes[i + 1]; // weights
    totalParams += layerSizes[i + 1]; // biases
  }

  fill(80);
  textSize(11);
  text("Total parameters: " + totalParams, panelX + 15, y);
  y += 30;

  // Hovered node info
  if (hoveredNode) {
    fill(50);
    textSize(12);
    text("Selected Node:", panelX + 15, y);
    y += 20;

    fill(80);
    textSize(10);
    let layerName = hoveredNode.layer === 0 ? "Input" :
                    hoveredNode.layer === hiddenLayers + 1 ? "Output" :
                    "Hidden " + hoveredNode.layer;

    text("Layer: " + layerName, panelX + 20, y); y += 16;
    text("Node: " + (hoveredNode.node + 1), panelX + 20, y); y += 16;
    text("Activation: " + hoveredNode.activation.toFixed(4), panelX + 20, y); y += 25;

    // Show connections
    if (hoveredNode.layer < weights.length) {
      text("Output weights:", panelX + 20, y); y += 15;
      let nodeWeights = weights[hoveredNode.layer][hoveredNode.node];
      for (let i = 0; i < min(4, nodeWeights.length); i++) {
        text("  → Node " + (i+1) + ": " + nodeWeights[i].toFixed(3), panelX + 25, y);
        y += 13;
      }
    }
  } else {
    fill(100);
    textSize(10);
    text("Hover over a node to see", panelX + 15, y);
    text("its activation and weights", panelX + 15, y + 15);
  }

  // Legend
  y = panelY + panelHeight - 60;
  fill(50);
  textSize(11);
  text("Connection Colors:", panelX + 15, y);

  y += 18;
  textSize(9);
  fill(100, 200, 100);
  rect(panelX + 15, y, 12, 12);
  fill(80);
  text("Positive weight", panelX + 32, y + 2);

  fill(200, 100, 100);
  rect(panelX + 120, y, 12, 12);
  fill(80);
  text("Negative weight", panelX + 137, y + 2);
}

function propagateActivations() {
  let layerSizes = [inputNodes];
  for (let i = 0; i < hiddenLayers; i++) layerSizes.push(nodesPerHidden);
  layerSizes.push(outputNodes);

  // Forward propagation
  for (let l = 1; l < layerSizes.length; l++) {
    for (let j = 0; j < layerSizes[l]; j++) {
      let sum = 0;
      for (let i = 0; i < layerSizes[l - 1]; i++) {
        sum += activations[l - 1][i] * weights[l - 1][i][j];
      }
      // ReLU-like activation with some noise
      activations[l][j] = max(0, min(1, sum / layerSizes[l - 1] + 0.3));
    }
  }
}

// Control functions called from HTML
function startAnimation() {
  isAnimating = true;
}

function pauseAnimation() {
  isAnimating = false;
}

function resetNetwork() {
  initializeNetwork();
  animationProgress = 0;
  isAnimating = false;
}

function randomizeInputs() {
  for (let i = 0; i < inputNodes; i++) {
    activations[0][i] = random(0.2, 1);
  }
  animationProgress = 0;
}

function updateHiddenLayers(value) {
  hiddenLayers = parseInt(value);
  initializeNetwork();
}

function updateNodesPerHidden(value) {
  nodesPerHidden = parseInt(value);
  initializeNetwork();
}
