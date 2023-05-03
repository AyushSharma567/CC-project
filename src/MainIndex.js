import React from 'react';
import ReactDOM from 'react-dom';

// import "./MainApp.css";


import MainApp from './MainApp';

// ReactDOM.render(<MainApp />, document.getElementById('root'));

function MainIndex(){
    return(ReactDOM.render(<MainApp />, document.getElementById('root')));
};

export default MainIndex;
