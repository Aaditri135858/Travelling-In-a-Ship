var seaImg
var shipImg1
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
var sea = createSprite(200,180);
sea.addImage("sea",seaImg);
sea.x = sea.width/2;

var ship = createSprite(50,180,20,50);
ship.addAnimation(shipImg);
}

function draw() {
background(400)
sea.velocityX = 2;
console.log(sea.x);

if(sea.x<0){
  sea.x = sea.width/2;
 }
drawSprites();
}