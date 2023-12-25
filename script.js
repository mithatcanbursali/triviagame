const questions ={
1: {question:"Which one is the Travis Scott's first studio album?", correctAnswer: "Rodeo", answers:["Rodeo","Astroworld","Birds in the Trap Sing McKnight","Days Before Rodeo"]},
2: {question:"Which song got Kanye West Feature on Rodeo?", correctAnswer: "Piss On Your Grave", answers:["Wasted","Piss On Your Grave","Oh My Dis Side","90210"]},
3: {question:"Who got feature on Oh My Dis Side?", correctAnswer: "Quavo", answers:["Young Thug","Future","Offset","Quavo"]},
};


const answerButtons = document.querySelectorAll(".answer");
const nextButton = document.querySelector(".next");
const questionText = document.querySelector("#question");
const scoreId = document.querySelector("#score-id");
const endButton = document.querySelector(".end");

function init(){
let flag = 0;
let questionNumber = 1;
let score = 0;

questionText.textContent = questions[questionNumber].question;

for(let i = 0;i<answerButtons.length;i++){
    answerButtons[i].textContent = questions[questionNumber].answers[i];
    }

for(answerButton of answerButtons){

answerButton.addEventListener("click", (event) => {
 if (flag != 1){
    flag = 1;

    if(event.target.textContent === questions[questionNumber].correctAnswer){
        alert("TRUE ANSWER");
        score++;
        scoreId.textContent = score;
    }
    else{
        alert("WRONG ANSWER")
    }

    for(checkButton of answerButtons){
        if(checkButton.textContent === questions[questionNumber].correctAnswer){
            checkButton.classList.add("true-answer")
        }

        else{
            checkButton.classList.add("wrong-answer")
    }



    }


    if(questionNumber < Object.keys(questions).length){
    nextButton.classList.add("visibility")
    }

    else{
    endButton.classList.add("visibility")
    }
}

})


}

nextButton.addEventListener("click", () => {
    questionNumber++
    flag = 0;
    questionText.textContent = questions[questionNumber].question;
    for(let i = 0;i<answerButtons.length;i++){
    answerButtons[i].classList.remove("true-answer");
    answerButtons[i].classList.remove("wrong-answer");
    answerButtons[i].textContent = questions[questionNumber].answers[i];
    }

    nextButton.classList.remove("visibility")
})

endButton.addEventListener("click",() =>{
    location.replace("./index.html")
})

}

init()