
import React, { useState } from 'react';
import './WalletBalance.css';
import Modal from '../../../Modal/Modal';


const WalletBalance = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [incomeAmount, setIncomeAmount] = useState('');
    const [balance, setBalance] = useState(4500);


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIncomeAmount('');
    };

    const handleAddIncome = () => {
        if (incomeAmount) {
            setBalance(prevBalance => prevBalance + parseInt(incomeAmount, 10));
        }
        handleCloseModal();
    };

    const handleIncomeChange = (event) => {
        setIncomeAmount(event.target.value)
    }


    return (
        <div className="wallet-balance">
            <h2>Wallet Balance: <span>₹{balance}</span></h2>
            <button className="add-income" onClick={handleOpenModal}>
                + Add Income
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAdd={handleAddIncome}
            >
                <h2>Add Balance</h2>
                <input
                    type="number"
                    placeholder="Income Amount"
                    value={incomeAmount}
                    onChange={handleIncomeChange}
                />
            </Modal>
        </div>
    );
};

export default WalletBalance;