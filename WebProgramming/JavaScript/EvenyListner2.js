var a=document.getElementById("India");
a.addEventListener("mouseover",display);
function display(){
    a.classList.add("India");
}
a.addEventListener("mouseout",remove);
function remove(){
    a.classList.remove("India");
}
var b=document.getElementsByClassName("hi")[0];
b.addEventListener("mouseover",westbengal);
function westbengal(){
    b.classList.add("Westbengal");
}
b.addEventListener("mouseout",remove1);
    function remove1(){
        b.classList.remove("Westbengal");
    }

var m=document.getElementsByTagName("h2")[0];
m.addEventListener("mousemove",dis);
function dis(){
    m.classList.add("India");
}
m.addEventListener("mouseout",r1);
function r1(){
    m.classList.remove("India");
}
