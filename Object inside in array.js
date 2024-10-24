let arr = [
    {user:1,name:'tate'},
    {user:2,name:'shelby'},
    {user:4,name:'topg'}
]


// console.log(arr);
// [
//     { user: 1, name: 'tate' },  
//     { user: 2, name: 'shelby' },
//     { user: 4, name: 'topg' }   
// ]

// console.log(arr[0]);
// { user: 1, name: 'tate' }


// for(let i in arr){
//     console.log(i);
// }
// 0
// 1
// 2



// for(let i in arr){
//     console.log(arr[i]);
// }
// output:-
// { user: 1, name: 'tate' }
// { user: 2, name: 'shelby' }
// { user: 4, name: 'topg' }  


// for(let i of arr){
//     console.log(i);
// }
// same output


// for(let i of arr){
//     console.log(i.name);
//     console.log(i.user);
//     // 1  2  4
// }
// tate
// shelby
// topg





// destrucring

// let [item1, item2] = arr;
// console.log(item1);
// { user: 1, name: 'tate' }



// let [{name}, item2 , ] = arr;
// console.log(name); // tate


// if we want to print the 3rd one name then you should {name:name1}


let [{name}, item2 ,{name:name1} ] = arr;
console.log(name1); // topg