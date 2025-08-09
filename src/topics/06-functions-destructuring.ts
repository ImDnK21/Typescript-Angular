interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}

interface TaxCalculationsOptions {
    tax: number;
    products: Product[];
}

//function taxCalculation(options: TaxCalculationsOptions): [number,number]{
//function taxCalculation({tax,products}: TaxCalculationsOptions): number[]{
function taxCalculation( options: TaxCalculationsOptions): number[]{

    const {tax, products} = options;

    let total = 0;
    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [ total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log('Total', total);
console.log('Tax', taxTotal);











export {};