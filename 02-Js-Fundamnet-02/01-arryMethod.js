const arr = [1,2,3,4,5,6]

const output = arr.push(7)
// console.log(arr)
// console.log(output);

const pop = arr.pop();
// console.log(arr)
// console.log(pop);

const unshift = arr.unshift(10);
// 

arr.shift()
console.log(arr)


const arr1 = [1,2,3,4]
const arr2 =[5,6,7,8,9]
const arr3 = arr1.concat(arr2)
console.log(arr3)

// console.log(arr3.slice(2,6))
// const arr4 =arr3.slice(2,6)
// console.log(arr4)
// console.log(arr3)

const arr5 = arr3.splice(2,0,10,11)
// console.log(arr3)
// console.log(arr5)

const reverse = arr3.reverse();
console.log(reverse);
console.log(arr3);


const reduce = arr3.reduce(function (acc,val){
   return acc + val
},0)

console.log(reduce);

const arr6 = arr3.join(",")

console.log(arr6);

const arr7 = arr6.split(",")

console.log(arr7)
