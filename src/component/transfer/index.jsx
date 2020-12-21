import React from 'react';
import './index.css';

import InputSerch from '../inputSerch';
import Cheakbox from '../cheakBox';

export default class Transfer extends React.Component {
    constructor(){
        super();
        this.state = {
            leftdata:[],
            rightdata:[],
            selectleft:[],
            selectright:[],
            selectAllLeft:false,
            selectAllRight:false,
            serchLeft:'',
            serchRight:''
        }
    }
    componentDidMount(){
        this.setState({
            leftdata:this.props.leftdata?JSON.parse(JSON.stringify(this.props.leftdata)):[],
            rightdata:this.props.rightdata?JSON.parse(JSON.stringify(this.props.rightdata)):[]
        });
    }
    checkChange(checked, index, cdata){
        if (cdata === 'left'){
            let disCount = this.disableCount(this.state.leftdata);
            let temp = JSON.parse(JSON.stringify(this.state.leftdata[index]));
            temp.selected = checked;
            if (!checked){
                let selectindex = this.state.selectleft.findIndex((value)=>{
                    return value === index;
                });
                this.setState({
                    leftdata:[...this.state.leftdata.slice(0,index), temp, ...this.state.leftdata.slice(index+1)],
                    selectleft:[...this.state.selectleft.slice(0,selectindex), ...this.state.selectleft.slice(selectindex+1)],
                    selectAllLeft:false
                });
            }
            else {
                this.setState({
                    selectAllLeft:this.state.leftdata.length === this.state.selectleft.length+1+disCount,
                    leftdata:[...this.state.leftdata.slice(0,index), temp, ...this.state.leftdata.slice(index+1)],
                    selectleft:[...this.state.selectleft, index]
                });
            }
        }
        else if (cdata === 'right'){
            let disCount = this.disableCount(this.state.rightdata);
            let temp = JSON.parse(JSON.stringify(this.state.rightdata[index]));
            temp.selected = checked;
            if (!checked){
                let selectindex = this.state.selectright.findIndex((value)=>{
                    return value === index;
                });
                this.setState({
                    rightdata:[...this.state.rightdata.slice(0,index), temp, ...this.state.rightdata.slice(index+1)],
                    selectright:[...this.state.selectright.slice(0,selectindex), ...this.state.selectright.slice(selectindex+1)],
                    selectAllRight:false
                });
            }
            else {
                this.setState({
                    selectAllRight:this.state.rightdata.length === this.state.selectright.length+1+disCount,
                    rightdata:[...this.state.rightdata.slice(0,index), temp, ...this.state.rightdata.slice(index+1)],
                    selectright:[...this.state.selectright, index]
                });
            }
        }
    }
    changeAllCheck = (cselect, checked)=>{
        if (cselect === 'left'){
            let temp = JSON.parse(JSON.stringify(this.state.leftdata));
            let selectTemp = [];
            temp.forEach((value, index)=>{
                if (!value.disabled)
                    value.selected = checked;
                if (!value.disabled && checked)
                    selectTemp.push(index);
            });
            this.setState({
                selectAllLeft:checked,
                leftdata:temp,
                selectleft:selectTemp
            });
        }
        else if (cselect === 'right') {
            let temp = JSON.parse(JSON.stringify(this.state.rightdata));
            let selectTemp = [];
            temp.forEach((value, index)=>{
                if (!value.disabled)
                    value.selected = checked;
                if (!value.disabled && checked)
                    selectTemp.push(index);
            });
            this.setState({
                selectAllRight:checked,
                rightdata:temp,
                selectright:selectTemp
            });
        }
    };
    disableCount(data){
        let count = 0;
        data.forEach((value)=>{
            if (value.disabled)
                count++;
        });
        return count;
    };
    moveToRight = ()=>{
        let movetemp = [];
        let staptemp = [];
        this.state.leftdata.forEach((value, index)=>{
            let exipt = this.state.selectleft.findIndex((v)=>{
                return v === index;
            });
            if (exipt !== -1){
                value.selected = false;
                movetemp.push(value);
            }
            else {
                staptemp.push(value);
            }
        });
        this.setState({
            leftdata:staptemp,
            rightdata:[...this.state.rightdata, ...movetemp],
            selectleft:[],
            selectAllRight:false,
            selectAllLeft:false
        });
    };
    moveToLeft = ()=>{
        let movetemp = [];
        let staptemp = [];
        this.state.rightdata.forEach((value, index)=>{
            let exipt = this.state.selectright.findIndex((v)=>{
                return v === index;
            });
            if (exipt !== -1){
                value.selected = false;
                movetemp.push(value);
            }
            else {
                staptemp.push(value);
            }
        });
        this.setState({
            leftdata:[...this.state.leftdata, ...movetemp],
            rightdata:staptemp,
            selectright:[],
            selectAllRight:false,
            selectAllLeft:false
        });
    };
    selectAll = (cselect)=>{
        if (cselect === 'left' && this.state.selectAllLeft)
            return;
        if (cselect === 'right' && this.state.selectAllRight)
            return;
        this.changeAllCheck(cselect, true);
    };
    reverceSelect = (cselect)=>{
        if (cselect === 'left'){
            let temp = JSON.parse(JSON.stringify(this.state.leftdata));
            let selectTemp = [];
            temp.forEach((value, index)=>{
                if (!value.disabled){
                    value.selected = !value.selected;
                    if (value.selected)
                        selectTemp.push(index);
                }
            });
            let disCount = this.disableCount(temp);
            this.setState({
                selectAllLeft:temp.length === selectTemp.length+disCount,
                leftdata:temp,
                selectleft:selectTemp
            });
        }
        else if (cselect === 'right') {
            let temp = JSON.parse(JSON.stringify(this.state.rightdata));
            let selectTemp = [];
            temp.forEach((value, index)=>{
                if (!value.disabled){
                    value.selected = !value.selected;
                    if (value.selected)
                        selectTemp.push(index);
                }
            });
            let disCount = this.disableCount(temp);
            this.setState({
                selectAllRight:temp.length === selectTemp.length+disCount,
                rightdata:temp,
                selectright:selectTemp
            });
        }
    };
    setSerchLeft = (value)=>{
        this.setState({
            serchLeft:value
        });
    };
    setSerchRight = (value)=>{
        this.setState({
            serchRight:value
        });
    };
    render(){
        return(
            <div className='transfer-box'>
                <div className='transfer-left'>
                    <div className='transfer-title'>
                        <div className='transfer-title-left'>
                            <Cheakbox
                                checked={this.state.selectAllLeft}
                                cheaksqure={this.state.selectleft.length!==0}
                                onchange={(checked)=>{this.changeAllCheck('left', checked)}}
                            ></Cheakbox>
                            <div className='fa fa-angle-down transfer-title-downspan'>
                                <div className='transfer-title-show'>
                                    <span onClick={()=>{this.selectAll('left')}}>全选所有</span>
                                    <span onClick={()=>{this.reverceSelect('left')}}>反选所有</span>
                                </div>
                            </div>
                            <span>{(this.state.selectleft.length!==0 && this.state.selectleft.length+'/')+this.state.leftdata.length}项</span>
                        </div>
                        <div className='transfer-title-right'>
                            {this.props.leftTitle || '标题'}
                        </div>
                    </div>
                    <InputSerch
                        placeholder="请输入搜索内容"
                        defaultValue={this.state.serchLeft}
                        onchange={(value)=>{this.setSerchLeft(value)}}
                    ></InputSerch>
                    <div className='transfer-content' style={{height:(this.props.height || 150)+'px'}}>
                        {
                            this.state.leftdata && this.state.leftdata.length > 0?
                                this.state.leftdata.map((value, index)=>{
                                    if (this.state.serchLeft && value.content.indexOf(this.state.serchLeft) === -1)
                                        return;
                                    return(
                                        <div className='transfer-content-item' key={index}>
                                            <Cheakbox
                                                checked={value.selected}
                                                onchange={(checkd)=>{this.checkChange(checkd,index,'left')}}
                                                disabled={value.disabled?true:false}
                                            ></Cheakbox>
                                            <span>{value.content}</span>
                                        </div>
                                    );
                                })
                                :
                                <div className='transfer-content-nodata'>没有数据...</div>
                        }
                    </div>
                </div>
                <div className='transfer-center'>
                    <button
                        disabled={this.state.selectleft.length === 0}
                        onClick={this.moveToRight}
                    >&gt;</button>
                    <br/>
                    <button
                        disabled={this.state.selectright.length === 0}
                        onClick={this.moveToLeft}
                    >&lt;</button>
                </div>
                <div className='transfer-right'>
                    <div className='transfer-title'>
                        <div className='transfer-title-left'>
                            <Cheakbox
                                checked={this.state.selectAllRight}
                                cheaksqure={this.state.selectright.length!==0}
                                onchange={(checked)=>{this.changeAllCheck('right', checked)}}
                            ></Cheakbox>
                            <div className='fa fa-angle-down transfer-title-downspan'>
                                <div className='transfer-title-show'>
                                    <span onClick={()=>{this.selectAll('right')}}>全选所有</span>
                                    <span onClick={()=>{this.reverceSelect('right')}}>反选所有</span>
                                </div>
                            </div>
                            <span>{(this.state.selectright.length!==0 && this.state.selectright.length+'/')+this.state.rightdata.length}项</span>
                        </div>
                        <div className='transfer-title-right'>
                            {this.props.rightTitle || '标题'}
                        </div>
                    </div>
                    <InputSerch
                        placeholder="请输入搜索内容"
                        defaultValue={this.state.serchRight}
                        onchange={(value)=>{this.setSerchRight(value)}}
                    ></InputSerch>
                    <div className='transfer-content' style={{height:(this.props.height || 150)+'px'}}>
                        {
                            this.state.rightdata && this.state.rightdata.length > 0?
                                this.state.rightdata.map((value, index)=>{
                                    if (this.state.serchRight && value.content.indexOf(this.state.serchRight) === -1)
                                        return;
                                    return(
                                        <div className='transfer-content-item' key={index}>
                                            <Cheakbox
                                                checked={value.selected}
                                                onchange={(checkd)=>{this.checkChange(checkd,index,'right')}}
                                                disabled={value.disabled?true:false}
                                            ></Cheakbox>
                                            <span>{value.content}</span>
                                        </div>
                                    );
                                })
                                :
                                <div className='transfer-content-nodata'>没有数据...</div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}