
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Constraint = Matter.Constraint;

var bobposx,bobposy,bobd;
function setup() {
createCanvas(1300, 700);


engine = Engine.create();
world = engine.world;

roof = new Roof(300,10,300,40);
bobposx=300;
bobd=40
  bobposy=(height/4)+500
bob1=new Bob(bobposx-bobd*2,bobposy,40);
bob2=new Bob(bobposx-bobd,bobposy,40);
bob3=new Bob(bobposx,bobposy,40);
bob4=new Bob(bobposx+bobd,bobposy,40);
bob5=new Bob(bobposx+bobd*2,bobposy,40);


  
  sling1= new Rope(bob1.body,roof.body,-40*2,0);
  sling2= new Rope(bob2.body,roof.body,-40*1,0);
  sling3= new Rope(bob3.body,roof.body,0,0);
  sling4= new Rope(bob4.body,roof.body,40*1,0);
  sling5= new Rope(bob5.body,roof.body,40*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("black");

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  
  bob4.display();
  bob5.display();

  roof.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 

  keyPressed();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
  { 
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100,y:100}); 
} 
} 
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}




