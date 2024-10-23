// arr1 = ["john" , 202 , true]
// arr2 = arr1

// // arr1.push("Cena")
// arr2.push("Cena") // same output

// console.log(arr1);
// console.log(arr2);

// [ 'john', 202, true, 'Cena' ]    
// [ 'john', 202, true, 'Cena' ]    




// solveing this matter

let arr1 = ["john" , 202 , true]

// let arr2 = arr1.slice(0)
// console.log(arr2); // [ 'john', 202, true ]

arr2 = arr1.slice(0).concat(['items']) // [ 'john', 202, true, 'items', 'cena' ]

arr2.push('cena')
// console.log(arr2); //[ 'john', 202, true, 'cena' ]


let arr3 = ['kol' , 547 , false]
let arr4 = [...arr3]
console.log(arr3); //[ 'kol', 547, false ]


arr4.push("Bena")
console.log(arr4); // [ 'kol', 547, false, 'Bena' ]
