for(var i=0;i<2;i++){
    var a=document.getElementsByTagName("button")[i];
    a.addEventListener("click",function(){
        var text=this.innerHTML;
        name1(text);
    })
    function name1(text){
    switch(text){
        case "Audio1":
            var audio=new Audio("1st.mp3");
            audio.play();
            break;
        case "Audio2":
            var audio=new Audio("2nd.mp3");
            audio.play();
            break;
    }
}
}
