var a =document.getElementsByTagName("h1")[0];
a.remove();
var photos=["JavaScript/Arunima.jpg","JavaScript/Nilimesh.jpg","JavaScript/p1.jpg","JavaScript/p2.jpg"];
var img=document.querySelectorAll("img")[0];
var count=0;
function next(){
    count++
        if(count>=photos.length){
            count=0;
            imgsrc=photos[count];
        }
        else{
            imgsrc=photos[count];
        }
    
}
