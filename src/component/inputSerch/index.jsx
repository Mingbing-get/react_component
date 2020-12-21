import React from 'react';
import './index.css';

export default class InputSerch extends React.Component {
    constructor(){
        super();
        this.state = {
            iconStyle:'',
            value:''
        }
    };
    componentDidMount(){
        if (this.props.defaultValue){
            this.setState({
                value:this.props.defaultValue,
                iconStyle:'clearcontent'
            });
        }
    };
    inputChange = (e)=>{
        let value = e.target.value;
        let clearcontent = value && value.length>0;
        if (!(this.state.iconStyle === 'clearcontent' && clearcontent)){
            this.setState({
                iconStyle:clearcontent?'clearcontent':''
            });
        }
        this.setState({
            value
        });
        this.props.onchange && this.props.onchange(value);
    };
    clearClick = ()=>{
        if (this.state.iconStyle === 'clearcontent'){
            this.setState({
                value:'',
                iconStyle:''
            });
        }
        this.props.onchange && this.props.onchange('');
    };
    render(){
        return(
            <div className='input-serch-box'>
                <input
                    placeholder={this.props.placeholder && this.props.placeholder}
                    onChange={(e)=>{this.inputChange(e)}}
                    value={this.state.value}
                />
                <span
                    className={this.state.iconStyle}
                    onClick={this.clearClick}
                ></span>
            </div>
        );
    }
}