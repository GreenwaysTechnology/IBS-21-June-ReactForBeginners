import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './IBS_Software.svg'



const Carousel = props => <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    {
        props.children
    }

</div>

const Display = props => <h1>
    {props.title}
</h1>
//default Props
Display.defaultProps = {
    title: 'Google'
}
//Property Validation
Display.propTypes = {
    title: PropTypes.string
}

const App = () => {
    return <div className="container">
        {/* <Display title={12} /> */}
        <Carousel>
            <img src={logo} />
        </Carousel>
        <Carousel>
            <Display title="Ibs" />
            <Display />
        </Carousel>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))