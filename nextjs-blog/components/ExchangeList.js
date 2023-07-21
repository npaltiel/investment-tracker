import { useState, useEffect } from "react";

export default function ExchangeList(props) {
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    if (props.country == "") {
      setExchanges([]);
    } else {
      props.getExchanges("/exchanges", props.country).then((data) => {
        const exchangeNamesSet = new Set();
        data.forEach((option) => exchangeNamesSet.add(option.name));
        const exchangeNames = Array.from(exchangeNamesSet).sort();
        setExchanges(exchangeNames);
      });
    }
  }, [props.country]);

  return (
    <div>
      <select onChange={(e) => props.setExchange(e.target.value)}>
        <option value="">Select an option</option>
        {exchanges.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
