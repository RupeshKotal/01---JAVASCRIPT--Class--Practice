// Arry method 

//****** Add remove iteams ****

//**** */ For adding elemt from end
// let number = [10,20,30,40,50]
// number.push(50);
// number.push(80)
// console.log(number);

// For removing element from end of arry

// number.pop();
// number.pop();
// let popNum = number.pop();
// console.log(number);
// console.log(popNum);

// *** Adding elem at the start

// For Adding
// let number = [10,20,30,40,50]
// number.unshift(90)
// console.log(number)

// For removing from beginning
// number.shift()
// console.log(number);


// ****    HOw To DELET ARRY FROM ELEMENT  slice and splice

// let stringArry= ["I", "am","best", "in world"]

// delete stringArry[2]
// console.log(stringArry)

// ** slice syntax =>  arr.slice(StartIndex, endIndex) not icluding end
// console.log(stringArry.slice(1,3))
// console.log(stringArry)

// let arr = ['R',"u","p","e","s","h"]
// // console.log(arr.slice(-5));
// console.log(arr.slice(2,4))

// slice will return new arry it will not modify the current

// let strarr = ['h','e','l','o']
// let copyArr = strarr.slice()
// console.log(copyArr)
// console.log(strarr)
// strarr[3]=500;
// console.log(strarr)
// console.log(copyArr)


// SPLICE syntax :- arr.splice(startIndex,deleteCounnt,arg1,arg2,arg3..,argN)
//  let name = ['r','u','p','e','s','h']
//  name.splice(1,2,'i','t')
// const removElem = name.splice(1,2,'i','t')
//  console.log(name)
//  console.log(removElem);

//  let friend = ['parth', 'utkasrh', 'vinit']
//  friend.splice(1,0,'Ritesh')
//  console.log(friend)


// *********  Concat

// let num =[20,30,40]
//  console.log(num.concat([50,60]));
//  console.log(num.concat([60,70],80))

//  console.log(num.concat([90,80],[70,60],['rupesh','Kotal']))


// ********** iTERATE

// [10,20,30].forEach(function(item, index,array){
//     console.log(`${item} is at index ${index} in ${array}`)
// })

// *** seacrching in Arry

// let arr = [1,2,0,false,true]

// console.log(arr.indexOf(false))
// console.log(arr.indexOf("rupes"))

// console.log(arr.includes(true))
// console.log(arr.includes(null))

// let users =[
//     {id:2239257, name:'Rupesh'},
//     {id:2239244, name: "utkrsh"},
//     {id:2239556, name:'Vinit'}

// ]

// let emp = users.findIndex(function(item,index,arr){
//     return item.name == "Ripesh"
// })
//  console.log(emp)

//**************** */   Reverse method 
// let num = [10,20,30,40]
// num.reverse()
// console.log(num)


// ** Split and join

// ****  Split (from string to arry)

// let name = 'Rupesh, Ritesh , parth '
// let arr = name.split(',')
// // console.log(arr)

// for(let name of arr){
//     console.log(`Message send to ${name}`)
// }


/// *********************

let name = 'Rupesh, Ritesh , parth '
let arr = name.split(',')
console.log(arr)

let str = arr.join(",")
console.log(str)













