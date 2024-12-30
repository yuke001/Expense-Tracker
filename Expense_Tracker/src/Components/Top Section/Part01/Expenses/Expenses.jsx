import React, { useState } from 'react';
import './Expenses.css';
import Modal from '../../../Modal/Modal';

const Expenses = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
     const [category, setCategory] = useState('');
     const [date, setDate] = useState('');
     const [expenses, setExpenses] = useState(500);


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTitle('');
        setPrice('');
        setCategory('');
        setDate('');
    };

    const handleAddExpense = () => {
        // Here, you can add a new expense to the list.
        if(title && price && category && date) {
            setExpenses(prevExpenses => prevExpenses + parseInt(price, 10));
        }
        console.log('Expense added:', { title, price, category, date });
       handleCloseModal();
    };

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handlePriceChange = (event) => {
      setPrice(event.target.value)
  }
  const handleCategoryChange = (event) => {
      setCategory(event.target.value)
  }
    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    return (
        <div className="expenses">
            <h2>Expenses: <span>₹{expenses}</span></h2>
            <button className="add-expense" onClick={handleOpenModal}>+ Add Expense</button>

             <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAdd={handleAddExpense}
            >
              <h2>Add Expenses</h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={handleTitleChange}
                  />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={handlePriceChange}
                />

               <select value={category} onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  <option value="food">Food</option>
                  <option value="entertainment">Entertainment</option>
                   <option value="travel">Travel</option>
               </select>


                 <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    value={date}
                    onChange={handleDateChange}
                />

            </Modal>
        </div>
    );
};

export default Expenses;