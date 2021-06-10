//functional programming: style of writing code based on mathemetics call lambda calculs : application of lambdas are functional programming.

//1.higher order function:  function itself is value(literal), can be assinged to a variable , passed around - parameter,return.
/*"function declaration; function can be assigned to a variable.
once if you assign function to a variable , that variable can be used
to call /invoke that function."*/

//function as value
//way-1
function sayHello(name = 'foo') {
    console.log('hello', name);
    return 'welcome'
}

let hello = sayHello;

//invoke function
hello();
hello('subramaian')

//way -2  ;inline ; same line;//anonomous function ;function without name
const greeter = function (message = 'bar') {
    console.log(`${message}`)
    return 'bar foo'
};
greeter()
greeter('subramanian')