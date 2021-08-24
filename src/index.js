import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeraApp from './PirmeraApp';
import CounterApp from './CounterApp';
import './index.css'

ReactDOM.render(
    <CounterApp value={0} />,
    document.getElementById('root')
);