import React from "react"; 
import MenuItem from "./sushi-block/menu-item";
import LoadingBlock from "./sushi-block/loading-block";
import {useSelector, useDispatch,} from 'react-redux';
import {fetchSushi} from '../redux/actions/sushi';
// import {addSushiToCart} from '../redux/actions/cart';

function Menu () {
  
  const dispatch = useDispatch();
 
  const items = useSelector(({sushi}) => sushi.items);
  const isLoaded = useSelector(({sushi}) => sushi.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);

  React.useEffect (() =>  { 
      if (!items.lenght) { 
        dispatch(fetchSushi());
      }
  // eslint-disable-next-line    
  }, []);

const handleAddSushiToCart= obj => { 
  dispatch({
    type: 'ADD_SUSHI_CART',
    payload: obj,
  });
};

    return (
        <div className="menu">

            {isLoaded ?
             items.map((obj) =>  <MenuItem onClickAddSushi={handleAddSushiToCart} 
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
                />)
                : Array(16).fill(0)
                .map((_, index) => <LoadingBlock  key={index}/>)}
           
        </div>
    )
}

export default Menu;