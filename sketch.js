var plane,planeimg;
var edge1,edge2;
var meteor,meteorimg,meteorGroup;

function preload(){
  planeimg=loadImage('aircraft project (1).jpg')
  meteorimg=loadImage('meteor image.jpg')
}
function setup() {
  createCanvas(800,400);
  plane= createSprite(400, 330, 50, 50);
plane.addImage(planeimg)
plane.scale=0.5
  edge1= createSprite(830, 350, 50, 50);
  edge2= createSprite(-30, 350, 50, 50);
  
meteorGroup=new Group();
 
}

function draw() {
  background(0);  
  drawSprites();
 plane.collide(edge1)
 plane.collide(edge2)
  if(keyDown("right")){
    plane.velocityX=6;
  }
  if(keyDown("left")){
    plane.velocityX=-6;
  }
  if(plane.isTouching(meteorGroup)){
    meteorGroup.destroyEach();
  }
  spawnmeteor();
}
function spawnmeteor(){
if(frameCount%120===0){


  meteor= createSprite(400, 30, 50, 50);
  meteor.addImage(meteorimg)
  meteor.scale=0.3
  meteor.x=Math.round(random(750,350))
  meteor.velocityY=3;
  meteorGroup.add(meteor)
}
}