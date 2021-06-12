import React from 'react';
import ReactDOM from 'react-dom'
import logo from './IBS_Software.svg'

//header Component
const Header = () => <nav>
    <img src={logo} />
    <hr />
</nav>

const Main = () => <div>
    <h3>IBS Software</h3>
    <p>
        IBS Software is a leading SaaS solutions provider to the travel industry globally, managing mission-critical operations for customers in the aviation, tour & cruise and hospitality industries.
    </p>
</div>

const Footer = () => <h2>IBS Copyright @ 2021</h2>

const App = () => <div>
    <Header />
    <Main />
    <Footer />
</div>

ReactDOM.render(<App />, document.getElementById('root'))


