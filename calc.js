
// define variants numericals, operands, clear, equals, entry, answer
var numericals = document.querySelectorAll('[data-numerical]');
var operands = document.querySelectorAll('[data-operand]');
var clearAll = document.querySelector('[data-allClear]');
var Delete = document.querySelector('[data-delete]');
var equals = document.querySelector('[data-equals]');
var decimal = document.querySelector('[data-equal]');
var entry = document.querySelector('[data-entry]');
var answer = document.querySelector('[data-answer]');

//
// 2.As I input numbers, I should be able to see my input in the element with the id of display.
//  write event listener for button click which works with entry string
 var entry = "";
 var answer = 0;
//  function to display number on display(entry part)
 function displayNumber(number){
     if(number === "." && entry.includes("."))return;
     entry += number.toString;
 }

numericals.forEach(button =>{
    button.addEventListner("click", () => {
        displayNumber(button.innertext);
        
})
})