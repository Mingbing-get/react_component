import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Turn extends React.Component {
    constructor(props){
        super(props);
        this.fanPage = React.createRef();
        this.fancurrentPage = React.createRef();
        this.state = {
            current:0
        };
    };
    componentDidMount(){
        this.nextFanye();
    }
    componentDidUpdate(oldProps, oldState){
        if (oldState.current < this.state.current)
            this.nextFanye();
        else if (oldState.current > this.state.current)
            this.preFanye();
    }
    nextFanye(){
        if (this.fanPage.current){
            this.fanPage.current.className = 'turn-stage-page';
            setTimeout(()=>{
                this.fanPage.current.className = 'turn-page-animate '+this.fanPage.current.className;
            },0);
        }
    }
    preFanye(){
        if (this.fancurrentPage.current){
            this.fancurrentPage.current.className = 'turn-stage-page turn-page-prepage';
            setTimeout(()=>{
                this.fancurrentPage.current.className = 'turn-back-page-animate '+this.fancurrentPage.current.className;
            },0);
        }
    }
    nextPage = ()=>{
        this.setState({
            current:this.state.current+1<this.props.data.length?this.state.current+1:this.props.data.length-1
        });
    };
    prePage = ()=>{
        this.setState({
            current:this.state.current-1>0?this.state.current-1:0
        });
    };
    render(){
        return (
            <div className='turn-box' style={{height:this.props.height, width:this.props.width}}>
                <div className='turn-stage'>
                    <div className='turn-stage-wrap'>
                        {
                            this.state.current < this.props.data.length-1 &&
                            <div className='turn-stage-page'>{this.props.data[this.state.current+1]}</div>
                        }
                        {
                            <div className='turn-stage-page' ref={this.fancurrentPage}>{this.props.data[this.state.current]}</div>
                        }
                        {
                            this.state.current > 0 &&
                            <div className='turn-stage-page' ref={this.fanPage}>{this.props.data[this.state.current-1]}</div>
                        }
                        {
                            this.state.current > 1 &&
                            <div className='turn-page-prepage turn-stage-page'>{this.props.data[this.state.current-2]}</div>
                        }
                    </div>
                </div>
                <div className='turn-control'>
                    <button onClick={this.nextPage}>下一页</button>
                    <span>第{this.state.current+1}页</span>
                    <button onClick={this.prePage}>上一页</button>
                </div>
            </div>
        );
    }
}

Turn.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    data: PropTypes.array
};

Turn.defaultProps = {
    height: '600px',
    width: '500px',
    data: new Array()
};

export default Turn;