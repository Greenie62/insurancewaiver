var overNightInput=document.querySelector("#overnight");
var erCareField=document.querySelector("#erCare")
var intensiveField=document.querySelector("#intensive")
var annualField=document.querySelector("#annual")

overNightInput.oninput=(e)=>{
    if(!isNaN(e.target.value)){
            outputVal(+e.target.value)
    }
    else{
        console.log("Error: Input needs to be number!")
        return;
    }
}

function outputVal(num){
    //half n double our arg
    var half=num/2
    var double=num*2
    var hundred=num*100
    var annual=num*365;

    erCareField.value=half;
    intensiveField.value=double;
    anyaccInput.value=hundred

    var doubleAcc=hundred*2
    var tripleAcc=hundred*3

    autoField.value=doubleAcc;
    commonField.value=tripleAcc;
    annualField.value=annual
}


var anyaccInput=document.querySelector("#anyacc")
var autoField=document.querySelector("#autoacc")
var commonField=document.querySelector("#common")


anyaccInput.oninput=(e)=>{
    if(!isNaN(e.target.value)){
            accidentMath(+e.target.value)
    }
    else{
        console.log("Error: Input needs to be number!")
        return;
    }
}


function accidentMath(num){
    //half n double our arg
 
    var double=num*2
    var triple=num*3

    autoField.value=double;
    commonField.value=triple;
}



var addBadges=document.querySelectorAll(".addBadge");


addBadges.forEach((bdg,idx)=>{
    bdg.onclick=()=>addName(idx)
})


function addName(idx){
    var name=prompt("Name?")
  
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(name))
        li.style.listStyle='none'
    
        if(idx === 0){
            document.querySelector(".childrenh3").appendChild(li)
        }
        else{
            document.querySelector(".spouseh3").appendChild(li)
        }
}