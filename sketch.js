var moveRect, fixRect;
var angry, bird;

function setup() {
  createCanvas(1200,800);
  moveRect = createSprite(400, 100, 50, 80);
  moveRect.shapeColor = "green";
  moveRect.debug = true;
  fixRect = createSprite(400, 800,80,30);
  fixRect.shapeColor = "green";
  fixRect.debug = true;

  fixRect.velocityY = -5;
  moveRect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);  

  bounceOff(moveRect, fixRect);

  drawSprites();
}
