const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var Day=0;
var Night=1;
var Gamestate=Day;

var s1
var particles = [];



function preload() {
  bg1Img = loadImage("snow6.jpg");
  bg2Img = loadImage("snow3.jpg");
  houseImg= loadImage("house.png");
  gift1Img= loadImage("gift1.png");
  gift2Img= loadImage("gift2.png");
  changeImg= loadImage("change.JPG");
  sceneImg= loadAnimation("sun.png");
  scene2Img= loadAnimation("night.png")
  s2Img= loadAnimation("s2/Y-0.png","s2/Y-1.png","s2/Y-2.png","s2/Y-3.png","s2/Y-4.png","s2/Y-5.png","s2/Y-6.png","s2/Y-7.png","s2/Y-8.png","s2/Y-9.png","s2/Y-10.png","s2/Y-11.png","s2/Y-12.png")
  sanImg=loadAnimation("s3/U-0.png","s3/U-1.png","s3/U-2.png","s3/U-3.png","s3/U-5.png","s3/U-6.png","s3/U-7.png","s3/U-8.png","s3/U-9.png","s3/U-10.png","s3/U-11.png")
  s5Img= loadAnimation("s5/R-0.png","s5/R-0.png","s5/R-0.png","s5/R-1.png","s5/R-1.png","s5/R-1.png")
  s6Img= loadAnimation("s6/s.png","s6/s.png","s6/s.png","s6/s.png","s6/s.png","s6/s.png","s6/sss1.png","s6/sss1.png","s6/sss1.png","s6/sss1.png","s6/sss1.png","s6/sss1.png")
  s7Img= loadAnimation("s7/Z-0.png","s7/Z-1.png","s7/Z-2.png","s7/Z-3.png","s7/Z-5.png","s7/Z-6.png","s7/Z-7.png","s7/Z-8.png","s7/Z-9.png","s7/Z-12.png")
  s8Img= loadAnimation("s8/Q-0.png","s8/Q-1.png","s8/Q-2.png","s8/Q-3.png","s8/Q-4.png","s8/Q-5.png","s8/Q-6.png","s8/Q-7.png","s8/Q-8.png")
  s9Img= loadAnimation("s9/B-0.png","s9/B-1.png","s9/B-2.png","s9/B-3.png","s9/B-4.png","s9/B-5.png","s9/B-6.png","s9/B-7.png","s9/B-8.png","s9/B-17.png","s9/B-17.png","s9/B-17.png","s9/B-17.png","s9/B-17.png")
  s10Img= loadAnimation("s10/0-1.png","s10/0-2.png","s10/0-3.png","s10/0-5.png","s10/0-6.png","s10/0-7.png","s10/0-8.png","s10/0-9.png","s10/0-10.png","s10/0-11.png","s10/0-12.png")
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  //s3= createSprite(230, 500,20,50);
  //s3.addAnimation("running", s4Img);
  //s3.scale=1.2
  //s3.velocityX=3

  s2= createSprite(170, 420,20,50);
  s2.addAnimation("running", s2Img);
  s2.scale=0.8
  s2.visible=false

  s7= createSprite(1200, 480,20,50);
  s7.addAnimation("running", s7Img);
  s7.scale=0.8
  s7.visible=false

  s5= createSprite(0, 500,20,50);
  s5.addAnimation("running", s5Img);
  s5.scale=1.8
  s5.visible=false
  s8= createSprite(-300, 530,20,50);
  s8.addAnimation("running", s8Img);
  s8.scale=1.8
  s8.visible=false

  s6= createSprite(950, 600,20,50);
  s6.addAnimation("running", s6Img);
  s6.scale=1.6
  s6.visible=false

  s9= createSprite(400, 550,20,50);
  s9.addAnimation("running", s9Img);
  s9.scale=0.6
  s9.visible=false

  house= createSprite(750, 510,20,50);
  house.addImage(houseImg);
  house.scale=2
  house.visible=true

  gift1= createSprite(750, 130,20,50);
  gift1.addImage(gift1Img);
  gift1.scale=0.13
  gift1.visible=true

  gift2= createSprite(750, 130,20,50);
  gift2.addImage(gift2Img);
  gift2.scale=0.13
  gift2.visible=true

  s11= createSprite(170, 80,20,50);
  s11.addAnimation("day",s10Img);
  s11.scale=0.1
  s11.visible=false

  s12= createSprite(400, 20,20,50);
  s12.addAnimation("day",s10Img);
  s12.scale=0.1
  s12.visible=false

  s13= createSprite(690, 80,20,50);
  s13.addAnimation("day",s10Img);
  s13.scale=0.1
  s13.visible=false

  s14= createSprite(1090, 70,20,50);
  s14.addAnimation("day",s10Img);
  s14.scale=0.1
  s14.visible=false

  san= createSprite(1400, 100,20,50);
  san.addAnimation("running", sanImg);
  san.scale=1
  san.visible=true

  change= createSprite(100, 40,20,50);
  change.addImage(changeImg);
  change.scale=0.3
  change.visible=true

  change2= createSprite(800, 40,20,50);
  change2.addImage(changeImg);
  change2.scale=0.3
  change2.visible=false

  scene= createSprite(1050, 40,20,50);
  scene.addAnimation("day",sceneImg);
  scene.addAnimation("night",scene2Img);
  scene.scale=0.3
  scene.visible=true


}

function draw() {
  gift1.x=san.x+150
  gift2.x=san.x+150
  Engine.update(engine);


  if(Gamestate===Day)
  {
  background(bg1Img);  

  scene.changeAnimation("day",sceneImg)

  san.x=1400
  gift1.x=san.x+150
  gift1.y=130
  gift2.x=san.x+150
  gift2.y=130

  s9.visible=true
  s6.visible=true
  s8.visible=true
  s5.visible=true
  s7.visible=true
  s2.visible=true
  san.visible=false
  house.visible=false
  gift1.visible=false
  gift2.visible=false
  s11.visible=false
  s12.visible=false
  s13.visible=false
  s14.visible=false

  s5.velocityX=3
  s8.velocityX=3
  s7.velocityX=-3
  san.velocityX=0

  if(s5.x>=1600)
  {
    s5.x=0
    s7.x=1200
  console.log("ifentered")
}

  if(s8.x>=1300)
  {
    s8.x=-300
    console.log("ifentered2")
  }

  drawSprites();

//  paricles()

  for(var m = 0;m<particles.length;m++){
    particles[m].display();
  }
}

if((mousePressedOver(change))&&(Gamestate===Day))
{
Gamestate=Night
change2.visible=true
change.visible=false
}


if(Gamestate===Night)
{
  background(bg2Img);

  s9.visible=false
  s6.visible=false
  s8.visible=false
  s5.visible=false
  s7.visible=false
  s2.visible=false
san.visible=true
house.visible=true
gift1.visible=true
gift2.visible=true
s11.visible=true
s12.visible=true
s13.visible=true
s14.visible=true

  san.velocityX=-3
  scene.changeAnimation("night",scene2Img)
  if(san.x<=-200)
  {
    san.x=1400
    gift1.x=san.x+150
    gift1.y=130
    gift2.x=san.x+150
    gift2.y=130
}

    if(san.x<=1000)
    {
      gift1.velocityY=4
    }

    if(san.x<=500)
    {
      gift2.velocityY=4
    }

    if (gift1.y>=580)
    {gift1.velocityY=0
    gift1.x=790
    gift1.y=600}

    if (gift2.y>=580)
    {gift2.velocityY=0
    gift2.x=280
    gift2.y=600}

    drawSprites()

   // paricles()

    for(var m = 0;m<particles.length;m++){
      particles[m].display();
    }
}

if((mousePressedOver(change2))&&(Gamestate===Night))
{
Gamestate=Day
change.visible=true
change2.visible=false
}
}


function paricles(){
    particles.push(new Snow(random(0,1200),0));
}
