// ¿Qué se implemento en ES9?

const obj = {
  name: 'Miguelito',
  age: 15,
  country: 'Colombia',
}

let { country, ...all } = obj;
console.log(all);


const obj = {
  name: ' Angie',
  age: 8
}
const obj1 = {
  ...obj,
  country: 'Colombia'
}

console.log(obj1);



const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 4000) 
      : reject(new Error('Test Error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('End'))
  
  
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2020-06-08');
  const year = match[1]
  const month = match[2]
  const day = match [3]
  
  console.log(year, month, day);