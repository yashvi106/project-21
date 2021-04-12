var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(700,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue"; 

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4here

block3 = createSprite(455 ,580, 190, 30)
block3.shapeColor = "purple"

block4 = createSprite( 600 , 580 , 195,30)
block4.shapeColor = "pink"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
 ball.velocityX = 2
ball.velocityY = 2

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
ball.bounceOff(block1)
ball.bounceOff(block2)
ball.bounceOff(block3)
ball.bounceOff(block4)


    drawSprites();
}
   function isTouching(){
if (ball.y - block4.y <ball.height/2 +block4.height/2
    && block4.y - ball.y < ball.height/2 +block4.height/2
    && ball.x - block4.x <ball.width/2 +block4.width/2 
     && block4.x - ball.x < ball.width/2 +block4.width/2 ) {
         
       ball.shapeColor  =   "pink"


    
}


    

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4





}