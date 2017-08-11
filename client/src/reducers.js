const initialState = {
  initialAmount: 0.0,
  monthlyAmount: 0.0,
  interestRate: 0.0,
  currency: 'GBP',
  interestFrequency: 'Annually',
  amounts: [],
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
    default:
      return state;
  }
}

export default finimizeApp;
