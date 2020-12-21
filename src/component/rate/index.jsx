import React from 'react';
import './index.css';

export default class Rate extends React.Component {
    constructor(){
        super();
        this.state = {
            star:[],
            style:{}
        }
    };
    componentDidMount(){
        this.initRate(this.props.rate);
        this.setStyle();
    };
    initRate(rate){
        rate = rate || 0;
        if (rate < 0)
            rate = 0;
        else if (rate > 5)
            rate = 5;
        let dataTemp = [];
        let starnum = Math.floor(rate);
        let starHalfnum = Math.ceil(rate) - Math.floor(rate);
        let starOnum = 5 - starnum - starHalfnum;
        for (let i = 0; i < starnum; i++){
            dataTemp.push({classType:'fa-star'});
        }
        for (let i = 0; i < starHalfnum; i++){
            dataTemp.push({classType:'fa-star-half-o'});
        }
        for (let i = 0; i < starOnum; i++){
            dataTemp.push({classType:'fa-star-o'});
        }
        this.setState({
            star:dataTemp
        });
    };
    setStyle(){
        let temp = {};
        if (this.props.margin)
            temp.margin = '0 '+this.props.margin+'px';
        if (this.props.color)
            temp.color = this.props.color;
        if (this.props.size)
            temp.fontSize = this.props.size+'px';
        this.setState({
            style:temp
        });
    };
    mouseEnter = (e)=>{
        if (this.props.ischange === false)
            return;
        let allspan = e.target.parentNode.childNodes;
        for (let i = 0; i < allspan.length; i++){
            if (allspan[i] === e.target){
                if (this.props.changeRate)
                    this.props.changeRate(i+1);
                this.initRate(i+1);
                break;
            }
        }
    };
    render(){
        return(
            <div className='rate-box'>
                {
                    this.state.star.map((value, index)=>{
                        return(
                            <span
                                className={'fa '+value.classType}
                                style={this.state.style}
                                key={index}
                                onMouseEnter={this.mouseEnter}
                            ></span>
                        );
                    })
                }
            </div>
        );
    }
}