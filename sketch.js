
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  FoodGroup = new Group();
  obstacleGroup = new Group();
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
 if(ground.x>300){
   ground.x=250;
 }
  
  
}


function draw() {
  background("white");
  console.log(monkey.y)
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y>270.1){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY+0.8;
fruits();
  Obstacle();
 drawSprites();
  
}



function fruits(){
  if(frameCount%80===0){
    banana = createSprite(Math.round(random(120,200)),-100);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityY =- 1;
    banana.lifetime = 700;
    FoodGroup.add(banana);
  }
}
function Obstacle(){
  if(frameCount%300===0){
       obstacle= createSprite(200,10);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.velocityY =-1;
    obstacle.x = banana.x;
    obstacle.y = banana.y;
    obstacle.lifetime = 700;
    obstacleGroup.add(obstacle);
    
  } 
}
    
