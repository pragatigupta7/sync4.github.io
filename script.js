const questions = [
    {
        question:" The word processing feature that catches most random typographical errors and misspellings is known as _____.",
        answers: [
            { text:"Grammar checker", correct:false},
            { text:"Spell checker",correct:true},
            { text:"word checker",correct:false},
            { text:"None of the these ",correct:false},
    ]
    },
    {
        question:" A process is a _______.",
        answers: [
            { text:"single thread of execution.", correct:false},
            { text:"program in the execution",correct:true},
            { text:"program in the memory",correct:false},
            { text:"task",correct:false},
        ]
    }
    {
        question:"What is smallest unit of the information?",
        answers: [
            { text:"A bit", correct:true},
            { text:"A byte",correct:false},
            { text:"A block",correct:false},
            { text:"A nibble",correct:false},
    ]
    },
    {
        question:"What is the decimal equivalent of the binary number 10111?",
        answers: [
            { text:"21", correct:false},
            { text:"39",correct:true},
            { text:"42",correct:false},
            { text:"23",correct:false},
    ]
    },
];
const questionElement = document.getElementById("#question");
const answerButtons = document.getElementById("#answer-buttons");
const nextButton = document.getElementById("#next-btn");

let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion =  questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML =  answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)   
    });  

}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstchild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classlist.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'you scored ${score} out of ${question.length}!';
    nextButton.innerHTML= "play again";
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
    showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>
{
    if(currentQuestionIndex< questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
});
startQuiz();