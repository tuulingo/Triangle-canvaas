window.addEventListener("load", ()=>{
    let el = document.querySelector("#canvas");
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    let ctx1 = el.getContext("2d");
    var height = window.innerHeight;
    var width = window.innerWidth;
    var dotCount = 0;
    var firstDotCount = 0;
    canvas.width = width;
    canvas.height = height;
    var circright = new Circle(width * 0.66, height * 0.75, 2);
    var circmiddle = new Circle(width * 0.5, height * 0.25, 2);
    var circleft = new Circle(width * 0.33, height * 0.75, 2);
    const anchorPoints = new Array();
    anchorPoints.push(circright, circmiddle, circleft);
    this.targetDot = targetDot === null ? 0 : circmiddle;
    this.lastDot = lastDot === null ? 0 : circleft;
    var targetDot = anchorPoints[Math.floor(Math.random() * anchorPoints.length)];
    var lastDot = anchorPoints[anchorPoints.length];
    // var increment_x = (targetDot.x-lastDot.x)/2;
    // var increment_y = (targetDot.y-lastDot.y)/2;
    var testx = (circleft.x + circmiddle.x) / 2;
    var testy = (circleft.y + circmiddle.y) / 2;
    console.log(circleft.x + "  " + circleft.y + " <----left middle------>" + circmiddle.x + "  " + circmiddle.y);
    console.log(testx + "<---- X Y ----->" + testy);
    var newDot = new Circle(testx, testy, 2);
    var firstDot = new Circle();
    // console.log(testx + "<--x y-->  " + testy);
    //targetDot is the dot that is going to be targeted next, lastDot i
    //Define the circle
    function Circle(x, y, r, targetDot, lastDot) {
        "use strict";
        this.x = x === null ? 0 : x;
        this.y = y === null ? 0 : y;
        this.r = r === null ? 2 : r;
        this.fill = function(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
        };
    // this.randomDot = function(ctx, targetDot, lastDot) {
    //     ctx.beginPath();
    //     ctx.arc(this.increment_x, this.increment_y, this.r, 0, Math.PI*2);
    // }
    }
    //Draw the triangle
    circright.fill(ctx1);
    circmiddle.fill(ctx1);
    circleft.fill(ctx1);
    while(dotCount < 2)if (firstDotCount != 1) {
        newDot.fill(ctx1);
        firstDotCount++;
    }
});

//# sourceMappingURL=index.c4775257.js.map
