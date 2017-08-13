const initialState = {
  initialAmount: 1.0,
  monthlyAmount: 1.0,
  interestRate: 4.0,
  currency: 'GBP',
  interestFrequency: 'Annually',
  amounts: [],
  isFetching: false,
}

const finimizeApp = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_AMOUNT':
      return {
        ...state,
        initialAmount: action.amount >= 0.0 ? action.amount : 0.0,
      }
    case 'MONTHLY_AMOUNT':
      return {
        ...state,
        monthlyAmount: action.amount >= 0.0 ? action.amount : 0.0,
      }
    case 'INTEREST_RATE':
      return {
        ...state,
        interestRate: action.rate,
      }
    case 'CURRENCY':
      return {
        ...state,
        currency: action.currency,
      }
    case 'INTEREST_FREQUENCY':
      // TODO: guard against valid types
      return {
        ...state,
        frequency: action.frequency,
      }
    case 'AMOUNTS':
      return {
        ...state,
        amounts: action.amounts,
      }
    case 'REQUEST_VALUES':
      return {
        ...state,
        isFetching: true,
      }
    case 'RECEIVE_VALUES':
      return {
        ...state,
        isFetching: false,
        amounts: action.data,
      }
    default:
      return state;
  }
}

export default finimizeApp;
