
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    dustbin1 = new Dustbin()
	ball1 = new Ball(150,685,50)

	ground = new Ground(400,height,800,20);
	

	
  
}


function draw() {
	Engine.run(engine);
  rectMode(CENTER);
  background(0);

 ball1.display();
 ground.display();
 dustbin1.display();
 
}


