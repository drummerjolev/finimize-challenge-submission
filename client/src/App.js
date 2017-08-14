import React from 'react';
import CurrencyInput from './components/CurrencyInput';
import SliderInput from './components/SliderInput';
import DisplayGraph from './components/DisplayGraph';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.onDataChange();
  }

  render() {
    const {
      initialAmount,
      onInitialAmountChange,
      monthlyAmount,
      onMonthlyAmountChange,
      interestRate,
      onInterestRateChange,
      interestFrequency,
      amounts,
      currency,
      onDataChange,
    } = this.props;
    const finalAmount = amounts.length ? amounts[amounts.length - 1].amount : 0;
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
  				<DisplayGraph data={amounts}/>
  			</div>
        <h2>After 50 years, you will have a total of £{parseInt(finalAmount,10).toLocaleString()}</h2>
      </div>
    );
  }
}

// display grand total after 50 years

export default App;
