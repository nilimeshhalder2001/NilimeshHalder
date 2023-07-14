// setTimeout(nilimesh,1000);
// function nilimesh(){
//     document.write("Set time out is working fine");
// }
// setTimeout(function(){
//     confirm("please confirm me");
// },3000)

// setTimeout(soumili,1000);
// function soumili(){
//     document.write("Nilimesh is my brother");
// }
/*
var b=document.getElementsByTagName("button")[0];
b.addEventListener("click",function(){
    var nili=new Date();
    setTimeout(() => {
        var p=document.querySelectorAll("p")[0];
        p.innerHTML=nili.getDay();
    }, 2000);
})
*/
// setInterval(nilimesh,1000);
// function nilimesh(){
//     alert("Hi this is set interval");
// }
// setInterval(function(){
//     document.write("This is set interval");
// },3000)
// var a=document.getElementsByTagName("button")[0];
// a.addEventListener("click",function(){
//     var count=1;
//     setInterval(function(){
//         var p=document.getElementsByTagName("p")[0];
//         p.innerHTML=count++;
//     },1000)
// })
var a=document.getElementsByTagName("button")[0];
a.addEventListener("click",function(){
    setInterval(display,1000);
    function display(){
    var nili=new Date();
    var h=nili.getHours();
    var m=nili.getMinutes();
    var s=nili.getSeconds();
    var time=h+" : "+m+" : "+s;
    var p=document.getElementsByTagName("p")[0];
    p.textContent=time;
    m=format(m);
    s=format(s);
}
    function format(nili){
    if(s<10){
        s="0"+nili;
    }
    return nili;
}
})