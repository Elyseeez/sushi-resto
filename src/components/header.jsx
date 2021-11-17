import React from "react";
import {Link, NavLink} from 'react-router-dom';
import logoPng from "../assets/S.png";
import home from "../assets/icons/home.png";
import menu from "../assets/icons/menu.png";
import cart from "../assets/icons/cart.png";
function Header () {
    return (
        
        <div className="header">
       <div className="header__menu">
       <div className="header__logo">
            <img src={logoPng} alt="logo" className="header__logo-img"/>
        </div>
            <ul className="header__menu-list">
              <li>
                  <img src={home} alt="home" />
                  <Link to='/home'>Home</Link> 
              </li>
                <li className="header__menu-item">
                    <img src={menu} alt="menu" />
                    <NavLink to='/menu' activeClassName="active">Menu</NavLink> 
                </li>
                <li className="header__menu-item">
                    <img src={cart} alt="cart" />
                    <NavLink to='/cart' activeClassName="active">Cart</NavLink> 
                </li>
            </ul>
        </div>
        </div>
    );
}

export default Header;