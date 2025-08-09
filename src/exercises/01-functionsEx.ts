// Exercise 1:Price with optional discount
// Create a function that calculates the final price of a product.   ❌

function calculatePrice(price: number, discount?: number): number {
    const pct = (discount ?? 0) / 100;
    return +(price * (1 - pct)).toFixed(2);
}


const resEx1 = calculatePrice(50000,80)
console.log(resEx1);



// Exercise 2: Personalized greeting 
// It creates a function that greets a user. If you don't pass a name, use "Guest."   ✅

function greetUser(name?: string): string{
    return `Welcome, ${name?.trim() ?? 'Guest'}`
}

const result1Ex2 = greetUser('  Dankooo')
const result2Ex2 = greetUser();
console.log(result1Ex2);
console.log(result2Ex2);


// Exercise 3: Calculate power ---> ARROW FUCNTION
// Write a function that calculates the result of base^exponent, if exponent is not passed, assume 2.

const calculatePower = (exponent: number, base: number = 2) => {
    // Option 1: return Math.pow(base, exponent);
    // Option 2: return base ** exponent
    return Math.pow(exponent, base);
}

const resultEx3 = calculatePower(6,2)
console.log(resultEx3);


// Exercise 4: Combine Firstname and Lastname --> ARROW FUNCTION
// Returns the complete name of a persona, if the lastname is not passed, just return the name

const getCompleteName = (firstname: string, lastname?: string): string =>{
    return `${firstname} ${lastname ?? '' }`;
    // Solution GTP: return lastname ? `${name} ${lastname}` : name
}

const result1Ex4 = getCompleteName('Danko', 'Sanchez');
const result2Ex4 = getCompleteName('Danko');
console.log({result1Ex4, result2Ex4});


// Exercise 5: Register an user  ---> ARROW FUNCTION
// Create a function that recieve the data from an user: name(string), age(optional), country(optional with defaul value = 'Chile'). Return an string with the data

const registerUser = (name: string, age?: number, country: string = 'Chile') =>{
    return `${name}, ${age ?? 'Age no specified'}, ${country}`
    // Solution GPT
    // const ageStr = (age ?? null) === null ? "Age no specified" : String(age);
    // return `${name}, ${ageStr}, ${country}`;
}

const resultEx5 = registerUser('Danko')
console.log({resultEx5});

// Extra Challenge: Personalized Counter
// A function that returns an array with a counter from a base number, optionally increasing by a step (default 1), and to a total of n elements

const generateCounter = (base: number, total: number, step:number = 1): number[] =>{
    const out: number[] = [];
    for (let i = 0; i < total; i++) {
        out.push(base + i * step)
    }
    return out
}

const resultExtraChall = generateCounter(2,15,3);
console.log(resultExtraChall);

export {}