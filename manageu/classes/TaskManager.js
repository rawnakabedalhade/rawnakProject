import Task from "./Task.js";

export default class TaskManager{
    constructor(){
           this.tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    }
    addTask(description){
        let task=new Task(description);
        this.tasks.push(task);
    }
    deleteTask(id){
        let indexToDelete=this.tasks.findIndex((task)=>task.id==id);
        this.tasks.splice(indexToDelete,1);
    }
    updateTaskDescription(id,newdescription){
        let index=this.tasks.findIndex((task)=>task.id==id)
        if(newdescription==null||newdescription=='') alert("Enter new TAsk");
        this.tasks[index].description=newdescription;
    }
    completeTasks(id){
        let index=this.tasks.findIndex((task)=>task.id==id);
        this.tasks[index].completed=true;
    }
}