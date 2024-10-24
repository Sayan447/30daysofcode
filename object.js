// let obj = {
//     name: 'bravo',
//     age : 21
// }

// console.log(obj.age);
// console.log(obj.name);



let obj1 = {
    'name':'sayan',
    'age' : 25,
    'last name' : 'chakraborty',
    fun: function(){
        console.log(" I'm function ");
    },
    arr: [20,30,40]
}

// console.log(obj1.name); // sayan
// console.log(obj1.age); // 25
// console.log(obj1['last name']); // 25
// obj1.fun(); // I'm function

// console.log(obj1.arr); // [ 20, 30, 40 ]



// obj1.key = 'item'
// console.log(obj1);
// {
//     name: 'sayan',
//     age: 25,      
//     'last name': 'chakraborty',
//     fun: [Function: fun],
//     arr: [ 20, 30, 40 ],
//     key: 'item'
//   }




// another way to do this

// let a = "Key2";
// obj1.key = "item2"
// obj1[a] = "item2"
// console.log(obj1);
// {
//     name: 'sayan',
//     age: 25,
//     'last name': 'chakraborty',
//     fun: [Function: fun],      
//     arr: [ 20, 30, 40 ],       
//     key: 'item2',
//     Key2: 'item2'
//   }



// for print only keys and values
for(let i in obj1){
    // console.log(i);   // name
    // age
    // last name
    // fun
    // arr
}


for(let i in obj1){
    // console.log(obj1[i]);
}

// sayan
// 25
// chakraborty    
// [Function: fun]
// [ 20, 30, 40 ] 


for(let i of Object.keys(obj1)){
    // console.log(i);
}

// name
// age      
// last name
// fun      
// arr  



for(let i of Object.keys(obj1)){
    console.log(obj1[i]);
}
// sayan
// 25
// chakraborty    
// [Function: fun]
// [ 20, 30, 40 ] 