let obj1={ name: "paul",  }
let obj2={...obj1, oage:22,coures:"mearn",palce:"kerala"}

let obj3={...obj1,...obj2}
console.log(obj2);


let arr1=["paul",22,"mearn"]
let arr2=[...arr1,"roll:13","js","kerala"]
let[a,b,c,d,e,f]=arr2
console.log(a,b,c,d,e,f);

console.log(this)


let list1=[1,10,7,4,6]
n=list1.length
for(i=0;i<n;i++){
    for(j=i+1;j<n;j++){
        if(list1[i]>list1[j+1]){
            let temp=list1[j+1]
            list1[j+1]=list1[j]
            list1[j]=temp
        }
    }
}
console.log(list1);
console.log(list1[n-1]);