var x = 123;
function reverseString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const result = reverseString("123");
// console.log(result);

/* --------------------------------------------- */

function reverseString(str) {
    return str.split("").reverse().join("");
}
const output = reverseString("hello");
// console.log(output);
