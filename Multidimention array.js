let arr = [
    ["john" , 30], // 0th index
    ["thomas" , 89], // 1st index
    ["john" , 38] // 2nd index
]


// console.log(arr);
//[ [ 'john', 30 ], [ 'thomas', 89 ], [ 'john', 38 ] ] 


// console.log(arr[1]);
//[ 'thomas', 89 ]


// console.log(arr[1][0]); // thomas


// for(let i = 0 ; i< arr.length;i++){
    // console.log(arr[i]);
    // console.log(i); // print only index
    
    // [ 'john', 30 ]        
    // [ 'thomas', 89 ]       
    // [ 'john', 38 ]   
    
//     for(let j = 0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
        

//     }
// }

//john
// 30
// thomas
// 89
// john
// 38




arr.forEach(data =>{
    console.log(data);
    // [ 'john', 30 ]
    // [ 'thomas', 89 ]
    // [ 'john', 38 ] 
    // data.forEach(val=>{
    //     console.log(val); 
    
    // })
});

// john
// 30
// thomas
// 89
// john
// 38


// another way 
for( let ar of arr){
    for( i of ar){
        console.log(i);
        
    }
}

// / john
// 30
// thomas
// 89
// john
// 38