class BaseClass {
    constructor(x, y,radius) {
        var options = {
            'restitution':0.3,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.body);
      }
      display(){
        var radius = this.body.radius;
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
}