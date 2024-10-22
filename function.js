// function name(a){
//     console.log("hello " + a);
// }

// name('Learners')




// function add(a,b){
//     console.log(a + b);
// }

// add(2,3); //5



// function add(a,b,c){
//     return a+b+c;
// }

// let a = 10;
// let b = 3;
// console.log(add(a,b,20)); // 33




// let a = 5; // global
// function local(){
//     let b = 3; //local
//     console.log(a);
// }
// local();
// console.log(b);
// output : - ReferenceError: b is not defined





// let fun = function(){
//     console.log("hello");
// }

// fun() // hello



// immidiately invoked function
// (function(){
//     console.log("hello");
// })() // hello





// arrow function
let a = (a,b)=>{
    return a+b
}
console.log(a(2,3)); //5