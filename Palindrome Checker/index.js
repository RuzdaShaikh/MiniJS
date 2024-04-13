const input = document.getElementById("input")
const span = document.getElementById("span")

console.log(span)


function reverseString(str) {
    return str.split("").reverse().join("")
    // .split("") -> splits each alphabet of string into a array - ("")->(empty string delimiter) means splitting each alphabet - (" ")-> splits where there is a space in string 
    // .reverse -> reverses the array
    // .join -> converts array to string form
    // .join(" ") -> joins array w/ space b/w alphabets
    // .join() -> joins array w/ , in b/w each alphabet

}

function check() {
    const value = input.value
    const reverse = reverseString(value)

    span.textContent = ""
 
    if (value=="") {
        span.textContent += "Type something!"
    } 
    else if (value === reverse) {
            span.textContent += "P A L I N D R O M E !"
            // alert ("PALINDROME")
    }
    else {
        span.textContent += "Not a palindrome!"
        // alert ("Nope")
    } 

    input.value = ""
}
