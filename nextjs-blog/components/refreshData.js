export default function RefreshData(props) {
  const refreshPrices = () => {
    console.log("refreshing");
    let listings = props.data;
    listings.forEach((listing) => {
      const stockSymbol = listing.company;

      props
        .getPrice(listing, "/price")
        .then((stockPrice) => {
          if (stockPrice !== null) {
            listing.price = stockPrice;
            console.log(
              `The current stock price of ${stockSymbol} is $${stockPrice.toFixed(
                2
              )}`
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
    });
  };

  return (
    <div>
      <button onClick={refreshPrices}>Refresh Prices</button>
    </div>
  );
}
