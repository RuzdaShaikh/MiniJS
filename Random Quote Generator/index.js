const quotes = [
    "Verily, with hardship, there is relief.\n- Quran 94:5",
    "And whoever puts their trust in Allah, then He will suffice him.\n- Quran 65:3",
    "Be patient. Indeed, the promise of Allah is truth.\n- Quran 30:60",
    "Allah does not burden a soul beyond that it can bear.\n- Quran 2:286",
    "And remember, with gratitude, Allah will increase you.\n- Quran 7:144",
    "Do not despair of the mercy of Allah.\n- Quran 39:53",
    "And whoever puts their trust in Allah, then He ˹alone˺ is sufficient for them.\n- Quran 65:3",
    "Say, “Nothing will ever befall us except what Allah has destined for us. He is our Protector.” So in Allah let the believers put their trust.\n- Quran 9:51",
    "Then which of your Lord’s favours will you ˹humans and jinn˺ both deny?\n- Quran 55:13","Do not lose hope, nor be sad\n- Quran 3:139"
]

const usedIndexes = new Set()
const quoteParagraph = document.getElementById("quote")
const body = document.getElementsByTagName("body")[0]
const button = document.getElementById("generate")

button.addEventListener("click", generateQuote)

window.addEventListener("load", generateQuote)
window.addEventListener("load", randomColor)


function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const randomQuote = quotes[randomIdx] 

        quoteParagraph.textContent = randomQuote
        usedIndexes.add(randomIdx)
        break
    }
}

function randomColor() {
    const red = Math.floor( Math.random() * 255 )
    const blue = Math.floor( Math.random() * 255 )
    const green = Math.floor( Math.random() * 255 )

    const color = `rgb(${red}, ${blue}, ${green})`

    body.style.backgroundColor = color
}