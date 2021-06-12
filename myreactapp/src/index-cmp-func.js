import React from 'react'
import ReactDOM from 'react-dom';

//using function
// function Heading() {
//     return <h1>Hello React</h1>
// }

const Heading = () => <h1>Hello React</h1>

//imperative way of calling function:Not recommend
//ReactDOM.render(Heading(),document.getElementById('root'))
//declarative way of calling function
ReactDOM.render(<Heading />, document.getElementById('root'))
