var fixedRect, movingRect;
var rectangle1,rectangle2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  rectangle1 = createSprite(800,300,60,40)
  rectangle1.shapeColor = "pink";
  rectangle2 = createSprite(400,300,65,45)
  rectangle2.shapeColor = "purple";
  rectangle1.velocityX = -5;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  

  if(isTouching(movingRect,fixedRect)){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  
  bounceOff(rectangle1,rectangle2);
  
  drawSprites();
}

