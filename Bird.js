//extend child class to parent class
class Bird extends BaseClass
{
  constructor(x,y){
    super(x,y,50,50);
    //load image
    this.image = loadImage("sprites/bird.png");
  }
  display()
  {
    //allow the bird to move with the help of the mouse
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //display
    super.display();
  }
}