//** type 01 :- Arrow Function (bacic arow funct)  Explicit Fuction */

// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(7,6))


// ==== ** type 2:- without return  (Implicit Funct.)

// const add = (a,b) => (a + b)
// console.log(add(14,6))

// limition (Argumnet object not in arrow func)
const add1 = function(){
    console.log(arguments)
}

const add = () => (argumnets)

// console.log(add1(14,6))
// console.log(add(14,6))


// ***  Binding off this ***

const Person = {
    name: "Rupesh",
    greet: function(){
        console.log(`Hello my name is ${this.name}`)
    },

    greetTwo: () =>{
        console.log(`Hello my name is ${this.name}`)  
    }
}

// person.greet();
// person.greetTwo();

//** */ Use of new keyword

// Have to watch this Video 


