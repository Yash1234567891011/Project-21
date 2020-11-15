 var bullet ;
var speed;
var weight;
 var wall , thickness;

 function setup() {
  createCanvas(800,400);
  speed=random(25,321);
  weight=random(30,52);
  thickness=random(20,90);
  bullet=createSprite(200, 180, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor= "blue";
  wall=createSprite(750, 100, thickness, 400);
  wall.shapeColor= "green";
}

function draw() {
  background(255,255,255); 

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="yellow";
    }
    if(damage===10){
      wall.shapeColor="pink";
    }
  }
    

  drawSprites();
}
function hascollided (Lbullet,Lwall){
 bulletRightEdge=Lbullet.x+Lbullet.width;
 wallLeftEdge=Lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true;
 }
 return false;
}