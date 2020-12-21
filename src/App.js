import React, {useState, useEffect, useRef} from 'react';
import Serch from './component/serch';
import TopBar from './component/topBar';
import Topselect from './component/topselect';
import Sarousel from './component/sarousel';
import CardBox from './component/card/index';
import Table from './component/table';
import AgumentBox from './component/agument/index';
import Talk from './component/talk';
import Menu from './component/menu';
import model from './component/model/index';
import message from './component/message/index';
import progress from './component/progress/index';
import Transfer from './component/transfer';

import Input from './component/input';
import Pagination from './component/pagination';
import BackTop from './component/backTop';
import Tabke from './component/table';
import Rate from './component/rate';
import MyAnimate from './component/myAnimate';
import Turn from './component/turn';
import Adv from './component/adverse';
import SlidTest from './component/slidtest';

import Boundary from './component/boundary';

import './app.css';

function App() {
    const [value, setValue] = useState('');
    const [agumentdata, setAgumentdata] = useState([]);
    const [status, setStatus] = useState(null);
    const agu = useRef([]);
    const [talkdata, setTalkdata]= useState([]);
    var flag = true;
    const config = {
        placeholder: '请输入用户名',
        type: 'text',
        setValue
    };
    const data = [
        {
            image: 'https://img.alicdn.com/tfs/TB1l6mOMBr0gK0jSZFnXXbRRXXa-520-280.jpg_q90_.webp',
            title: '家电',
            discript: '购买各种家电购买各种家电'
        },
        {
            image: 'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg',
            title: '家具',
            discript: '购买家具'
        },
        {
            image: 'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
            title: '手机',
            discript: '购买手机'
        },
        {
            image: 'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg',
            title: '首饰',
            discript: '购买各种首饰'
        },
        {
            image: 'https://img.alicdn.com/tfs/TB1yA1jf8Bh1e4jSZFhXXcC9VXa-520-280.jpg_q90_.webp',
            title: '玩具',
            discript: '购买玩具'
        }
    ]
    const carddata = [
        {
            title: '标题',
            discript: '描述内容',
            image: 'https://gma.alicdn.com/bao/uploaded/i3/873520044/O1CN01qjBDR31CCC2MHfZbm_!!2-saturn_solar.png_200x200.jpg_.webp',
            oldprice: 300,
            nowprice: 250,
            sell: '月售600件'
        },
        {
            title: '标题1',
            discript: '描述内容描述内容描述内容描述内容描述内容',
            image: 'https://gma.alicdn.com/bao/uploaded/i1/116386935/O1CN01rS2N7P216HKENRRx3_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            oldprice: 1000,
            nowprice: 899,
            sell: '月售400件'
        },
        {
            title: '标题2',
            discript: '描述内容描述内容描述内容',
            image: 'https://gma.alicdn.com/bao/uploaded/i3/116386935/O1CN01AR4LCE216HKENSK0N_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            oldprice: 6000,
            nowprice: 4999,
            sell: '月售30件'
        },
        {
            title: '标题3',
            discript: '描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容',
            image: 'https://gma.alicdn.com/bao/uploaded/i3/873520044/O1CN01qjBDR31CCC2MHfZbm_!!2-saturn_solar.png_200x200.jpg_.webp',
            oldprice: 59,
            nowprice: 55,
            sell: '月售1000件'
        },
        {
            title: '标题4',
            discript: '描述内容描述内容描述内容描述内容',
            image: 'https://gma.alicdn.com/bao/uploaded/i1/300480013/O1CN01HtNkaq1BxzknbQKgG_!!0-saturn_solar.jpg_200x200.jpg_.webp',
            oldprice: 900,
            nowprice: 790,
            sell: '月售70件'
        }
    ];
    useEffect(() => {
        setAgumentdata([
            {
                image: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                username: '用户',
                time: '2010/10/03 10:33:21',
                content: '评论内容'
            },
            {
                image: 'https://img.alicdn.com/tfscom/i2/3058245265/TB2UPBSqgaTBuNjSszfXXXgfpXa_!!3058245265-0-item_pic.jpg_180x180xzq90.jpg_.webp',
                username: '用户2',
                time: '2016/10/03 10:33:21',
                content: '评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212'
            },
            {
                image: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                username: '用户3',
                time: '2011/10/03 10:33:21',
                content: '评论1321321内容'
            }
        ]);
        agu.current = [
            {
                image: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                username: '用户',
                time: '2010/10/03 10:33:21',
                content: '评论内容'
            },
            {
                image: 'https://img.alicdn.com/tfscom/i2/3058245265/TB2UPBSqgaTBuNjSszfXXXgfpXa_!!3058245265-0-item_pic.jpg_180x180xzq90.jpg_.webp',
                username: '用户2',
                time: '2016/10/03 10:33:21',
                content: '评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212'
            },
            {
                image: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                username: '用户3',
                time: '2011/10/03 10:33:21',
                content: '评论1321321内容'
            }
        ];
    }, []);

    useEffect(()=>{
        setTalkdata([
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:true,
                time:'2013/10/20 11:23:45',
                content:'TalkItemTalkItemTalkItemTalkItemTalkItemTalkItem'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:true,
                time:'2013/10/20 11:23:45',
                content:'TalkItemTalkItemTalkItemTalkItemTalkItemTalkItem洪都拉斯几点回来达拉斯第六届离开发货啦涉及到拉科技手抖了'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:false,
                time:'2013/10/20 11:23:45',
                content:'TalkI'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:true,
                time:'2013/10/20 11:23:45',
                content:'....'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                time:'2013/10/20 11:23:45',
                content:'TalkItemTalkItemTalkItemTalkItemTalkItemTalkItem汉兰达涉及到了哈弗接哈拉卡机大立科技发哈交换机挨打了科技安徽发啦发啦健身房很骄傲'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:true,
                time:'2013/10/20 11:23:45',
                content:'TalkItemTalkItemTalkItemTalkItemTalkItemTalkItem'
            }
        ]);
    },[]);

    function adddata(value) {
        setTimeout(() => {
            let item = {...agumentdata[0]};
            item.content = value;
            setAgumentdata([item, ...agumentdata]);
        }, 500);
    };

    function loadmore() {
        agu.current.push({
            image: 'https://img.alicdn.com/tfscom/i2/3058245265/TB2UPBSqgaTBuNjSszfXXXgfpXa_!!3058245265-0-item_pic.jpg_180x180xzq90.jpg_.webp',
            username: '用户2',
            time: '2016/10/03 10:33:21',
            content: '评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212评论内容13212'
        });
        agu.current.push({
            image: 'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
            username: '用户3',
            time: '2011/10/03 10:33:21',
            content: '评论1321321内容'
        });
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                setAgumentdata(agu.current);
                let a = flag;
                flag = false;
                resolve(a);
            },500);
        });
    }

    function send(value) {
        let temp = {
            image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
            displayRight:true,
            time:'2013/10/20 11:23:45',
            content:value
        };
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                setTalkdata([...talkdata,temp]);
                resolve(1);
            },500);
        });
    }

    function talkLoadMore() {
        let temp = [{
            image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
            displayRight:true,
            time:'2013/10/20 11:23:45',
            content:'测试添加更多'
        },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:true,
                time:'2013/10/20 11:23:45',
                content:'TalkItemTalkItemTalkItemTalkItemTalkItemTalkItem'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:true,
                time:'2013/10/20 11:23:45',
                content:'TalkItemTalkItemTalkItemTalkItemTalkItemTalkItem洪都拉斯几点回来达拉斯第六届离开发货啦涉及到拉科技手抖了'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:false,
                time:'2013/10/20 11:23:45',
                content:'TalkI'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:true,
                time:'2013/10/20 11:23:45',
                content:'....'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                time:'2013/10/20 11:23:45',
                content:'TalkItemTalkItemTalkItemTalkItemTalkItemTalkItem汉兰达涉及到了哈弗接哈拉卡机大立科技发哈交换机挨打了科技安徽发啦发啦健身房很骄傲'
            },
            {
                image:'https://wwc.alicdn.com/avatar/getAvatar.do?userNick=%E7%B9%81%E5%8D%8E%E5%B2%81%E6%9C%88mb&width=50&height=50&type=sns&_input_charset=UTF-8',
                displayRight:true,
                time:'2013/10/20 11:23:45',
                content:'TalkItemTalkItemTalkItemTalkItemTalkItemTalkItem'
            }
        ];
        return new Promise((resolve, reject)=>{
           setTimeout(()=>{
               setTalkdata(temp);
               resolve(flag);
               flag = false;
           },500);
        });
    }

    function refresh() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            }, 1000);
        });
    }

    return (
        <div>
            {/*<div style={{height:600, padding:5}}>
                <Boundary direction='vertical'>
                    <Boundary.Item block={true}>
                        <Boundary direction='horizontal' noborder={true}>
                            <Boundary.Item>
                                <div style={{height:300, width:600}}>
                                    收到收到杰卡斯客户端卡萨汇顶科技的挥洒即可对好客山东功夫格斗卡号是多好看
                                </div>
                            </Boundary.Item>
                            <Boundary.Item>
                                <Boundary direction='vertical' noborder={true}>
                                    <Boundary.Item>
                                        <div style={{height:300, width:600}}>
                                            收到收到杰卡斯客户端卡萨汇顶科技的挥洒即可对好客山东功夫格斗卡号是多好看
                                        </div>
                                    </Boundary.Item>
                                    <Boundary.Item>

                                    </Boundary.Item>
                                </Boundary>
                            </Boundary.Item>
                        </Boundary>
                    </Boundary.Item>
                    <Boundary.Item>
                        <div style={{height:200, width:600}}>
                            收到收到杰卡斯客户端卡萨汇顶科技的挥洒即可对好客山东功夫格斗卡号是多好看的好时机喊打卡看烧烤
                        </div>
                    </Boundary.Item>
                </Boundary>
            </div>*/}
            <Boundary>
                <Boundary.Item>
                    <div style={{height:300, width:800}}>
                        dsahdkjshdksahkdjhsghjgfkjhsdhkasdhjasghjasghdgksahdkhsadgasgdjasgdgsajgdhsahdgjsajdgsajdajsdgjsagdjasgdjasg
                    </div>
                </Boundary.Item>
                <Boundary.Item
                    block={true}
                >
                    <Boundary direction='vertical' noborder={true}>
                        <Boundary.Item block={true}>
                            <Boundary direction='horizontal' noborder={true}>
                                <Boundary.Item>
                                    <div style={{height:300, width:600}}>
                                        收到收到杰卡斯客户端卡萨汇顶科技的挥洒即可对好客山东功夫格斗卡号是多好看
                                    </div>
                                </Boundary.Item>
                                <Boundary.Item>

                                </Boundary.Item>
                            </Boundary>
                        </Boundary.Item>
                        <Boundary.Item>
                            <div style={{height:200, width:600}}>
                                收到收到杰卡斯客户端卡萨汇顶科技的挥洒即可对好客山东功夫格斗卡号是多好看的好时机喊打卡看烧烤
                            </div>
                        </Boundary.Item>
                    </Boundary>
                </Boundary.Item>
                <Boundary.Item>

                </Boundary.Item>
            </Boundary>
            {/*<Topselect
                right={
                    <ul>
                        <li className='down'>第一个</li>
                        <li>第二个</li>
                        <li>第三个</li>
                    </ul>
                }
                left={
                    <ul>
                        <li>第一个</li>
                        <li className='down'>第二个</li>
                    </ul>
                }
            >
            </Topselect>

            <Menu>
                <Menu.MenuItem
                    className='down'
                    subMenu = {
                        <Menu>
                            <Menu.MenuItem
                                className = 'down'
                            >
                                二级菜单2231
                            </Menu.MenuItem>
                            <Menu.MenuItem
                                className='down'
                                subMenu = {
                                    <Menu>
                                        <Menu.MenuItem
                                            clickItem = {(element)=>{console.log(element)}}
                                        >
                                            三级菜单1
                                        </Menu.MenuItem>
                                        <Menu.MenuItem>
                                            三级菜单
                                        </Menu.MenuItem>
                                        <Menu.MenuItem>
                                            三级菜单1
                                        </Menu.MenuItem>
                                    </Menu>
                                }
                            >
                                二级菜单2
                            </Menu.MenuItem>
                        </Menu>
                    }
                >
                    菜单1
                </Menu.MenuItem>
                <Menu.MenuItem
                    clickItem = {(element)=>{console.log(element)}}
                >
                    菜单2
                </Menu.MenuItem>
                <Menu.MenuItem
                    clickItem = {()=>{console.log(11)}}
                >
                    菜单3
                </Menu.MenuItem>
            </Menu>

            <Menu
                className='decrition-row'
            >
                <Menu.MenuItem
                    className='down position-right'
                    subMenu = {
                        <Menu>
                            <Menu.MenuItem>
                                二级菜单2231
                            </Menu.MenuItem>
                            <Menu.MenuItem
                                className='down position-right'
                                subMenu = {
                                    <Menu>
                                        <Menu.MenuItem
                                            clickItem = {(element)=>{console.log(element)}}
                                        >
                                            三级菜单1
                                        </Menu.MenuItem>
                                        <Menu.MenuItem>
                                            三级菜单
                                        </Menu.MenuItem>
                                        <Menu.MenuItem>
                                            三级菜单1
                                        </Menu.MenuItem>
                                    </Menu>
                                }
                            >
                                二级菜单2
                            </Menu.MenuItem>
                        </Menu>
                    }
                >
                    菜单1
                </Menu.MenuItem>
                <Menu.MenuItem
                    clickItem = {(element)=>{console.log(element)}}
                >
                    菜单2
                </Menu.MenuItem>
                <Menu.MenuItem
                    clickItem = {()=>{console.log(11)}}
                >
                    菜单3
                </Menu.MenuItem>
            </Menu>

            <Menu>
                <Menu.MenuItem
                    className='down position-left'
                    subMenu = {
                        <Menu>
                            <Menu.MenuItem>
                                二级菜单
                            </Menu.MenuItem>
                            <Menu.MenuItem
                                className='down position-left'
                                subMenu = {
                                    <Menu>
                                        <Menu.MenuItem
                                            clickItem = {(element)=>{console.log(element)}}
                                        >
                                            三级菜单1
                                        </Menu.MenuItem>
                                        <Menu.MenuItem>
                                            三级菜单
                                        </Menu.MenuItem>
                                        <Menu.MenuItem>
                                            三级菜单1
                                        </Menu.MenuItem>
                                    </Menu>
                                }
                            >
                                二级菜单2
                            </Menu.MenuItem>
                        </Menu>
                    }
                >
                    菜单1
                </Menu.MenuItem>
                <Menu.MenuItem
                    clickItem = {(element)=>{console.log(element)}}
                >
                    菜单2
                </Menu.MenuItem>
                <Menu.MenuItem
                    clickItem = {()=>{console.log(11)}}
                >
                    菜单3
                </Menu.MenuItem>
            </Menu>

            <Menu>
                <Menu.MenuItem
                    className='down position-right'
                    subMenu = {
                        <Menu>
                            <Menu.MenuItem>
                                二级菜单2231
                            </Menu.MenuItem>
                            <Menu.MenuItem
                                className='down position-right'
                                subMenu = {
                                    <Menu>
                                        <Menu.MenuItem
                                            clickItem = {(element)=>{console.log(element)}}
                                        >
                                            三级菜单1
                                        </Menu.MenuItem>
                                        <Menu.MenuItem>
                                            三级菜单
                                        </Menu.MenuItem>
                                        <Menu.MenuItem>
                                            三级菜单1
                                        </Menu.MenuItem>
                                    </Menu>
                                }
                            >
                                二级菜单2
                            </Menu.MenuItem>
                        </Menu>
                    }
                >
                    菜单1
                </Menu.MenuItem>
                <Menu.MenuItem
                    clickItem = {(element)=>{console.log(element)}}
                >
                    菜单2
                </Menu.MenuItem>
                <Menu.MenuItem
                    clickItem = {()=>{console.log(11)}}
                >
                    菜单3
                </Menu.MenuItem>
            </Menu>

            <TopBar
                right={<span>用户</span>}
                style={{backgroundColor: 'rgba(200,200,200,0.2)', borderRadius: '10px'}}
                onBack={() => {
                    console.log(123)
                }}
            >
                <Serch {...config}/>
            </TopBar>

            <Sarousel data={data} circularTime={3000}/>

            <Transfer
                leftdata={[{selected:false,disabled:true,content:'123'},{selected:false,content:'3655'},{selected:false,content:'56554231'}]}
                rightdata={[{selected:false,content:'4568'},{selected:false,content:'1647'}]}
            >

            </Transfer>

            <div style={{margin:'30px auto'}}>
                <Pagination
                    total={10}
                    showPage={5}
                    changePage={(page)=>{console.log(page)}}
                />
            </div>

            <div style={{width:'300px',margin:'30px auto'}}>
                <Input
                    setValue={(value)=>{setStatus(value)}}
                    status={status}
                    point={true}
                    pointContent='这是提示内容'
                />
                <Input
                    setValue={(value)=>{setStatus(value)}}
                    status={status}
                    point={true}
                    pointContent='这是提示内容'
                    shake={true}
                />
            </div>

            <CardBox title='热销'>
                {
                    carddata.map((item, index) => {
                        return <CardBox.CardItem data={item} key={index}/>
                    })
                }
            </CardBox>

            <Table defaultIndex={0}>
                <ul>
                    <li>评价</li>
                    <li>聊天</li>
                </ul>
                <ul>
                    <li>
                        <AgumentBox agumentSubmit={(value) => {adddata(value)}} loadMore={() => {return loadmore()}}>
                            {agumentdata.map((item, index) => {
                                return <AgumentBox.AgumentItem data={item} key={index}/>
                            })}
                        </AgumentBox>
                    </li>
                    <li>
                        <Talk send={(value)=>{return send(value)}} title='好友' loadMore={()=>{return talkLoadMore()}}>
                            {
                                talkdata.map((value, index)=>{
                                    return <Talk.TalkItem data={value} key={index}/>
                                })
                            }
                        </Talk>
                    </li>
                </ul>
            </Table>
            <button onClick={()=>{model.confirm({
                title:'确认对话框',
                content:'内容',
                confirmClick:()=>{console.log(111)}
            });}}>出现model</button>
            <button onClick={()=>{model.success({
                title:'确认对话框',
                content:'内容',
                confirmClick:()=>{console.log(111)}
            });}}>出现checkmodel</button>
            <button onClick={()=>{model.waring({
                title:'确认对话框',
                content:'内容',
                confirmClick:()=>{console.log(111)}
            });}}>出现waringmodel</button>
            <button onClick={()=>{model.error({
                title:'确认对话框',
                content:'内容',
                confirmClick:()=>{console.log(111)}
            });}}>出现errormodel</button>
            <br/>
            <button onClick={()=>{message.info('出现的提示信息')}}>出现提示</button>
            <button onClick={()=>{message.success('成功', 5000)}}>出现提示</button>
            <button onClick={()=>{message.waring('警告')}}>出现提示</button>
            <button onClick={()=>{message.error('错误')}}>出现提示</button>
            <button onClick={()=>{message.destroy()}}>销毁</button>
            <br/>
            <button onClick={()=>{progress.show()}}>出现进度条</button>
            <button onClick={()=>{progress.dispose()}}>删除进度条</button>
            <BackTop showHeight={500}/>
            <Table
                className='border-three blod-first-col blod-first-row light-row'
                title={{
                    content:'标题'
                }}
                footer={{
                    content:'表尾'
                }}
                lastCol={<button style={{padding:'5px',backgroundColor:'red',border:'none',outline:'none',color:'#fff'}}>删除</button>}
            >
                <Table.TableRow data={[1,2,3,4]}></Table.TableRow>
                <Table.TableRow data={[1,2,323,4]}></Table.TableRow>
                <Table.TableRow data={[1,2,3,4]}></Table.TableRow>
            </Table>

            <Rate rate={2.5} changeRate={(rate)=>{console.log(rate)}}/>
            <br/>
            <MyAnimate type='fidin' time={1000}>
                <div style={{display:'inline-block'}}>ceshi</div>
            </MyAnimate>
            <Turn data={[1,2,3,4,5,6]}></Turn>
            <Adv data={['https://aecpm.alicdn.com/imgextra/i1/3109007694/O1CN01YjdVrN26htxlZiELZ_!!3109007694-2-alimamazszw.png',
            'https://img.alicdn.com/imgextra/i2/6000000007071/O1CN01dMD9H6226ZDO7EKmj_!!6000000007071-0-octopus.jpg']}
            ></Adv>
            <div style={{marginTop:'50px'}}></div>
            <SlidTest
                img='https://img.alicdn.com/tfscom/i4/654230132/O1CN011CqUjXBxyNTXTMy_!!654230132.jpg_180x180xzq90.jpg_.webp'
                confirm={(flag)=>{console.log(flag)}}
            />
            <div style={{marginBottom:'100px'}}></div>*/}
        </div>
    );
}

export default App;
