// Human-AI Task Allocation Simulator
// Educational MicroSim for Chapter 9: Future of Work
// Purpose: Enable students to experiment with different human-AI task allocation strategies

// Canvas dimensions
let canvasWidth = 1000;
let drawHeight = 500;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 15;
let sliderLeftMargin = 180;
let defaultTextSize = 14;

// Mouse tracking for animation control
let mouseOverCanvas = false;

// Simulation state
let tasks = [];
let completedTasks = [];
let taskIdCounter = 0;
let isRunning = true;
let frameCounter = 0;

// Metrics
let metrics = {
  humanTasks: 0,
  aiTasks: 0,
  collabTasks: 0,
  totalQuality: 0,
  totalCost: 0,
  totalTime: 0,
  tasksCompleted: 0
};

// Controls
let scenarioSelect;
let taskRateSlider;
let complexitySlider;
let strategyRadio;
let startButton;
let resetButton;

// Scenarios with task characteristics
const scenarios = {
  'customer-service': {
    name: 'Customer Service',
    tasks: ['Simple inquiry', 'Account issue', 'Technical problem', 'Complaint', 'Billing question'],
    aiStrength: 0.7,
    humanStrength: 0.9
  },
  'financial-reports': {
    name: 'Financial Reports',
    tasks: ['Data extraction', 'Basic analysis', 'Complex modeling', 'Narrative writing', 'Risk assessment'],
    aiStrength: 0.8,
    humanStrength: 0.85
  },
  'code-review': {
    name: 'Code Review',
    tasks: ['Syntax check', 'Style compliance', 'Logic review', 'Security audit', 'Architecture review'],
    aiStrength: 0.75,
    humanStrength: 0.95
  },
  'content-creation': {
    name: 'Content Creation',
    tasks: ['Draft writing', 'Image selection', 'Editing', 'Brand alignment', 'Creative direction'],
    aiStrength: 0.65,
    humanStrength: 0.9
  }
};

let currentScenario = 'customer-service';

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Mouse tracking for animation
  canvas.mouseOver(() => mouseOverCanvas = true);
  canvas.mouseOut(() => mouseOverCanvas = false);

  // Create controls
  createControls();

  describe('Human-AI Task Allocation Simulator showing task queue, allocation decisions, and performance metrics', LABEL);
}

function createControls() {
  // Scenario selector
  scenarioSelect = createSelect();
  scenarioSelect.position(90, drawHeight + 15);
  scenarioSelect.option('Customer Service', 'customer-service');
  scenarioSelect.option('Financial Reports', 'financial-reports');
  scenarioSelect.option('Code Review', 'code-review');
  scenarioSelect.option('Content Creation', 'content-creation');
  scenarioSelect.changed(() => {
    currentScenario = scenarioSelect.value();
    resetSimulation();
  });

  // Task rate slider
  taskRateSlider = createSlider(1, 10, 3, 1);
  taskRateSlider.position(sliderLeftMargin + 250, drawHeight + 15);
  taskRateSlider.size(120);

  // Complexity slider
  complexitySlider = createSlider(1, 10, 5, 1);
  complexitySlider.position(sliderLeftMargin + 250, drawHeight + 45);
  complexitySlider.size(120);

  // Start/Pause button
  startButton = createButton('Pause');
  startButton.position(10, drawHeight + 70);
  startButton.mousePressed(toggleSimulation);

  // Reset button
  resetButton = createButton('Reset');
  resetButton.position(70, drawHeight + 70);
  resetButton.mousePressed(resetSimulation);
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
  text('Human-AI Task Allocation Simulator', canvasWidth / 2, 8);

  // Reset text settings
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Update simulation if running
  if (isRunning && mouseOverCanvas) {
    frameCounter++;

    // Generate new tasks based on rate
    let rate = taskRateSlider.value();
    if (frameCounter % Math.floor(60 / rate) === 0) {
      generateTask();
    }

    // Process tasks
    processTasks();
  }

  // Draw panels
  drawTaskQueue();
  drawAllocationPanel();
  drawMetricsPanel();

  // Draw control labels
  drawControlLabels();
}

function drawTaskQueue() {
  let panelX = 10;
  let panelY = 40;
  let panelW = canvasWidth * 0.28;
  let panelH = drawHeight - 55;

  // Panel background
  fill(255, 255, 255, 230);
  stroke(200);
  strokeWeight(1);
  rect(panelX, panelY, panelW, panelH, 8);

  // Panel title
  fill('black');
  noStroke();
  textSize(16);
  textAlign(CENTER, TOP);
  text('Task Queue', panelX + panelW / 2, panelY + 8);

  // Draw tasks
  textSize(12);
  textAlign(LEFT, TOP);
  let y = panelY + 35;

  for (let i = 0; i < Math.min(tasks.length, 12); i++) {
    let task = tasks[i];

    // Task background based on complexity
    let complexityColor = lerpColor(color('#90EE90'), color('#FF6B6B'), task.complexity / 10);
    fill(complexityColor);
    stroke(150);
    rect(panelX + 8, y, panelW - 16, 32, 4);

    // Task text
    fill('black');
    noStroke();
    text(task.name, panelX + 12, y + 4);

    // Complexity indicator
    fill(80);
    textSize(10);
    text('Complexity: ' + task.complexity.toFixed(1), panelX + 12, y + 18);
    textSize(12);

    y += 36;
  }

  if (tasks.length > 12) {
    fill(100);
    text('+ ' + (tasks.length - 12) + ' more tasks...', panelX + 12, y + 5);
  }

  if (tasks.length === 0) {
    fill(150);
    textAlign(CENTER, CENTER);
    text('No pending tasks', panelX + panelW / 2, panelY + panelH / 2);
  }
}

function drawAllocationPanel() {
  let panelX = canvasWidth * 0.30;
  let panelY = 40;
  let panelW = canvasWidth * 0.38;
  let panelH = drawHeight - 55;

  // Panel background
  fill(255, 255, 255, 230);
  stroke(200);
  strokeWeight(1);
  rect(panelX, panelY, panelW, panelH, 8);

  // Panel title
  fill('black');
  noStroke();
  textSize(16);
  textAlign(CENTER, TOP);
  text('Allocation Strategy', panelX + panelW / 2, panelY + 8);

  // Draw allocation zones
  let zoneY = panelY + 40;
  let zoneH = (panelH - 60) / 3;

  // Human zone
  drawAllocationZone(panelX + 15, zoneY, panelW - 30, zoneH - 10, 'Human Only', '#4A90D9',
    completedTasks.filter(t => t.allocation === 'human').slice(-5));

  // AI zone
  drawAllocationZone(panelX + 15, zoneY + zoneH, panelW - 30, zoneH - 10, 'AI Only', '#50C878',
    completedTasks.filter(t => t.allocation === 'ai').slice(-5));

  // Collaborative zone
  drawAllocationZone(panelX + 15, zoneY + zoneH * 2, panelW - 30, zoneH - 10, 'Collaborative', '#9B59B6',
    completedTasks.filter(t => t.allocation === 'collab').slice(-5));
}

function drawAllocationZone(x, y, w, h, label, zoneColor, recentTasks) {
  // Zone background
  fill(zoneColor + '20');
  stroke(zoneColor);
  strokeWeight(2);
  rect(x, y, w, h, 6);

  // Zone label
  fill(zoneColor);
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  text(label, x + 8, y + 6);

  // Draw recent completed tasks as small indicators
  let indicatorX = x + 10;
  let indicatorY = y + 28;

  for (let i = 0; i < recentTasks.length; i++) {
    let task = recentTasks[i];

    // Quality-based color
    let qualityColor = lerpColor(color('#FF6B6B'), color('#90EE90'), task.quality / 100);
    fill(qualityColor);
    stroke(100);
    strokeWeight(1);
    ellipse(indicatorX + i * 25, indicatorY + 15, 18, 18);

    // Quality text
    fill('black');
    noStroke();
    textSize(9);
    textAlign(CENTER, CENTER);
    text(Math.round(task.quality), indicatorX + i * 25, indicatorY + 15);
  }

  textAlign(LEFT, TOP);
  textSize(defaultTextSize);
}

function drawMetricsPanel() {
  let panelX = canvasWidth * 0.70;
  let panelY = 40;
  let panelW = canvasWidth * 0.28;
  let panelH = drawHeight - 55;

  // Panel background
  fill(255, 255, 255, 230);
  stroke(200);
  strokeWeight(1);
  rect(panelX, panelY, panelW, panelH, 8);

  // Panel title
  fill('black');
  noStroke();
  textSize(16);
  textAlign(CENTER, TOP);
  text('Performance Metrics', panelX + panelW / 2, panelY + 8);

  // Metrics display
  textSize(13);
  textAlign(LEFT, TOP);
  let y = panelY + 40;
  let lineHeight = 28;

  // Tasks completed
  fill('black');
  text('Tasks Completed:', panelX + 12, y);
  fill('#2E86AB');
  textAlign(RIGHT, TOP);
  text(metrics.tasksCompleted, panelX + panelW - 12, y);

  y += lineHeight;

  // Allocation breakdown
  textAlign(LEFT, TOP);
  fill('black');
  text('Human Tasks:', panelX + 12, y);
  fill('#4A90D9');
  textAlign(RIGHT, TOP);
  text(metrics.humanTasks, panelX + panelW - 12, y);

  y += lineHeight;

  textAlign(LEFT, TOP);
  fill('black');
  text('AI Tasks:', panelX + 12, y);
  fill('#50C878');
  textAlign(RIGHT, TOP);
  text(metrics.aiTasks, panelX + panelW - 12, y);

  y += lineHeight;

  textAlign(LEFT, TOP);
  fill('black');
  text('Collaborative:', panelX + 12, y);
  fill('#9B59B6');
  textAlign(RIGHT, TOP);
  text(metrics.collabTasks, panelX + panelW - 12, y);

  y += lineHeight + 10;

  // Quality score
  let avgQuality = metrics.tasksCompleted > 0 ? metrics.totalQuality / metrics.tasksCompleted : 0;
  textAlign(LEFT, TOP);
  fill('black');
  text('Avg Quality:', panelX + 12, y);
  fill(avgQuality > 80 ? '#50C878' : avgQuality > 60 ? '#F4A460' : '#FF6B6B');
  textAlign(RIGHT, TOP);
  text(avgQuality.toFixed(1) + '%', panelX + panelW - 12, y);

  y += lineHeight;

  // Cost
  textAlign(LEFT, TOP);
  fill('black');
  text('Total Cost:', panelX + 12, y);
  fill('#2E86AB');
  textAlign(RIGHT, TOP);
  text('$' + metrics.totalCost.toFixed(0), panelX + panelW - 12, y);

  y += lineHeight;

  // Throughput
  let throughput = metrics.tasksCompleted > 0 ? (metrics.tasksCompleted / (frameCounter / 3600)).toFixed(1) : 0;
  textAlign(LEFT, TOP);
  fill('black');
  text('Throughput:', panelX + 12, y);
  fill('#2E86AB');
  textAlign(RIGHT, TOP);
  text(throughput + '/hr', panelX + panelW - 12, y);

  y += lineHeight + 15;

  // Quality bar
  textAlign(LEFT, TOP);
  fill('black');
  textSize(12);
  text('Quality Distribution', panelX + 12, y);

  y += 20;
  drawQualityBar(panelX + 12, y, panelW - 24, 20);

  // Cost efficiency bar
  y += 35;
  fill('black');
  text('Cost Efficiency', panelX + 12, y);

  y += 20;
  drawEfficiencyBar(panelX + 12, y, panelW - 24, 20);

  textSize(defaultTextSize);
}

function drawQualityBar(x, y, w, h) {
  // Background
  fill(220);
  noStroke();
  rect(x, y, w, h, 4);

  if (metrics.tasksCompleted === 0) return;

  // Segments for human, AI, collab
  let humanW = (metrics.humanTasks / metrics.tasksCompleted) * w;
  let aiW = (metrics.aiTasks / metrics.tasksCompleted) * w;
  let collabW = (metrics.collabTasks / metrics.tasksCompleted) * w;

  fill('#4A90D9');
  rect(x, y, humanW, h, humanW > 0 ? 4 : 0, 0, 0, humanW > 0 ? 4 : 0);

  fill('#50C878');
  rect(x + humanW, y, aiW, h);

  fill('#9B59B6');
  rect(x + humanW + aiW, y, collabW, h, 0, collabW > 0 ? 4 : 0, collabW > 0 ? 4 : 0, 0);
}

function drawEfficiencyBar(x, y, w, h) {
  // Background
  fill(220);
  noStroke();
  rect(x, y, w, h, 4);

  if (metrics.tasksCompleted === 0) return;

  // Calculate efficiency (quality per dollar)
  let avgQuality = metrics.totalQuality / metrics.tasksCompleted;
  let costPerTask = metrics.totalCost / metrics.tasksCompleted;
  let efficiency = Math.min(100, (avgQuality / costPerTask) * 10);

  // Efficiency bar
  let effColor = lerpColor(color('#FF6B6B'), color('#50C878'), efficiency / 100);
  fill(effColor);
  rect(x, y, (efficiency / 100) * w, h, 4);
}

function drawControlLabels() {
  fill('black');
  textSize(12);
  textAlign(LEFT, CENTER);

  text('Scenario:', 10, drawHeight + 27);
  text('Task Rate: ' + taskRateSlider.value() + '/min', sliderLeftMargin + 140, drawHeight + 27);
  text('Complexity: ' + complexitySlider.value(), sliderLeftMargin + 140, drawHeight + 57);

  // Strategy info
  textSize(11);
  fill(80);
  text('Auto-allocation based on task complexity and scenario characteristics', 150, drawHeight + 82);
}

function generateTask() {
  let scenario = scenarios[currentScenario];
  let complexity = complexitySlider.value() + random(-2, 2);
  complexity = constrain(complexity, 1, 10);

  let taskType = random(scenario.tasks);

  let task = {
    id: taskIdCounter++,
    name: taskType,
    complexity: complexity,
    scenario: currentScenario,
    createdAt: frameCounter
  };

  tasks.push(task);
}

function processTasks() {
  // Process up to 2 tasks per frame
  let processCount = Math.min(2, tasks.length);

  for (let i = 0; i < processCount; i++) {
    if (tasks.length === 0) break;

    // Simple auto-allocation based on complexity
    let task = tasks.shift();
    let scenario = scenarios[task.scenario];

    let allocation;
    let quality;
    let cost;

    if (task.complexity <= 3) {
      // Simple tasks -> AI
      allocation = 'ai';
      quality = 70 + random(20) * scenario.aiStrength;
      cost = 0.5 + task.complexity * 0.2;
    } else if (task.complexity >= 8) {
      // Complex tasks -> Human
      allocation = 'human';
      quality = 60 + random(30) * scenario.humanStrength;
      cost = 5 + task.complexity * 1.5;
    } else {
      // Medium complexity -> Collaborative
      allocation = 'collab';
      quality = 75 + random(20) * ((scenario.aiStrength + scenario.humanStrength) / 2);
      cost = 2 + task.complexity * 0.8;
    }

    task.allocation = allocation;
    task.quality = Math.min(100, quality);
    task.cost = cost;
    task.completedAt = frameCounter;

    completedTasks.push(task);

    // Update metrics
    metrics.tasksCompleted++;
    metrics.totalQuality += task.quality;
    metrics.totalCost += task.cost;

    if (allocation === 'human') metrics.humanTasks++;
    else if (allocation === 'ai') metrics.aiTasks++;
    else metrics.collabTasks++;
  }

  // Keep only recent completed tasks for display
  if (completedTasks.length > 50) {
    completedTasks = completedTasks.slice(-50);
  }
}

function toggleSimulation() {
  isRunning = !isRunning;
  startButton.html(isRunning ? 'Pause' : 'Start');
}

function resetSimulation() {
  tasks = [];
  completedTasks = [];
  taskIdCounter = 0;
  frameCounter = 0;

  metrics = {
    humanTasks: 0,
    aiTasks: 0,
    collabTasks: 0,
    totalQuality: 0,
    totalCost: 0,
    totalTime: 0,
    tasksCompleted: 0
  };

  isRunning = true;
  startButton.html('Pause');
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = Math.max(800, container.offsetWidth);

    // Reposition and resize controls
    if (typeof taskRateSlider !== 'undefined') {
      taskRateSlider.position(sliderLeftMargin + 250, drawHeight + 15);
      complexitySlider.position(sliderLeftMargin + 250, drawHeight + 45);
    }
  }
}
