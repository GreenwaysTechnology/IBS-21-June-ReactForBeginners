import React from 'react'
import ReactDOM from 'react-dom'
// import { Header } from './header/header'
// import { NavBar } from './header/navbar'
import { Header, NavBar } from './header'
//import { Footer } from './footer/footer'
import { Footer } from './footer'
//import { Main } from './main/main'
import { Main } from './main'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


const App = () => <div className="container">
    <Header />
    <NavBar />
    <Main />
    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))