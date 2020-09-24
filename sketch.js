
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  FoodImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(50,300,30,40)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(200,360,800,20);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  
  obstacle=createSprite(50,300,30,50);
  obstacle.velocityX=-4;
  obstacleGroup = createGroup();
  
  banana=createSprite(600,165,10,40);
  FoodGroup=new Group();
}


function draw() {
  background("tan");

  monkey.collide(ground);
  if(ground.x<0){
   ground.x=ground.width/2;
  }
  
  if(keyDown("Space")){
   monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  
  spawnfruit();
  

  drawSprites();
}
function spawnfruit() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    var food = createSprite(600,120,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(FoodImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(food);
    
  }
}







