function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const resultRandom = document.querySelector('.result-random')

    if (min >= max) {
        resultRandom.innerHTML = 'O valor mínimo precisa ser MENOR!'
        resultRandom.style.color = 'red' 
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        resultRandom.innerHTML = `Resultado: ${result}`
        resultRandom.style.color = 'white'
    }
}