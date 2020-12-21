import React from 'react';
import './index.css';
import MenuItem from './menuItem';

function Menu({...props}) {
    return (
        <div
            className={props.className?props.className+' menu-bar':'menu-bar'}
            style={props.style?props.style:null}
        >
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

Menu.MenuItem = MenuItem;

export default Menu;