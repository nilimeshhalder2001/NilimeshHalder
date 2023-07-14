const square=(x)=>{
    let num=x*x;
    console.log(num);
}
const soumili=(no,callback)=>{
    console.log("This is callback function");
    callback(no);
}
soumili(5,square)
const callbackfunction=()=>{
    console.log("This is Callback function");
}
const higherorderfunction=(func)=>{
    console.log("This is higher order function");
    func();
}
higherorderfunction(callbackfunction);