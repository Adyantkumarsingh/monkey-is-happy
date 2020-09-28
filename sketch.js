var monkey,banana,stone,ground,count,invisibleGround
var bananaGroup,obstaclesGroup


function preload(){
  
  //loading animation for monkey
 monkey = loadImage(" sprite_0.png,sprite_1.png,sprite_2.png, sprite_7.png, sprite_3.png,sprite_4.png,sprite_5.png,sprite_6.png, sprite_8.png,");
  
  
  //loading images for banana and obstacles
  banana = loadImage("banana.png");
  stone = loadImage("obstacle.png");  
  
  
 
}

 function setup(){

  createCanvas(600, 200);

  monkey = createSprite(50, 180, 20, 50);
  monkey.addAnimation("running", monkey);
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -2;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  bananaGroup = new Group();
  obstacleGroup = new Group();

count =  0 
}

function draw() {
  background(255,100,200);
  
   count = count +Math.round(getFrameRate()/60);
  text("Score: "+ count, 500, 50);
   
  
  console.log(monkey.y)

  if (keyDown("space") && monkey.y >= 162) {
    monkey.velocityY = -16;
  }

  monkey.velocityY = monkey.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(invisibleGround);

  spawnObstacles();

  spawnBananas();

  drawSprites();
}

function spawnObstacles() {

  if (World.frameCount % 60 === 0) {
    var stone = createSprite(600, 165, 10, 40);
    stone.velocityX = -6;

   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;

  obstacleGroup.add(obstacle);
  
  }





}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(80, 120));
    banana.addImage("clouds", cloudImage);
    banana.scale = 0.5;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 210;

    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananaGroup.add(banana);
  }
}