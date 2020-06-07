
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
  
  






