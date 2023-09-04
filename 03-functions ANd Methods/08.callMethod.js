// function printName(name){
//     console.log(`hi ${name}`)
// }

// printName("Rupesh")
// printName.city = "nagpur"
// console.log(printName.city)

//methods of function object version
// tHIS ARE USED TO CONTROLL THE CONTEXT OF this


// **********   call  ****

const user1 = {
    name: "rupesh",
    // greeting: function(){
    //     console.log(`Hello, ${this.name}`);
    // }
}

function greeting(city,age){
        console.log(`Hello, ${this.name} from ${city} and age is ${age}`);
    }

const user2 = {
    name: "ritesh",
    // greeting: function(){
    //     console.log(`Hello, ${this.name}`);
    // }
}

const user3 = {
    name: "rakesh",
    // greeting: function(){
    //     console.log(`Hello, ${this.name}`);
    // }
}

// user1.greeting.call(user2)
// user1.greeting()

greeting.call(user1, 'Delhi', 30)
greeting.call(user2, 'Nagpur', 45)
