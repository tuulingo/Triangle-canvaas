window.addEventListener("load",(()=>{let t=document.querySelector("#canvas");t.width=window.innerWidth,t.height=window.innerHeight;let n=t.getContext("2d");var i=window.innerHeight,l=window.innerWidth,e=0;canvas.width=l,canvas.height=i;var h=new u(.66*l,.75*i,2),a=new u(.5*l,.25*i,2),o=new u(.33*l,.75*i,2);const r=new Array;r.push(h,a,o),this.targetDot=null===s?0:a,this.lastDot=null===w?0:o;var s=r[Math.floor(Math.random()*r.length)],w=r[r.length],d=(s.x,w.x,s.y,w.y,(o.x+a.x)/2),c=(o.y+a.y)/2;console.log(o.x+"  "+o.y+" <-left middle->"+a.x+"  "+a.y);var f=new u(d,c,2);new u;function u(t,n,i,l,e){"use strict";this.x=null===t?0:t,this.y=null===n?0:n,this.r=null===i?2:i,this.fill=function(t){t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI),t.fill()}}for(h.fill(n),a.fill(n),o.fill(n);;)1!=e&&(f.fill(n),e++)}));
//# sourceMappingURL=index.2eb43636.js.map