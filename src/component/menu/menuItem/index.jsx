import React, {useEffect, useState, useRef} from 'react';
import './index.css';

export default function MenuItem({...props}) {
    const [mouse, setMouse] = useState(false);
    const itemLi = useRef(null);

    useEffect(()=>{
        //如果该元素添加了显示位置的属性，需要添加鼠标悬浮事件
        if (props.className && (props.className.indexOf('position-left') !== -1 || props.className.indexOf('position-right') !== -1)){
            setMouse(true);
            if (props.className.indexOf('position-left') !== -1) {
                let allLi = itemLi.current.parentNode.getElementsByTagName('li');
                for (let i = 0; i < allLi.length; i++){
                    allLi[i].getElementsByClassName('menu-item-content')[0].style.flexDirection = 'row-reverse';
                }
                //如果是向左，则需要将右边的竖线换到左边
                let parents = getParentsAndClassName(itemLi.current, 'menu-bar');
                parents[parents.length-1].style.borderRight = 'none';
                parents[parents.length-1].style.borderLeft = '1px solid rgba(0,0,0,0.2)';
            }
            //给父元素ul绑定鼠标离开事件,当鼠标离开这个ul的时候，将将该ul的父元素的所有active去掉，达到隐元素的效果
            itemLi.current.parentNode.onmouseleave = (e) => {
                e.stopPropagation();
                let parents = getParentsAndClassName(e.target, 'down');
                for (let i = 0; i < parents.length; i++){
                    removeClass(parents[i], 'active');
                }
            }
        }
        //如果该元素的父元素的父元素是按行排列的，则需要添加鼠标悬浮事件
        if(itemLi.current.parentNode.parentNode.className.indexOf('decrition-row') !== -1){
            setMouse(true);
        }
    },[]);

    function clickLi(e) {
        e.stopPropagation();
        let currentLi = e.target.parentNode;
        props.clickItem && props.clickItem(currentLi);
        //若该元素有active则只去掉active，若没有，则使用排他功能
        if (currentLi.className.indexOf('active') !== -1){
            removeClass(currentLi, 'active');
            let houdai = currentLi.getElementsByTagName('li');
            for (let i = 0; i < houdai.length; i++){
                if (houdai[i].className.indexOf('down') === -1){
                    removeClass(houdai[i], 'active');
                }
            }
            return;
        }

        let allLi = currentLi.parentNode.getElementsByTagName('li');
        for (let i = 0; i < allLi.length; i++){
            if (allLi[i].className.indexOf('down') === -1)
                removeClass(allLi[i], 'active');
        }
        allLi = currentLi.parentNode.children;
        for (let i = 0; i < allLi.length; i++){
            removeClass(allLi[i], 'active');
        }
        currentLi.className += ' active';
    }

    function mouseEnterLi(e) {
        e.stopPropagation();
        let currentLi = e.target.parentNode;
        currentLi.className += ' active';
    }

    function mouseLeaveLi(e) {
        e.stopPropagation();
        let currentLi = e.target.parentNode;
        removeClass(currentLi, 'active');
    }

    function getParentsAndClassName(element, className) {
        let parents = [];
        let currentParent = element.parentNode;
        if (currentParent.tagName.toLowerCase() !== 'body'){
            if (currentParent.className.indexOf(className) !== -1)
                parents.push(currentParent);
            parents = parents.concat(getParentsAndClassName(currentParent, className));
        }
        return parents;
    }

    function removeClass(element, classname) {
        let allclass = element.className.split(' ');
        allclass = allclass.filter((value)=>{
            return value !== classname && value !== ' ';
        });
        element.className = allclass.join(' ');
    };

    return (
        <li
            className={props.className?props.className+' menu-item':'menu-item'}
            onClick={mouse?null:(e)=>{clickLi(e)}}
            onMouseEnter={mouse?(e)=>{mouseEnterLi(e)}:null}
            onMouseLeave={mouse?(e)=>{mouseLeaveLi(e)}:null}
            ref={itemLi}
        >
            <div className='menu-item-content'>{props.children}</div>
            {props.subMenu?props.subMenu:''}
        </li>
    );
}