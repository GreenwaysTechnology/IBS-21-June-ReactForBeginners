import React from 'react';
import { Product } from './product';

const headerStyle = {
    color: "red",
    fontStyle: 'italic'
}

//hardcoded data 
// const id = 1;
// const name = "AIRLINE PASSENGER SOLUTIONS"
// const isAvailable = true;
// const desc = {
//     price: 100000,
//     type: 'Browser based App'
// }

const products = [
    {
        id: 1,
        name: "AIRLINE PASSENGER SOLUTIONS",
        isAvailable: true,
        desc: {
            price: 10000,
            type: 'Browser based App'
        }
    },
    {
        id: 2,
        name: "AIR MAIL MANGEMENT",
        isAvailable: true,
        desc: {
            price: 10000,
            type: 'Browser based App'
        }
    },
    {
        id: 3,
        name: "ULD MAIL MANGEMENT",
        isAvailable: true,
        desc: {
            price: 10000,
            type: 'Browser based App'
        }
    }
]


export const Main = () => <div>
    <h3 style={headerStyle}>IBS Software</h3>
    <p>
        IBS Software is a leading SaaS solutions provider to the travel industry globally, managing mission-critical operations for customers in the aviation, tour & cruise and hospitality industries.
</p>
    {/**sending props - properties */}
    {/* <Product id={id} name={name} isAvailable={isAvailable} desc={desc} />
    <Product id={id} name={name} isAvailable={isAvailable} desc={desc} />
    <Product id={id} name={name} isAvailable={isAvailable} desc={desc} />
    <Product id={id} name={name} isAvailable={isAvailable} desc={desc} />
    <Product id={id} name={name} isAvailable={isAvailable} desc={desc} /> */}
    <Product products={products} />


</div>