class Box{

constructor(x,y,width,height){
  var  r={restitution:0.5}
this.body=Bodies.rectangle(x,y,width,height,r)
this.width=width
this.height=height
World .add(world,this.body)
}

display(){

  var pos=  this.body.position
    
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height)


}


}