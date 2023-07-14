function add1(){
    var a=document.createElement("h1");
    var text1=document.createTextNode("This is added");
    a.appendChild(text1);

   var adding=document.querySelector(".nili");
   adding.appendChild(a);

}
function remove1(){
    var z=document.getElementById("nili");
    z.remove();
}
