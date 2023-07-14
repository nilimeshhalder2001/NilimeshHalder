const task1=(callback)=>{
    console.log("Task 1");
    callback();
}
const task2=(callback)=>{
    setTimeout(()=>{
        console.log("Task 2, Dataloading");
        callback();
    },2000)
    
}
const task3=(callback)=>{
    console.log("Task 3");
    callback();
}
const task4=()=>{
    console.log("Task 4");
}
task1(function f1(){
    task2(function f2(){
        task3(function f3(){
            task4();
        });
    });
});
