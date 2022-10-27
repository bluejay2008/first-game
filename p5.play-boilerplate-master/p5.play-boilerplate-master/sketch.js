const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world

function preload(){
  spikeimg = loadImage("spike.png")
  playerimg = loadImage("player.png")
  batimg = loadImage("bat.png")
  raccoonimg = loadImage("raccoon.png")
  flagimg = loadImage("flag.png")
  over = loadSound("lose.mp3")
  win = loadSound("win.mp3")
}



function setup() {
  createCanvas(1800,800);
  engine = Engine.create();
  world = engine.world;
  
   p1 = createSprite(1650, 700, 300, 50);
   p2 = createSprite(200, 250, 200, 50);
   p3 = createSprite(500, 200, 200, 50);
   p4 = createSprite(800, 300, 200, 50);
   p5 = createSprite(1100, 400, 200, 50);
   p6 = createSprite(1400, 500, 200, 50);
   invis1 = createSprite(400, 200, 1, 400);
   invis2 = createSprite(600, 200, 1, 400);
   invis3 = createSprite(1800, 500, 1, 400);
   invis4 = createSprite(1500, 500, 1, 400);
   platform = new Group()
  player = createSprite(200,190,50,50);
  //World.add(world,player)
  player.addImage(playerimg)
  player.scale = 0.1
  bat = createSprite(1600,500,50,50)
  bat.addImage(batimg)
  bat.scale = 0.6
  bat.velocityX = -2
  spike = createSprite(860,240,50,50)
  spike.addImage(spikeimg)
  spike.scale = 0.5
  raccoon = createSprite(500,150,50,50)
  raccoon.addImage(raccoonimg)
  raccoon.scale = 0.2
  raccoon.velocityX = -2
  flag = createSprite(1750,630,50,50)
  flag.addImage(flagimg)
  flag.scale = 0.1
}

function draw() {
  background(255,255,255);
  if (keyIsDown(UP_ARROW) && player.y>=100){
    player.velocityY = -2
    player.velocityX = 2
    }
    player.velocityY +=0.06
    player.collide(p2)
    player.collide(p3)
    player.collide(p1)
    player.collide(p4)
    player.collide(p5)
    player.collide(p6)
    raccoon.bounceOff(invis1)
    raccoon.bounceOff(invis2)
bat.bounceOff(invis3)
bat.bounceOff(invis4)
if (player.isTouching(raccoon)||player.isTouching(bat)||player.isTouching(spike)){
  player.destroy()
  text ("game over", 900,600)
  raccoon.velocityX=0
  bat.velocityX=0
  spike.velocityX=0
  over.play()
}
drawSprites();
  if (player.isTouching(flag)){
    text ("you win", 1600,400)
    raccoon.velocityX=0
    bat.velocityX=0
    spike.velocityX=0
    player.velocityX=0
    flag.destroy()
    win.play()
  }

  

}


