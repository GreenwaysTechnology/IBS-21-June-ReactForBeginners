//Object : state and behaviour : instance variables and instance methods

//create Object : constructor pattern; functions,es 6 classes

//es 5 function  // Object template: Noun, Start with Capital case
function Employee() {
    //instance variables
    this.id = 1;
    this.name = 'Subramanian'
    this.salary = 5000
    //methods
    this.calculateSalary = function () {
        return 1000 * 1000;
    }
}
//create instance 
//emp is reference variable
let emp = new Employee();
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)

//ES 6 Class syntax;

class Customer {
    //instance variable
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

//literal syntax

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