
function addNumbers(a: number,b:number){
    return a + b;
}
const addNumbersArrow = (a: number, b: number) =>{
    return `${a + b}`
}


const multiply = (firstNumber:number, secondNumber: number = 1, base:number = 7) =>{
    return (firstNumber + secondNumber) * base;
}

// const result:number = addNumbers(1,2);
// const resultArrow: string = addNumbersArrow(1,3)
// const resultMultiply: number = multiply(5);

// console.log({result, resultArrow, resultMultiply});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, healPoints: number) => {
    character.hp += healPoints;
}

const strider = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Heal points ${this.hp}`);
        return `${this.name},${this.hp}` 
    }
}

healCharacter(strider,10);

let result = strider.showHp();
console.log(result);
export {} 