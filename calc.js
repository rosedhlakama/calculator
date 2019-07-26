// create class for display function
class Abacus{
    constructor(entryText, answerText){
        this.entryText = entryText;
        this.answerText = answerText;
        this.clear();
    }
// function so that the clear button clears the displays
    clear(){
    this.answer = "0";
    this.entry = "";
    this.operation = "";
    }
// function to splice or pop one last elemet from entry array or string
    delete(){
        this.answer = this.answer.toString().slice(0, -1);    
    };
// function displaying the entries
    displayNumber(number){
        if(number ===(".") && this.answer.includes(".")) return;
    this.answer = this.answer.toString() + number.toString();
    }
// function to limit usage of operands
    selectedOperand(operation){
        if(this.answer === "")return;
        if(this.entry !== ""){
            this.calculate()
        }
    this.operation = operation;
    this.entry = this.answer;
    this.answer = "";      
    }
// evaluate function to do the math
    calculate() {
    let calculation                         // new variant for computation of entries
    const Z = parseFloat(this.entry);         // take entrered caulculation as z "operand" y
    const Y = parseFloat(this.answer);      //ParseFloat converts a string of numbers into maths and intergers
    if(isNaN(Z)|| isNaN(Y))return;      // if not a number stop function
    switch(this.operation){
        case "+":
            calculation = Z+Y
            break;
         case "-":
            calculation = Z-Y
            break;
         case "x":
            calculation = Z*Y
            break;
          case "÷":
            calculation = Z/Y
            break;
          default:
            return;                         // if no operands match then stop function
    }
    this.entry = "";   
    this.answer = calculation;
    this.operation = undefined;             
    };

// got help from goole on this - to get the commas for the larger numbers
  getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
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
        this.answerText.innerText = this.getDisplayNumber(this.answer)
        if(this.operation != null){
               this.entryText.innerText =
                `${this.getDisplayNumber(this.entry)} ${this.operation}`
            } 
            else {
              this.entryText.innerText = ''
            }
      }
}

// define variants numericals, operands, clear, equals, entryText, answerText
const numericals = document.querySelectorAll('[data-numerical]')
const operands = document.querySelectorAll('[data-operand]')
const clearAll = document.querySelector('[data-allClear]')
const deleteButton = document.querySelector('[data-delete]')
const equals = document.querySelector('[data-equals]')
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

// event listeners for buttons

operands.forEach(button =>{
    button.addEventListener("click", () => {
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

deleteButton.addEventListener("click", button =>{
    abacus.delete()
    abacus.updateDisplay()
})