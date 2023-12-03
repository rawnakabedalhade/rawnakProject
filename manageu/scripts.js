import Task from "./classes/Task.js";
import TaskManager from "./classes/TaskManager.js";


window.AddTOList=function(){
    let description=document.getElementById('task').value;
    if(description=='') alert("Write New Task..");
    else{
    manager.addTask(description);
    showTasksInList();
    }
     document.getElementById('task').innerHTML='';

}
 function showTasksInList(){
     document.getElementById('active').innerHTML="";
      document.getElementById('Completed').innerHTML="";
    for(let task of manager.tasks){
        if(task.completed==false){
    document.getElementById('active').innerHTML+=`
 <div class="d-flex flex-direction-row">
    <li class="list-group-item w-75 col-9">${task.description}
    </li>
    <span class="d-flex flex-direction-row"><button class="btn btn-success"><i class="fa-solid fa-check" style="color: #ffffff;"onclick="Completed(${task.id})"></i></button>
    <button class="btn btn-primary"><i class="fa-solid fa-pen" style="color: #ffffff;" onclick="Edit(${task.id})"></i></button> 
    <button class="btn btn-danger"><i class="fa-solid fa-trash" style="color: #ffffff;"onclick="deleteTask(${task.id})"></i></button>
    </span>
    </div>

    `
        }
        else{
            document.getElementById('Completed').innerHTML+=`
    <div class="d-flex flex-direction-row">
    <li class="list-group-item w-75 col-9 text-decoration-line-through">${task.description}
    </li>
    <span class="d-flex flex-direction-row"><button class="btn btn-success"><i class="fa-solid fa-check" style="color: #ffffff;"onclick="Completed(${task.id})"></i></button>
    <button class="btn btn-primary"><i class="fa-solid fa-pen" style="color: #ffffff;" onclick="Edit(${task.id})"></i></button> 
    <button class="btn btn-danger"><i class="fa-solid fa-trash" style="color: #ffffff;"onclick="deleteTask(${task.id})"></i></button>
    </span>
    </div>

    `
    }
    localStorage.setItem("tasks",JSON.stringify(manager.tasks));
}
}

window.Completed=(taskId)=>{
    manager.completeTasks(taskId);
    showTasksInList();

}
window.Edit=(taskId)=>{
    let newdescription=prompt("Enter New Task");
    manager.updateTaskDescription(taskId,newdescription);
    console.log(manager.tasks.description);
    showTasksInList();

}
window.deleteTask=(taskId)=>{
if(confirm("Are you sure?")){
        manager.deleteTask(taskId);
}
showTasksInList();
}
let manager=new TaskManager();
showTasksInList();

//why in refresh the list delete while it in localStorage