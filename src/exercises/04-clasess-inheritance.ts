class Product {
    constructor(
        public readonly id:number,
        public description:string,
        private price: number
    ){}
    getPriceWithTax(tax = 0.19){
        return (this.price * (1 + tax)).toFixed(2);
    }
}

const product1 = new Product(1,'Ipad Pro',129.99);
const product2 = new Product(2,'Ipad Air',114.99);

const PriceProduct1 = product1.getPriceWithTax()
const PriceProduct2 = product2.getPriceWithTax()

console.log({PriceProduct1,PriceProduct2});