let a = "five"; 
let b = "Five";

console.log("let a: ", a, typeof a);
console.log("let b: ", b, typeof b);

// if(a > b){
//     console.log("a is greater than b");
// }else{
//     console.log("a is less than b");
// }


if(a >= b){
    console.log("a is greater than or equal b");
}else if(a <= b){
    console.log("a is less than or equal b");
}