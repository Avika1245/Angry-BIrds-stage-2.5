//extend child class to parent class
class Pig extends BaseClass
{
  constructor(x,y)
  {
    super (x,y, 50,50);
        //load image
    this.image = loadImage("sprites/enemy.png");
  }
}