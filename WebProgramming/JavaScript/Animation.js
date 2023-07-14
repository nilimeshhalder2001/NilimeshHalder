for(var i=0;i<3;i++){
    var a=document.querySelectorAll(".myButton")[i];
    a.addEventListener("click",function(){
        var text=this.innerHTML;
        song(text);
        playanimation(text);

    })
    document.addEventListener("keypress",press);
    function press(nili){
        var text=nili.key;
        song(text);
    }
    function song(text){
        switch(text){
            case "A":
                var audio=new Audio("1st.mp3");
                audio.play();
                break;
            case "B":
                var audio=new Audio("2nd.mp3");
                audio.play();
                break;
            case "C":
                var audio=new Audio("3rd.mp3");
                audio.play();
            
        }
    }
        function playanimation(text){
            var j=document.querySelector("."+text);
            j.classList.add("anim");
            setTimeout(function(){
                j.classList.remove("anim");
            },1000)
    }
    }

