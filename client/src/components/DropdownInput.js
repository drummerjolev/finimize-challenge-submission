import React from 'react';
import PropTypes from 'prop-types';
import './CurrencyInput.css';

const DropdownInput = ({ name, options, handleChange }) => {
  const displayOptions = options.map(option => <option key={option.value} value={option.value}>{option.display}</option>);
	return (
		<div className={'currency-input'}>
      <select onChange={handleChange} name={name}>
        {displayOptions}
      </select>
		</div>
	)
}

DropdownInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  handleChange: PropTypes.func,
}

export default DropdownInput;
