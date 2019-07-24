// create class for display function
class Abacus{
    constructor(entryText, answerText){
        this.entryText = entryText
        this.answerText = answerText
        this.clear()
    }
// function so that the clear button clears the displays
    clear(){
    this.entry = ""
    this.answer = "0"
    this.operation = ""
    }
// function to splice or pop one last elemet from entry array or string
    delete(){
        this.entry = this.entry.toString().slice(0, -1)
    
    };
// function for event finder click on buttons to display number
    displayNumber(number){
        if(number ===(".") && this.entry.includes(".")) return
    this.entry = this.entry.toString() + number.toString()
    }
// function to display operands
    selectedOperand(operation){
        if(this.entry === "")return
        if(this.answer !== ""){
            this.calculate()
        }
    this.operation = operation
    this.answer = this.entry
    this.entry = ""       
    }
// evaluate function to do the math
    calculate() {
    let calculation                         // new variant for computation of entries
    const prev = parseFloat(this.entry)
    const current = parseFloat(this.answer)
    if(isNaN(prev)|| isNan(current))return      // if not a number stop function
    switch(this.operation){
        case "+":
            calculation = prev + current
            break
         case "-":
            calculation= prev - current
            break
         case "x":
            calculation = prev * current
            break
          case "÷":
            calculation = prev / current
            break
          default:
            return  // if no smbols match then stop function
    }
    this.answer = calculation
    this.operation = undefined
    this.entry = ""
    };

  getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimal = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
  }
// update display each time
    updateDisplay(){
    this.entryText.innerText = this.entry
    if(this.entry != null){
       this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.entry)} ${this.operation}`
    } else {
      this.answer.innerText = ''
    }
  }
}

// define variants numericals, operands, clear, equals, entry, answer
const numericals = document.querySelectorAll('[data-numerical]')
const operands = document.querySelectorAll('[data-operand]')
const clearAll = document.querySelector('[data-allClear]')
const Delete = document.querySelector('[data-delete]')
const equals = document.querySelector('[data-equals]')
const decimal = document.querySelector('[data-decimal]')
const entryText = document.querySelector('[data-entry]')
const answerText = document.querySelector('[data-answer]')



 
//  function to display number on display(entry part)
 
const abacus = new Abacus(entryText, answerText) 

// As I input numbers, I should be able to see my input in the element with the id of display.
//  write event listener for button click which works with entry string
// event listener for numericals buttons

numericals.forEach(button =>{
    button.addEventListener("click", () =>{
        abacus.displayNumber(button.innerHTML)
        abacus.updateDisplay()
    })
})

// event listener for operands

operands.forEach(button =>{
    button.addEventListener('click', (e) =>{
        abacus.selectedOperand(button.innerText)
        abacus.updateDisplay()
    })
})

equals.addEventListener("click", button =>{
    abacus.calculate()
    abacus.updateDisplay()
})

allClear.addEventListener("click", button =>{
    abacus.clear()
    abacus.updateDisplay()
})

Delete.addEventListener("click", button =>{
    abacus.delete()
    abacus.updateDisplay()
})