import React from "react"; 
import MenuItem from "./sushi-block/menu-item";
import LoadingBlock from "./sushi-block/loading-block";
import {useSelector, useDispatch,} from 'react-redux';
import {fetchSushi} from '../redux/actions/sushi';
function Menu () {
  
  const dispatch = useDispatch();
 
  const items = useSelector(({sushi}) => sushi.items);
  const isLoaded = useSelector(({sushi}) => sushi.isLoaded);

  React.useEffect (() =>  { 
      if (!items.lenght) { 
        dispatch(fetchSushi());
      }
  // eslint-disable-next-line    
  }, []);
    return (
        <div className="menu">

            {isLoaded ?
             items.map((obj) =>  <MenuItem key={obj.id}
                isLoading={true} 
                {...obj}
                />)
                : Array(16).fill(0)
                .map((_, index) => <LoadingBlock  key={index}/>)}
           
        </div>
    )
}

export default Menu;