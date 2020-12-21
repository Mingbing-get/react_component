//设置display:none元素的高度为其真实高度
export function setNoneHeight(element) {
    if (!element)
        return;
    element.style.zIndex = -1000;
    element.style.display = 'inline-block';
    element.style.height = element.scrollHeight+'px';
    element.style.zIndex = 'initial';
};
//移除指定元素的指定类
export function removeClass(element, classname) {
    let allclass = element.className.split(' ');
    allclass = allclass.filter((value)=>{
        return value !== classname && value !== ' ';
    });
    element.className = allclass.join(' ');
};
//获取某个元素的body以下的所有父元素
export function getParents(element) {
    let parents = [];
    let currentParent = element.parentNode;
    if (currentParent.tagName.toLowerCase() !== 'body'){
        parents.push(currentParent);
        parents = parents.concat(getParents(currentParent));
    }
    return parents;
}
//获取某个元素的body以下的含有指定样式的所有父元素
export function getParentsAndClassName(element, className) {
    let parents = [];
    let currentParent = element.parentNode;
    if (currentParent.tagName.toLowerCase() !== 'body'){
        if (currentParent.className.indexOf(className) !== -1)
            parents.push(currentParent);
        parents = parents.concat(getParentsAndClassName(currentParent, className));
    }
    return parents;
}
