// The only Diffrence in Apply and call is that 
// In Apply we pass argumnets in array
// And In call we passing aurgumnet in from of , sperated values

// const emp1 = {
//     name: "Utkarsh"
// }

// const emp2= {
//     name: "Vinit"
// }

// function greet(city, age){
//     console.log(`Hi ${this.name}, from ${city} and age is ${age}`)
// }

// greet.apply(emp1,["Nagpur", 24])
// greet.call(emp2, "Mumbai", 25)



//  Bind Method : this method create a new function with fixed this

const person = {
    name: "rupesh",
    sayHi: function (city, age){
            console.log(`Hi ${this.name}, from ${city} and age is ${age}`)
        }
}

const person2 = {
    name: "rakesh",
    // sayHi: function (city, age){
    //         console.log(`Hi ${this.name}, from ${city} and age is ${age}`)
    //     }
}

console.log(person.sayHi.bind(person2, 'dehli', 40))
const boundFunction = person.sayHi.bind(person2, 'dehli', 40)
boundFunction()