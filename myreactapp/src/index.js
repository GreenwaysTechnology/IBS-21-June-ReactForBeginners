import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Header } from './header'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

//components
const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const url = "https://jsonplaceholder.typicode.com/users"
                const response = await fetch(url)
                const users = await response.json();
                setUsers(users);
            } catch (e) {
                console.error(e);
            }
            finally { setLoading(false) };
        })();
    }, [])

    return <div>
        <h2>Users</h2>
        <ul>
            {isLoading ? <h1>Loading....</h1> :
                users.map((user, index) => {
                    return <li key={index}>
                        <span>{user.name}</span>
                        <span>{user.email}</span>
                    </li>
                })
            }
        </ul>
    </div>
}


const Navigator = () => <BrowserRouter>
    {/* menu bar */}
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
        </ul>
    </nav>
    {/* Rules to map on particular */}
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/users">
            <Users />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>

</BrowserRouter>

const App = () => <div className="container">
    <Header />
    <Navigator />
</div>

ReactDOM.render(<App />, document.getElementById('root'))