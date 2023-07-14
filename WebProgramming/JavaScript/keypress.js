document.addEventListener("keypress",soumili);
function soumili(nilimesh){
    var arunima=nilimesh.key;
    document.getElementsByTagName("h1")[0].innerHTML="you have clicked"+arunima;
}