export default function SharesDisplay(props) {
  const showShare = (share) => {
    return (
      <tr>
        <td>{share.exchange}</td>
        <th scope="row">{share.company}</th>
        <td>{share.quantity}</td>
        <td>{share.price}</td>
        <td>Number Dropdown</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Shares</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Exchange</th>
              <th scope="col">Company</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Change Quantity</th>
            </tr>
          </thead>
          <tbody>{props.shares.map(showShare)}</tbody>
        </table>
      </div>
    </div>
  );
}
