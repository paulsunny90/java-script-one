//regular exp

//litral notiation
// const regexp1=/cat/
// console.log(regexp1)

//regexp constractor
// let regexp2=("patterns");
// console.log(regexp2);


// //flag
// const regexp1=/cats/i
// let str="i love Cats"
// console.log(regexp1.test(str));
// //%
// const regexp3=/dogs$/
// let strt="i love dogs"
// console.log(regexp3.test(strt));
// //^
// const regexp5=/^dogs/
// let st=" dogs i love "
// console.log(regexp5.test(st));
// //.
// const regexp6=/d.g/
// let strtt="i love d2g"
// console.log(regexp6.test(strtt));
// //*
// const regexp7=/dogs*/
// let strttt="i love dogs"
// console.log(regexp7.test(strttt));
// //+
// const regexp8=/dogs+/
// let strtttt="i love dogss"
// console.log(regexp8.test(strtttt));
// //?
// const regexp9=/dogs?/
// let stre="i love dogss"
// console.log(regexp9.test(stre));

//[]
// console.log(/[cb]at/.test("cat"))
// console.log(/[^cb]at/.test("2at"))
// //--range
// console.log(/[a-p]at/.test("cat"))
// //{count}
//{count,}
// console.log(/^[1-9]{10,}$/.test("777777777"))
 // \\-back
//  email="emaill@gmail.com"
//  console.log(/\@/.test(email));

//  console.log(/\d{10}/.test("12345678980"))
 



// // \d [0-9]
//  console.log(/\d/.test("1234567890"))//true
//   console.log(/\d/.test("adafag"))//fales
//  // \D[*&*]
//  console.log(/\D/.test("1234567*&8"))//true
//  console.log(/\D/.test("12345678"))//fales
//  //w[134, a-z,A-Z]
//  console.log(/\w/.test("1234abced"));//true
//  console.log(/\w/.test("$!#"));//fales
//  //W[123$5%]
//  console.log(/\W/.test("123%&5"));//true
//  console.log(/\W/.test("qwert"));//fales
//  //\s[12__34]
//  console.log(/\s/.test("1 23 4"));//true
//  console.log(/\s/.test("1234"));//fales
// //\S[1234]
// console.log(/\S/.test("helow"));//true
// console.log(/\S/.test("he  low"))//fales



// //groping()
// //match
// let grop=("i am paul ".match(/\w/));
// console.log(grop);

// let grop1=("i am paul ".match(/\w+/g));
// console.log(grop1);

// let grop3=("i am paul ".match(/(\w+) (\w+)/));
// console.log(grop3);

// //naming (?<name>)
// let grop4=("i am paul ".match(/(?<one>\w+) (\w+)/));
// console.log(grop4.groups);
// //groups
// let grop5=("i am paul ".match(/(?<one>\w+) (\w+)/));
// console.log(grop5.groups);
// //index
// let grop6=("i am paul ".match(/(?<one>\w+) (\w+)/));
// console.log(grop6.index);
// //input
// let grop7=("i am paul ".match(/(?<one>\w+) (\w+)/));
// console.log(grop7.input);
// //not capcher (?:\w+)
// let grop8=("i am paul ".match(/(?:\w+) (\w+)/));
// console.log(grop8);

// console.log(/^\w{10}$/.test("pppppppppp"));
// //paul@geamail.com
// console.log(/^\w+@/.test("paul@gmail.com"))

// function Password(password) {
//   const testone = /.{8,}/;
//   const testtwo = /[A-Z]/;
//   const testthree = /[a-z]/;
//   const testfor= /\d/;
//   const testfive = /[^A-Za-z0-9]/;

//   return (
//      testone .test(password) &&
//      testtwo.test(password) &
//      testthree.test(password) &&
//      testfor.test(password) &&
//      testfive.test(password)
//   );
// }
// const password = "Paul@123";
// if (Password(password)) {
//   console.log("Password is strong");
// } else {
//   console.log("Password not strong");
// }
//password
// console.log(/.{8,} &[A-Z] [a-z]\d[^A-Za-z0-9]/.test("Paul@123"))

// //Replace
// console.log("2005-03-24".replace(/^(?<year>\d{4})\-(?<month>\d{2})\-(?<day>\d{2})/g,"$<day>/$<month>/$<year>"))//colling name
// console.log("2005-03-24".replace(/^(\d{4})\-(\d{2})\-(\d{2})/g,"$3/$2/$1"))//colling number
// console.log("22:12:2026".replace(/:/g,"-"))
// console.log("22:12:2026".replace(/:/,"-"))
// //search
// console.log("hello , world".search(/, /))


// console.log(/^(0[1-9]|[12][0-9]|3[01])\-([0-2][1-9])\-(\d{4})$/.test("31-07-2005"));


console.log(/.{10,} & [^A-Z] \d \w [A-Z]$/.test("ABCDE1234F"));
//passwored
console.log(/.{8,} &[A-Z] [a-z]\d[^A-Za-z0-9]/.test("Paul@123"))