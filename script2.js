const quizData = [
    {
        question: "What is e-waste?",
        options: ["Waste generated from electronic devices", "Waste generated from energy sources", "Waste generated from organic materials", "Waste generated from plastic products"],
        answer: "Waste generated from electronic devices"
      },
      
      {
        question: "Which of the following electronic devices typically contain hazardous materials?",
        options: ["Mobile phones", "LED bulbs", "Wooden furniture", "Glassware"],
        answer: "Mobile phones"
      },
      
      {
        question: "Which country produces the most e-waste?",
        options: ["China", "United States", "India", "Japan"],
        answer: "China"
      },
      
      {
        question: "What is the primary environmental concern associated with improper disposal of e-waste?",
        options: ["Soil erosion", "Air pollution", "Water contamination", "Deforestation"],
        answer: "Water contamination"
      },
      
      {
        question: "Which of the following is a sustainable option for disposing of e-waste?",
        options: ["Throwing it in the trash", "Donating it to a local charity", "Burning it in an incinerator", "Burying it in a landfill"],
        answer: "Donating it to a local charity"
      },
      
      {
        question: "What is the first step in recycling e-waste?",
        options: ["Sorting the materials", "Breaking down the devices", "Sending it to a recycling facility", "Donating it to a thrift store"],
        answer: "Sorting the materials"
      },
      
      {
        question: "Which of the following materials can be recovered from e-waste for reuse?",
        options: ["Plastic", "Glass", "Metals", "All of the above"],
        answer: "All of the above"
      },
      
      {
        question: "What percentage of e-waste is estimated to be recycled globally?",
        options: ["Less than 10%", "Around 25%", "Approximately 50%", "More than 75%"],
        answer: "Less than 10%"
      },
      
      {
        question: "Which organization sets guidelines for the environmentally sound management of e-waste?",
        options: ["WHO (World Health Organization)", "EPA (Environmental Protection Agency)", "UN (United Nations)", "ISO (International Organization for Standardization)"],
        answer: "ISO (International Organization for Standardization)"
      },
      
      {
        question: "What can individuals do to reduce e-waste?",
        options: ["Upgrade electronic devices frequently", "Dispose of electronic devices in regular trash bins", "Repair and reuse electronic devices when possible", "Avoid recycling electronic devices altogether"],
        answer: "Repair and reuse electronic devices when possible"
      }
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();