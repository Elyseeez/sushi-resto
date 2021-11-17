import React from "react"; 
import MenuItem from "./menu-item";

function Menu ({items}) {
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