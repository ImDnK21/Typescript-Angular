export default class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){};

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}