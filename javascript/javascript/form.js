// function buttion(){
//     let arre=JSON.parse(localStorage.getItem("name"))||[];
//     let value=document.getElementById("enter-name").value;
//     arre.push(value);
//     localStorage.setItem("name",JSON.stringify(arre))

// }
// function show(){
//      let arre =JSON.parse(localStorage.getItem("name"))
//         let shwo=document.getElementById("list")
//         HTML="";
     
//      arre.forEach((a,index)=> {
       
//         HTML +=`<li> ${a}</li><button onclick="edite(${index})">edite</button>
//         <button onclick="Deletes(${index})">delete</button>`
        
//       }
   
//     );
//       shwo.innerHTML=HTML;
// }
// function edite(index){
//      let arre =JSON.parse(localStorage.getItem("name"))
//     let editname= prompt("Edite  name",(arre[index]))
//     arre[b]=editname;
//     localStorage.setItem("name",JSON.stringify(arre));
//      show();


// }
//  function Deletes(index){
//      let arre=JSON.parse(localStorage.getItem("name"));
//      arre.splice(index,1);
//      localStorage.setItem("name",JSON.stringify(arre));
//     show();
// }

// //number
// function num(){
//     let values=document.getElementById("enter-number").value;
//     for(i=1;i<=values;i++)
//     {
//         let butt=document.getElementById("num-buttion");
//         butt.innerHTML+=`<button onclick="alert('the number is ${i}')">value${i}</button>`

//     }
    
    
// }


  // let form=document.getElementById("formm")
  // function student(event){
  //   event.preventDefault()
  //   let arre=JSON.parse(localStorage.getItem("name"))||[];

  //   let name =document.getElementById("name").value;
  //   let age=document.getElementById("age").value;
  //   let course=document.getElementById("course").value;
  //   let mark=document.getElementById("mark").value;

  //    let studentobj={name:name,age:age,course:course,mark:mark};
  //    arre.push(studentobj);
  //    localStorage.setItem("name",JSON.stringify(arre));
     
  
  // };
  // function Showdata(){
  //   let arre=JSON.parse(localStorage.getItem("name"))||[];
  //   let data=document.getElementById("studentdata")
  //     HTML=""
  //   arre.forEach((student,a) => {
  //     let table= `
  //                 <tr>
  //                   <td>${student.name}</td>
  //                   <td>${student.age}</td>
  //                   <td>${student.course}</td>
  //                   <td>${student.mark}</td>
  //                   <td><button onclick="edit(${a})">edit</button><button onclick="deletedata(${a})" >delete</button></td>
                    
  //                  </tr>`
      
  //     HTML +=table;
      
  //   });
  //   data.innerHTML=HTML;
    
  // }
  // function edit(a){
  //    let arre=JSON.parse(localStorage.getItem("naxme"))||[];
  //   document.getElementById("name").value;(arre[a]).name
  //   document.getElementById("age").value;(arre[a]).age
  //   document.getElementById("course").value;(arre[a]).course
  //    document.getElementById("mark").value;(arre[a]).mark
    
  //   document.getElementById("addstudent").style=("display: none");
  //   document.getElementById("save").style=("display: block");
  //   Showdata();

  
  // }
  // function savedata(){
  //   let arre=JSON.parse(localStorage.getItem("name"))||[];
    
  //   let name =document.getElementById("name").value;
  //   let age=document.getElementById("age").value;
  //   let course=document.getElementById("course").value;
  //   let mark=document.getElementById("mark").value;

 
  // }
  // function deletedata(a){
  //    let arre=JSON.parse(localStorage.getItem("name"))||[];
  //    arre.splice(a,1);
  //    localStorage.setItem("name",JSON.stringify(arre));
  //   Showdata()
  // }
   
  let i=1
  let asd=  setInterval(()=>{
    console.log("hi"+i)
    i++
  },1000)
  setInterval(()=>{
   clearInterval(asd)
  },5000)

 

  


  
  