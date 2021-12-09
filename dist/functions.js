"use strict";
import { colors } from "../dist/colors.js";
document.getElementById('button').addEventListener('click', start);

function start() {
    var colorChoose = ''
    var drawnColors = []
    var life = 5
    var userColor = ''
    var res = document.querySelector('p#response')

    while (drawnColors.length != 10) {
        drawnColors.push(colors[Math.floor((Math.random() * colors.length) + 1)].toLowerCase())
        drawnColors = [...new Set(drawnColors)]
        drawnColors.sort()
    }
    colorChoose = drawnColors[Math.floor((Math.random() * drawnColors.length) + 1)]

    drawnColors = drawnColors.join(', ')

    for (var i = 0; i < 5; i++) {
        userColor =
            prompt(`Temos essas cores abaixo...
        \n\n"${drawnColors.toString()}"
        \n\nTentativas: ${life}
        \n\nAdivinhe qual cor estou a pensar:`)
                .toLowerCase()

        if (userColor.length === 0 || !userColor.trim()) {
            alert('Insira uma cor!!')
        }
        else if ((!drawnColors.includes(userColor)) || (userColor != colorChoose)) {
            alert('Cara, você errou...')
            life--
            console.log(life)
            console.log(i)
        }
        else if (userColor == colorChoose) {
            alert('Boaaaa, acertou!!')
            document.body.style.backgroundColor = userColor
            life = 0
            res.innerHTML = 'Valeu pela jogatina!'
        }
    }
}
