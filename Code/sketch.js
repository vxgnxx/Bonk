// Ball variables
let xBall = 300;
let yBall = 200;
let diameter = 20;
let radius = diameter / 2;

// Ball speed
let speedXBall = 6;
let speedYBall = 6;

// Racket variables
let racketWidth = 10;
let racketHeight = 90;
let xPlayer = 5;
let yPlayer = 150;
let xOponent = 585;
let yOponent = 150;

// Oponent speed
let OponentYSpeed;

// Hitbox
let collision = false;

// Scoreboard
let playerScore = 0;
let oponentScore = 0;

// Sounds
let racket;
let score;

function preload() {
  racket = loadSound("raquetada.mp3");
  score = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(color(37, 38, 39));
  // Creates ball
  fill(color(236, 240, 243))
  circle(xBall, yBall, diameter);
  createRacket(xPlayer, yPlayer);
  createRacket(xOponent, yOponent);
  createScoreboard();
  ballMove();
  movePlayer();
  moveOponent();
  borderCollision();
  racketCollision(xPlayer, yPlayer);
  racketCollision(xOponent, yOponent);
  scoreBoard();
}

function createRacket(x,y) {
  rect(x, y, racketWidth, racketHeight);
}

function createScoreboard() {
  stroke(color(13, 24, 33))
  textAlign(CENTER)
  textSize(16)
  fill(color(236, 240, 243));
  rect(180,10,40,20)
  fill(color(37, 38, 39));
  text(playerScore, 200, 26);
  fill(color(236, 240, 243));
  rect(380,10,40,20)
  fill(color(37, 38, 39));
  text(oponentScore, 400,26)
}

function ballMove() {
  xBall += speedXBall;
  yBall += speedYBall;
}

function borderCollision() {
  if (xBall + radius > width || xBall - radius < 0){
    speedXBall *= -1;
  }
  if (yBall + radius > height || yBall - radius < 0){
    speedYBall *= -1;
  }
}

function racketCollision(x,y) {
  collision = collideRectCircle(x, y, racketWidth, racketHeight, xBall, yBall, radius);
  if (collision) {
    speedXBall *= -1;
    racket.play();
  }
}

function movePlayer() {
  if (keyIsDown(87)) {
    yPlayer -= 10;
  }
  if (keyIsDown(83)) {
    yPlayer += 10;
  }
}

function moveOponent() {
  if (keyIsDown(UP_ARROW)) {
    yOponent -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yOponent += 10;
  }
}

function scoreBoard(){
  if (xBall > 590){
    playerScore++;
    score.play();
  }
  if (xBall < 10){
    oponentScore++;
    score.play();
  }
}
