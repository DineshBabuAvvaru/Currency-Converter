import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD'); 
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState('');

  const BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

  useEffect(() => {
    
  }, [fromCurrency, toCurrency]);

  const convertCurrency = () => {
    axios
      .get(`${BASE_URL}/${fromCurrency}`)
      .then((response) => {
        const rate = response.data.rates[toCurrency];
        const convertedValue = (parseFloat(amount) * rate).toFixed(2);
        setConvertedAmount(convertedValue);
      })
      .catch((error) => console.log(error));
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };
  convertCurrency();

  const handleReset = () => {
    setAmount('');
    setFromCurrency('USD');
    setToCurrency('INR');
    setConvertedAmount('');
  };

  return (
    <div className='converter'>
      <h2 className='Heading'> Currency Converter</h2>
      <div>
        <label className='Amount-heading'>Amount : </label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label className='side-heading'>From : </label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange} className="box">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
          <option value="BGN">BGN</option>
          <option value="ARS">ARS</option>
          <option value="LKR">LKR</option>
        </select>
      </div>
      <div>
        <label className='side-heading'>To : </label>
        <select value={toCurrency} onChange={handleToCurrencyChange} className="box">
          <option value="USD"> USD </option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
          <option value="BGN">BGN</option>
          <option value="ARS">ARS</option>
          <option value="LKR">LKR</option>
        </select>
      </div>
      <div>
        <p className='paragraph'>Converted Amount: {convertedAmount}</p>
      </div>
      <button className='button' onClick={handleReset}> Reset </button> 
    </div>
    
  );
};

export default CurrencyConverter;
