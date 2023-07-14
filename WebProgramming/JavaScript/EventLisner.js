document.getElementById("mybutton").addEventListener("click",displayDate);
function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}
document.getElementById("hi").addEventListener("click",print);
function print(){
    alert("Hello World");
}
document.getElementById("hello").addEventListener("click",good);
    function good(){
        alert("Hi All");
    }
    document.getElementsByClassName("event")[0].addEventListener("click",nili);
    function nili(){
        alert("Hi I am Nilimesh Soumili");
    }
    