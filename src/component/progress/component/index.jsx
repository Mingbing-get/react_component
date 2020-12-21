import React from 'react';
import './index.css';

export default class Progress extends React.Component {
    constructor(){
        super();
        this.hr = React.createRef();
        this.state = {
            t:0,
            interval:null
        };
    };
    componentDidMount(){
        let interval = setInterval(()=>{
            this.setState({
                t:this.state.t+1
            });
            this.setHrLength();
        }, 100);
        this.setState({
            interval
        });
    };
    componentWillUnmount(){
        this.hr.current.style.width = '100%';
        clearInterval(this.state.interval);
    };
    setHrLength(){
        let length = (this.state.t-1)/this.state.t;
        this.hr.current.style.width = length*100+'%';
    };
    render(){
        return(
            <div className='progress-box'>
                <hr ref={this.hr}/>
            </div>
        );
    }
}