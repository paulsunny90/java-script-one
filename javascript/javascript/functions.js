/*let a=one(30,8);
let b=one(10,45);
  console.log(one(a,b))
function one(a,b){
  let c=a+b;
  return c;
}

//arrow fun
let sum=a => a
console.log(sum)

//IIFE
(function one(x,y){
   console.log(x+y)
}
)(10,20)

//higher order
function clas(hi){
  hi()
  hi()

}
function main(){
  console.log("good");
}
 clas(main);
*/
// function two(a,b){
//   let z=a+b;
//   function three(){
//     console.log(z)
//   }
//   three()
// }
// two(20,10)
//arrow fun

// let one=(a,b) => {
//    sum =a+b;
//    console.log(sum)
// }
// one(10, 5)
// //callback
// function Two(){
//   console.log("bay")
   
  
// }
// function three( name, hi){
//   console.log( "hello"+name);
//   hi();
// }
// three( "paul",Two);

// //closuere
// function out(a,b){
//   function In(){
//    let sum= a+b;
//     console.log(sum)
    
//   }
//   return In;
// }
// let Second=out(5,5)
// Second()

// function Main(n){
//   if(n<=1){
//     return 1;
//   }
//   return (Main(n-1)*n)
// }
// console.log(Main())




function Sumdigits(num){
  let sum=0;
  let str=num.toString();
  for(let i=0;i< str.length;i++){
    sum+=Number(str[i]);
  }
  return sum

}
console.log(Sumdigits(1234));


function Prime(num) {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }
  return true;
}
console.log(Prime(17)); 








