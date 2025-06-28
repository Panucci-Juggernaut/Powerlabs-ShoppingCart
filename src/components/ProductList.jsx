import { useState, useEffect } from "react";

const ProductList = ({ setCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(() => alert("Failed to load products"));
    }, []);

    const addToCart = product => {
        setCart(prev => ({
        ...prev,
        [product.id]: {
            ...product,
            quantity: (prev[product.id]?.quantity || 0) + 1
        }
        }));
    };
    

    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.map(product => (
                <div key={product.id} className="product">
                <span>{product.name} - ₦{product.price.toLocaleString()}</span>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}
 
export default ProductList;