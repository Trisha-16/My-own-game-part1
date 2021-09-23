var edges;
var back,backImg;
var Bob, bobImg;
var coin, coinImg;
var ob1, ob2, ob3, ob4, ob5, ob6, ob7;

function preload(){

  backImg = loadImage("images/back.jpg");
  bobImg = loadAnimation("images/runner_01.png","images/runner_02.png","images/runner_03.png","images/runner_04.png","images/runner_05.png","images/runner_06.png","images/runner_07.png","images/runner_08.png");
  coinImg = loadAnimation("images/ccc_03.png","images/ccc_04.png","images/ccc_05.png","images/ccc_06.png","images/ccc_07.png","images/ccc_08.png");
}

function setup(){
  createCanvas(600,600);
  
  back = createSprite(100,100);
  back.addImage("back",backImg);
  back.scale = 1.5;

  bob= createSprite(70,480);
  bob.addAnimation("bobs",bobImg);

  edges = createEdgeSprites();
 
}

function draw(){
  background("lightgray");

  back.velocityX = -7;
  if(back.x <0){
    back.x = back.width/2;
  }
 
  coiny();
  
  drawSprites();

  text(mouseX+","+mouseY,mouseX,mouseY);
}

function coiny(){
  if(frameCount %60===0){
    coin= createSprite(650,465);
    coin.addAnimation("coins",coinImg);
    coin.velocityX= -7;
    coin.scale= 0.18;
  }
}