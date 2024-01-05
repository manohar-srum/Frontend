// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddProduct';
import ViewProducts from './components/ViewProducts';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (productName) => {
    setProducts([...products, productName]);
  };

  const updateProduct = (index, updatedProductName) => {
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProductName;
    setProducts(updatedProducts);
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Product Management System</h1>
      <div className="row">
        <div className="col-md-3">
          <AddProduct addProduct={addProduct} />
        </div>
        <div className="col-md-3">
          <ViewProducts products={products} />
        </div>
        <div className="col-md-3">
          <UpdateProduct products={products} updateProduct={updateProduct} />
        </div>
        <div className="col-md-3">
          <DeleteProduct products={products} deleteProduct={deleteProduct} />
        </div>
      </div>
    </div>
  );
};

export default App;
