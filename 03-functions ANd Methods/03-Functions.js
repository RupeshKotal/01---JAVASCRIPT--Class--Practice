
// let a = 10;
// let b =20;
// console.log(a+b);   // not reusable code


// ============Type 1 ==================

// let a = 10;  // global Variable
// let b =20;

// function add (a,b){
//     console.log(a + b)
// }

// add() // function callling 


// ================= Type2 :- Fuction Declaration====================

// function add (a,b){    //a,b = parameters   
//     console.log(a + b)
// }

// add(40,50)  //40,50 = aurgumnet


// ====================== Type 3 :- ruturning function=============

// function e(z){
//     console.log("rupesh");
//     z()
// }

// function f(){
//     console.log("Ritesh")
// }

// e(f)


// ==================== Type 4==============

// function add(a,b){
//     return a + b ;
// }

// const sum = add(20,30);
// console.log(sum)


// Fuction with Single parametr

function greet(name){
  console.log(` Hello ${name}`)
}

//greet("rupesh")
//greet();

//Fuction with Default parameter

function greet(name = 'Rakesh'){
    console.log(` Hello ${name}`)
  }
  
  //greet("rupesh")
  //greet();

  // Function with multiple parmeter

  function calculateSum(num1, num2 ,num3 ,num4){
    return num1 + num2 +num3 +num4
  }

  //console.log(calculateSum (10,20,30,40))

  const nums= [1,2,3,4,5,6];

  function arryFunction(arr){
//   console.log(arr)

  for (let i= 0; i < arr.length; i++){
    console.log(arr[i])
  }
  }

  //arryFunction(nums)

  // Destructuring

  function greeting(city ,name){
    console.log(`Hello ${name} welcome to the ${city}`)
  }
  greeting("Nagpur", "Rupesh")

