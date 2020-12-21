import React from 'react';
import './index.css';

export default function Card({...props}) {
    return (
        <div
            style={ props.style||null }
            className={ props.className?props.className+' cardItem':'cardItem' }
            onClick={(e)=>{props.onItemClick && props.onItemClick(e)}}
        >
            <a>
                <img src={props.data.image}/>
            </a>
            {
                props.showTitle!==false?
                    <div className='cardTitle'>
                        <h4>{props.data.title}</h4>
                        <p>{props.data.discript}</p>
                    </div>
                    :
                    ''
            }
            {
                props.showPrice!==false?
                    <div className='cardPrice'>
                        <p>
                            ￥{props.data.nowprice}
                            <span>￥{props.data.oldprice}</span>
                        </p>
                        <p>{props.data.sell}</p>
                    </div>
                    :
                    ''
            }
            <div>{props.children}</div>
        </div>
    );
}