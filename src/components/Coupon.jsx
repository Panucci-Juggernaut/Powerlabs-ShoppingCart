import { useState } from "react";

const Coupon = ({setDiscount}) => {
    const [couponCode, setCouponCode] = useState('');

    const applyCoupon = (e) => {
        e.preventDefault();
        if (/^POWERLABSx$/.test(couponCode)) {
        setDiscount(0.132);
        } else {
        alert("Oops!!!, invalid coupon");
        setDiscount(0);
        }
    };
    
    return (
        <form className="coupon" onSubmit={applyCoupon}>
            <h2>Apply Coupon</h2>
            <input
                type="text"
                value={couponCode}
                onChange={e => setCouponCode(e.target.value)}
                placeholder="Enter coupon"
            />
            <button>Apply</button>
        </form>
    );
}
 
export default Coupon;