let numValue=document.querySelectorAll(".numbers");
let symbol=document.querySelectorAll(".symbol");
let display=document.querySelector("#display");
let num1,num2,operator=null;

numValue.forEach((num)=>{
    num.addEventListener("click",()=>{
        display.value+=num.value;
        if(operator==null){
            num1=parseFloat(display.value);
            console.log(num1);
        }
        else{
            num2=parseFloat(display.value);
            console.log(num2);
        }
    });

});
symbol.forEach((ope)=>{
    ope.addEventListener("click",()=>{
        if(ope.value=="AC"){
            display.value="";
            num1=null;
            num2=null;
            operator=null;
        }
        else if(ope.value=="+/-"){
            if(display.value!=''){
                display.value*=-1;
            }
            num1*=-1;
        }
        else if(ope.value=="="){
            console.log(num1);
            console.log(num2);
            if(num1!=null&&num2!=null){
                let res=result(num1,num2,operator);
                console.log(res);
                display.value=res;
                num1=res;
                num2=null;
                operator=null;
                
            }
        }
        else{
            display.value="";
            console.log(ope.value);
            operator=ope.value;
        }

    });
});

function result(num1,num2,operator){
    switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "X":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      console.log("error");
  }

    
}