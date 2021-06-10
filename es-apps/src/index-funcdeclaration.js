
/**
 * function - keyword
 * sayHello - funName - verb or verb+Noun + camel case - calculate processNumber()
 * {...fn body}
 */

function sayHello() {
    //function body
    console.log('Hello')
}
//calling function
sayHello()

//function with some logic
function validate() {
    let name = 'ram';
    let password = 'ram';
    let response = (name === 'ram') && (password === 'ram') ? 'valid' : 'invalid'
    console.log(response);
}
validate();