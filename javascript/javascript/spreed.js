let obj1={ name: "paul",  }
let obj2={...obj1, oage:22,coures:"mearn",palce:"kerala"}

let obj3={...obj1,...obj2}
console.log(obj2);


let arr1=["paul",22,"mearn"]
let arr2=[...arr1,"roll:13","js","kerala"]
let[a,b,c,d,e,f]=arr2
console.log(a,b,c,d,e,f);

console.log(this)