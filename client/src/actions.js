export const changeInitialAmount = amount => {
  return {
    type: 'INIT_AMOUNT',
    amount
  }
}

export const changeMonthlyAmount = amount => {
  return {
    type: 'MONTHLY_AMOUNT',
    amount
  }
}

export const changeInterest = rate => {
  return {
    type: 'INTEREST_RATE',
    rate
  }
}

export const changeDisplayCurrency = displayCurrency => {
  return {
    type: 'CURRENCY',
    displayCurrency
  }
}

export const changeInterestFrequency = frequency => {
  return {
    type: 'INTEREST_FREQUENCY',
    frequency
  }
}

export const changeAmounts = amounts => {
  return {
    type: 'AMOUNTS',
    amounts
  }
}

// fetching data from server
function requestValues() {
  return {
    type: 'REQUEST_VALUES',
  }
}

function receiveValues(json) {
  return {
    type: 'RECEIVE_VALUES',
    data: json.monthly_amounts.map((month, idx) => {
      return {
        month: idx + 1,
        amount: month,
      }
    }),
  }
}

function fetchValues(state) {
  return dispatch => {
    dispatch(requestValues());
    const request = 'http://localhost:3000/compute?' +
      `initial_amount=${state.initialAmount}&` +
      `monthly_amount=${state.monthlyAmount}&` +
      `interest_rate=${state.interestRate / 100}&` +
      `interest_schedule=${state.interestFrequency}&` +
      `to_currency=${state.displayCurrency}`;
    return fetch(request)
      .then(
        response => response.json(),
        error => console.log('There was an error: ', error),
      )
      .then(json => dispatch(receiveValues(json)))
  }
}

export const fetchValuesIfNeeded = () => {
  return (dispatch, getState) => {
    if (!getState().isFetching) {
      return dispatch(fetchValues(getState()));
    } else {
      // fetch in progress, cancel request
      return Promise.resolve();
    }
  }
}
