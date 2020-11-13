class Basket{
    constructor(x,y,w,h){
        var basket_options={
            isStatic:true
        }
        this.basket=MyBodies.rectangle(x,y,w,h,basket_options);
        MyWorld.add(world,this.basket);
        this.width=w;
        this.height=h;
        this.image=loadImage("dustbingreen.png");
    }
    dikhao(){
        var pos=this.basket.position;
        var angle=this.basket.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,-40,150,100);
        //rect(0,0,this.width,this.height);
        pop();
    }
}