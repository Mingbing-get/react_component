import React from 'react';
import './index.css';

export default class PullRefresh extends React.Component {
    constructor(){
        super();
        this.content = React.createRef();
        this.box = React.createRef();
        this.state = {
            startLoaction:-1,
            jieneng:true,
            classState:'',
            refreshContent:'下拉刷新',

            boxjieneng:true,

            classMoreState:'',
            moreContent:''
        };
    }
    componentDidMount(){
        this.addtranslationed();
        this.mouseEvent();
    };
    addtranslationed(){
        this.content.current.addEventListener('transitionend', (e)=>{
            if (this.state.classState === ''){
                e.target.style.transition='none';
            }
        });
    };
    mouseEvent(){
        //绑定鼠标按下事件
        this.content.current.addEventListener('mousedown',(e)=>{
            e.stopPropagation();
            this.mouseDown(e.offsetY);
        });
        //鼠标移动事件
        this.content.current.addEventListener('mousemove',(e)=>{
            e.stopPropagation();
            this.mouseMove(e.offsetY);
        });
        //鼠标释放事件
        this.content.current.addEventListener('mouseup',(e)=>{
            e.stopPropagation();
            this.mouseUp(e.offsetY);
        });

        //绑定手指按下事件
        this.content.current.addEventListener('touchstart',(e)=>{
            e.stopPropagation();
            this.mouseDown(e.targetTouches[0].clientY);
        });
        //手指移动事件
        this.content.current.addEventListener('touchmove',(e)=>{
            e.stopPropagation();
            this.mouseMove(e.targetTouches[0].clientY);
        });
        //手指抬起事件
        this.content.current.addEventListener('touchend',(e)=>{
            e.stopPropagation();
            this.mouseUp(e.changedTouches[0].clientY);
        });
    };
    mouseDown(y){
        this.setState({
            startLoaction:y
        });
    };
    mouseMove(y){
        if (this.state.startLoaction === -1)
            return;
        if (!this.state.jieneng)
            return;

        let cha = y - this.state.startLoaction;
        this.setState({
            jieneng:false
        });
        setTimeout(()=>{
            this.setState({
                jieneng:true
            });
        },50);

        if (cha <= 0){
            cha = cha/2;
            this.content.current.style.transform = 'translateY('+cha+'px)';
        }
        else {
            cha = cha/2;
            this.content.current.style.transform = 'translateY('+cha+'px)';
            if (!(this.state.classState==='' && cha < 50)){
                if (cha < 50){
                    this.setState({
                        classState:'',
                        refreshContent:'下拉刷新'
                    });
                }
                else {
                    this.setState({
                        classState:'springback',
                        refreshContent:'释放立即刷新'
                    });
                }
            }
        }
    };
    mouseUp(y){
        if (this.box.current.scrollTop !== 0 && this.box.current.scrollTop+this.box.current.clientHeight !== this.box.current.scrollHeight)
            return;
        let cha = y - this.state.startLoaction;
        if (cha < 0){
            this.content.current.style.transition = 'all 0.2s linear';
            this.content.current.style.transform = 'translateY(0)';
            if (this.state.moreContent === '没有数据了')
                return;
            this.setState({
                startLoaction:-1,
                jieneng:true,
                classMoreState:'loading',
                moreContent:'正在加载...'
            });
            if (this.props.loadMore){
                this.props.loadMore()
                    .then((data)=>{
                        this.setState({
                            classMoreState:'',
                            moreContent:data?'':'没有数据了'
                        });
                    })
                    .catch(()=>{
                        this.setState({
                            classMoreState:'',
                            moreContent:''
                        });
                    });
            }
        }
        else if (this.state.classState === 'springback'){
            if (cha/2>70){
                this.content.current.style.transition = 'all 0.2s linear';
                this.content.current.style.transform = 'translateY(70px)';
            }
            if (this.props.onrefresh){
                this.props.onrefresh()
                    .then(()=>{
                        this.setState({
                            classState:'',
                            refreshContent:'下拉刷新'
                        });
                        this.content.current.style.transform = 'translateY(0)';
                    })
                    .catch(()=>{
                        this.setState({
                            classState:'',
                            refreshContent:'下拉刷新'
                        });
                        this.content.current.style.transform = 'translateY(0)';
                    });
            }
            this.setState({
                startLoaction:-1,
                jieneng:true,
                classState:'refresh',
                refreshContent:'正在刷新'
            });
        }
        else {
            this.content.current.style.transition = 'all 0.2s linear';
            this.content.current.style.transform = 'translateY(0)';
            this.setState({
                startLoaction:-1,
                jieneng:true,
                classState:'',
                refreshContent:'下拉刷新'
            });
        }
    };
    render(){
        return (
            <div
                className={this.props.className?'pull-refresh-box '+this.props.className:'pull-refresh-box'}
                style={this.props.style && this.props.style}
                ref={this.box}
            >
                <div className={this.state.classState+' pull-top'}>
                    <p>{this.state.refreshContent}</p>
                </div>
                <div className='pull-content' ref={this.content}>
                    {this.props.children}
                    <div className={this.state.classMoreState+' pull-more'}>
                        {this.state.moreContent}
                    </div>
                </div>
            </div>
        );
    }
}