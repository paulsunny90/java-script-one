/*let objct1={name:"arun"}
console.log(objct1)


let object2=new Object();
 object1.name="arun"
 console.log(object2)

 //constructer function
 function Student(n,r){
    this.name=n;
    this.rollno=r;

 }
 let s1= new Student("arun",5)
  let s2= new Student("arunnn",5)
 console.log(s1);
 console.log(s2);


 //class
 class student{
    constructer(n,a){
    this.name=n;
    this.rollno=a;
    }
    getdetails(){
        confirm.log(this.name,this,age);
    }

 }





let student={name:"paul",age:20};
console.log(student.name);
console.log(student.age);
student.rollno=4;
console.log(student.rollno);
//delete student.age
console.log(student);
console.log("rollo"in student);
console.log(student .hasOwnProperty("rollno"));

for(let key in student){
    console.log(student[key])

}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));



let student=[{name:"arun",rollno:13 ,age:20},
             {name:"alen",rollno:18 ,age:21},
             {name:"arujun",rollno:23 ,age:30}
];
   student.forEach(a=> console.log(a.name));
*/

   let newmap= new Map();
   newmap.set(1,"number");
   newmap.set("name","ammu");
   console.log(newmap);
   console.log(newmap.get("name"));
   console.log(newmap.size)
   console.log(newmap.has("name"));
   newmap.delete(1);
   console.log(newmap)
   for(let [keys,values] of newmap){
      console.log(values,keys)
   }
   for(let a of newmap.values()){
      console.log(a);
   }
   newmap.clear();
   console.log(newmap);

   let a=[{name:"paul",age:20 ,rollno:12}]
   let b=[...a]
   b[0]=25
   console.log(a)
   console.log(b)
    b.name="alen"
//array destructuring 
    const c=[10,12,14,15]
    const [p,q,r,s]=c
    console.log(p)
    console.log(q)
    console.log(r)
    console.log(s)

  //or
  //const k= [a,b.c.d]=[10,12,14,15];
  //console.log(a)

// object destructuring
  const  student={ name:"arun",age:23,};
  const {name,age} =student;
  console.log("name")
  console.log(age)

   const user = { username: 'alen', email: 'alen@gemail.com' };
   const { username: username, email } = user;
   console.log(username);
 
   



   
