var x = 123;
/* ----------------solving with the array function--------------- */
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
const resulty = reversedNum(x);
// console.log(resulty);

/*--------------- solving with a regular function----------------- */
function reversedNumber(num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}
console.log(reversedNumber(12345));







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


