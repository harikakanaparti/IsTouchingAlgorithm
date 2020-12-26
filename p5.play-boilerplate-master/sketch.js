var movingRect, fixedRect;

function setup() {
  createCanvas(1500,800);
  fixedRect = createSprite(710, 350, 120, 120);
  fixedRect.shapeColor = "purple";
  movingRect = createSprite(400, 200, 120, 120);
  movingRect.shapeColor = "yellow";
  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background("lightblue");
  movingRect.x = World.mouseX;  
  movingRect.y = World.mouseY;
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "orange";
  } 
  else {
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "yellow";
  }
  drawSprites();
}