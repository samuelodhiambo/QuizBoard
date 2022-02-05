var correctAnswers = {
    one:"Js",
    two:"Hyper-Text",
    three:"letvar"
}
var dscore = document.getElementById("score");
var vscore = document.getElementById("score-v");
var form = document.getElementById("quizform");

form.addEventListener('submit', getFormData)

function getFormData(event) {
    event.preventDefault()
    var answers = {}
    var answerOne = this.quiz1.value
    var answerTwo = this.quiz2.value
    var answerThree = this.quiz3.value
    answers.one = answerOne
    answers.two = answerTwo
    answers.three = answerThree

    var score = grading(answers)
    vscore.innerHTML = score
    dscore.style.display = "inline-block"
    form.reset()
}

function grading(x) {
    var score = 0;
    if (x.one == correctAnswers.one) {
        score = score + 1/3 * 100
    }
    if (x.two == correctAnswers.two) {
        score = score + 1/3 * 100
    }
    if (x.three == correctAnswers.three) {
        score = score + 1/3 * 100
    }

    return Math.round(score);
}

