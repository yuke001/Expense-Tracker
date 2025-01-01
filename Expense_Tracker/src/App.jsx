import React from 'react'
import Navbar from './Components/Top Section/Nav/Navbar'
import './App.css';
import Part01 from './Components/Top Section/Part01/Part01';
import Middle from './Components/Middle/Middle';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <br />
            <Part01></Part01>
            <br />
            <Middle></Middle>

        </div>
    )
}

export default App