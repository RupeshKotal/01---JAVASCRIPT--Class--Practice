const emp = {
    name: "Rupesh",
    age: 24,
    salary: 26000
}

// Method chaning 
const keys = Object.keys(emp).forEach((allKeys) => console.log(allKeys))
// console.log(keys);

console.log(Object.values(emp))