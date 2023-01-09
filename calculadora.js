const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector('[data-previous-Operand]');
const currentOperandTextElement = document.querySelector('[data-current-Operand]');

class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    formatDisplayNumber(number) {
        const stringNumber = number.toString();
    
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
    
        let integerDisplay;
    
        if (isNaN(integerDigits)) {
          integerDisplay = "";
        } else {
          integerDisplay = integerDigits.toLocaleString("en", {
            maximumFractionDigits: 0,
          });
        }
    
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`;
        } else {
          return integerDisplay;
        }
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    calculate(){
        let result;

        const _previousOperand = parseFloat(this.previousOperand)
        const _currentOperand = parseFloat(this.currentOperand)

        if(isNaN(_previousOperand) || isNaN(_currentOperand)) return;

        switch(this.operation){
            case"+":
                result = _previousOperand + _currentOperand;
                break;
            case"-":
                result = _previousOperand - _currentOperand;
                break;
            case"/":
                result = _previousOperand / _currentOperand;
                break;    
            case"*":
                result = _previousOperand * _currentOperand;
                break;
                default:
                    return;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = "";

    }
    chooseOperation(operation){
        if(this.correntOperand == "")return;
        if(this.previousOperand != ''){
            this.calculate()
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";


    }

    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    appendNumber(number){
        if(this.currentOperand.includes(".") && number == ".") return;
        this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }
    
    

    updateDisplay(){
        this.previousOperandTextElement.innerText = `${this.formatDisplayNumber(
            this.previousOperand)} ${this.operation || ''}`;
        this.currentOperandTextElement.innerText = this.formatDisplayNumber(this.currentOperand)

    }
}
const calculator = new Calculator(
    previousOperandTextElement, 
    currentOperandTextElement
);
    
for (const numberButton of numberButtons){
        numberButton.addEventListener("click", () =>{
            calculator.appendNumber(numberButton.innerText);
            calculator.updateDisplay();
        })
}
for(const operationButton of operationButtons){
    operationButton.addEventListener('click',() => {
        calculator.chooseOperation(operationButton.innerText);
        calculator.updateDisplay();
    })

}
allClearButton.addEventListener("click", () =>{
        calculator.clear();
        calculator.updateDisplay();
})
equalsButton.addEventListener('click', () =>{
    calculator.calculate();
    calculator.updateDisplay();

})
deleteButton.addEventListener('click', () =>{
    calculator.delete();
    calculator.updateDisplay();

})
document.addEventListener("keypress", function(e){
    if(e.key === "1"){
        const press1 = document.querySelector("#btn01");
        press1.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "2"){
        const press2 = document.querySelector("#btn02");
        press2.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "3"){
        const press3 = document.querySelector("#btn03");
        press3.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "4"){
        const press4 = document.querySelector("#btn04");
        press4.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "5"){
        const press5 = document.querySelector("#btn05");
        press5.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "6"){
        const press6 = document.querySelector("#btn06");
        press6.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "7"){
        const press7 = document.querySelector("#btn07");
        press7.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "8"){
        const press8 = document.querySelector("#btn08");
        press8.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "9"){
        const press9 = document.querySelector("#btn09");
        press9.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "0"){
        const press0 = document.querySelector("#btn00");
        press0.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "/"){
        const pressdiv = document.querySelector("#btndiv");
        pressdiv.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "*"){
        const pressx = document.querySelector("#btnx");
        pressx.click();
    }
})
document.addEventListener("keyup", function(e){
    if(e.key === "Backspace"){
        const pressbs = document.querySelector("#btndel");
        pressbs.click();
    }
})
document.addEventListener("keyup", function(e){
    if(e.key === "Delete"){
        const pressca = document.querySelector("#btnca");
        pressca.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "-"){
        const pressless = document.querySelector("#btnless");
        pressless.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const pressEnter = document.querySelector("#btnequal");
        pressEnter.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "+"){
        const pressPlus = document.querySelector("#btnplus");
        pressPlus.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === "."){
        const pressPoint = document.querySelector("#btnpoint");
        pressPoint.click();
    }
})
document.addEventListener("keypress", function(e){
    if(e.key === ","){
        const pressPoint = document.querySelector("#btnpoint");
        pressPoint.click();
    }
})