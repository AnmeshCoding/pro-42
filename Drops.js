class Drops {

    constructor(x,y){

        //this.rain = Bodies.circle(x,y,5,options)
        var options = {
            'restitution': 0.1,
            'friction': 0.1,
        
    }

        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 3

        World.add(world, this.rain);

    }

    display() {
        noStroke()
        fill(0, 0, 225)
        ellipseMode(RADIUS)
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }

/*update() {
    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})

}
}*/
}