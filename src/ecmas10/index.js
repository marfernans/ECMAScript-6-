// What was implemented in ES10?

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log (array.flat(2))


let Array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]))


let hello = '         hello World';

console.log(hello);
console.log(hello.trimStart());


let hello = 'Hello World       ';
console.log(hello);
console.log(hello.trimEnd());


try {

} catch {
  error
}


let entries = [["name", "Miguelito"] ["age", 15]];

console.log(Object.fromEntries(entries));


let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);


