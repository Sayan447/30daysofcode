// let array1 = ["thomas" , "child"];
// let [item1 , item2] = array1;

// console.log(item1);
// console.log(item2);


let array1 = ["thomas" , "child" , "leo" , 'thor'];
let [item1 , item2 , ...item3] = array1;

console.log(item1);
console.log(item2);
console.log(item3); // leo 
// [ 'leo', 'thor' ]