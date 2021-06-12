import React from 'react' //
import ReactDOM from 'react-dom'

//create element and flush to js engine
//const Heading =<h1>Hello React</h1>

//code generated by compiler : todo: dont use in real time app.
const Heading = React.createElement(
    'h1',
    null,
    'Hello React!!!!'
);

ReactDOM.render(Heading, document.getElementById('root'))