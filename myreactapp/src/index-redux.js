import { createStore } from 'redux';

//reducer,action- object , having request details
const CounterReducer = (counter = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //return new state
            return counter + 1;
        default:
            //must return default state
            return counter;
    }

}
//create store
const store = createStore(CounterReducer);

//subscribe for state changes
store.subscribe(function () {
    console.log(store.getState())
})

//send action
const incrementAction = {
    type:'INCREMENT'
}
store.dispatch(incrementAction)
store.dispatch(incrementAction)
store.dispatch(incrementAction)