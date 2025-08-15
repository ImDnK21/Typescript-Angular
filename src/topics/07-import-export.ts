import { Product, taxCalculation, TaxCalculationsOptions } from './06-functions-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Iphone 15',
        price: 150
    },
    {
        description: 'Ipad Pro',
        price: 240
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});
console.log('/////////////////////');
console.log('Total', total);
console.log('Tax',tax);





export {}