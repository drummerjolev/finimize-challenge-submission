import { connect } from 'react-redux';
import {
  changeInitialAmount,
  changeMonthlyAmount,
  changeInterest
} from './actions';
import App from './App';

const mapStateToProps = state => {
  return {
    currency: state.currency,
    initialAmount: state.initialAmount,
    interestRate: state.interestRate,
    monthlyAmount: state.monthlyAmount,
    interestFrequency: state.interestFrequency,
    amounts: state.amounts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitialAmountChange: amount => {
      console.log(amount);
      dispatch(changeInitialAmount(amount));
    },
    onMonthlyAmountChange: amount => {
      dispatch(changeMonthlyAmount(amount));
    },
    onInterestRateChange: rate => {
      dispatch(changeInterest(rate));
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
