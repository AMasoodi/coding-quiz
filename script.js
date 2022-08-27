var timerEl = document.getElementById("timer")
var startBtnEl = document.getElementById("start")
var questionEl = document.getElementById("question")
var answersEl = document.getElementById("answers")
var initialsEl = document.getElementById("initials")
var questions = [
    {
        q: "first gasoline powered car",
        a: ["mercedes", "ford", "Dodge", "toyota"],
        c: "mercedes"
    },
    {
        q: "largest state in the United States",
        a: ["Texas", "Arizona", "Alaska", "New Mexico"],
        c: "Alaska"
    }
]
var interval
var timeLeft = 60
var qn = 0
function startTimer() {
    startBtnEl.classList.add("hide")
    displayQuestion()
    interval = setInterval(function () {
        timeLeft--
        timerEl.textContent = timeLeft
        if (timeLeft <= 0) {
            endGame()
        }
    }, 1000)
}
function displayQuestion() {
    answersEl.innerHTML = ""
    questionEl.textContent = questions[qn].q
    for (var i = 0; i < questions[qn].a.length; i++) {
        var btnEl = document.createElement("button")
        btnEl.textContent = questions[qn].a[i]
        answersEl.append(btnEl)
    }
}
function checkAnswer(event) {
    var userClick = event.target.textContent
    var correct = questions[qn].c

    if (userClick === correct) {
    } else {
        timeLeft -= 15
    }
    qn++
    if (qn < questions.length ) {
        displayQuestion()
    }
    else {
        endGame()
    }
}
function endGame() {
    questionEl.classList.add("hide")
    answersEl.classList.add("hide")
    clearInterval(interval)
    initialsEl.classList.remove("hide")
}
answersEl.addEventListener("click", checkAnswer)
startBtnEl.addEventListener("click", startTimer)
