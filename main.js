window.addEventListener("load", () => {
  let el = document.querySelector("#canvas");
  el.width = window.innerWidth;
  el.height = window.innerHeight;
  let ctx = el.getContext("2d");

  var height = window.innerHeight;
  var width = window.innerWidth;

  canvas.width = width;
  canvas.height = height;

  var dotsCreated = 0;

  var circright = new Circle(width * 0.66, height * 0.75, 1);
  var circmiddle = new Circle(width * 0.5, height * 0.25, 1);
  var circleft = new Circle(width * 0.33, height * 0.75, 1);
  const anchorPoints = new Array();
  anchorPoints.push(circleft, circmiddle, circright);

  function Circle(x, y, r) {
    "use strict";
    this.x = x === null ? 0 : x;
    this.y = y === null ? 0 : y;
    this.r = r === null ? 1 : r;

    this.fill = function (ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    };
  }

  circright.fill(ctx);
  circmiddle.fill(ctx);
  circleft.fill(ctx);

  $(document).ready(function () {
    $("#htmlContainer input[type=button]").click(ChooseDot);
  });

  async function ChooseDot() {
    var newDotx = (circleft.x + circmiddle.x) / 2;
    var newDoty = (circleft.y + circmiddle.y) / 2;
    var newDot = new Circle(newDotx, newDoty, 1);
    newDot.fill(ctx);
    dotsCreated++;
    $("#counter").text(dotsCreated.toString());

    await sleep(1200);
    for (let i = 0; i < 50000; i++) {
      var targetDot =
        anchorPoints[Math.floor(Math.random() * anchorPoints.length)];
      var lastDotx = (newDot.x + targetDot.x) / 2;
      var lastDoty = (newDot.y + targetDot.y) / 2;
      var lastDot = new Circle(lastDotx, lastDoty, 0.75);
      lastDot.fill(ctx);
      $("#counter").text(dotsCreated.toString());
      newDot = lastDot;
      dotsCreated++;
      await sleep(1);
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
});
