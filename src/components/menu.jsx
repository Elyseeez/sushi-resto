import React from "react"; 
import MenuItem from "./menu-item";
import {useSelector, useDispatch,} from 'react-redux';
import {fetchSushi} from '../redux/actions/sushi';
function Menu () {
    const dispatch = useDispatch();
 
  const items = useSelector(({sushi}) => sushi.items);
  React.useEffect (() =>  { 
      if (!items.lenght) { 
        dispatch(fetchSushi());
      }
  // eslint-disable-next-line    
  }, []);
    return (
        <div className="menu">

            {items && items.map((obj) => (
                <MenuItem key={obj.id} 
                {...obj}
                />
                ))}
           
        </div>
    )
}

export default Menu;