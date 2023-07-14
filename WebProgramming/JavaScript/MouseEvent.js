var a =document.getElementsByTagName("div")[0];
a.addEventListener("click",function(nili){
    console.log(nili.target.textContent);
})