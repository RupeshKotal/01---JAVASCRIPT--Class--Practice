function add(a,b){
    console.log(a + b)
}
// add(4,5)

const sub = function (a,b){
    return a-b
}

// const output = sub(10,5)
// console.log(output)


const arrow = (a,b) => {
  return  a + b
}

const result = arrow(4,5)
console.log(result)


const arrow2 = (a,b) => ( a + b);
const result2 = arrow2(10,12)
console.log(result2);


(function (x,y){
    console.log(x-y)
})(11,12)



