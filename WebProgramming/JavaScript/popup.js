// function arunima(){
//     var text=confirm("Are you want to submit");
//     if(text==true){
//         console.log("This is continue");
//     }
//     else{
//         console.log("This is not continue");
//     }
// }
// arunima();
function soumili(){
    var h1=document.createElement("h1");
    var input=prompt("Enter your name");
    if(input==null ||input==""){
        var text="there are no input";
    }
    else{
        text=input;
    }
    var nili=document.createTextNode(text);
   h1.appendChild(nili);
    var p=document.getElementsByTagName("p")[0];
    p.appendChild(h1);
}
soumili();