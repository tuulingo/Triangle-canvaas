window.addEventListener("load", () => {
    let el = document.querySelector("#canvas");
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    let ctx = el.getContext("2d");

    var height = window.innerHeight
    var width = window.innerWidth
    
    canvas.width = width;
    canvas.height = height;

    var circright = new Circle(width*0.66, height*0.75, 2);
    var circmiddle = new Circle(width*0.5, height*0.25, 2);
    var circleft = new Circle(width*0.33, height*0.75, 2);
    const anchorPoints = new Array();
    anchorPoints.push(circright, circmiddle, circleft);


    let divisions = 1;

// Try to create 'divisions' amount of dots between pos1 and pos2
    // this.targetDot = (targetDot === null) ? 0 : circmiddle;
    // this.lastDot = (lastDot === null) ? 0 : circleft;
    // var targetDot = anchorPoints[Math.floor(Math.random()*items.length)];
    // var lastDot = anchorPoints[anchorPoints.length - 1];
    // let increment_x = (targetDot.x-lastDot.x)/(divisions+1)
    // let increment_y = (targetDot.y-lastDot.y)/(divisions+1)
    // console.log(increment_x)
    // var newDot = new Circle(increment_x, increment_y)
    
//targetDot is the dot that is going to be targeted next, lastDot i
//Define the circle
function Circle(x, y, r, targetDot, lastDot) {
    "use strict";
    this.x = (x === null) ? 0 : x;
    this.y = (y === null) ? 0 : y;
    this.r = (r === null) ? 2 : r;
    
    this.fill = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    }

    // this.randomDot = function(ctx, targetDot, lastDot) {
    //     ctx.beginPath();
    //     ctx.arc(this.increment_x, this.increment_y, this.r, 0, Math.PI*2);

    // }
}

//Draw the triangle
circright.fill(ctx);
circmiddle.fill(ctx);
circleft.fill(ctx);
});