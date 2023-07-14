for(var i=0;i<3;i++){
    var a=document.querySelectorAll(".myButton")[i];
    a.addEventListener("click",function(){
        var text=this.innerHTML;
        
        switch(text){
            case "1st":
                var audio=new Audio("1st.mp3");
                audio.play();
                break;
            case "2nd":
                var audio=new Audio("2nd.mp3");
                audio.play();
                break;
            case "3rd":
                var audio=new Audio("3rd.mp3");
                audio.play();
            
        }
        
    })
}
