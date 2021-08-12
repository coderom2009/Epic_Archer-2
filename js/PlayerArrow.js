class PlayerArrow {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
      //Matter.Body.setAngle(this.body, PI / 2)
    }
    shoot(archerAngle) {
      var velocity = p5.Vector.fromAngle(archerAngle);
      velocity.mult(10);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
    display(cAngle) {
        var pos = this.body.position;
        //var angle //= 

       /* if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
          angle += 0.01;
          Matter.Body.setAngle(this.body, angle);
        }
    
        if (keyIsDown(UP_ARROW) && angle > -1.9) {
          angle -= 0.01;
          Matter.Body.setAngle(this.body, angle);
        }*/
    
        push();
        translate(pos.x, pos.y);
        rotate(cAngle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    
    }
}