var garden,rabbit;
var gardenImg,rabbitImg;
var food;
var gamestate = "play";

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit sprite
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

food.velocityY = 4;

function foodforrabbit() {
  food = createSprite(random(20,380),10,30,30);
  
  
  if(food.isTouching(rabbit)){
    food.x = random(20,380)
  }
  
  if (food.y>399){
     gamestate = "end";
  }
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  

  foodforrabbit();
  
  if (gamestate = "end"){
    food.velocity = 0;
    rabbit.x=rabbit.x;
    textSize = 20;
    text("GAME OVER",150,200);

  }



  drawSprites();
}

