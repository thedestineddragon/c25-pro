class Ball extends BaseClass {
    constructor(x,y,radius){
    super(x,y,70);
      this.image = loadImage("paper.ball.png");
    }
    display(){
    super.display()
    }
  }