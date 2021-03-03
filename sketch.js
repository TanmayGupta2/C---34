///const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine, world;

//var bird, slingShot;

//function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
//}

function preload(){
  image1 = loadImage("crane.png");
}



function setup(){
    var canvas = createCanvas(1200,500);
    engine = Matter.Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    block1 = new Box(900,350,80,80);
    block2 = new Box(900,300,80,80);
    block3 = new Box(900,250,80,80);
    block4 = new Box(900,200,80,80);
    block5 = new Box(900,150,80,80);
    block6 = new Box(800,350,80,80);
    block7 = new Box(800,300,80,80);
    block8 = new Box(800,250,80,80);
    block9 = new Box(800,200,80,80);
    block10 = new Box(800,150,80,80);

    ball = new Ball(700,300);

    
    sling1 = new Slingshot(ball.body,{x : 400 , y: 250});
}

function draw(){
    background(0);
    Matter.Engine.update(engine);
    image(image1,-50,70);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display(); 
    block7.display();
    block8.display();
    block9.display();
    block10.display();  

    ball.display();
    //platform.display();
    sling1.display();    
}
function mouseDragged() {
   Matter.Body.setPosition(ball.body,{x : mouseX, y : mouseY})
}

function mouseReleased() {
    //sling1.fly();
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0.05,y:2});
}