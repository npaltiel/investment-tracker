import { useState, useEffect } from "react";

export default function StocksList(props) {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    if (props.country == "") {
      setStocks([]);
    } else {
      props.getStocks("/stocks", props.country).then((data) => {
        const stockNamesSet = new Set();
        data.forEach((option) => stockNamesSet.add(option.name));
        const stockNames = Array.from(stockNamesSet).sort();
        setStocks(stockNames);
      });
    }
  }, [props.country]);

  return (
    <div>
      <select onChange={(e) => props.setStocks(e.target.value)}>
        <option value="">Select an option</option>
        {stocks.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
