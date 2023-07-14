var heading2=document.createElement("h2");
var text=document.createTextNode("DOM adding");
heading2.appendChild(text);

var a=document.getElementsByClassName("Hi")[0];
a.appendChild(heading2);

var heading3=document.createElement("h3");
var text2=document.createTextNode("DOM is a part of java script");
heading3.appendChild(text2);

a.appendChild(heading3);

var Arunima=document.createElement("h2");
var Nilimesh=document.createTextNode("She is my girl friend");
Arunima.appendChild(Nilimesh);

var Soumili=document.querySelectorAll("p")[0];
Soumili.appendChild(Arunima);