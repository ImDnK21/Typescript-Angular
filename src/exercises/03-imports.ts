//~ Basic Level

// 1) Import/Export: named vs default + 'Barrel'
// Objective: create and consume modules with diferents types of exports

import { Person, Address} from './models'

const spiderman = new Person('Peter','Parker')
console.log(spiderman.fullName);

const addr: Address = {
    city: 'Bronx',
    street: 'South street 212'
}
console.log(addr);

