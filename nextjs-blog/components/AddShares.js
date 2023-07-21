import { useState, useEffect } from "react";
import ExchangeList from "./ExchangeList";
import CountryDropdown from "./CountryDropdown";
import StocksList from "./StocksList";

export default function AddShares(props) {
  const [selectedCountry, setCountry] = useState("");
  const [exchange, setExchange] = useState(""); // should be dropdown
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState(0);
  let price = "TBD"; // API call

  const addShareButtonPressed = () => {
    props.addShare({
      exchange: exchange,
      company: company,
      quantity: quantity,
      price: price,
    });

    setCompany("");
    setQuantity(0);
  };

  return (
    <div>
      <h2>Add Shares</h2>
      <div>
        <label htmlFor="country-field">Country:</label>
        <div id="country-field">
          <CountryDropdown CountryChange={setCountry} />
        </div>
        <label htmlFor="exchange-field">Exchange:</label>
        <div id="exchange-field">
          <ExchangeList
            country={selectedCountry}
            setExchange={setExchange}
            getExchanges={props.getTwelveData}
          />
        </div>
        <label htmlFor="stocks-field">Company:</label>
        <div id="stocks-field">
          <StocksList
            country={selectedCountry}
            setStocks={setCompany}
            getStocks={props.getTwelveData}
          />
        </div>
        <label htmlFor="quantity-field">Quantity:</label>
        <input
          id="quantity-field"
          type="number"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="col-4 btn btn-secondary"
        onClick={addShareButtonPressed}
      >
        Add Share
      </button>
    </div>
  );
}
