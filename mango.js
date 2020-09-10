class Mango {
    constructor () {

    }
var options ={
    istatic:true,
    restituetion:0,
    friction:1,

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
}

function keyPressed() {
    if(keyCode === 32)
        Matter.Body.setposition(stoneObj, {x:235, y:420})


function collision(stone, mango) {
 mangoBodyPosition=new mangoBodyPosition
 stoneBodyPosition=new stoneBodyPosition

 var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if (distance<-mango.r+stone.r)
 {
      Matter.body.setStatic(mango.body,false);
 }
}
  mango1.display();
  mango2.display();
  mango3.display();

}
