const getStockPrice = async (symbol) => {
  const baseURL = "https://api.twelvedata.com";
  const endpoint = "/price";

  const params = new URLSearchParams({
    symbol: symbol,
    apikey: "908ae3068730422a8cc03b3b414cc2cc",
  });

  try {
    const fetch = await import("node-fetch");
    const response = await fetch.default(`${baseURL}${endpoint}?${params}`);
    const responseData = await response.json();

    if ("price" in responseData) {
      return parseFloat(responseData["price"]);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};

// Replace 'AAPL' with the stock symbol of the company you want to get the price for (e.g., Apple Inc.)
const stockSymbol = "AAPL";

getStockPrice(stockSymbol)
  .then((stockPrice) => {
    if (stockPrice !== null) {
      console.log(
        `The current stock price of ${stockSymbol} is $${stockPrice.toFixed(2)}`
      );
    } else {
      console.log(
        `Unable to retrieve the stock price for ${stockSymbol}. Please check your API key or symbol.`
      );
    }
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
