//Sperad and rest operator are latest operation in ES6


// let nums = [10,20,30,40]
// let copyArr = nums

// copyArr[1] = 1000;
// console.log(copyArr);
// console.log(nums);

// let nums1 = [10,20,30,40]
// let newArr = [...nums];  //Spread operator can create shallow copy of the originsl elemeants

// newArr[1] =2000;
// console.log(nums1);
// console.log(newArr);


// let arr = [10,20,30,40]
// let newArr = [...arr,40,50]  // for pushing and object

// console.log(arr)
// console.log(newArr);


// let obj ={
//     name: "Pw skills",
//     course:"FSWD"
// }

// let newObj = {...obj,rating:5}

// console.log(newObj);


// let arr1 = [10,20,30,40]
// let arr2  =["rupesh","ritesh", "parth"]

// let conscatArr = [...arr1,...arr2]

// console.log(conscatArr); //conscated arr


// let nums = [10,20,30,40]

// function calCulateMax(num1,num2,num3,num4){
//   return Math.max(num1,num2,num3,num4)
// }

// console.log(calCulateMax(...nums))


// let name = 'PWSkills'

// let arryOfChar = [...name];
 
// console.log(arryOfChar)

// let obj1 = {
//     name: "rupesh",
//     empid: 2239257
// }

// let obj2 = {
//     name1: "vinit",
//     empid1: 2239244
// }

// let newObj = {...obj1,...obj2}

// console.log(newObj);


// ******** REST OPERATOR  ****************

//Collecting all remaing parameter in a function

// function sumOFAllNum(...nums){
// //  console.log(nums)

// return nums.reduce((acc,curr) =>acc+curr ,0)
// }
// sumOFAllNum(1,2,3,4,5)

//Destuctiouring

let arr = ['html','css','js','Py','Java']

let [elem1,,elem2,...remaningElemt] = arr;

console.log(elem1,elem2)
console.log(remaningElemt);




