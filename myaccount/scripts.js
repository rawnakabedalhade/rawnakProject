import Action from "./classes/Action.js";
import ActionsManager from "./classes/ActionsManager.js";

// incase several exports
// import { Action } from "./classes/Action.js";
window.addActionToManager=function(){
    //get data from form
    let type=document.querySelector('select').value;
    let des=document.getElementById('description').value;
    let amount= +document.getElementById('amount').value;
    //create the action object
    let act=new Action(type,des,amount);
    //add the action to actionManager
    manager.addAction(act);
    //update localStorage
    localStorage.setItem("actions",JSON.stringify(manager.actions));
    showActionsInTable();
    //reset the form
    document.getElementById('description').value="";
    document.getElementById('amount').value="";

}
window.deleteActionFromManager=function(actionId){
    if(confirm("Are you sure?")){
        manager.deleteAction(actionId);
        //update localStorage
    localStorage.setItem("actions",JSON.stringify(manager.actions));
        showActionsInTable();
    }
}
window.newUpdate=function(id){
   let newValue=prompt("Enter new amount :");
   if(newValue!=null&&newValue!=""){
   manager.updateAction(id,+newValue);
      //update localStorage
    localStorage.setItem("actions",JSON.stringify(manager.actions));
   showActionsInTable();
   }
   else{
    alert("Something went wrong..");
   }

}

function showActionsInTable(){
    document.getElementById('actions').innerHTML="";
    for(let action of manager.actions){
        document.getElementById('actions').innerHTML+=` <tr class =${action.type == "income" ? "text-success" : "text-danger"}>
    <td>${action.description}</td>
    <td>${action.amount}</td>
    <td>
    <a style="cursor: pointer" onclick="newUpdate(${action.id})"><i class="fa-regular fa-pen-to-square "></i></a></td>
    <td><a style="cursor: pointer" onclick="deleteActionFromManager(${action.addActionToManager})"><i class="fa-regular fa-trash-can"></i></a></td>
    </tr>`
    }

}

let manager=new ActionsManager();
manager.calcBalance();
showActionsInTable();