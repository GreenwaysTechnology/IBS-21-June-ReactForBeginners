//Arrow functions : functional literals / higher order

const sayHello = function () {
    console.log('sayHello')
}
sayHello();

//arrow 
let sayHai = () => {
    console.log('sayHai')
}
sayHai()

//function body has only one line of code: remove {}
sayHai = () => console.log('sayHai')
sayHai()

//arrow and parameters
let add = (a = 1, b = 2) => {
    let r = a + b;
    console.log(r);
};
add(1, 3);
//single parameter without default value:remove ()

let saySomething = message => console.log(message);
saySomething('hello')
////////////////////////////////////////////////
let multiply = () => {
    return 10 * 10;
};
console.log(multiply());
//if function has only return statment : remove {} and return statement
multiply = () => 10 * 10;
console.log(multiply());
//single parameter no default value, and return the same
let isActive = active => active;
console.log(isActive('active'));
/////////////////////////////////////////////////////////////////////////////////////


const login = (username, password, success, failure) => {
    if (username === 'admin' && password === 'admin') {
        success('Login success')
    } else {
        failure('Login failed')
    }
}

login('admin', 'admin', status => console.log(status), error => console.log(error))
login('foo', 'bar', status => console.log(status), error => console.log(error))
/////////////////////////////////////////////////////////////////////////////////////
//curry function

// function outer() {
//     console.log('outer')
//     return function () {
//         console.log('inner-1')
//         return function () {
//             console.log('inner-2')
//             return function () {
//                 console.log('inner-3')
//             }
//         }
//     }
// }

// const outer = () => {
//     console.log('outer')
//     return () => {
//         console.log('inner-1')
//         return () => {
//             console.log('inner-2')
//             return () => {
//                 console.log('inner-3')
//             }
//         }
//     }
// }

// const outer = () => {
//     console.log('outer')
//     return () => {
//         console.log('inner-1')
//         return () => {
//             console.log('inner-2')
//             return () =>console.log('inner-3')            
//         }
//     }
// }
const outer = outer => inner1 => inner2 => inner3 => `${outer} ${inner1} ${inner2} ${inner3}`

let res = outer('outer')('inner-1')('inner-2')('inner3')
console.log(res);
