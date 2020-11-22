const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,box1,box2,ground



function setup() {
  createCanvas(800,400)
  
  engine = Engine.create();
	world = engine.world;

  box1=new Box(200,100,50,50)
  box2=new Box(500,100,50,50)

  ground=new Ground(400,380,800,30)
}

function draw() {
  background("green");  
  Engine.update(engine)

  fill('white')
box1.display()
box2.display()
fill("brown")
ground.display()
}