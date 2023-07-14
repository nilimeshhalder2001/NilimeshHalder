// var b=document.querySelectorAll(".b1")[0];
// b.addEventListener("click",function(){
//    setInterval(count,1000);
//    function count(){
//     var sou=new Date();
//     var hours=sou.getHours();
//     var minute=sou.getMinutes();
//     var second=sou.getSeconds();
//     var time=hours+" : "+minute+" : "+second;
//     minute=formattime(minute);
//     second=formattime(second);
//     document.getElementsByTagName("p")[0].innerHTML=time;
//     function formattime(nili){
//       if(nili<10){
//          nili="0"+nili;
//       }
//       return nili;
//     }
//    }
// })
// try{
//    alert("Hi everyone");
//    alert(a);
// }
// catch(nili){
   
// }
// finally{
//    var a=parseInt(prompt("Enter 1st number"));
//    var b=parseInt(prompt("Enter 2nd number"));
//    var c=a+b;
//    document.write("The result is "+c);
// }
var a=document.getElementsByTagName("input")[1];
a.addEventListener("click",function(){
   var i=document.getElementsByTagName("input")[0].value;
   try{
      if(i<5){
         throw "Input is low";
      }
      else if(i>10){
         throw "Input is high";
      }
      else{
         throw "Input is perfect";
      }
   }
   catch(soumili){
      console.log(soumili);
   }
   finally{
      console.log("All are working fine");
   }
})
