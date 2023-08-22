const obj = {
    name: "rupesh",
    role: "support",
    age: 24
}

// console.log(obj)


// ***     new instance Object constuctor
const obj2 = new Object();

obj2.name = "Ritesh";
obj2.role = "Civil";
obj2.age = 25;
delete obj2.name
// console.log(obj2);


// **** BY function **************

function Emplyo(name,id,salary){
    this.name = name;
    this.id = id;
    this.salary = salary
}

const emp1 = new Emplyo("rupesh", 2239257, 50000)
const emp2 = new Emplyo("Shubham", 23346567, 60000)

// console.log(emp1)
// console.log(emp2);


/// Acccesssing this Object


let emp = {id:56, name: "Roshan", salary: 3000}

//Dot notation OR Sqrure notation

// console.log(emp.name)
// console.log(emp["salary"])

emp.city = "nagpur";
emp['Country'] = "india"

// console.log(emp);


for (let keys in emp){
    // console.log(keys)
    console.log(keys, emp[keys])
}