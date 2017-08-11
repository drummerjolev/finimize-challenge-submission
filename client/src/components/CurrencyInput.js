import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyInput.css';

const CurrencyInput = ({ currency, value, handleChange }) => {
	return (
		<div className={'currency-input'}>
			<span>{currency}</span>
			<input type='text'
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}

CurrencyInput.propTypes = {
	currency: PropTypes.string,
	value: PropTypes.number,
	handleChange: PropTypes.func,
}

export default CurrencyInput;
