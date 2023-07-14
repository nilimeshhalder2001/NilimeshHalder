function message(nili="Hi I am Nilimesh Halder"){
    console.log(nili);
}
message();
message("Soumili is my sister");

function sum(x,y,...z){
    console.log(`X value is ${x} and Y value is ${y}and Z value is ${z}`);
}
sum(10,20,40,50,38,89,23,90,4,7);

function add(a,...z){
    console.log(`A value is ${a} and Z value is ${z}`);
    var sum=a+z;
    
    console.log(`The sum value is ${sum}`);
}
add(10,20,67);