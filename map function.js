const nums = [1,2,3,4,5,6,7,8,9]


// const detailMap = nums.map((num, index , arr)=>{
//     return `Index is ${index} : ${num} from array ${arr}`;
// });
// console.log(detailMap);
// [                                                      
//     'Index is 0 : 1 from array 1,2,3,4,5,6,7,8,9',       
//     'Index is 1 : 2 from array 1,2,3,4,5,6,7,8,9',       
//     'Index is 2 : 3 from array 1,2,3,4,5,6,7,8,9',       
//     'Index is 3 : 4 from array 1,2,3,4,5,6,7,8,9',       
//     'Index is 4 : 5 from array 1,2,3,4,5,6,7,8,9',       
//     'Index is 5 : 6 from array 1,2,3,4,5,6,7,8,9',       
//     'Index is 6 : 7 from array 1,2,3,4,5,6,7,8,9',       
//     'Index is 7 : 8 from array 1,2,3,4,5,6,7,8,9',
//     'Index is 8 : 9 from array 1,2,3,4,5,6,7,8,9'        
//   ]
// console.log(typeof detailMap); //object


// console.log(nums);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
// ]
// no change in the original array
// map() creates a new array from calling a function for every array element



// if we want to square of the number

// const detailMap = nums.map((num, index , arr)=>{
//     return `${num * num}`
// });
// console.log(detailMap);
// //[
//     '1',  '4',  '9',
//     '16', '25', '36',
//     '49', '64', '81'
//   ]




// another way to do this 

const detailMap = nums.map(num => num * num)
console.log(typeof detailMap);
console.log(detailMap);
// object
// [
//    1,  4,  9, 16, 25,
//   36, 49, 64, 81
// ]


