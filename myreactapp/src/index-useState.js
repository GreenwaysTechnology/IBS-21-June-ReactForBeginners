import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


const Counter = props => {
    const { seedValue } = props;
    const [value, setValue] = useState(seedValue)
    //listener
    const onIncrement = () => {
        // setValue(prevState => {
        //     console.log(prevState)
        //     return prevState + 1
        // })
        setValue(value + 1)
    }
    return <div className="container">
        <CounterDisplay value={value} setValue={setValue} onIncrement={onIncrement} />
        <button className="btn btn-success" onClick={() => {
            setValue(value - 1)
        }}>Decrement</button>
    </div>
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
    {/* <Counter seedValue={20} />
    <Counter /> */}

</>

ReactDOM.render(<App />, document.getElementById('root'))