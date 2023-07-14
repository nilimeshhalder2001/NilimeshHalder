var a =document.getElementsByTagName("input")[0];
a.addEventListener("blur",function(sou){
    a.value=sou.target.value.toUpperCase();
})
// a.addEventListener("focus",function(){
//     console.log("Focus is working");
// })
// a.addEventListener("focusin",function(){
//     a.style.backgroundColor="Yellow";
// })
// a.addEventListener("focusout",function(){
//     a.style.backgroundColor="Red";
// })