const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraints=Matter.Constraints
 
var batman;
var drops;
var maxDrops=100;
var divisions =[];




function preload(){

    
}

function setup(){
    canvas=createCanvas(1805,1200)
   batman=new Batman(350,350)
   drops=new Drops(10,10,20,20)
   
  
   
    
}

function draw(){
  
    background("Black")
    batman.display();
    drops.display();
   
  
    if(frameCount%10===0){
        divisions.push(new Drops(random(width/2-600, width/2+600), 10,10));
       
      }
      
    
     for (var j = 0; j < drops.length; j++) {
      
        drops[j].display();
      }
      for (var k = 0; k < divisions.length; k++) {
        
        divisions[k].display();
        
      }
      

      
      


}