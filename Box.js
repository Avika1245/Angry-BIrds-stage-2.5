//extend child class to parent class
class Box extends BaseClass
{
  constructor(x,y,width,height)
  {
     super(x,y,width,height)
         //load image
     this.image = loadImage("sprites/wood1.png")
  }
}