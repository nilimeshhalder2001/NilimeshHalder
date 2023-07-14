window.addEventListener("load",function(){
    console.log("The page is loded");
})
window.addEventListener("unload",function(){
    console.log("The page is reload");
})
window.addEventListener("scroll",function(){
    console.log("The page is scrolled");
})
window.addEventListener("resize",function(){
    var h=window.outerHeight;
    var w=window.outerWidth;
    console.log(`height is${h},width is ${w}`);
})
var name1=document.querySelectorAll("details")[0];
name1.addEventListener("toggle",function(f){
    console.log(f.target.open);
})