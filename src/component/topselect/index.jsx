import React, {useRef, useState, useEffect} from 'react';
import './index.css';

export default function Topselect({...porps}) {
    const [right, setRight] = useState(0);
    const [left, setLeft] = useState(0);
    const topSelectLeft = useRef(null);
    const topSelectRight = useRef(null);

    useEffect(()=>{
        setRight(topSelectRight.current.clientWidth);
        setLeft(topSelectLeft.current.clientWidth);
    },[]);

    return (
        <nav
            style={ porps.style||null }
            className={ porps.className?porps.className+' topselect':'topselect' }
        >
            <div className='topselect_left' ref={topSelectLeft}>{porps.left}</div>
            <div className='topselect_center' style={{paddingRight:right+'px', paddingLeft:left+'px'}}>
                {porps.children?porps.children:<div style={{visibility:'hidden'}}>.</div>}
                </div>
            <div className='topselect_right' ref={topSelectRight}>{porps.right}</div>
        </nav>
    );
}