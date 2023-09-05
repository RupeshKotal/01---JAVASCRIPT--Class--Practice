
function createPromise(){
     return new Promise(function exce(resolve, reject){
        setTimeout(function f(){
            console.log("timer done");
            resolve ("accepted")
            // reject("rejected")
        },3000);
     });
}

console.log("start");

let x = createPromise();
console.log("got a new promise")

x.then(function f(value){
    console.log("promise done",value)
})
.catch(function (value){
    console.log("handel", value);
})

console.log("end");


for(let i =0;i<10000;i++){

}