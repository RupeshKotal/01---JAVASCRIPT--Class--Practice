// Primitive Data ype

let name = "rupesh"
let myName = name;

name = "Vinit"

// console.log(name);
// console.log(myName);

// NOn Priitive data tupe

let user = {
    name: "Rakesh",
    id: 101,
    city: "nagpur"
}


const newUser = user

newUser.name = "Rajesh"

// console.log(user);
// console.log(newUser);


const nums = [1,2,3,4,5]
const num1 = nums

num1[2] = 22;
console.log(num1);
console.log(nums);

