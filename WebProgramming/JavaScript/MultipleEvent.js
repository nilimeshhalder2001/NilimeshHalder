for(var i=0;i<3;i++){
    var name1=document.getElementsByClassName("myButton")[i];
   name1.addEventListener("click",nilimesh);
   function nilimesh(){
    var text=this.innerHTML;
    document.getElementsByClassName("h1")[0].innerHTML=text+"is clicked";
   }
    }

var a=document.getElementsByClassName("h1")[0];
a.addEventListener("mouseover",display);
function display(){
    a.classList.add("para");
}

var b=document.getElementsByClassName("h1")[0];
b.addEventListener("mouseout",display2);
function display2(){
    a.classList.remove("para");
}
var p=document.getElementsByTagName("p")[0];
p.addEventListener("click",soumili);
function soumili(){
    var t1=this.innerHTML;
    document.getElementsByTagName("h2")[0].innerHTML=t1+"This is changed";
}
