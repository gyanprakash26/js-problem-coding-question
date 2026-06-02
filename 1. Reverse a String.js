function reverseString(str) {
    let reversed = str.split('').reverse().join('')
    return reversed;
}

console.log(reverseString("hello world")) // "dlrow olleh"


//Without Inbuilt Method

let newStr = "Hello World"
let reverseStr =""
for (let i = newStr.length-1; i >= 0 ; i--) {
    reverseStr += newStr[i]
}
console.log(reverseStr)