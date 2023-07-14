var head=document.createElement("h3");
var text=document.createTextNode("Hi I am an Indiam");

head.appendChild(text);

var a=document.querySelector("#Hello");
a.appendChild(head);

var Nilimesh=document.createElement("p");
var Arunima=document.createTextNode("Hi Arunima I love you");

Nilimesh.appendChild(Arunima);

var Soumili=document.querySelectorAll("div")[0];
Soumili.appendChild(Nilimesh);

var Jagat=document.createElement("h4");
var Bishakha=document.createTextNode("Hi Parents");

Jagat.appendChild(Bishakha);

var ch=document.getElementsByTagName("div")[0];
ch.appendChild(Bishakha);

var java=document.createElement("h5");
var c=document.createTextNode("Java is a best programming language");

java.appendChild(c);

var python=document.getElementById("Hello");
python.appendChild(java);
