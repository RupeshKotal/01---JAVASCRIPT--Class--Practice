// function with single parameter 

function greet(name = "Utkrsh"){
  console.log(`Hello ${name}`)
}

// greet("rupesh");
// greet ("ritesh");
// greet();  //undifined
// Normaly we use 4-5 argumnets

//******   Function with multiple parameter  *****

function calSum(num1,num2,num3,num4){
   return num1 + num2 +num3 +num4
};

const result = calSum(4,5,6,7,8,9);
// console.log(result);


// ** passing arrays

const nums = [1,2,3,4,5]

function arrElemt(arr){
    console.log(arr)

    for(let i = 0; i< arr.length; i++){
        console.log(arr[i])
    }
}

// arrElemt(nums);

// ** passing object (Destucturing)

function greeting({city, name}){
  console.log(`Hello ${name}!! Welcome to ${city}`);
}

// greeting({name:"Rupesh", city:"nagpur"})


// ** handling unlimited number of aurgumnet **  (Type1 :- using argumnet object)

function sumWithArgs(){
   // console.log(arguments)   //argumnet is byDefult objet which is present on evry function it is arry like structure

    const arr = Array.from(arguments)
    // console.log(arr)

    let sum = arr.reduce(function(acc,curr){
        return acc + curr
    },0)

    return sum
}

// console.log(sumWithArgs(1,2,3,4))
// console.log(sumWithArgs(5,6,7,8,9,10))



// ** Type 2 :- Using rest Parameter

function rest(...nums){
   const add = nums.reduce(function(acc,curr){
          return acc + curr
    },0)
    return add
}

console.log(rest(1,3,4,5,6,))

