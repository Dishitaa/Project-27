class Rope{

    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX, y: this.offsetY}
        }

        this.rope = Matter.Constraint.create(options)
        World.add(world, this.rope)
    }

    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);

        var pointAX = point1.x;
        var pointAY = point1.y;

        var pointBX = point2.x + this.offsetX;
        var pointBY = point2.y + this.offsetY;
        
        line(pointAX, pointAY, pointBX, pointBY);

    }
}