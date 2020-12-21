import React from 'react';
import './index.css';

export default function TableRow({...props}) {
    return (
        <div className='table-row'>
            {
                props.data &&
                    props.data.map((value, index)=>{
                        return (
                            <div key={index}>{value}</div>
                        );
                    })
            }
        </div>
    );
}