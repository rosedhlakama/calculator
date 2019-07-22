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
// AC AC division multiply
// AC AC division multiply
// seven eight nine subtract
// seven eight nine subtract
// four five six add
// four five six add
// one two three equals
// one two three equals
// zero zero decimal equals
// zero zero decimal equals
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

    5. When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

    6. Should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

    7.  If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.

    8. Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

    9. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).
      -->

<!--  
Javascript functions

-->