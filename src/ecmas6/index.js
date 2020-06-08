
// Default Params and Concatenation

function newFunction(name, age, country) {
  var name = name || 'Migelito';
  var age = age || 15;
  var country = country || 'Colombia';
  
  console.log(name, age, country); 
}

// ************************************************************************
// ECMA6

function newFunction2(name = 'Miguelito', age = 15, country = 'Colombia') {
  console.log(name, age, country);
};
newFunction2();
newFunction2('Angie', '10', 'Colombia');


let hello = 'Hello';
let world = 'World';
let epicPhrase = hello +' '+ world;
console.log(epicPhrase);


// Template literal 🥰

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ******************************************************************
// Multilínea

let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet \n" + "consectetur, adipisci velit...";

let lorem2 = `Neque porro quisquam est qui dolorem ipsum 
quia dolor sit amet, consectetur, adipisci velit...`;

console.log(lorem);
console.log(lorem2);


//*****************************************************************************

let person = {
  'name': ' Migelito',
  'age': 15,
  'country': 'Colombia'
}

console.log (person.name, person.age);

// Desestructuración

let { name, age, country} = person;
console.log(name,age,country);


// Spread Operator 

let team1 = ['Miguelito', 'Angie', 'Michelle'];
let team2 = [' Marito', 'Ronalito', 'Angel'];

let education = ['José', ...team1, ...team2];

console.log(education);


// LET y CONST

{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

  console.log(globalVar);
  
  
  const a = 'b'; 
  a = 'a';
  console.log(a) // CONST no permite reasignar valores
  
  

// Arrow Functions, Promesas y Parámetros en objetos
// ****************************************************************************

let name = 'Miguelito';

let age = 15;
// Es5
obj = { name: name, age: age};

// Es6
obj2 = { name, age };
console.log(obj2);

// Different ways to write Arrow functions

const names = [
  {name: 'Migelito', age: 15},
  {name: 'Angie', age: 8}
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  ...
}

const listOfNames4 = name => {
  ...
}

const square = num => num * num;



// Promises

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('👌🏼');
      
    }else {
      reject('💩');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hello world'))
  .catch(error => console.log(error));
  

// Clases, Módulos y Generadores
// ***************************************************************************

// Clases

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum (valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(7, 3));


// Módulos

import {hello} from './module';

hello();

// Generadores

function* helloWorld() {
  if(true){
    yield '🦖 ';
  }
  if(true) {
    yield '🌎🌍🌏';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
















