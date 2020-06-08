// ¿Qué se implemento en ES8?

const data = {
  frontend: 'Mario Fernandez',
  backent: 'Ronald Fernandez',
  design: 'Miguelito Fernandez',
}

const entries = Object.entries(data);
console.log (entries);
console.log(entries.length);



const data = {
  frontend: 'Mario Fernandez',
  backent: 'Ronald Fernandez',
  design: 'Miguelito Fernandez',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);


const string = 'Hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(8, 'bye'));
console.log('food'.padEnd(8, '----'));


const obj = {
  name: ' Marius',
} 


const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('🦖 🌍🌎🌏'), 4000)
      :reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
 const hello = await helloWorld();
 console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  }catch (error) {
    console.log(error);
  }
};

anotherFunction();

