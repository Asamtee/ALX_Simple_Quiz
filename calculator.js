//add
function add (number1,number2){
    return number1 + number2;
}

//subtract
function subtract (number1,number2){
    return number1 - number2;
}

//multiply
function multiply (number1,number2){
    return number1 * number2;
}

//divide
function divide (number1,number2){
   if(b===0){
    return "cannot divide by zero!";
   }
   return a / b;
}

document.getElementById('add').addEventListener('click' , function(){
      const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = add(number1, number2);
        document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click' , function(){
      const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = subtract(number1, number2);
        document.getElementById('calculation-result').textContent = result;
});

//multiply
document.getElementById('multiply').addEventListener('click' , function(){
      const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = multiply(number1, number2);
        document.getElementById('calculation-result').textContent = result;
});

//divide
document.getElementById('divide').addEventListener('click' , function(){
      const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = divide(number1, number2);
        document.getElementById('calculation-result').textContent = result;
});