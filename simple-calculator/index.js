const output = document.getElementById('output')
const input = document.getElementById('input')

function appendToDisplay(value) {
    console.log(output.value += value)
}

function clearDisplay() {
    output.value = ''
    input.value = ''
}

function backspace() {
    output.value = output.value.slice(0, -1)
}

function calculate(expression) {
    let result = eval(expression)
    console.log(result)
    return result
}

function appendInput() {
    input.value = output.value
}

function returnResult() {
    let result = calculate(output.value)
    output.value = result
}

