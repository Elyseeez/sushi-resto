import React from 'react';

function MenuItem ({name, imageUrl, price}) {
    return (
        <>
        
            <li className="menu__item">
                <img className="menu__img" src={imageUrl} alt="img"></img>
                    <div className="menu__title">{name}</div>
                    <div className="menu__price">Price: <span>${price}</span></div>
                    <button onClick = {(e) => {
                            e.preventDefault();
                        } } 
                        className="menu__btn">Add to cart</button>      
            </li>
            </>
    )
    
}


export default MenuItem;
