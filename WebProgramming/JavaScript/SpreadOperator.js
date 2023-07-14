let numbers=[1,2,3];
let add=[5,6,7,...numbers];
console.log(add);

let nilimesh=[5,6,7,4,4,];
let soumili=[5,7,3,5,8,5];
let connect=[...nilimesh,...soumili];
console.log(connect);

let nili=[89,56,34,5,3];
let arunima=[1,4,3,...nili,45,34];
console.log(arunima);

let n={
    name:"Nilimesh Halder",
    age:22,
}

let s={
    name:"Soumili Halder",
    age:"13",
}

let a={...n,...s};
console.log(a);

let nilim={
    class:"M.Tech",
}
let soumi={
    class:"Seven (VII)"
}
let aruni={
    ...nilim,...soumi
}
console.log(aruni);