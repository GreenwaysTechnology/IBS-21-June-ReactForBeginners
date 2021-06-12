import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

//state : through which we can make our ui dynamic. data mutations.
// state can be represented inside class component only.
// state can be kept inside functions as well via "hooks".

//this.state which is just variable from Component super class
//and its default value is null . state variable going to hold object in future.


class Counter extends React.Component {

    state = {
        value: 0 // inital state
    }

    //Event handler
    onIncrement = () => {
        // this.setState(function (prevState, props) {
        //     console.log('Previous state', prevState)
        //     return {
        //         value: prevState.value + 1
        //     }
        // }, function () {
        //     console.log('updated..')
        // })

        //this is built in pure function ; new state
        this.setState((prevState, props) => {
            console.log('Previous state', prevState)
            // return {
            //     value: prevState.value + 1
            // }
            // return Object.assign({}, prevState, { value: prevState.value + 1 })
            return { ...prevState, value: prevState.value + 1 }
        })
     //   let value = this.state.value + 1; 
        // this.setState({ value })
    }
    render() {
        console.log('Current state', this.state)
        return <div className="container">
            <h1>Counter App- State Muatations</h1>
            <h3>Value {this.state.value}</h3>
            <button className="btn btn-success" onClick={this.onIncrement} >Increment</button>
        </div>
    }
}

function Display(props) {
    //props.title = "nothing"
    return <h1>{props.title} </ h1>
}

//Impure function
// function updateProfile(profile, city) {
//     profile.city = city;
//     return profile
// }

function updateProfile(profile, city) {
    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // }
    //refactored code
    //return Object.assign({}, profile, { city: city })
    //spread operator
    return { ...profile, city } //immutable object
}

let profile = {
    id: 1,
    name: 'subramaian',
    city: 'Coimbatore'
}
//to test pure or not
Object.freeze(profile)
let result = updateProfile(profile, 'Cochin')
console.log(result)


const App = () => <>
    <Counter />
    <Display title="something" />
</>

ReactDOM.render(<App />, document.getElementById('root'))