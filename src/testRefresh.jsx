import React from 'react';
import PullRefresh from './component/pullRefresh';

export default class testRefresh extends React.Component {
    constructor(){
        super();
        this.state = {
            data:[]
        };
    };
    componentDidMount(){
        this.setdata();
    };
    refresh() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                this.setdata();
                resolve();
            }, 1000);
        });
    };
    loadMore() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                this.setState({
                    data:[...this.state.data, '主要框'+(this.state.data.length+1)]
                });
                resolve(this.state.data.length<15);
            }, 1000);
        });
    };
    setdata(){
        this.setState({
            data:[
                '主要框1',
                '主要框2',
                '主要框3',
                '主要框4',
                '主要框5',
                '主要框6',
                '主要框7',
                '主要框8',
                '主要框9',
                '主要框10',
            ]
        });
    };
    render(){
        return(
            <div>
                <PullRefresh
                    onrefresh={()=>{return this.refresh();}}
                    loadMore={()=>{return this.loadMore();}}
                >
                    {
                        this.state.data.map((value, index) => {
                            return (
                                <div key={index}>{value}</div>
                            );
                        })
                    }
                </PullRefresh>
            </div>
        );
    };
}