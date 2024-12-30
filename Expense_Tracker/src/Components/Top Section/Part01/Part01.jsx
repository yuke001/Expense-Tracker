
import React from 'react';
import WalletBalance from './WalletBalance/WalletBalance';
import Expenses from './Expenses/Expenses';
import PieChart from './PieChart/PieChart';
import './Part01.css';


const Part01 = () => {
    return (
        <div className="part01-container">
            <WalletBalance></WalletBalance>
            <Expenses></Expenses>
            <PieChart></PieChart>

        </div>
    );
};

export default Part01;