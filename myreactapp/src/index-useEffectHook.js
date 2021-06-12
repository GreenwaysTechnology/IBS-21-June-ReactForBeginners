import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


const Todo = () => {
    const [todos, setTodos] = useState([])
    const [isLoading, setLoading] = useState(true);

    // const [timerValue, setTimerValue] = useState(0)

    //ComponentDidMount and ComponentDidUpdate is replaced with useEffect
    // useEffect(() => {
    //     setInterval(() => {
    //         setTimerValue(timerValue + 1)
    //     }, 1000)
    // })
    useEffect(() => {
        //const url = 'https://jsonplaceholder.typicode.com/todos'
        // fetch(url)
        //     .then(response => response.json())
        //     .then(todos => {
        //         setTodos(todos)
        //     })
        //     .catch(err => console.log(err))

        //IEFE -Function
        (async () => {
            try {
                const url = 'https://jsonplaceholder.typicode.com/todos'
                const response = await fetch(url)
                const todos = await response.json();
                setTodos(todos);
            } catch (e) {
                console.error(e);
            }
            finally { setLoading(false) };
        })();
    }, [])

    return <div className="container">
        <h2>Todo App </h2>
        <ul>
            {/**condtional rendering... */}
            {isLoading ? <h1>Loading....</h1> :
                todos.map((todo, index) => {
                    return <li key={index}>{todo.title}</li>
                })
            }
        </ul>
    </div>
}


const App = () => <>
    <Todo />
</>

ReactDOM.render(<App />, document.getElementById('root'))