const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;
function setup(){
    createCanvas(800,800);
    engine=Engine.create();
    world=engine.world;
    var options={
        isStatic:true
    }
ground=Bodies.rectangle(400,790,50,50,options);
World.add(world,ground);
console.log(ground);
var options={restitution:0.8}
ball=Bodies.circle(400,400,50,options);
World.add(world,ball);
}
function draw(){
    background("violet");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,50,50);
}