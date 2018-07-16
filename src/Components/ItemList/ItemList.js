import React from 'react';

const ItemList = (props)=>{
    return props.items.map((item) => <li>{item.description}</li>

);
}


/*const ItemList = (props) => {
    return props.items.map((item) => (
        <div key={item.itemId} className="card" style={ {width: '18rem'}}>
            <div className="card-header">
            
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">{item.image}</li>
            <li className="list-group-item">{item.description}</li>
            </ul>
        </div>
    ))
}
*/

export default ItemList;