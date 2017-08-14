import { connect } from 'react-redux';
import {
  changeInitialAmount,
  changeMonthlyAmount,
  changeInterest,
  fetchValuesIfNeeded,
  changeInterestFrequency,
  changeDisplayCurrency,
} from './actions';
import App from './App';

const mapStateToProps = state => {
  return {
    displayCurrency: state.displayCurrency,
    initialAmount: state.initialAmount,
    interestRate: state.interestRate,
    monthlyAmount: state.monthlyAmount,
    interestFrequency: state.interestFrequency,
    amounts: state.amounts,
    isFetching: state.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitialAmountChange: amount => {
      dispatch(changeInitialAmount(amount));
      dispatch(fetchValuesIfNeeded());
    },
    onMonthlyAmountChange: amount => {
      dispatch(changeMonthlyAmount(amount));
      dispatch(fetchValuesIfNeeded());
    },
    onInterestRateChange: rate => {
      dispatch(changeInterest(rate));
      dispatch(fetchValuesIfNeeded());
    },
    onInterestFrequencyChange: frequency => {
      dispatch(changeInterestFrequency(frequency));
      dispatch(fetchValuesIfNeeded());
    },
    onDisplayCurrencyChange: currency => {
      dispatch(changeDisplayCurrency(currency));
      dispatch(fetchValuesIfNeeded());
    },
    onDataChange: () => {
      dispatch(fetchValuesIfNeeded());
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
