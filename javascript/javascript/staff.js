let form=document.getElementById("formss")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let arre=JSON.parse(localStorage.getItem("name"))||[];

    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let department=document.getElementById("department").value
    let salary=document.getElementById("salary").value

   let value={name:name,age:age,department:department,salary:salary};
   arre.push(value)
   localStorage.setItem("name",JSON.stringify(arre))
  
   Buttions()
});

 function Buttions(){
    let arre=JSON.parse(localStorage.getItem("name"))||[];
    let data=document.getElementById("list")
    HTML=""
    arre.forEach((element,b)=> {
    let table=`<tr>
                  <th>${element.name}</th>
                  <th>${element.age}</th>
                  <th>${element.department}</th>
                  <th>${element.salary}</th>
                  <td><button onclick="edit(${b})">edit</button><button onclick="deletee(${b})">delete</button></td>
              </tr>`
             HTML +=table;
    });
    data.innerHTML= HTML;
}
  function deletee(b){
    let arre=JSON.parse(localStorage.getItem("name"))||[]
    arre.splice(b,1)
    localStorage.setItem("name",JSON.stringify(arre)); 
      Buttions()
  };
    
 function edit(b){
    let arre =JSON.parse(localStorage.getItem("name"))||[]
    let index=arre[b];

    let editname= prompt("Edite  name",index.name);
    let editage= prompt("Edite  age",index.age);
    let editdepartment= prompt("Edite  department",index.department);
    let editsalary= prompt("Edite  salary",index.salary);
    
    let value={name:editname,age:editage,department:editdepartment,salary:editsalary};
    arre[b]=value;
    localStorage.setItem("name",JSON.stringify(arre));
    Buttions()
     
};