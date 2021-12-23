var funBox = [1, 5, 6, -3, 34, -43, -54, -2, 6, 7, 9];
/* -----create an array where only positive number include --------*/
let positiveBox = [];
for (element of funBox) {
    if (element > 0) {
        positiveBox.push(element);
    }
}
// console.log(positiveBox);


/* ------------------find negetive numbers -----------------*/
let negetiveBox = [];
for (element of funBox) {
    if (element < 0) {
        negetiveBox.push(element);
    }
}
// console.log(negetiveBox);

/* -------find the even and odd numbers into an new array--------- */

// EVEN NUMBERS
let evenNumbers = [];
for (number of funBox) {
    if (number % 2 == 0) {
        evenNumbers.push(number);
    }
}
// console.log(evenNumbers);

// ODD NUMBERS
let oddNumbers = [];
for (number of funBox) {
    if (number % 2 !== 0) {
        oddNumbers.push(number);
    }
}
console.log(oddNumbers);