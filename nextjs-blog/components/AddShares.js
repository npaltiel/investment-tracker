import { useState } from "react";

export default function AddShares(props) {
  const [company, setCompany] = useState(""); // should be dropdown
  const [quantity, setQuantity] = useState(0);
  let price = "TBD"; // API call
  const [exchange, setExchange] = useState(""); // should be dropdown

  const addShareButtonPressed = () => {
    props.addShare({
      company: company,
      quantity: quantity,
      price: price,
      exchange: exchange,
    });

    setCompany("");
    setQuantity(0);
  };

  return (
    <div>
      <h2>Add Shares</h2>
      <div>
        <label htmlFor="exchange-field">Exchange:</label>
        <input
          id="exchange-field"
          type="text"
          className="form-control"
          value={exchange}
          onChange={(e) => setExchange(e.target.value)}
        />
        <label htmlFor="company-field">Company:</label>
        <input
          id="company-field"
          type="text"
          className="form-control"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
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
