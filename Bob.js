class Bob{
    constructor(x,y,radius){
        var options = {
            restitution: 0.4,
            density: 1
            
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        this.image = loadImage ("water.png")
        World.add(world, this.body);
    }

    display(){
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image, 0, 0,this.radius*2, this.radius*2);
     }
}