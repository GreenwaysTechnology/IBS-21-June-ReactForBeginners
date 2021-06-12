import React from 'react'

//props is variable,collects all values as one single object
// props = {id:1,name:'',isAvaiable}
// export const Product = props => <>
//     {
//         props.products.map((product, index) => {
//             console.log(index)
//             return <>
//                 <div key={index}>
//                     <h3 className="badge bg-secondary">{product.id}</h3>
//                     <p>Name {product.name} </p>
//                     <p>Status {product.isAvailable ? "Available" : "Not Avaiable"} </p>
//                     <p>Desc {product.desc.type} {product.desc.price} </p>
//                 </div>
//             </>
//         })
//     }

// </>

export class Product extends React.Component {

    render() {
        const { products } = this.props;
        return <>
            {
                products.map((product, index) =><div key={index}>
                        <h3 className="badge bg-secondary">{product.id}</h3>
                        <p>Name {product.name} </p>
                        <p>Status {product.isAvailable ? "Available" : "Not Avaiable"} </p>
                        <p>Desc {product.desc.type} {product.desc.price} </p>
                </div>)
            }
        </>
    }

}