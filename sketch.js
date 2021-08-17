var mario;
var score=0;
function preload(){
  ground1=loadImage("ground 2.png");
  background1=loadImage("background.png");
  mario1=loadAnimation("mario1.png","mario2.png","mario3.png","mario4.png","mario5.png");
  obstacle1=loadImage("obstacle.png");
  coin1=loadImage("coin.png");
  obstacleImg=loadImage("sonic obstacle.png");
  
}

function setup() {
  createCanvas(1200,500);
  mario=createSprite(50, 460, 50, 50);
mario.shapeColor="blue";
mario.addAnimation("running",mario1);
mario.scale=0.65;
  ground=createSprite(680,490,60,20);
  // ground.x=340;
  ground.velocityX=-5;
  ground.addImage(ground1);
  obstacleGroup=new Group();
  coinGroup=new Group();
  obstacle2Group=new Group();
  
  

}


function draw() {
  background(background1);  
  if(ground.x<550){
ground.x=ground.width/2;
  }
  if(keyDown("SPACE")&& mario.y>100){
    mario.velocityY=-13;

   
  }
  mario.velocityY+=0.8;
  if(mario.isTouching (coinGroup)){
    coinGroup.destroyEach();
    score=score+5;
  }
  textSize(25)
  fill("red");
  text("SCORE: "+score,500,50,);
  
  mario.collide(ground);
  obstacles();
  coins();

  
  drawSprites();
 

}
function obstacles(){
  if(frameCount%150===0){
   obstacle=createSprite(1000,370,40,50);
  obstacle.addImage(obstacle1);
  obstacle.velocityX=-4;
  obstacleGroup.add(obstacle);
  }
  if(frameCount%230===0){
    obstacle2=createSprite(1000,430,40,50);
    obstacle2.scale=0.5;
   obstacle2.addImage(obstacleImg);
   obstacle2.velocityX=-4;
   obstacle2Group.add(obstacle2);
  }



}
function coins(){
  if(frameCount%100===0){
   coin=createSprite(500,Math.round(random(10,450)),40,50);
   coin.scale=0.04;
  coin.addImage(coin1);
  coin.velocityX=-4;
  coinGroup.add(coin);
  }


}

