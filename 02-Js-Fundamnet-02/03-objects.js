let emp = {
    id : 107,
    name: "rupesh",
    age: 24
}

// console.log(Object.keys(emp))
// console.log(Object.values(emp));


let entries = Object.entries(emp);
// console.log(entries);

// Object.freeze(emp)
Object.seal(emp)
emp.id = 500;
emp.class = "JS"
delete emp.id
// console.log(emp)


emp.id = 400;
// console.log(emp)


let assgin = Object.assign({class: "JAVA"},emp);
console.log(assgin)