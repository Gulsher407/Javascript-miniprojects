const questions = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Rome', 'Berlin'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is 2 + 2?',
      choices: ['3', '4', '5', '6'],
      correctAnswer: '4'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      correctAnswer: 'Mars'
    },
    {
      question: 'What is the largest mammal?',
      choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale'
    },
    {
      question: 'What year did the Titanic sink?',
      choices: ['1912', '1914', '1918', '1920'],
      correctAnswer: '1912'
    },
    {
      question: 'Who painted the Mona Lisa?',
      choices: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
      correctAnswer: 'Leonardo da Vinci'
    },
    {
      question: 'What is the chemical symbol for gold?',
      choices: ['Au', 'Ag', 'Pt', 'Cu'],
      correctAnswer: 'Au'
    },
    {
      question: 'What is the capital of Japan?',
      choices: ['Kyoto', 'Osaka', 'Tokyo', 'Hiroshima'],
      correctAnswer: 'Tokyo'
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      choices: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Stephen King'],
      correctAnswer: 'Harper Lee'
    },
    {
      question: 'What is the tallest mountain in the world?',
      choices: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
      correctAnswer: 'Mount Everest'
    }
  ];
  
// Get elements from the DOM
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.btn');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const playAgainButton = document.getElementById('play-again-btn');

// Initialize variables
let currentQuestionIndex = 0;

// Function to load question and answer choices
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Clear answer buttons and enable them
    answerButtons.forEach(button => {
      button.textContent = '';
      button.style.backgroundColor = ''; // Reset background color
      button.disabled = false; // Enable the button
    });
  
    currentQuestion.choices.forEach((choice, index) => {
      answerButtons[index].textContent = choice;
    });
  
    nextButton.style.display = 'none'; // Hide the Next button
  }

// Function to check the answer
function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  answerButtons.forEach(button => button.disabled = true); // Disable all answer buttons

  if (selectedAnswer === correctAnswer) {
    // Display message for correct answer
    answerButtons.forEach(button => {
      if (button.textContent === correctAnswer) {
        button.style.backgroundColor = 'green'; // Change background color to green for correct answer
      }
    });
  } else {
    // Display message for incorrect answer
    answerButtons.forEach(button => {
      if (button.textContent === correctAnswer) {
        button.style.backgroundColor = 'green'; // Change background color to green for correct answer
      } else if (button.textContent === selectedAnswer) {
        button.style.backgroundColor = 'red'; // Change background color to red for incorrect answer
      }
    });
  }

  nextButton.style.display = 'block'; // Show the Next button
}

// Add event listeners for answer buttons
answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedAnswer = button.textContent;
    checkAnswer(selectedAnswer);
  });
});

// Add event listener for the next button
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    displayResult();
  }
});

// Function to display the result
function displayResult() {
  const score = currentQuestionIndex; // Calculate the score based on the number of questions answered
  const totalQuestions = questions.length;

  resultElement.textContent = `Your Score: ${score} / ${totalQuestions}`;
  resultElement.style.display = 'block';

  // Hide answer buttons and Next button
  answerButtons.forEach(button => button.style.display = 'none');
  nextButton.style.display = 'none';

  // Show Play Again button
  playAgainButton.style.display = 'block';
}

// Add event listener for Play Again button
playAgainButton.addEventListener('click', () => {
    currentQuestionIndex = 0; // Reset the question index to the first question
    loadQuestion(); // Load the first question
    resultElement.style.display = 'none'; // Hide the result
    playAgainButton.style.display = 'none'; // Hide the Play Again button
  });

// Load the first question when the page loads
loadQuestion();
