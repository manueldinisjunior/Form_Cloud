// src/components/Form/Form.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css'; // Import your custom styles if needed

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('');
  const [startDate, setStartDate] = useState(null); // For date picker

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, surname, message, startDate });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label className="label">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />

        <label className="label">Surname:</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="input"
          required
        />

        <label className="label">Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select date"
          className="input date-picker"
        />

        <label className="label">Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input message"
          rows={4}
          required
        />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
