const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob
var rope
var ground
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var engine, world;
var fire

function setup(){
    var canvas = createCanvas(3000,800)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,600,1250,20);

    fire = new Box(1080,545,170,170)

    b1 = new Box1(700,20,50,50) //700
    b2 = new Box1(700,20,50,50)
    b3 = new Box1(700,20,50,50)
    b4 = new Box1(700,20,50,50)
    b5 = new Box1(700,20,50,50)
    b6 = new Box1(700,20,50,50)

    b7 = new Box1(900,100,50,50) //900
    b8 = new Box1(900,100,50,50)
    b9 = new Box1(900,100,50,50)
    b10 = new Box1(900,100,50,50)

    b11 = new Box1(800,100,50,50) //800
    b12 = new Box1(800,100,50,50)
    b13 = new Box1(800,100,50,50)
    b14 = new Box1(800,100,50,50)
    b15 = new Box1(800,100,50,50)
    b16 = new Box1(800,100,50,50)

    b17 = new Box1(700,100,50,50) //700
    b18 = new Box1(700,100,50,50)
    b19 = new Box1(700,100,50,50)
    b20= new Box1(700,100,50,50)

    bob = new Bob (300,200,40);
    rope = new Rope(bob.body, { x: 500, y: 50 });

    


}

function draw(){
    background("lightblue");
    Engine.update(engine);

 //   text(mouseX + " , " + mouseY, mouseX,mouseY)
    
    ground.display();
    
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()
    b17.display()
    b18.display()
    b19.display()
    b20.display()
    fire.display()

    rope.display();
    bob.display();

   
    
}

function mouseDragged() {

    Matter.Body.setPosition (bob.body,{x: mouseX , y: mouseY});
    
  }
  