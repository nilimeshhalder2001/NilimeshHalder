var a=document.querySelector("form");
var n=document.getElementById("name");
var r=document.getElementById("roll");
a.addEventListener("submit",submithandler);
function submithandler(e){
    const userinfo={
        name:n.value ,
        roll:r.value,
    }
    console.log(userinfo)
}