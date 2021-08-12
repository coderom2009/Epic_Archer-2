const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(width -300, random(450, height - 350), 180, 150);
  player = new Player(width -330, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    width - 340,
    playerBase.body.position.y - 173,
    120,
    120
  );

  computerBase = new ComputerBase(
     300,
    random(450, height - 350),
    180,
    150
  );
  computer = new Computer(
     280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 10);
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()
  arrow.display(playerArcher.body.angle)
  var t = 0
  if(keyCode === 32&&t===0){
    t +=1
   arrow.shoot(playerArcher.body.angle);
  }
}



