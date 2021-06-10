function Employee() {
    //hardcoded variables
    this.id = 1;
    this.name = 'Subramanian'
    this.salary = 5000
    //methods
    this.calculateSalary = function () {
        return 1000 * 1000;
    }
}
let emp = new Employee();
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)
//after object creation
emp.id = 9000;
emp.name = "Amit"
emp.salary = 45000
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)

class Customer {
    //hardcoded variables
    id = 1;
    name = 'Subramanian'
    //methods
    computeOrder() {
        return 100;
    }
}
let cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`OrderValue ${cust.computeOrder()}`)
cust.id = 90;
cust.name = 'Ram'
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`OrderValue ${cust.computeOrder()}`)


let product = {
    id: 1,
    name: 'phone',
    // getQty: function () {
    //     return 100;
    // }
    getQty: () => {
        return 100;
    },
    calculateInvoice() {
        return 1000;
    }
};
console.log(`Product id ${product.id}`)
console.log(`Product Name ${product.name}`)
console.log(`Product Qty ${product.getQty()}`)
console.log(`Product Invoice Value ${product.calculateInvoice()}`)

product.id =9000
product.name="Computers"
console.log(`Product id ${product.id}`)
console.log(`Product Name ${product.name}`)
console.log(`Product Qty ${product.getQty()}`)
console.log(`Product Invoice Value ${product.calculateInvoice()}`)
