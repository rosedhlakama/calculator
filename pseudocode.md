<!--
HTML


create grid calculator with
1. screen with two lines to display entries and answer ID "display"
2. buttons with operands with appropriate id  "addittion" "subtraction" "multiplication" "division" class = "operands"
3. button for decimal point id "decimal" .
4. equals button id "equals" = 
5. buttons with numbers zero to nine with appropriate id
6. button with AC for clearing  display id "clear"
grid layout
// display - column o to -1 and row 0 to 2(tolines)
// AC del division multiply
// AC del division multiply
// seven eight nine subtract
// seven eight nine subtract
// four five six add
// four five six add
// one two three equals
// one two three equals
// zero zero decimal equals
// zero zero decimal equals
use data attributes data-operands, data-number, data equals, data-allClear, data-entry, data-answer
-->

<!-- 
css
 page colour white
 display - white with black text
 buttons 
    border radius 70%, solid  fresh #4ABDAC
    color dark grey text clean #DFDCE3 on, orange background vermillion #FC4A1A
    align center justify center 
    hover lighter orange sunshine #F78733
    -->

<!-- 
    js tests
    1. pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

    2.As I input numbers, I should be able to see my input in the element with the id of display.

    3. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

    4. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
        if(entrystring[0]===0) return

    5. When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.
        if(number ==='.' && entry included('.)) return

    6. Should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

    7.  If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.

    8. Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

    9. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).
        return string to number with 4decimal places toFixed(4)
      -->

<!--  
Javascript functions
1 get variants by class numericals, operands, clear, equals, entry, answer
    1a for display box var  entry = getElementsByClass("entry"); 
        if using data-types us var number = documant.querySeletcoreAll('[data-number]') and query selector for when there is only one of that type. 
    1b for display var answer = getElementsByClass("answer");
    1c get the clear button for var clear =getElementsByClass("clear")
    1d for numerical buttons var numericals = getElementsByClass("numerical");
    1e for operands var operands = getElementsByClass("operands");
    1d for equal var equals = getElementsByCLas("equals");

2 add eventlistener for click on buttons -- addEventListener('clikc', function(e))
    2a make event function return value of button value = e.target.innerHTML thats event target text will take the Value variant
    2b make value display on entry section entry.html += value
    2c if value is =(equals sign) use evaluator method to evaluate entry string.  eval()

3 define functions
    clear when clicked defult the screen to enpty "string"
-->

<!-- 
Incase all functions in one laeg page function documenet.ready(function(){})
variables that store then inouts to calculate later a string or an array
    var entries = [];
Variable to store the computed value    
    var total = 0;

when button is clicked event listner to add that text to entry div
       var temp = '';
        $("button").on('click', function() {
            var val = $(this).text();
the number and '.' create a string on the entry string
        // Got a number, add to temp
        if (!isNaN(val) || val === '.') {
            temp += val;
            $("#answer").val(temp.substring(0,10));
            
        // Got some symbol other than equals, add temp to our entries
        // then add our current symbol and clear temp
        } else if (val === 'AC') {
clear when the AC is pressed
            entries = [];
            temp = '';
            total = 0;
            $("#answer").val('')
delete button will slice(-1, 1)
        // Clear last entry
        } else if (val === 'CE') {
            temp = '';
            $("#answer").val('')
make sure multiply and devide symbols are red as * and /            
        // Change multiply symbol to work with eval
        } else if (val === 'x') {
            entries.push(temp);
            entries.push('*');
            temp = '';
            
        // Change divide symbol to work with eval
        } else if (val === '÷') {
            entries.push(temp);
            entries.push('/');
            temp = '';
function fo the = sign returns an evaluation
        // Got the equals sign, perform calculation
        } else if (val === '=') {
            entries.push(temp);
variants to stor part so entry equation (number array were from?)
            var nt = Number(entries[0]);
            for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i+1])
            var symbol = entries[i];
if loop for aperandds  inputs in relation nextNum          
            if (symbol === '+') { nt += nextNum; } 
            else if (symbol === '-') { nt -= nextNum; } 
            else if (symbol === '*') { nt *= nextNum; } 
            else if (symbol === '/') { nt /= nextNum; }
            
            i++;
            }
            
            // Swap the '-' symbol so text input handles it correctly
            if (nt < 0) {
            nt = Math.abs(nt) + '-';
            }
    
    $("#answer").val(nt);
		entries = [];
    temp = '';
    
  // Push number
  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});
 -->