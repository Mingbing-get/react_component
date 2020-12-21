import React from 'react';
import ReactDOM from 'react-dom';
import Progress from './component/index';

const progress = {};
progress.show = function() {
    let divBox = document.createElement('div');
    divBox.className = 'progressBoxFixed';

    ReactDOM.render(
        <Progress/>
        , divBox);
    document.body.appendChild(divBox);
};

progress.dispose = function() {
    let willremove = document.body.getElementsByClassName('progressBoxFixed');
    for (let i = 0; i < willremove.length; i++){
        document.body.removeChild(willremove[i]);
    }
};

export default progress;
