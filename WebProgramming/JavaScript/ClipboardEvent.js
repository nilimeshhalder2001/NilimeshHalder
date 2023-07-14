var a=document.querySelector("input");
var p=document.querySelectorAll("p")[0];
a.addEventListener("copy",function(){
    p.innerHTML="You have copied the value";
})
a.addEventListener("cut",cutting);
function cutting(cut){
    console.log("you have cutting");
    p.innerHTML=cut.target.value;
}
a.addEventListener("paste",function(pas){
    p.innerHTML=pas.target.value;
})