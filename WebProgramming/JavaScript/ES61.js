var a =document.getElementsByTagName("input")[0];
a.addEventListener("change",function(e){
    console.log("Changed");
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
})