// HIger order function is a function in which we pass a func. as an argumnet 

// function h(x,fn){
// // h = higer order FUnction 
// // fn = call BAck 

//     console.log(x*x);
//     fn();
// }

// h(10, function fn(){
//     console.log("Function Excecuted");
// })

setTimeout(function (){
    console.log("function Excuted on 1s Interval");
},1000)

console.log("normal console log")

const x = 5

for (let i=0; i<10; i++){
    console.log('Basic for loop ${i}');
}

setTimeout(function (){
    console.log("function Excuted on 0s Interval");
},0)

console.log(`Value of x is ${x}`);


