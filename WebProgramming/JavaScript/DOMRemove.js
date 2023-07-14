function addelement(){
    var a=document.createElement("h3");
    var text=document.createTextNode("Element is added");
    var search=document.querySelectorAll("p")[0];
    a.appendChild(text);
    search.appendChild(a);
}
function removeelement(){
    var h=document.getElementsByTagName("h2")[0];
    h.remove();
}
