import React from 'react';
import CurrencyInput from './components/CurrencyInput';
import SliderInput from './components/SliderInput';
import DisplayGraph from './components/DisplayGraph';
import './App.css';

const App = ({
  initialAmount,
  onInitialAmountChange,
  monthlyAmount,
  onMonthlyAmountChange,
  interestRate,
  onInterestRateChange,
  interestFrequency,
  amounts,
  currency,
 }) => {
  // TODO: network requests
  return (
    <div className="App">
      <div className="header-banner">
        <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
      </div>

			<div className="financial-inputs">
				<p className="input-label">How much have you saved?</p>
				<CurrencyInput
          value={initialAmount}
          currency={currency}
          handleChange={
            (e) => onInitialAmountChange(parseFloat(e.target.value))
          }
        />

				<p className="input-label">How much will you save each month?</p>
        <CurrencyInput
          value={monthlyAmount}
          currency={currency}
          handleChange={
            (e) => onMonthlyAmountChange(parseFloat(e.target.value))
          }
        />

				<p className="input-label">How much interest will you earn per year?</p>
				<SliderInput
          value={interestRate}
          handleChange={
            (e) => onInterestRateChange(parseFloat(e.target.value))
          }
        />

			</div>
			<div className="financial-display">
				<DisplayGraph data={[
					{
						month: 1,
						amount:500
					},
					{
						month: 2,
						amount:700
					},
					{
						month: 3,
						amount:1000
					},
					{
						month: 4,
						amount:1500
					}
				]}/>
			</div>
    </div>
  );
}

// display grand total after 50 years

export default App;
