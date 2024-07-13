function checkAnswer() {
    // Get the selected radio button using document.querySelector
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
  
    // Check if a radio button is selected 
    if (!selectedRadio) {
      alert("Please select an answer!");
      return;
    }
  
    // Extract the user's answer from the selected radio button
    const userAnswer = selectedRadio.value;
  
    // Access the correct answer for the question 
    const correctAnswer = "4";
  
   
  
    // Display feedback based on the result
    if (userAnswer=== correctAnswer) {
      alert("Correct! Well done.");
    } else {
      alert("That's Incorrect. Try again!");
    }
  }
  
  // Add event listener to the button 
  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer);
