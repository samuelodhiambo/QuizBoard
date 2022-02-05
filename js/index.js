var correctAnswers = {
    one:"Js",
    two:"Hyper-Text",
    three:"letvar"
}

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

    alert(score)
    form.reset()
}

