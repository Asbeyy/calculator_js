//This code belongs to Federico Lacchini


const buttonOne = document.getElementById("buttonOne") 
const buttonTwo = document.getElementById("buttonTwo") 
const buttonThree = document.getElementById("buttonThree") 
const buttonFour = document.getElementById("buttonFour") 
const buttonFive = document.getElementById("buttonFive") 
const buttonSix = document.getElementById("buttonSix") 
const buttonSeven = document.getElementById("buttonSeven") 
const buttonEight = document.getElementById("buttonEight") 
const buttonNine = document.getElementById("buttonNine") 
const buttonZero = document.getElementById("buttonZero") 
const buttonDel = document.getElementById("buttonDel")
const buttonCalc = document.getElementById("buttonCalc")
const buttonMul = document.getElementById("multi")
const buttonDiv = document.getElementById("divi")
const buttonAdd = document.getElementById("plus")
const buttonSub = document.getElementById("minus")
const debugButton = document.getElementById("debugButton")
const debugButtonTwo = document.getElementById("debugButtonTwo")
const buttonDeleteSmall = document.getElementById("buttonDelAll")
let resultText = document.getElementById("result-number")
let resultTextGlobal = document.getElementById("result-number-old")



//Global operation
let input = []

//Current operation
let numBuilder = []

//Current operator chosen
let operatorType = ""

//Screen
let screenValueBottom = 0
let screenValueGlobal = 0



//SCREEN UPDATE 

function updateScreen(){
    screenValueGlobal = Number(input.join(""))
    resultTextGlobal.innerHTML = screenValueGlobal

    screenValueBottom = Number(numBuilder.join(""))
    resultText.innerHTML = screenValueBottom
    }


    //EVENT HANDLERS
    buttonOne.onclick = function(){
        numBuilder.push(1)
        updateScreen()
    }
    
    buttonTwo.onclick = function(){
        numBuilder.push(2)
        updateScreen()
    }
    buttonThree.onclick = function(){
        numBuilder.push(3)
        updateScreen()
    }
    buttonFour.onclick = function(){
        numBuilder.push(4)
        updateScreen()
    }
    buttonFive.onclick = function(){
        numBuilder.push(5)
       updateScreen()
    }
    buttonSix.onclick = function(){
        numBuilder.push(6)
        updateScreen()
    }
    buttonSeven.onclick = function(){
        numBuilder.push(7)
        updateScreen()
    }
    buttonEight.onclick = function(){
        numBuilder.push(8)
        updateScreen()
    }
    buttonNine.onclick = function(){
        numBuilder.push(9)
        updateScreen()
    }
    buttonZero.onclick = function(){
        numBuilder.push(0)
        updateScreen()
    }
    buttonDel.onclick = function(){
        input = []
        numBuilder = []
        momentMemory = 0
        updateScreen()
    }
    buttonMul.onclick = function(){
        operatorType = "mul"
        if (input.length >= 1) return
        input.push(screenValueBottom)
        numBuilder = []
        updateScreen()
    }
    buttonDiv.onclick = function(){
        operatorType = "div"
        if (input.length >= 1) return
        input.push(screenValueBottom)
        numBuilder = []
        updateScreen()
    }
    buttonAdd.onclick = function(){
        operatorType = "add"
        if (input.length >= 1) return
        input.push(screenValueBottom)
        numBuilder = []
        updateScreen()
    }
    buttonSub.onclick = function(){
        operatorType = "sub"
        if (input.length >= 1) return
        input.push(screenValueBottom)
        numBuilder = []
        updateScreen()
    }
    buttonDeleteSmall.onclick = function(){
        numBuilder.pop()
        updateScreen()
    }


    //MATH FORMULAS
    let momentMemory = 0 

    buttonCalc.onclick = function(){
        if (operatorType === "mul"){
          momentMemory = screenValueGlobal * screenValueBottom
        } else if (operatorType === "div"){
            momentMemory = screenValueGlobal / screenValueBottom
        } else if (operatorType === "add"){
            momentMemory = screenValueGlobal + screenValueBottom
        } else if (operatorType === "sub"){
            momentMemory = screenValueGlobal - screenValueBottom
        }
        resultTextGlobal.innerHTML = momentMemory
        resultText.innerHTML = ""
        input = [momentMemory]
        numBuilder = []
    }
    


    //DEBUG
    debugButton.onclick = function(){
        if (screenValueBottom === 2511){
            //console.log("EASTER EGG")
            alert("You discovered Sara's Easter Egg. We tracked down your IP, and we are sending somebody at your place to talk directly with you. Don't run, we get there faster")
        } else if ( screenValueBottom === 1806){
            alert("Nuclear Attack, Activated. Blame North Korea")
        }
        debugVisual()



    }


    function debugVisual(){
        console.log("First Value: "+screenValueGlobal)
        console.log("Second Value: "+screenValueBottom)
        console.log("Current Operator Selected: " + operatorType)
        console.log("Current Expression Result: "+ momentMemory)
    }

    