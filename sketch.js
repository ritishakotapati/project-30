const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint 

var engine,world;
var polygon_image

function preload(){ 
    polygon_img=loadImage("polygon.png");
 } 


function setup(){

createCanvas(900,400)
engine=Engine.create()
world=engine.world;



polygon = Bodies.circle(50,200,20)
World.add(world,polygon);




string=new string(this.polygon,{x:100,y:200}) 

ground = new Ground(450,390,900,20); 

box1= new Box(600,275,30,40)
box2= new Box(630,275,30,40)
box3= new Box(660,275,30,40)
box4= new Box(690,275,30,40)
box5= new Box(720,275,30,40)
box6= new Box(750,275,30,40)
box7= new Box(780,275,30,40)
box8= new Box(630,235,30,40)
box9= new Box(660,235,30,40)
box10= new Box(690,235,30,40)
box11= new Box(720,235,30,40)
box12= new Box(750,235,30,40)
box13= new Box(660,195,30,40)
box14= new Box(690,195,30,40)
box15= new Box(720,195,30,40)
box16= new Box(690,155,30,40)

stand1 = new Stand(700,300,300,10);


}

function draw(){
background(180)
    Engine.update(engine);
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
string.display()
stand1.display()


fill("gold"); 
imageMode(CENTER) 
image(polygon_img ,polygon.position.x,polygon.position.y,40,40); 

}



function mouseDragged()
{ 
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
 }

 function mouseReleased(){ 
     string.fly(); 
    } 

    function keyPressed(){
        if (keyCode===32){
        
            string.attach(polygon.body)
        }
        
        }
































































