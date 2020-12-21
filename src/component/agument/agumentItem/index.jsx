import React from 'react';
import './index.css';

export default function AgumentItem({...props}) {
    return(
        <div className='agument-item'>
            <div className='agument-left'>
                <a>
                    <img src={props.data.image}/>
                </a>
            </div>
            <div className='agument-right'>
                <h5>{props.data.username}</h5>
                <span>{props.data.time}</span>
                <p>{props.data.content}</p>
            </div>
        </div>
    );
}