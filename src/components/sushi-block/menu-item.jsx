import React from 'react';
import PropTypes from 'prop-types';

function MenuItem ({id, name, imageUrl, price, onClickAddSushi}) {

    const onAddSushi = () => {
        const obj = {
            id, 
            name,
            imageUrl, 
            price 
        };
        onClickAddSushi(obj);
    };
   
    return (
        <>
        
            <li className="menu__item">
                <img className="menu__img" src={imageUrl} alt="img"></img>
                    <div className="menu__title">{name}</div>
                    <div className="menu__price">Price: <span>${price}</span></div>
                    <button onClick={onAddSushi} 
                        className="menu__btn">Add to cart</button>      
            </li>
            </>
    )
    
}


MenuItem.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  };

MenuItem.defaulProps = { 
    name: '---',
    price: 0,
    isLoading: false
}

export default MenuItem;
