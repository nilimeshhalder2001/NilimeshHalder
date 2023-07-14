// setTimeout(function() {
//     alert("Hi Today is diwali");
    
// }, 5000);
// setTimeout(display,2000);
// function display(){
//     document.write("Hi today is kali puja");
// }
// var b=document.getElementsByClassName("b1")[0];
// b.addEventListener("click",function(){
//     var p=document.getElementsByTagName("p")[0];
//     setTimeout(display,3000);
//     function display(){
//         p.innerHTML="Data is submit successfully";

//     }       
//     })
// setInterval(display,2000);
// function display(){
//     alert("Hi today is Diwali");
// }
// var b=document.getElementsByClassName("b1")[0];
// // b.addEventListener("click",function(){
//     var p=document.getElementsByTagName("p")[0];
// //     setInterval(function(){
// //         p.innerHTML="today is diwali";
// //     },2000)
// // })
// b.addEventListener("click",function(){
//     setInterval(() => {
//         p.innerHTML="This is changed";
        
//     }, 2000);
// })
var b=document.getElementsByClassName("b1")[0];
b.addEventListener("click",display);
    function display(){
    let nili=new Date();
    let hours=nili.getHours();
    let minute=nili.getMinutes();
    let second=nili.getSeconds();
    var time=hours+" : "+minute+":"+second;
    minute=formattime(minute);
    second=formattime(second);
    var p=document.getElementsByTagName("p")[0];
    p.innerHTML=time;
    setInterval(display,1000);  

    function formattime(nili){
        if(nili<10){
            nili="0"+nili;
        }
        return nili;
}
    }