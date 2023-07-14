document.getElementsByClassName("button")[0].addEventListener("click",function(){
    var num=document.getElementsByClassName("insert")[0].value;
    console.log("The input value is "+num);
    
try{
    if(num<5){
        throw "Input is low";
    }
    else if(num>10){
        throw "Input is high";
    }
    else{
        throw "Input is perfect";
    }
}
catch(error){
    console.log(error);
}
finally{
    console.log("All are working fine");
}
})
