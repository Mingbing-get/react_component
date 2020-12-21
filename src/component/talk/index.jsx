import React, {useRef, useEffect, useState} from 'react';
import './index.css';
import TalkItem from './talkItem';

function Talk({...props}) {
    const content = useRef(null);
    const inputRef = useRef(null);
    const fangdou = useRef(null);
    const [more, setMore] = useState(true);
    const [value, setValue] = useState('');
    const [disable, setDisable] = useState(false);

    useEffect(()=>{
        //初始化滚动条在底部
        setTimeout(()=>{
            content.current.scrollTop = content.current.scrollHeight;
        },0);
        if (!props.loadMore){
            setMore(false);
            return;
        }
        //绑定滚动事件，处理上拉刷新
        content.current.onscroll = ()=>{
            if (content.current.scrollTop === 0){
                fangdou.current && clearTimeout(fangdou.current);
                fangdou.current = setTimeout(()=>{
                    if (props.loadMore){
                        let preHight = content.current.scrollHeight;
                        props.loadMore()
                            .then((data)=>{
                                setMore(data);
                                content.current.scrollTop = content.current.scrollHeight-preHight;
                            })
                    }
                    else {
                        setMore(false);
                    }
                },200);
            }
        };
        return ()=>{
            fangdou.current && clearTimeout(fangdou.current);
        }
    },[]);

    useEffect(()=>{
        if (!more){
            fangdou.current && clearTimeout(fangdou.current);
            content.current.onscroll = null;
        }
    },[more]);

    function send() {
        setDisable(true);
        setValue('');
        inputRef.current.focus();
        props.send(value)
            .then((data)=>{
                if (data === 1){
                    setDisable(false);
                    content.current.scrollTop = content.current.scrollHeight;
                }
            });
    }

    function inputKeyUp(e) {
        if (e.keyCode === 13){
            send();
        }
    }

    return (
        <div className='talk-box'>
            {
                props.header !== false?
                    props.header?
                        props.header
                        :
                        <div className='talk-header'>{props.title}</div>
                    :
                    ''
            }
            <div className='talk-content' ref={content}>
                <div className='talk-content-more'>
                    {
                        more?
                            '加载更多...'
                            :
                            '没有更多'
                    }
                </div>
                {props.children}
            </div>
            {
                props.footer !== false?
                    props.footer?
                        props.footer
                        :
                        <div className='talk-footer'>
                            <input value={value} onChange={(e)=>{setValue(e.target.value)}} onKeyUp={(e)=>{inputKeyUp(e)}} ref={inputRef}/>
                            <button onClick={()=>{send()}} disabled={disable}>发送</button>
                        </div>
                    :
                    ''
            }
        </div>
    );
}

Talk.TalkItem = TalkItem;

export default Talk;