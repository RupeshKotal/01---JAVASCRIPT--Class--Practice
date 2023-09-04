// ** Declartaion of Arry **

//type 1 :- basic
const arrys = [1,2,3,4,5,5,7]
// console.log(arrys)

// type 2 :- using new keyword (Using Arry constructor)

let fruits = new Array("Mango", "apple",'Oregange')
// console.log(fruits)

let num1 = new Array(5);
// console.log(num);

// Using arry literals

// let mixedArry = Array('Apples',true,10,{name:"ruuesh"})
// console.log(mixedArry);

// mixedArry[2] = 30;
// console.log(mixedArry)

// delete mixedArry[2]
// console.log(mixedArry)

// Itrating arrys
let arrNum = [11,22,33,44]
for (let i =0; i < arrNum.length; i++){
    console.log(`At index ${i} is num value is ${arrNum[i]}`)
}

//Easy Way :- to itrate array values

let nums = [10,20,30,40,50];
for (let num of nums){
    // console.log(num)
}
