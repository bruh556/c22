
const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
 var options = {isStatic : true, restitution : 0.5}
 ground = Bodies.rectangle(200,390,400,20,options);
 ball = Bodies.circle(300,200,20);
 World.add(world,ground)
 World.add(world,ball)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
circle(ball.position.x,ball.position.y,20);
}
