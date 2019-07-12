//A estrutura de dados vai ser uma array linear
const firePixelsArray = []

//Para definir o tamanho dos pixels teremos duas variaveis
const fireWidth = 10
const fireHeight = 10

//Função de inicialização
function start() {
    createFireDataStructure()
    renderFire()
}

function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight
    for(let i = 0; i < numberOfPixels; i++){
        firePixelsArray[i] = 0
    }
}

function calculateFirePropagation() {

}
function renderFire() {
    let html = '<table cellpadding=0 cellspacing=0>'
    for(let row = 0; row < fireHeight; row++) {
        html += '<tr>'
        for(let column = 0; column < fireWidth; column++) {
            const pixelIndex = column + (fireWidth * row)
            html += '<td>'
            html += `<div class="pixel-index">${pixelIndex}</div>`
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#fireCanvas').innerHTML = html
}
start()