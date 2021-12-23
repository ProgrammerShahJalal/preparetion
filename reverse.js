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

/*------ here:
1. num.toString() converts the given number into string so that we can use split function on it next.

2. num.split("") converts the string into an array of characters so that we can use array reverse function (which doesn't work on a string.)

3. num.reverse() reverse the order of the items in the array.

4. num.join('') reassemble the reversed characters into a string.

5. parseFloat(num) converts num into a float from a String.
Note: parseFloat runs in the end (even though it is on the first line of the function) on the reversed number and removes any leading zeroes. 

6. num * Math.sign(num) multiplies the number with the sign of the original number provided.

--------*/







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


