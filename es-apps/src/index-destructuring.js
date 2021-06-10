//object destructuring
// function printEmployee(employee) {
//     console.log(`id : ${employee.id}`)
//     console.log(`name : ${employee.name}`)
//     console.log(`City : ${employee.address.city}`)
// }
//OBject destructuring helps to break object properties into variables

// function printEmployee(employee) {
//     //destructure object
//     const { id, name, address } = employee;
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
// const printEmployee = employee => {
//     //destructure object
//     const { id, name, address: { city } } = employee;
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${city}`)
// }

const printEmployee = ({ id, name, address: { city } }) => {
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
}

printEmployee({ id: 1, name: 'subramanian', address: { city: 'Coimbatore' } })
/////////////////////////////////////////////////////////////////////////////////

//How to return object from the function and how to destructure.

// function getStock() {
//     return {
//         id: 1,
//         symbol: 'GOOGLE',
//         qty: 1000,
//         price: 10000
//     };
// }

// function getStock(id = 1, symbol = 'GOOGLE', qty = 1000, price = 10000) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     };
// }

// function getStock(id = 1, symbol = 'GOOGLE', qty = 1000, price = 10000) {
//     //if key(leftside) : rightSide(local variable) is same, remove : and one variable
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     };
// }

const getStock = (id = 1, symbol = 'GOOGLE', qty = 1000, price = 10000) => ({
    id,
    symbol,
    qty,
    price
});

console.log(getStock())
console.log(getStock(2, 'Microsoft', 100, 2000))
/////////////////////////////////////////////////////////////////////////////////////

const { log, warn, error } = console;

log('log')
warn('warn')
error('eee')

class OrderSerivice {
    constructor() {

    }
    findAll() {
        return 'findAll orders'
    }
    save() {
        return 'saved'
    }
    remove() {
        return 'removed'
    }
}
let { findAll, save, remove } = new OrderSerivice();
log(findAll())
log(save())
log(remove())









