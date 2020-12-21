import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SlidTest extends React.Component {
    constructor(props){
        super(props);
        this.slidbox = React.createRef();
        this.state = {
            start:0,
            predistence:0,
            distence:0,
            flag:false,
            slidwidth:0,
            rotate:0,
            cushiRotate:0,
            controlClass:'orgin'
        }
    }
    componentDidMount(){
        //随机旋转一定角度
        let rotate = Math.floor(300*Math.random())+60;
        this.setState({
            slidwidth:this.slidbox.current.clientWidth-40,
            rotate,
            cushiRotate: rotate
        });
    };
    controlDown = (e)=>{
        this.setState({
            start:e.clientX,
            flag: true
        });
    };
    controlMove = (e)=>{
        let distence = e.clientX - this.state.start+this.state.predistence;
        if (!this.state.flag || e.clientX < this.state.start-this.state.predistence || distence > this.state.slidwidth)
            return;
        this.setState({
            distence,
            rotate:this.state.cushiRotate+Math.floor(360*distence/this.state.slidwidth)
        });
    };
    controlUp = (e)=>{
        this.setState({
            flag:false,
            start:0,
            predistence: this.state.distence
        });
        this.confirm();
    };
    confirm = ()=>{
        let tongguo = (this.state.rotate+10)%360 < 20;
        this.setState({
            controlClass:tongguo ? 'cheak' : 'error'
        });
        if (!tongguo && this.props.repeat){
            setTimeout(()=>{
                let rotate = Math.floor(300*Math.random())+60;
                this.setState({
                    start:0,
                    predistence:0,
                    distence:0,
                    flag:false,
                    rotate:rotate,
                    cushiRotate:rotate,
                    controlClass:'orgin'
                });
            },this.props.time);
        }
        this.props.confirm && this.props.confirm(tongguo);
    };
    render(){
        return (
            <div className='slidtest-box'>
                <div
                    className={'slidtest-img '+this.state.controlClass}
                    style={{
                        backgroundImage:'url('+this.props.img+')',
                        transform: 'rotateZ('+this.state.rotate+'deg)'
                    }}
                ></div>
                <div className='slidtest-slide' ref={this.slidbox}>
                    <p>{this.props.context}</p>
                    <div
                        className='slidtest-slide-left'
                        style={{width:this.state.distence+40+'px'}}
                    ></div>
                    <div
                        className={'slidtest-slide-control '+this.state.controlClass}
                        style={{left:this.state.distence+'px'}}
                        onMouseDown={(e)=>{this.controlDown(e)}}
                        onMouseMove={(e)=>{this.controlMove(e)}}
                        onMouseUp={(e)=>{this.controlUp(e)}}
                    ></div>
                </div>
            </div>
        )
    }
}

SlidTest.propTypes = {
    img: PropTypes.string.isRequired,
    time: PropTypes.number,
    repeat:PropTypes.bool,
    context:PropTypes.string,
    confirm:PropTypes.func
};

SlidTest.defaultProps = {
    time: 500,
    repeat: true,
    context:'滑动将图片转正'
};

export default SlidTest;