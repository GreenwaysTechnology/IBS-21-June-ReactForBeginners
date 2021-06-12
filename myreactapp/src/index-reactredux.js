import { createStore } from 'redux';
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { connect, Provider } from 'react-redux'


//action constants
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//action
export const IncrementAction = {
    type: INCREMENT
};
export const DecrementAction = {
    type: DECREMENT
};
export const CounterReducer = (counter = 10, action) => {
    //logic
    switch (action.type) {
        case INCREMENT:
            //return new state
            return counter + 1;
        case DECREMENT:
            //return new state
            return counter - 1;
        default:
            //must return default state
            return counter;
    }
}
//create store
export const store = createStore(CounterReducer);
//////////////////////////////////////////////////////////////////////////////
//mapper function : Function converts Redux state into React Props because react is just View layer. 

function mapStateToProp(counter) {
    return {
        //Prop:state 
        counter: counter
    }
}
//////////////////////////////////////////////////////////////////////////////
//component
export const Increment = props => {
    const { counter, dispatch } = props;
    const onIncrement = () => {
        //call redux INCREMENT Logic
        dispatch(IncrementAction)
    }
    return <div className="container">
        <h1>React - Redux - Counter App</h1>
        <h2>Counter {counter}</h2>
        <button className="btn btn-success" onClick={onIncrement}>+</button>
        <button className="btn btn-success" onClick={() => {
            dispatch(DecrementAction)
        }}>-</button>

    </div>
}

//Higher Order Component: Merging Increment Component with Mapper function
const IncrementContainer = connect(mapStateToProp)(Increment)

export const App = () => <>
    <Provider store={store}>
        <IncrementContainer />
    </Provider>
</>

ReactDOM.render(<App />, document.getElementById('root'))





