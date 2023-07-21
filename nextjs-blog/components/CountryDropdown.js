const CountryDropdown = (props) => {
  return (
    <div>
      <select onChange={(e) => props.CountryChange(e.target.value)}>
        <option value="">Select</option>
        <option value="US">United States</option>
        <option value="AU">Australia</option>
      </select>
    </div>
  );
};

export default CountryDropdown;
