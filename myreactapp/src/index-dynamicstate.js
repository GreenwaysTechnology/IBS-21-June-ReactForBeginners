import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

//container component
class Counter extends React.Component {
    state = {
        value: this.props.seedValue// inital state
    }
    onIncrement = () => {
        this.setState((prevState, props) => {
            return { ...prevState, value: prevState.value + 1 }
        })
    }
    render() {
        return <CounterDisplay
            value={this.state.value}
            onIncrement={this.onIncrement} />
    }
}

Counter.defaultProps = {
    seedValue: 0
}

//Presentational Component
const CounterDisplay = props => <div className="container">
    <h1>Counter App- State Muatations</h1>
    <h3>Value {props.value}</h3>
    <button className="btn btn-success" onClick={props.onIncrement}>Increment</button>
</div>

const App = () => <>
    <Counter seedValue={10} />
    <Counter seedValue={20} />
    <Counter />

</>

ReactDOM.render(<App />, document.getElementById('root'))