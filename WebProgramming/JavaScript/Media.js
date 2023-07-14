var a =document.getElementsByTagName("video")[0];
a.addEventListener("canplay",function(){
    console.log("played");
})
a.addEventListener("play",function(){
    console.log("This is played now");
})
a.addEventListener("playing",dishan);
function dishan(){
    console.log("This is starting");
}
a.addEventListener("pause",function(){
    console.log("This is pased");
})
a.addEventListener("ended",function(){
    console.log("This is ended");
})
a.addEventListener("volumechange",function(){
    console.log("The volume is change");
})