const Rock = 1
const paper = 2
const scissor = 3

const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissor = document.getElementById('scissor')

btnRock.addEventListener('click', chooseRock )
btnPaper.addEventListener('click', choosePaper )
btnScissor.addEventListener('click', chooseScissor )

function chooseRock (){
    document.getElementById('shift-user').textContent = 'usuario eligio piedra'
    return rock
}

function choosePaper (){
    document.getElementById('shift-user').textContent = 'usuario eligio papel'
    return paper
}

function chooseScissor (){
    document.getElementById('shift-user').textContent = 'usuario eligio tijeras'
    return scissor
}