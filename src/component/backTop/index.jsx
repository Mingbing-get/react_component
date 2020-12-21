import React from 'react';
import './index.css';

export default class BackTop extends  React.Component {
    constructor(){
        super();
        this.backtopbox = React.createRef();
        this.state = {
            show:false,
            showheight:0,
            sangletime:20,
            time:200
        };
    };

    componentDidMount(){
        this.setState({
            showheight:this.props.showHeight || document.documentElement.clientHeight,
            time:this.props.time || 200
        });
        window.addEventListener("scroll", (e)=>{
            let befshow = window.scrollY>this.state.showheight;
            if (befshow === this.state.show)
                return;
            this.setState({
                show:befshow
            });
            if (befshow)
                this.backtopbox.current.style.display = 'block';
            else
                this.backtopbox.current.style.display = 'none';
        });
    }

    backtopClick = (e)=>{
        e.stopPropagation();
        // document.scrollingElement.scrollTop = 0;
        let count = this.state.time/this.state.sangletime;
        let dis = Math.floor(window.scrollY/count);
        this.goback(dis, count);
    };

    goback(dis, count){
        if (count==0)
            return;
        window.scrollBy(0,-dis);
        setTimeout(()=>{
            this.goback(dis, count-1);
        },this.state.sangletime);
    };

    render(){
        return (
            <div className='backtop-box' ref={this.backtopbox} onClick={(e)=>{this.backtopClick(e)}}>
                <span></span>
            </div>
        );
    };
}