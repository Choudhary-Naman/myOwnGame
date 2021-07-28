const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage;
var log,logImage,standingImage;
var block1,block2,block3,block4,block5,block6,block7,boxImage,treasureImage,treasure;

function preload() {
   logImage = loadImage("Images/wood2.png");
   standingImage = loadImage("Images/standingLog.png");
   boxImage = loadImage("Images/wood1.png");
   backgroundImage = loadImage("Images/bg.png");
   treasureImage=loadImage("Images/treasures.png")
   
}

function setup(){
    var canvas = createCanvas(1300,610);
    engine = Engine.create();
    world = engine.world;

    block1 = createSprite(650,305,10,70);
    block1.addImage(logImage);
    block1.scale= 0.5;
    block2 = createSprite(650,396,10,70);
    block2.addImage(logImage);
    block2.scale= 0.5;
    block3 = createSprite(595,350,70,10);
    block3.addImage(standingImage);
    block3.scale= 0.5;
    block4 = createSprite(700,350,10,70);
    block4.addImage(standingImage);
    block4.scale= 0.5;

    treasure=createSprite(650,350);
    treasure.addImage(treasureImage);
    treasure.scale= 0.1;

    block5 = createSprite(200,200,10,70);
    block5.addImage(logImage);
    block5.scale= 0.5;
    block6 = createSprite(200,200,10,70);
    block6.addImage(logImage);
    block6.scale= 0.5;
    block7 = createSprite(200,200,10,70);
    block7.addImage(logImage);
    block7.scale= 0.5;

    
//     pirates = createSprite(200,200);
//     pirates.addImage("pirates",piratesImage)
 }

function draw(){
    background(backgroundImage);
    Engine.update(engine);
   
//pirates.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
drawSprites();
}