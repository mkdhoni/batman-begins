class Batman{
    constructor(x,y,width, height){
        var options={
            restitution:1,
            friction:0.5,
            density:0.5

        }

        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        this.image = loadImage("walking_1.png")
    
        }
        display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            
            imageMode(CENTER);
            image(this.image, 400, 400, this.width, this.height);
            pop();
        }

    }
