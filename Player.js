class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

//create the rectangular shaped body.
    this.player = Matter.Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");
    World.add(world, this.player);
  }

 
  display() {
    var pos = this.player.position;
    var angle = this.player.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
