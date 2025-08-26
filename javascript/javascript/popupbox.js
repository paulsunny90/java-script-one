//alertbox
//alert("welcom")
//console.log(alert)

/*let adult=true
if(adult){
    alert("welcom")
    
}
else{
    alert("your not aligibale")
}

//confirm box
let main=confirm("is are you")
console.log(main)
if(main){
    alert("successfully confirmed")
    
}
else{
    alert("failed to confirmed")
}
    */
//prompt box
// let username="admin"
// let password="admin@123";
// let user=prompt("enter your user name")
// let pass=prompt("enter your user password")
// console.log(typeof user)

// if(user==username&&pass==password){
//     alert("welcome admin")
// }
// else{
//     alert("wrong entere")
// }

// let adult=true
// if(adult){
//   alert("welcom")
    
// }
// else{
//     alert("your not aligibale")
// }
let n = Number(prompt("Enter a number"))
 let count=0;
 for(let i=1;i<=n;i++){
  if(n%i==0){
    count++
  }
 }
 if(count==0){
  console.log(`${n}is prime`);
 }
 else{
  alert("not prime")
 }




 
