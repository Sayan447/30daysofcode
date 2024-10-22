/*
let name = ["john" , "hina"]
// console.log(name);
// console.log(name.length); // 2



let name1 = ["john" , 1 , true , null]
// console.log(name1); //[ 'john', 1, true, null 
name1.push("cena")
// console.log(name1); // [ 'john', 1, true, null, 'cena' ] 
name1.unshift("lucy")
// console.log(name1); // [ 'lucy', 'john', 1, true, null, 'cena' ]


console.log(name1); //[ 'lucy', 'john', 1, true, null, 'cena' ]

name1.splice(1 ,1)
console.log(name1); // splice one data from 1 index
//[ 'lucy', 1, true, null, 'cena' ]

name1.splice(1,2)
console.log(name1); //[ 'lucy', null, 'cena' ]

name1.splice(1 ,  0, "cena")
console.log(name1);

// 1 index and 0 delete and cena added
*/

let num = [10,20,54,25,36,98]
// for(let i = 0; i<num.length; i++){
//     console.log(num[i]);
    
// }



// num.forEach((val, index , array) => {
//     console.log(val + " " +index+ " "  + array);
    
// });
//10 0 10,20,54,25,36,98
// 20 1 10,20,54,25,36,98
// 54 2 10,20,54,25,36,98
// 25 3 10,20,54,25,36,98
// 36 4 10,20,54,25,36,98
// 98 5 10,20,54,25,36,98



// let a = num.forEach((val, index , array) => {
//     return val
// });

// console.log(a);
// undefined because it's work with the same array , it cannot store the another array





// let a = num.map((val, index) => {
//     // return val;
//     return val + 10 ;
// });

// console.log(a); // [ 10, 20, 54, 25, 36, 98 ]


// console.log(num); // [ 10, 20, 54, 25, 36, 98 ]
// console.log(a); // [ 20, 30, 64, 35, 46, 108 ]





let num2 = [10,20,78,54,68,34,25]
let num3 = [10,202,98,59,60,33,50]

// console.log(num2.concat(num3));
// [
//   10, 20, 54, 25, 36,
//   98, 10, 20, 54, 25,
//   36, 98
// ]

// console.log(num2.indexOf(20)); // 1 index
// console.log(num2.reverse()); // for reverse
// [
//     25, 34, 68, 54,
//     78, 20, 10     
// ]



// console.log(num3.sort());
// [
//   10, 202, 33, 50,
//   59,  60, 98
// ]

// let a = num2.slice(1,4);
// console.log(a); // [ 20, 78, 54 ] // exclusive in terms of the end index



// let a1 = num3.splice(1,4);
// console.log(a1); // [ 202, 98, 59, 60 ]
//splice() method in JavaScript is inclusive when it comes to the starting index. This means that the element at the specified starting index is included in the modification process.



// for converting into string
// console.log(typeof num3.toString()); //string 10,202,98,59,60,33,50


// let a2 = num2.filter((val,ind,arr)=>{
//     if(val >= 10 && val <= 50){
//         return val;
//     }
// })

// console.log(a2); //[ 10, 20, 34, 25 ]





// let a2 = num2.find((val,ind,arr)=>{
//     return val == 10
// })

// console.log(a2);// value is 10

// let a3 = num2.findIndex((val,ind,arr)=>{
//     return val == 10
// })

// console.log(a3); // first index is 0


// let num4 = [10,65,98,62,69,35,56,10]

// let a2 = num4.findLastIndex((val,ind,arr)=>{
// return val == 10
// })

// console.log(a2); // last index is 7













// let nm = "10,20,30"
// nm.split(',')
// nm.forEach(element => {
//     console.log(element);
// });

//nm.forEach is not a function
// at Object.<anonymous> (c:\Desktop\Projects\Github project\30daysofcode\array.js:165:4)




let nm = "10,20,30"
let arr = nm.split(',')
arr.forEach(element => {
    console.log(element);
});
// 10
// 20
// 30


console.log(arr); //[ '10', '20', '30' ]

// let jo = arr.join('and')
let jo = arr.join(' , ')
console.log(jo); //10 , 20 , 30
//10and20and30

