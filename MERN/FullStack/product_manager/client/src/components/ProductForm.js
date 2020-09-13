import React from 'react';
import axios from 'axios';

const ProductForm = props => {
    const [title, setTitle] = React.useState("<title>");
    const [price, setPrice] = React.useState(0);
    const [description, setDescription] = React.useState("<description>");

    React.useEffect(() => {
        if (props.selectedProduct == null) {
            // console.log("selectedProduct is null");
        } else {
            setTitle(props.selectedProduct.title);
            setPrice(props.selectedProduct.price);
            setDescription(props.selectedProduct.description);
        }

    },[props.selectedProduct]);

    const addProduct = (e) => {
        e.preventDefault();
        let productToAdd = {
            title: title,
            price: price,
            description: description
        };
        axios.put("http://localhost:8000/api/products/add", productToAdd)
        .then(result => props.refreshProducts())
        .catch(err => alert(JSON.stringify(err)));
    }
    const updateProduct = (e) => {
        e.preventDefault();
        const updateurl=`http://localhost:8000/api/products/update/${props.selectedProduct._id}`;
        let updatedValues = {
            title: title,
            price: price,
            description: description
        };
        axios.patch(updateurl, updatedValues)
        .then(result => {
            if (result.data.status === "succeeded") {
                props.refreshProducts();
            } else {
                alert(result.data.message);
            }
        })
        .catch(err => alert(JSON.stringify(err)));
    }
    return (
        <div className="card" style={{width: "18rem"}}>
        <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" className="form-control" id="price" placeholder="Enter price" value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <button onClick={addProduct} className="btn btn-primary">Add</button>
            {
                props.selectedProduct
            ? <button onClick={updateProduct} className="btn btn-primary">Update {props.selectedProduct.title}</button>
                : <></>
            }
        </form>
        </div>
    )
}

export default ProductForm
