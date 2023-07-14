var c=document.getElementById("mycanvas");
var ctx=c.getContext("2d");
ctx.lineWidth=3;
ctx.strokeStyle="black";
ctx.strokeRect(10,10,380,280);

ctx.fillStyle="green";
ctx.fillRect(12,12,376,276);

var c1=document.getElementById("mycanvas1");
var soumili=c1.beginPath();
soumili.arc(10,10,50,0,2*Math.PI,true);
soumili.fillStyle="red";
soumili.fill();
