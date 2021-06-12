import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


class Todo extends React.Component {

    state = {
        todos: []
    }
    async componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        // fetch(url)
        //     .then(response => response.json())
        //     .then(todos => {
        //         this.setState({ ...todos, todos })
        //     })
        //     .catch(err => console.log(err))
        try {
            const response = await fetch(url)
            const todos = await response.json()
            this.setState({ ...todos, todos })
        }
        catch (err) {
            console.log(err)
        }

    }

    render() {
        return <div className="container">
            <h2>Todo App</h2>
            <ul>
                {
                    this.state.todos.map((todo, index) => {
                        return <li key={index}>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    }
}


const App = () => <>
    <Todo />
</>

ReactDOM.render(<App />, document.getElementById('root'))