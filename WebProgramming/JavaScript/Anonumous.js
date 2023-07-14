var a =document.getElementsByTagName("h1")[0];
a.addEventListener("click",arunima);
function arunima(){
    var a1=document.createElement("h4");
    var text=document.createTextNode("This is newly added");
    a1.appendChild(text);

    var s=document.getElementsByTagName("h1")[0];
    var j=s.appendChild(a1);
    j.classList.add("India");
}
var b=document.getElementsByTagName("h2")[0];
b.addEventListener("mouseover",nilimesh);
function nilimesh(){
    b.innerHTML="Good Morning";
}
var s=document.getElementsByTagName("h3")[0];
s.addEventListener("mouseover",soumili);
function soumili(){
    s.classList.add("India");
}
s.addEventListener("mouseout",nilimesh);
function nilimesh(){
    s.classList.remove("India");
}