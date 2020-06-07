
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

