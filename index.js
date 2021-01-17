const express = require("express");
const axios = require("axios");
const app = express();

// environment variables
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/rates", (req, res) => {
  const { base, currency } = req.query;

  // Fallback incase user doesn't provide base currency symbol
  let API = `https://api.exchangeratesapi.io/latest?base=${base || 'EUR'}`;


  axios
    .get(API)
    .then(({ data }) => {
      const { date } = data;
      const rates = {};
      let result = data;

      if (currency) {
        const currencySymbols = currency.split(",");

        currencySymbols.forEach((symbol) => {
          rates[symbol] = data.rates[symbol];
        });

        result = {
          base,
          date,
          rates,
        };
      }

      res.json({
        result,
      });
    })

    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: "Something went wrong",
        error: error.message,
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
