const Rock = 1
const paper = 2
const scissor = 3
let shiftMachine = 0

const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissor = document.getElementById('scissor')

btnRock.addEventListener('click', chooseRock )
btnPaper.addEventListener('click', choosePaper )
btnScissor.addEventListener('click', chooseScissor )

const getRandomNumber =  (min, max)  => Math.round(Math.random() * (max - min) + min)

function chooseRock (){
    document.getElementById('shift-user').textContent = 'usuario eligio piedra'
    document.getElementById('shift-cpu').textContent = chooseCpu()
    return rock
}

function choosePaper (){
    document.getElementById('shift-user').textContent = 'usuario eligio papel'
    document.getElementById('shift-cpu').textContent = chooseCpu()
    return paper
}

function chooseScissor (){
    document.getElementById('shift-user').textContent = 'usuario eligio tijeras'
    document.getElementById('shift-cpu').textContent = chooseCpu()
    return scissor
}

function chooseCpu() {
    let shiftCpu = (getRandomNumber(1,3))

    if (shiftCpu === rock){
        shiftMachine = rock
        return "la maquina eligio piedra"
    } else if(shiftCpu === paper){
        shiftMachine = paper
        return "la maquina eligio papel"
    } else{
        shiftMachine = scissor
        return "la maquina eligio tijeras"
    }
}