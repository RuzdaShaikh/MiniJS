let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnX = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnX === true) {
            box.innerText = "X"
            turnX = false
        } else {
            box.innerText = "O"
            turnX = true
        }
        box.disabled = true
        count++

        let isWinner = checkWinner()

        if (count === 9 && !isWinner) {
            gameDraw()
        }
    })
})

const gameDraw = () => {
    msg.innerText = "The game was a Draw."
    msgContainer.classList.remove('hide')
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val)
                return true
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `The winner is ${winner}`
    msgContainer.classList.remove('hide')
    boxes.forEach(box => {
        box.disabled = true; // Disable all boxes when a winner is found
    });
}

const resetGame = () => {
    turnX = true;
    count = 0;
    boxes.forEach (box => {
        box.innerText = ""
        box.disabled = false
    })
    msgContainer.classList.add('hide')
}

resetBtn.addEventListener('click', resetGame)
newBtn.addEventListener('click', resetGame)