// Exercise 1:Price with optional discount
// Create a function that calculates the final price of a product.    ✅

function calculatePrice(price: number, discount?: number): number {
    const disc = discount ?? 0;
    return price * (disc / 100)
}


const resEx1 = calculatePrice(180990,50)
console.log(resEx1);



// Exercise 2: Personalized greeting 
// It creates a function that greets a user. If you don't pass a name, use "Guest."   ✅

function greetUser(name?: string): string{
    return `Welcome, ${name ?? 'Guest'}`
}

const result1Ex2 = greetUser('Danko')
const result2Ex2 = greetUser();
console.log(result1Ex2);
console.log(result2Ex2);


// Exercise 3: Calculate power - ARROW FUCNTION
// Write a function that calculates the result of base^exponent, if exponent is not passed, assume 2.

const calculatePower = (exponent: number, base: number = 2) => {
    // Option 1: return Math.pow(base, exponent);
    // Option 2: return base ** exponent
    return Math.pow(exponent, base);
}

const resultEx3 = calculatePower(6,2)
console.log(resultEx3);

export {}