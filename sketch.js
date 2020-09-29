var fixedRect
var movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(50, 600, 50, 80);
  fixedRect.shapeColor = "springgreen"
  fixedRect.debug = true;
  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "springgreen"
  movingRect.debug = true;
  movingRect.velocityX = -3;
  fixedRect.velocityX = +3;
}

function draw() {
  background("cyan");  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

 

if( movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y<= fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY =  movingRect.velocityY * (-1);
  fixedRect.velocityY =  fixedRect.velocityY * (-1);
}

if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 
  && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2){
    movingRect.velocityX =  movingRect.velocityX * (-1);
    fixedRect.velocityX =  fixedRect.velocityX * (-1);
  }
  
  drawSprites();
}