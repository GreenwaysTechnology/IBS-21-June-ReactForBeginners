//functional programming: style of writing code based on mathemetics call lambda calculs : application of lambdas are functional programming.

//1.higher order function:  function itself is value(literal), can be assinged to a variable , passed around - parameter,return.
/*"function declaration; function can be assigned to a variable.
once if you assign function to a variable , that variable can be used
to call /invoke that function."*/


//function as parameter

function add(a = 1, b = 2) {
    return a + b;
}
//
let x = 100;
let y = 300;
console.log(add(x, y))

console.log(add(12, 34))



function query(action) {
    //call function
    let selectQry = "select * from customer";
    let status = action(selectQry);
    console.log(status)
}
//pass function as parameter
let selectQuery = function selectQuery(selectQry) {
    console.log(selectQry);
    return 'processed'
}
//pass function as parameter :
query(selectQuery);
query(function (selectQry) {
    console.log(selectQry);
    return 'processed'

})
/////////////////////////////////////////////////////////////////////////////////