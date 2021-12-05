import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" />
                <div>
                    <h3 className="checkout_title">Your Shopping Details</h3>
                    
                </div>

            </div>

            <div className="checkout_right">
                <Subtotal />
               

            </div>

        </div>
    )
}
export default Checkout