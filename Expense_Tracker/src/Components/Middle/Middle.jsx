// src/Components/Middle/Middle.jsx
import React from 'react'
import RecentTransactions from './Part02/RecentTransactions'
import TopExpenses from './Part03/TopExpenses'
import './Middle.css'


const Middle = () => {
    return (
        <div className='middle-container'>
            <div className='recent-transaction-container'>
                <RecentTransactions></RecentTransactions>
            </div>
            <div className='top-expenses-container'>
                <TopExpenses></TopExpenses>
            </div>

        </div>
    )
}

export default Middle