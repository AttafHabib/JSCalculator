document.getElementById("result_field").disabled=true;

function initCalc(){
    let value1 = document.querySelector("div");
    value1.addEventListener("click",function(event){
        verifybutton(event);
    });
}
function verifybutton(event){
    //Valid Click 
    let element = event.target;
    if(element.nodeName && element.nodeName==="BUTTON"){
        getValues(element);
    }   
    
}
let currOperator = null;
function getValues(operator){
    let new_value = operator.innerText; 
    let old_val = document.getElementById("result_field").value;    
    if(operator===document.querySelector("#clear")){
        clearField();
    }
    else if(operator === document.querySelector("#backspace")){
        let temp = parseInt(old_val/10);
        updateField(temp);

        currOperator = null;
    }
    //Check if number
    if(!isNaN(new_value)){
        if(currOperator){        
            //updates and store result    
            new_value = doOperation(new_value,currOperator);
        }
        else{
            console.log("new"+new_value);

            let temp = (old_val*10)+parseInt(new_value);   
            updateField(temp);
        }
    }
    else{
        //Only operation if valid value exists
        if(parseInt(old_val)>=0){
            currOperator = operator;
        }
    }
}
function doOperation(new_value,operator){
    let old_val = parseInt(document.getElementById("result_field").value);
    let temp = old_val;
    if(operator===document.getElementById("divide")){
        temp = old_val/new_value;        
    }
    else if(operator===document.getElementById("multiply")){
        temp = old_val*new_value;
    }
    else if(operator===document.getElementById("subtract")){
        temp = old_val-new_value;
    }
    else if(operator===document.getElementById("add")){
        temp = parseInt(new_value)+old_val;
    }
    else if(operator===document.getElementById("result")){
        console.log("Clicked Result")
    }
    updateField(temp);
    currOperator=null;
    return 0;
}

function updateField(new_value){
    let resultField = document.getElementById("result_field");    
    resultField.value = parseInt(new_value);
}
function clearField(){
    document.getElementById("result_field").value=0;
    currOperator = null;
}
initCalc();