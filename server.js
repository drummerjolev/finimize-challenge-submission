const express = require('express');
const http = require("http");

const app = express();

app.set('port', (process.env.PORT || 3001));

app.get('/compute', function (req, res) {
  const {
    initial_amount,
    monthly_amount,
    interest_rate,
    interest_schedule,
    to_currency,
  } = req.query;

  let currentVal = parseFloat(initial_amount);
  const monthly = parseFloat(monthly_amount);
  const rate = parseFloat(interest_rate);
  const compounds = parseFloat(interest_schedule);

  // validation
  if (isNaN(currentVal) || isNaN(monthly) || isNaN(rate) || isNaN(compounds)) {
    return res.json({
      error_msg: 'invalid params',
      error_code: 1,
      success: false,
    });
  }

  // compute compound interest
  let monthlyAmounts = [];
  for (var i = 0; i < 50*12; i++) { // hard-coded to 50 years as per spec
    let nextVal = (currentVal*(1+(rate/compounds))) + monthly;
    currentVal = nextVal;
    monthlyAmounts.push(currentVal);
  }

  // convert to foreign currency if necessary
  if (to_currency !== 'GBP') {
    http.get({
        host: 'api.fixer.io',
        path: '/latest?base=GBP'
    }, function(response) {
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            const parsed = JSON.parse(body);
            const exchangeRate = parsed.rates[to_currency];
            return res.json({
              monthly_amounts: monthlyAmounts.map(amount => exchangeRate * amount),
              success: true,
            });
        });
    });
  } else {
    return res.json({
      monthly_amounts: monthlyAmounts,
      success: true,
    });
  }

})

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
