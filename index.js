var x = { Foo: 1 };
var output = (function () {
    delete x.Foo;
    return x.Foo;
})();

output = 2 + 5 + "3"
// console.log(output);

var funBox = [1, 5, 6, -3, 34, -43, -54, -2, 6, 7, 9];

let newFunBox = [];
for (element of funBox) {
    if (element % 2 !== 0) {
        newFunBox.push(element);
    }
}
// console.log(newFunBox);

var name = ['farabi', 'mir', 'safayet', 'mamun', 'sobuj', 'shahjalal', 'mir', 'farabi'];

// using set() we can remove duplicate name from an array
let uniqueName = [...new Set(name)];
console.log(uniqueName);