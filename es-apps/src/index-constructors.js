function Employee(id = 1, name = 'Subramanian', salary = 5000) {
    this.id = id
    this.name = name
    this.salary = salary
    //methods
    this.calculateSalary = function () {
        return 1000 * 1000;
    }
}
let emp = new Employee();
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)

emp = new Employee(23, 'Ram', 900); //constructor args
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)


class Customer {
    constructor(id = 1, name = 'Subramaian') {
        this.id = id
        this.name = name
    }
    //methods
    computeOrder() {
        return 100;
    }
}
let cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`OrderValue ${cust.computeOrder()}`)

cust = new Customer(45, 'Amit', 70000);
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`OrderValue ${cust.computeOrder()}`)
