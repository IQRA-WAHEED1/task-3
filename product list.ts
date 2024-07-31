// frontend/src/pages/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map(product => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
