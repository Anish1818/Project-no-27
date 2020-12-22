class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        var rope1X=pointA.x;
        var rope1Y=pointA.y;

        var rope2X=pointB.x+this.offsetX;
        var rope2Y=pointB.y+this.offsetY;

        strokeWeight(4);
        stroke("white");
        
        line(rope1X,rope1Y,rope2X,rope2Y);
    }
}