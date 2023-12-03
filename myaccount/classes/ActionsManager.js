export default class ActionsManager{
    constructor(){
        this.actions=localStorage.getItem("actions")?JSON.parse(localStorage.getItem("actions")):[];
        this.balance=0;
    }
      get (propName){
        return this[propName];
    }
    set (propName,value){
        this[propName]=value;
    }
    addAction(action){
        this.actions.push(action);
        this.calcBalance();
    }
    deleteAction(id){
        //find the relevant index
        let indexToDelete= this.actions.findIndex ((action)=> action.id==id);
        //Delete it
        this.actions.splice(indexToDelete,1);
        this.calcBalance();
    }
    updateAction(id,newAmount){
        let indexToUpdate=this.actions.findIndex((action)=>action.id==id);
        this.actions[indexToUpdate].amount =this.actions[indexToUpdate].type == "expense"? -newAmount : newAmount;
        this.calcBalance();
    }
    calcBalance(){
        this.balance=0;
        for(let action of this.actions){
            this.balance+=action.amount;
        }
        document.getElementById("balance").innerText= `Balance: ${this.balance}`;
    }
}