/*task is an object*/
/*below is the list of objects*/
/* task= array[ in that array{object1},{object2}]*/

const tasks=[
    {
    id:101,
    title:"Stydy basic of Programming",
    description:"Watch shorts or reels on programing",
    status:"PENDING"
},
{
    id:102,
    title:"Stydy Advance CSS",
    description:"For interview prepration",
    status:"COMPLETED"
}]

/* Get All the elements ID*/
tasktitleinputElemt=document.getElementById("tasktitleinput")
taskdisciptioninputElemt=document.getElementById("taskdisciptioninput")
tableElemt=document.getElementById("table")
rendertaskElemt=document.getElementById("rendertask")
 
/* Add new task function*/
/* on click of button the added title and discreption is shown in table*/
function addnewtask(){
    /*forst will get values written at that input element*/
    TitleInput=tasktitleinputElemt.value
   
    DiscreptionInput=taskdisciptioninputElemt.value

    /*will create new object and put that added task values in this object*/
    const Newtask={
        id:Date.now(),
        title:TitleInput,
        description:DiscreptionInput,
        status:"PENDING"
    }

    /*Add this new task obje in our array*/
    tasks.push(Newtask)
    /*after assding we have to show it. so will call render(show) task function*/
    rendertasks()
}

/* we have created above tasks to render them. we can keep them empty also*/
/* lets create one function to render tasks*/


function rendertasks(){
       rendertaskElemt.innerHTML=tasks.map((tsk,i) =>
    ` <tr>
        <td> ${i+1}</td>
        <td>${tsk.title}</td>
        <td>${tsk.description}</td>
        <td class="${tsk.status == 'PENDING' ? 'text-danger' : 'text-success'}">
                ${tsk.status}
            </td>
        <td>
        <button class="btn btn-secondary" onclick="Edit(${tsk.id})"> Edit </button>
        <button  class="btn btn-secondary" onclick="Delete(${tsk.id})"> Delete </button>
        </tr>
    `
).join("")
}

/* now On Button click of Edit status shoud change from peding to completed it completed then to pending*/
/*We are adding this button on innerHTML.*/
/*We have to chnage the objects properties value. = task.ststus's value we have to change*/

function Edit(ID){
/* when Edit button is pressed we are sending that objects id as a parameter to this function*/
/* on which object this button is clicked we find its index by using parameter ID*/
index= tasks.findIndex((tskobj)=> tskobj.id == ID)
/* above code menas that find the id of object in all array who get match with parameter ID*/

if(index == -1)
{
    alert("task not found")
}
else
{
    
    if(tasks[index].status =="PENDING")
    {
        tasks[index].status="COMPLETED"
    }
    else
    {
        tasks[index].status="PENDING"

    }
}

/* to see the changer again we have to do Render task*/
rendertasks()
}

function Delete(ID){
    /* when Delete button is pressed we are sending that objects id as a parameter to this function*/
    /* on which object this button is clicked we find its index by using parameter ID*/
    index= tasks.findIndex((tskobj)=> tskobj.id == ID)
    /* above code menas that find the id of object in all array who get match with parameter ID*/
    /*if not found given alert. if found deleted by using Splice method*/
    if(index== -1)
        {
            alert("Task not Found")
        }
    else
    {
        tasks.splice(index,1)/*splice(found index, no of element you want to delete)
    }
    /* to see the changer again we have to do Render task*/
    rendertasks()
    alert("Task Deleted Succesfully")
}