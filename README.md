# Exchange Rate API

## Sample endpoint

`https://exchange-rate-latest-api.herokuapp.com/api/rates?base=CZK&currency=EUR,GBP,USD`

returns 

`{
  "result": {
    "base": "CZK",
    "date": "2021-01-15",
    "rates": {
      "EUR": 0.0382219164,
      "GBP": 0.0340167412,
      "USD": 0.0463364293
    }
  }
}`


`https://exchange-rate-latest-api.herokuapp.com/api/rates`

sets the base to EUR 


 
