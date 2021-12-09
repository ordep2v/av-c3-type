import { colors } from "./colors.js";

var getElement: HTMLElement = document.getElementById('button')!

getElement.addEventListener('click', start);
function start() {
    var colorChoose: string = ''
    var drawnColors: string[] = []
    var life: number = 5
    var userColor: string = ''
    var res: HTMLElement = document.querySelector('p#response')!

    while (drawnColors.length != 10) {
        drawnColors.push(colors[Math.floor((Math.random() * colors.length) + 1)].toLowerCase())
        drawnColors = [...new Set(drawnColors)]
        drawnColors.sort()
    }
    colorChoose = drawnColors[Math.floor((Math.random() * drawnColors.length) + 1)]

    var drawnArray: string = drawnColors.join(', ')

    for (var i = 0; i < 5; i++) {
        userColor =
            prompt(`Temos essas cores abaixo...
        \n\n"${drawnArray.toString()}"
        \n\nTentativas: ${life}
        \n\nAdivinhe qual cor estou a pensar:`)!
                .toLowerCase()

        if (userColor.length === 0 || !userColor.trim()) {
            alert('Insira uma cor!!')
        }
        else if ((!drawnArray.includes(userColor)) || (userColor != colorChoose)) {
            alert('Cara, você errou...')
            life--
            console.log(life)
            console.log(i)
        }
        else if (userColor == colorChoose) {
            alert('Boaaaa, acertou!!')
            var change: String = document.body.style.backgroundColor
            change = userColor
            life = 0
            res.innerHTML = 'Valeu pela jogatina!'
        }
    }
}