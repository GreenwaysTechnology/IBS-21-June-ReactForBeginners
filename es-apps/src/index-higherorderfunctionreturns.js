//1.higher order function:  function itself is value(literal), can be assinged to a variable , passed around - parameter,return.
/*"function declaration; function can be assigned to a variable.
once if you assign function to a variable , that variable can be used
to call /invoke that function."*/


function counter(value = 1) {
    console.log('counter', value)
    // function inc() {
    //     console.log('inc')
    // }
    // return inc; // return function
    return function (counter = 90) {
        console.log('inc', counter)
    }

}
// const increment = counter()
// increment();
counter(100)(111)

