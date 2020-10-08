var fixedRect,movingRect;

function setup()
{
createCanvas(800,800);
fixedRect=createSprite(500,200,50,50);
fixedRect.shapeColor="cyan";

movingRect=createSprite(500,500,50,50);
movingRect.shapeColor="cyan";


fixedRect.velocityY=9;
movingRect.velocityY=-9;




}



function draw()
{
background("purple");

bounceOff(movingRect,fixedRect);
  drawSprites();

}
