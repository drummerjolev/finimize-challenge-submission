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

export const changeCurrency = currency => {
  return {
    type: 'CURRENCY',
    currency
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
