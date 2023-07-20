import { useState } from "react";

export default function AddShares(props) {
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState(0);
  let price = "TBD"; // API call
  let exchange = "TBD"; // API call

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
