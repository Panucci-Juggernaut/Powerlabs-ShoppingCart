const Cart = ({ cart, setCart, discount }) => {

    const updateQuantity = (productId, delta) => {

        setCart(prev => {
        const newQty = (prev[productId]?.quantity || 0) + delta;
        if (newQty <= 0) {
            const { [productId]: _, ...rest } = prev;
            return rest;
        }
        return {
            ...prev,
            [productId]: {
            ...prev[productId],
            quantity: newQty
            }
        };
        });
    };
    const removeItem = productId => {
        setCart(prev => {
        const { [productId]: _, ...rest } = prev;
        return rest;
        });
    };

    const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountedTotal = total - total * discount;
    
    return (
        <div className="cart">
            <h2>Cart</h2>
            {Object.keys(cart).length === 0 && <p>Cart is empty</p>}
            {Object.values(cart).map(item => (
                <div key={item.id} className="cart-item">
                <span>{item.name} - ₦{item.price.toLocaleString()} × {item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
            ))}
            <h3>Total: ₦{total.toLocaleString()}</h3>
            {discount > 0 && <h3>Discounted Total: ₦{discountedTotal.toLocaleString()}</h3>}
        </div>
    );
}
 
export default Cart;