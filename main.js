window.addEventListener("load", () => {
    let el = document.querySelector("#canvas");
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    let ctx = el.getContext("2d");

    var height = window.innerHeight
    var width = window.innerWidth

    var randomDotsCount = 0;
    var firstDotCount = 0;
    var newDotCount = 0;
    
    canvas.width = width;
    canvas.height = height;

    var circright = new Circle(width*0.66, height*0.75, 1.5);
    var circmiddle = new Circle(width*0.5, height*0.25, 1.5);
    var circleft = new Circle(width*0.33, height*0.75, 1.5);
    const anchorPoints = new Array();
    anchorPoints.push(circleft, circmiddle, circright);
    var firstDotx = (circleft.x+circmiddle.x)/2;
    var firstDoty = (circleft.y+circmiddle.y)/2;
    var firstDot = new Circle(firstDotx, firstDoty, 1); 
    
//targetDot is the dot that is going to be targeted next, lastDot i
//Define the circle
function Circle(x, y, r) {
    "use strict";
    this.x = (x === null) ? 0 : x;
    this.y = (y === null) ? 0 : y;
    this.r = (r === null) ? 1 : r;
    
    this.fill = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    }
}

//Draw the triangle
circright.fill(ctx);
circmiddle.fill(ctx);
circleft.fill(ctx);
firstDot.fill(ctx);

$(document).ready(function(){
    $('#container input[type=button]').click(ChooseDot);
 });


 //ma pean ju saama uue punkti kordinaadid
ChooseDot = () => {
    // removedDot = anchorPoints.splice(0,1);
    var targetDot = anchorPoints[Math.floor(Math.random()*anchorPoints.length)];
    var newDotx
    var newDoty
    newDotx = (firstDot.x+targetDot.x)/2;
    newDoty = (firstDot.y+targetDot.y)/2;
    var newDot = new Circle(newDotx, newDoty, 1);
    if( newDotCount != 1) {
        newDotCount++;
        newDot.fill(ctx)
    }
    else{
        console.log(newDotx);
        var lastDotx = (newDot.x+targetDot.x)/2;
        var lastDoty = (newDot.y+targetDot.y)/2;
        var lastDot = new Circle(lastDotx, lastDoty, 1)
        lastDot.fill(ctx);
    }
    
};

function GenerateDots() {
        while ( randomDotsCount < 2 ) {

        if (firstDotCount == 1)
        {   

            randomDotsCount++
        }
        else
        {
            firstDot.fill(ctx);
            firstDotCount++;
        }
    };
};
});