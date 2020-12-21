import React from 'react';
import './index.css';

export default class CheakBox extends React.Component {
    cheakClick = ()=>{
        if (this.props.disabled)
            return;
        this.props.onchange && this.props.onchange(!this.props.checked);
    };
    render(){
        return(
            <div
                className={(this.props.cheaksqure?'cheakAll ':'')+(this.props.checked?'cheaked ':'')
                +(this.props.disabled?'disabled ':'')+'cheakbox-box'}
                onClick={this.cheakClick}
            >
            </div>
        );
    }
}