import React from 'react';
import CartItem from './cart-item';
import {useSelector, useDispatch} from 'react-redux';
import {clearCart, removeCartItem, plusCartItem, minusCartItem} from '../redux/actions/cart';


function Cart () {
    const  dispatch = useDispatch();
    const {items, totalPrice, totalCount} = useSelector (({cart}) => cart);

    const onRemoveItem = (id) => { 
        if(window.confirm('really?')) { 
            dispatch(removeCartItem(id));
        }
    };

    const addedSushi = Object.keys(items).map((key) =>{
        return items[key].items[0];
    });
    const onClearCart = () => {
        dispatch(clearCart());
    }

    const onPlusItem = (id) => { 
        dispatch(plusCartItem(id));
    }
    const onMinusItem = (id) => { 
        dispatch(minusCartItem(id));
    }

    return( 
        <div className="cart">
            <div className="cart__items-list">
                {addedSushi.map((obj) => (
                    <CartItem 
                    key={obj.id}
                    id={obj.id}
                    name={obj.name} 
                    price={obj.price} 
                    totalPrice={items[obj.id].totalPrice} 
                    totalCount={items[obj.id].items.length}
                    onRemove={onRemoveItem}
                    onMinus={onMinusItem}
                    onPlus={onPlusItem} />
                ))}
            
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span className="cart__bottom-text"> Total Ordered: <b>{totalCount}</b> </span>
                <span className="cart__bottom-text"> total price: <b>{totalPrice} $</b> </span>
              </div>
              <div className="cart__clear"> 
              <span onClick={onClearCart}>Clear basket</span>
              </div>
              </div>
        </div>
    )
}

export default Cart;
