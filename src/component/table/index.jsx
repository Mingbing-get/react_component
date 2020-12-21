import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import './index.css';
import TableRow from './tableRow';

function Table({...props}) {
    const mainBox = useRef(null);
    useEffect(()=>{
        if (!props.lastCol)
            return;
        let childs = mainBox.current.children;
        for (let i = 0; i < childs.length; i++){
            if (childs[i].className.indexOf('table-row') !== -1){
                let mydiv = document.createElement('div');
                ReactDOM.render(props.lastCol, mydiv);
                childs[i].appendChild(mydiv)
            }
        }
    },[]);
    return (
        <div
            className={props.className?'table-box '+props.className:'table-box'}
            style={props.style&&props.style}
        >
            {
                props.title &&
                <div
                    className={props.title.className?'table-title '+props.title.className:'table-title'}
                    style={props.title.style&&props.title.style}
                >
                    {props.title.content}
                </div>
            }
            <div className='table-main' ref={mainBox}>
                {props.children}
            </div>
            {
                props.footer &&
                <div
                    className={props.footer.className?'table-footer '+props.footer.className:'table-footer'}
                    style={props.footer.style&&props.footer.style}
                >
                    {props.footer.content}
                </div>
            }
        </div>
    );
}

Table.TableRow=TableRow;

export default Table;