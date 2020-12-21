import React, { useEffect, useRef, useState } from 'react';
import './index.css';

export default function TopBar({...porps}) {
    const [right, setRight] = useState(0);
    const topBarRight = useRef(null);
    useEffect(()=>{
        setRight(topBarRight.current.clientWidth);
    },[]);

    function backClick(e) {
        if (porps.onBack !== undefined && porps.onBack !== null)
            porps.onBack();
        else{
            window.history.back();
        }
    }
    return (
        <nav
            style={ porps.style||null }
            className={ porps.className?porps.className+' topBar':'topBar' }
        >
            <span className='fa fa-angle-left topBar_left' onClick={backClick}></span>
            <div className='topBar_center' style={{paddingRight:right+'px'}}>{porps.children}</div>
            <div className='topBar_right' ref={topBarRight}>{porps.right}</div>
        </nav>
    );
}