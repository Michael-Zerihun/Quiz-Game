const scoreList = document.querySelector('#scoreList')
const highScores = JSON.parase(lacalStorage.getItem("highScores")) || []

scoreList.innerHTML = highScores.map(score => {
	return `<li class = "achievers"> ${score.name} - ${score.score}</li>`
}).join("")