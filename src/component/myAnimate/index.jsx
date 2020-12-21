import React from 'react';
import './index.css';

export default class MyAnimate extends React.Component {
    constructor(props){
        super(props);
        this.animatediv = React.createRef();
        this.state={
            style:{opacity:0}
        }
    }

    componentDidMount(){
        switch (this.props.type) {
            case 'fidinRight':
                this.fidinRight(this.props.time);
                break;
            case 'fidinDown':
                this.fidinDown(this.props.time);
                break;
            case 'fidin':
                this.fidin(this.props.time);
                break;
            default:
                break;
        }
    }

    fidinRight(speed) {
        speed = speed || 1000;
        const width = this.animatediv.current.children[0].offsetWidth;
        speed = width*1000/speed/60;
        let currentWidth = 0;
        this.setState({
            style:{
                opacity:1,
                width:'0px'
            }
        });
        const animate = ()=>{
            currentWidth = currentWidth+speed > width ? width : currentWidth+speed;
            this.setState({
                style:{
                    width: currentWidth+'px'
                }
            });
            if (currentWidth < width){
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }
    fidinDown(speed) {
        speed = speed || 1000;
        const height = this.animatediv.current.offsetHeight;
        const width = this.animatediv.current.children[0].offsetWidth;
        speed = height*1000/speed/60;
        let currentHeight = 0;
        this.setState({
            style:{
                opacity:1,
                height:'0px',
                width:width+'px'
            }
        });
        const animate = ()=>{
            currentHeight = currentHeight+speed > height ? height : currentHeight+speed;
            this.setState({
                style:{
                    height: currentHeight+'px',
                    width:width+'px'
                }
            });
            if (currentHeight < height){
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }
    fidin(speed) {
        speed = speed || 1000;
        const height = this.animatediv.current.offsetHeight;
        const width = this.animatediv.current.children[0].offsetWidth;
        const hspeed = height*1000/speed/60;
        const wspeed = width*1000/speed/60;
        let currentHeight = 0;
        let currentWidth = 0;
        this.setState({
            style:{
                opacity:1,
                height:'0px',
                width:'0px'
            }
        });
        const animate = ()=>{
            currentHeight = currentHeight+hspeed > height ? height : currentHeight+hspeed;
            currentWidth = currentWidth+wspeed > width ? width : currentWidth+wspeed;
            this.setState({
                style:{
                    height: currentHeight+'px',
                    width:currentWidth+'px'
                }
            });
            if (currentHeight < height || currentWidth < width){
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }

    render(){
        return (
            <div
                className='animate'
                style={this.state.style}
                ref={this.animatediv}
            >
                {this.props.children}
            </div>
        );
    }
}