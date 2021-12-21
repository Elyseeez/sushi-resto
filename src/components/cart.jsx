import React from 'react';
import CartItem from './cart-item';
import {useSelector} from 'react-redux';


function Cart () {
    const {items, totalPrice, totalCount} = useSelector (({cart}) => cart);
    console.log(items);

    const addedSushi = Object.keys(items).map((key) =>{
        return items[key].items[0];
    });
    console.log(1, addedSushi);

    return( 
        <div className="cart">
            <div className="cart__items-list">
                {addedSushi.map((obj) => (
                    <CartItem name={obj.name} price={obj.price} />
                ))}
            
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span> Total Ordered <b>{totalCount}</b> </span>
                <span> total price: <b>{totalPrice} $</b> </span>
              </div>
              </div>
        </div>
    )
}

export default Cart;
