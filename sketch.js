
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,100,650,50)

	bob1 = new Bob(100,600,100)

	rope = new Rope(bob1.body,{x:100, y:100});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  roof.display();

  bob1.display();

  rope.display();

  drawSprites();
 
}



