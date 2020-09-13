import React from 'react';
import axios from 'axios';

const ProductList = props => {
    const deleteProduct = productId => {
        const deleteurl=`http://localhost:8000/api/products/delete/${productId}`;
        axios.delete(deleteurl)
        .then(result => {
            props.refreshProducts();
        })
        .catch(err => alert(JSON.stringify(err)));
    }
    return (
        <table className="table table-striped table-bordered">
             <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                props.products.map((p) => 
                    <tr key={p._id} onClick={() => props.setSelectedProduct(p)}>
                        <td>{p.title}</td>
                        <td>{p.price}</td>
                        <td>{p.description}</td>
                        <td><button onClick={() => deleteProduct(p._id)}>Delete</button></td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}

export default ProductList
