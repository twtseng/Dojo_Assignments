import React from 'react';
import axios from 'axios';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const refreshProducts = () => {
    axios.get("http://localhost:8000/api/products")
      .then(response => setProducts(response.data.result))
  }
  React.useEffect(() => {
    refreshProducts();
  },[]);

  return (
    <div className="App">
      <ProductForm selectedProduct={selectedProduct} refreshProducts={refreshProducts}/>
      <ProductList setSelectedProduct={setSelectedProduct} refreshProducts={refreshProducts} products={products}/>
    </div>
  );
}

export default App;
