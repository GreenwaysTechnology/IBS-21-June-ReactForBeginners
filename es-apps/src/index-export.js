//we are going to access the mylib code.

import { firstName, lastName, age, address, calculate, skills } from './mylib'

console.log(`Name ${firstName} ${lastName}`)
console.log(`Age ${age}`)
console.log(`Address ${address.city} ${address.state}`)
skills.forEach(skill => console.log(skill))
console.log('Amt ',calculate())
