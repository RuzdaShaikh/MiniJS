const body = document.getElementsByTagName('body')[0]

function setColor(name) {
    body.style.backgroundColor = name
}

function randomColor() {
    const red = Math.floor( Math.random() * 255 )
    const blue = Math.floor( Math.random() * 255 )
    const green = Math.floor( Math.random() * 255 )

    const color = `rgb(${red}, ${blue}, ${green})`
    body.style.backgroundColor = color
}


// const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

// function getCharacter(index) {
// 	return hexCharacters[index]
// }

// function generateNewColor() {
// 	let hexColorRep = "#"

// 	for (let index = 0; index < 6; index++){
// 		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
//     	hexColorRep += getCharacter( randomPosition )
// 	}
	
// 	return hexColorRep
// }

// console.log( generateNewColor() ) 

// function setRandomColor() {
//     body.style.backgroundColor = generateNewColor()
// }