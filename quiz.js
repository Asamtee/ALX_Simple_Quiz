//select the checked radio button
function checkAnswer(){
const selectedRadioButton= document.querySelector('input[name="quiz"]:checked');

//to access the value property to get user's answer
const userAnswer = selectedRadioButton.value;

    const correctAnswer = document.querySelector('4').innerHTML;
    const feedback = document.querySelector('feedback')

    //comparing user answers
    if(userAnswer===correctAnswer){
        feedback.innerHTML='Correct! well done';
        feedback.Style.color='green';
    }
    else{
        feedback.innerHTML="That's incorrect. Try again!";
        feedback.style.color='red';
    }
}

//button event listener
const button = document.getElementById(submit-answer);
button.addEventListener('click',checkAnswer);