const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEL = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEL = document.getElementById("score");

let score = JSON.parse (localStorage.getItem("score"));

if(!score) {
    score = 0;
}

scoreEL.innerText = `score: ${score}`

questionEL.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = inputEl.value 
    if(userAns == correctAns){
        score++;
        updateLocalStorage();
    } else {
        score--;
        if(score<0){score=0}
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}

