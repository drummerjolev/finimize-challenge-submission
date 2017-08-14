import React from 'react';
import CurrencyInput from './components/CurrencyInput';
import SliderInput from './components/SliderInput';
import DisplayGraph from './components/DisplayGraph';
import DropdownInput from './components/DropdownInput';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    // initial fetch happens without user interaction
    this.props.onDataChange();
  }

  render() {
    const {
      initialAmount,
      displayCurrency,
      onInitialAmountChange,
      monthlyAmount,
      onMonthlyAmountChange,
      interestRate,
      onInterestRateChange,
      onInterestFrequencyChange,
      onDisplayCurrencyChange,
      amounts,
    } = this.props;
    const finalAmount = amounts.length ? amounts[amounts.length - 1].amount : 0;
    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
        </div>

  			<div className="financial-inputs">
          <p className="input-label">Which currency would you like to display the final result in?</p>
          <DropdownInput
            name={'displayCurrency'}
            options={
              [
                {display: '£ - GBP', value: 'GBP'},
                {display: '$ - USD', value: 'USD'},
                {display: '€ - EUR', value: 'EUR'}
              ]
            }
            handleChange={
              (e) => onDisplayCurrencyChange(e.target.value)
            }
          />

          <p className="input-label">How often will interest be paid?</p>
          <DropdownInput
            name={'interest'}
            options={
              [
                {display: 'Annually', value: 12},
                {display: 'Quarterly', value: 4},
                {display: 'Monthly', value: 1}
              ]
            }
            handleChange={
              (e) => onInterestFrequencyChange(parseInt(e.target.value, 10))
            }
          />

  				<p className="input-label">How much have you saved?</p>
  				<CurrencyInput
            value={initialAmount}
            currency={'GBP'}
            handleChange={
              (e) => onInitialAmountChange(parseFloat(e.target.value))
            }
          />

  				<p className="input-label">How much will you save each month?</p>
          <CurrencyInput
            value={monthlyAmount}
            currency={'GBP'}
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
        <h2>After 50 years, you will have a total of {displayCurrency} {parseInt(finalAmount,10).toLocaleString()}</h2>
  			<div className="financial-display">
  				<DisplayGraph data={amounts}/>
  			</div>
      </div>
    );
  }
}

export default App;
