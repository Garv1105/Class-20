var a,b;
function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 50);
 b = createSprite(600, 200, 80, 50);
 a.shapeColor = "Green";
 b.shapeColor = "Pink";
}

function draw() {
  background(0);  
  a.x = mouseX;
  a.y = mouseY;
  if(b.x - a.x<= a.width/2 + b.width/2
    && a.x - b.x<= a.width/2 + b.width/2
   && b.y - a.y<= a.height/2 + b.height/2 
  && a.y - b.y<= a.height/2 + b.height/2){
    a.shapeColor = "Red";
    b.shapeColor = "Red";
  }
  else{
    a.shapeColor = "Green";
    b.shapeColor = "Pink";
   }
  
  drawSprites();

}