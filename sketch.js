var movingRect;
var fixedRect;
var object1 , object2 , object3 , object4;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(200, 200, 50, 80);
  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object3 = createSprite(300,100,50,50);
  object4 = createSprite(400,100,50,50);

  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
  object1.shapeColor = "green";
  object2.shapeColor = "green";
  object3.shapeColor = "green";
  object4.shapeColor = "green";

}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(object1,movingRect)){

    movingRect.shapeColor = "blue";
    object1.shapeColor = "blue";

  }
  else{

    movingRect.shapeColor = "green";
    object1.shapeColor = "green";

  }


  

  drawSprites();
}

