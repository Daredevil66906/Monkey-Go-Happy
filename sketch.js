
var monkey, monkeyimage, monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("image",monkey_running);
  monkey.scale = 0.1;
  
  ground =  createSprite(400,350,500,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0;
  
}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime: "+ survivalTime, 100,50);
  
  monkey.collide(ground);
  
  if(ground.x > 0){
    ground.x = ground.width/2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space") && monkey.y > 314){
    monkey.velocityY = -16;
  }  
  
  banna();
  obstecle();
  
  drawSprites();
}


function banna(){
  
  if(frameCount % 80 ===0){
    banana = createSprite(400,120,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.lifetime = 150;
    banana.velocityX = -5;
    banana.scale = 0.1;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    FoodGroup.add(banana);
    
  }
}

function obstecle(){
  
  if(frameCount % 300 ===0){
    obstacle = createSprite(400,330,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 150;
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    obstacleGroup.add(obstacle);
    
  }
  
}

