import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Clear form after submission
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} placeholder="YYYY-MM-DD" required />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />

      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
