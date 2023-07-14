var won=0;
var lose=0;
for(var i=0;i<5;i++){
    var num=prompt(parseInt("Enter the number"));
    var a=Math.random()*6;
    var b=Math.floor(a);
    if(num==b){
        document.write("You have won"+"<br>");
        won++;
    }
    else{
        document.write("You have lose"+"<br>");
        lose++;
    }
}
document.write("You have won "+won+" times"+"<br>");
document.write("You have lose "+lose+" times ");



