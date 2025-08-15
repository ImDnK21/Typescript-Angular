//! Object Destructuring
//!----------------------------------------------------!//

// Extract name and age from the object with destructuring
const person = { name: 'Juan', age: 30 };

const { name , age } = person;
console.log(name,age);

// Extract theme and set a default value for lenguage = 'es'
const config = { theme: 'dark',lenguage:'es'};

const {theme,lenguage} = config;
console.log(theme, lenguage);


//! Array Destructuring
//!----------------------------------------------------!//

// Extract first and third color from the object
const colors = ['red', 'green', 'blue'];

const [firstColor,,thirdColor] = colors;
console.log(firstColor,thirdColor);


//! Nested Object Destructuring
//!----------------------------------------------------!//

// Extract Name and City
const user = {
    id: 1,
    perfil: {
        name: 'Ana',
        address: { ciudad: 'Madrid', country: 'España' }
    }
};

const {perfil} = user;
const {name: username,address} = perfil;
console.log(username,address);


//! Spread Operator - Object Destructuring
//!----------------------------------------------------!//

// Extract Name and other properties into another variable
const producto = { id: 101, name: 'Laptop', price: 1200, stock: 5 };

const {name: productName, ...productProps } = producto;
console.log(productName,productProps);


//! Spread Operator - Array Destructuring
//!----------------------------------------------------!//

//Extract first two values and other into another variable
const numbers = [1, 2, 3, 4, 5];
const [firstValue, secondValue, ...numberProps] = numbers;
console.log(firstValue,secondValue,numberProps);


//! Functions - Arguments Destructuring
//!----------------------------------------------------!//
// 

type Usuario = {
  nombre: string;
  edad: number;
  email?: string;
}
//function mostrarUsuario({ nombre, edad }: { nombre: string; edad: number }) {
function mostrarUsuario({ nombre, edad }: Usuario) {
  console.log(`${nombre} tiene ${edad} años`);
}
mostrarUsuario({ nombre: 'Pedro', edad: 28 });


const baseDeep  = { settings: { theme: 'dark', lang: 'es' } };
const extraDeep = { settings: { lang: 'en' } };

const deepMerged = {
  ...baseDeep,
  settings: {
    ...extraDeep.settings,
    ...baseDeep.settings
  }
}

console.log(deepMerged.settings);


//! mix Arrays and objects with spread
// Mix two Arrays with Spread operator

const a = ['Danko', 15, true], b = [11,'Andres'];
const ab = [...a,...b];
console.log(ab);

const animals = ['Dog','Cat','Tiger','Lyon'];
const tools = ['Hammer', 'Nailgun','Pickaxe'];

const mixArr = [...animals, ...tools];
console.log(mixArr);


//Plain Merge - It override the first value for the second one

const base = {
  a:1,
  b:2
}

const exp = {
  a:100,
  c:200
}

const mixNumbers = {...base, ...exp}
console.log(mixNumbers); //~ Output: {"a": 100, "b": 2, "c": 200}

// Copy an object or array with spread // Doesn't Modify the original one

const newNumbers = {...mixNumbers, d:500}
console.log(newNumbers);


// Spread with arrays

const arrA = [1,2], arrB = [3,4];
const mixArrAB = [...arrA, ...arrB];
console.log(mixArrAB);




export {}