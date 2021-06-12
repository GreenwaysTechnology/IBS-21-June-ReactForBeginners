import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


class Parent extends React.Component {

    state = {
        counter: 0
    }

    constructor() {
        super();
        console.log('Parent constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('current props', props, 'currentstate', state)
        return state
    }

    componentDidMount() {
        console.log('Parent Component did mount is called')
        //timer
        setInterval(() => {
            this.setState((prevState) => {
                return Object.assign({}, prevState, { counter: prevState.counter + 1 })
            })
        }, 1000)
    }

    render() {
        console.log('Parent render is called')
        return <div className="container">
            <h1>Parent {this.state.counter}</h1>
            <Child title="somthing" />
        </div>
    }
}

class Child extends React.Component {

    state = {
        value: 10
    }
    constructor() {
        super();
        console.log('Child constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('current props', props, 'currentstate', state)
        return state
    }
    componentDidMount() {
        console.log('Child Component did mount is called')
    }

    render() {
        console.log('Child render is called')
        return <h1>
            Child
      </h1>
    }
}


const App = () => <>
    <Parent />
</>

ReactDOM.render(<App />, document.getElementById('root'))