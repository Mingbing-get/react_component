import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Adv extends React.Component {
    constructor(props){
        super(props);
        this.timeout = null;
        this.state = {
            src:this.props.data[0],
            width:0,
            height:0,
            colWidth:0,
            colHeight:0,
            tiaoswitch:'myscale-'+this.props.direction+' '+this.props.time+'s ease '+this.props.delat+'s forwards',
            flag:true,
            current: 0
        }
    }
    componentWillMount(){
        //初始化加载图片，计算图片的尺寸
        let img = document.createElement('img');
        img.src = this.props.data[0];
        img.onload = ()=>{
            this.setState({
                width: img.width,
                height: img.height,
                colWidth: this.props.direction==='row' ? img.width/this.props.col : img.width,
                colHeight: this.props.direction==='row' ? img.height : img.height/this.props.col,
            });
        };
    }
    componentWillUnmount(){
        if (this.timeout)
            clearTimeout(this.timeout);
    }
    animationEnd = (e)=>{
        if (this.timeout){
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(()=>{
            if (!this.state.flag){
                this.setState({
                    tiaoswitch:'myscale-'+this.props.direction+' '+this.props.time+'s ease '+this.props.delat+'s forwards',
                    flag:true
                });
                return;
            }
            let current = this.state.current+1>=this.props.data.length?0:this.state.current+1;
            this.setState({
                current: current,
                src:this.props.data[current],
                tiaoswitch:'myscaleback-'+this.props.direction+' '+this.props.time+'s ease forwards',
                flag:false
            });
        },10);
    };
    render(){
        const style = {
            width: this.state.width+'px',
            height: this.state.height+'px',
            flexDirection: this.props.direction
        };
        return (
            <div className='adv-box' style={style}>
                {
                    new Array(this.props.col).fill(1).map((val, index)=>{
                        let style = {
                            width:this.state.colWidth+'px',
                            height:this.state.colHeight+'px',
                            backgroundImage:'url('+this.state.src+')',
                            backgroundPosition:this.props.direction==='row' ? -this.state.colWidth*index+'px' : '0 -'+this.state.colHeight*index+'px',
                            animation: this.state.tiaoswitch
                        };
                        return (
                            <div key={index} style={style} className={'adv-tiao-'+this.props.direction} onAnimationEnd={(e)=>{this.animationEnd(e)}}></div>
                        )
                    })
                }
            </div>
        )
    }
}

Adv.propTypes = {
    time: PropTypes.number,
    delat: PropTypes.number,
    col: PropTypes.number,
    direction:PropTypes.string,
    data(props, propName, componentName) {
        if (!(propName in props)) {
            return new Error(`missing ${propName}`)
        }
        if (props[propName].length === 0){
            return new Error(`${propName} at least one element`)
        }
    }
};

Adv.defaultProps = {
    time: 1,
    delat: 5,
    col: 16,
    direction:'row'
};

export default Adv;