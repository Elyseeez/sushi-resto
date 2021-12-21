import React from 'react';
import round from '../assets/round.png';


function CartItem ({name, imageUrl,  price, totalPrice, totalCount}) {
    return( 
        <div className="cart__wrapper">
            <div className="cart__items">
                <div className="cart__item">
                    <div className="cart__item-img"><img  src={round} alt="" /></div>
                    <div className="cart__item-info">
                        <h3 className="cart__item-text">{name}</h3>
                    </div>
                    <div className="cart__item-price">{price}$</div>
                    <div className="cart__item-count">
                        <button>-</button>
                        <b>1</b>
                        <button>+</button>
                    </div>
                    <div className="cart__item-remove">x</div>
                    
                    </div> 
         
            </div>
            
           
        </div>
    )
}


export default  CartItem;