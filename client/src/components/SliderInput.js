import React from 'react';
import PropTypes from 'prop-types'
import './SliderInput.css'

const SliderInput = ({ value, handleChange }) => {
	return (
		<div className="fmz-slider">
			<p>{value}%</p>
			<input type="range"
				value={value}
				min={0}
				max={10}
				step={0.25}
				onChange={handleChange}
			/>
		</div>
	)
}

export default SliderInput;
