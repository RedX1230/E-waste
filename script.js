// Define the questions for the quiz
const quizData = [
    {
        question: "What is e-waste?",
        answers: [
            { text: "Waste from energy sources", correct: false },
            { text: "Waste from electronic devices", correct: true },
            { text: "Waste from organic sources", correct: false },
            { text: "Waste prom plastic products", correct: false },
        ],
    },
    {
        question: "Which of the following electronic devices typically contain hazardous materials?",
        answers: [
            { text: "Mobile Phones", correct: false },
            { text: "LED Bulbs", correct: true },
            { text: "Wooden Furniture", correct: false },
            { text: "Glassware", correct: false },
        ],
    },
    {
        question: "Which country produces the most e-waste?",
        answers: [
            { text: "US", correct: false },
            { text: "China", correct: true },
            { text: "India", correct: false },
            { text: "Japan", correct: false },
        ],
    },
    {
        question: "What is the primary environmental concern associated with improper disposal of e-waste?",
        answers: [
            { text: "Soil erosion", correct: false },
            { text: "Water contamination", correct: true },
            { text: "Air pollution", correct: false },
            { text: "Deforestation", correct: false },
        ],
    },
    {
        question: "Which of the following is a sustainable option for disposing of e-waste?",
        answers: [
            { text: "Throwing it in the trash", correct: false },
            { text: "Donating to a local charity", correct: true },
            { text: "Burning it in an incenerator", correct: false },
            { text: "Burying it in a landfill", correct: false },
        ],
    },
    {
        question: "What is the first step in recycling e-waste?",
        answers: [
            { text: "Sorting the materials", correct: false },
            { text: "Breaking down the devices", correct: true },
            { text: "Sending it to a recycling facility", correct: false },
            { text: "Conating it to a thrift store", correct: false },
        ],
    },
    {
        question: "Which of the following materials can be recovered from e-waste for reuse?",
        answers: [
            { text: "Plastic", correct: false },
            { text: "Glass", correct: false },
            { text: "Metal", correct: false },
            { text: "All of the above", correct: true },
        ],
    },
    {
        question: "What percentage of e-waste is estimated to be recycled globally?",
        answers: [
            { text: "Less than 10%", correct: true },
            { text: "Around 25%", correct: false },
            { text: "Approximately 50%", correct: false },
            { text: "More than 75%", correct: false },
        ],
    },
    {
        question: "Which organization sets guidelines for the environmentally sound management of e-waste?",
        answers: [
            { text: "WHO", correct: false },
            { text: "ISO", correct: true },
            { text: "UN", correct: false },
            { text: "EPA", correct: false },
        ],
    },
    {
        question: "What can individuals do to reduce e-waste?",
        answers: [
            { text: "Upgrade electronic devices frequently", correct: false },
            { text: "Dispose of electronic devices in regular trash bins", correct: false },
            { text: " Repair and reuse electronic devices when possible", correct: true},
            { text: "Avoid recycling altogether", correct: false },
        ],
    },
];

// Select the HTML elements
const questionContainer = document.querySelector(".questions");
const resultsContainer = document.querySelector(".results");
const restartButton = document.querySelector("#restart");
const totalSpan = document.querySelector("#total");
const correctSpan = document.querySelector("#correct");

// Define global variables
let currentQuestionIndex = 0;
let numCorrect = 0;

// Function to populate the HTML with question and answer options
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.answers.map(answer => `
                <li>
                    <button class="answer-btn">${answer.text}</button>
                </li>
            `).join("")}
        </ul>
    `;
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", checkAnswer);
    }); 
}

// Function to check the selected answer and update global variables accordingly
function checkAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = quizData[currentQuestionIndex].answers.find(answer => answer.text === selectedButton.textContent).correct;
    if (isCorrect) {
        numCorrect++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
        showResults();
    } else {
        showQuestion();
    }
}

// Function to display the final quiz results
function showResults() {
    questionContainer.style.display = "none";
    resultsContainer.style.display = "block";
    totalSpan.textContent = quizData.length;
    correctSpan.textContent = numCorrect;
}
