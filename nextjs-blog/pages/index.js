import Link from "next/link";
import SharesDisplay from "../components/SharesDisplay";
import React, { useState, useEffect } from "react";
import AddShares from "../components/AddShares";
import RefreshData from "../components/refreshData";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:3001/shares")
      .then((response) => response.json())
      .then((data) => setData({ shares: data }));
  }, []);

  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ shares: [] });

  const addShares = (share) => {
    let shares = data["shares"];
    console.log(shares);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(share),
    };

    fetch("http://localhost:3001/shares", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        shares.push(data);
        setData({ shares: shares });
      });
  };

  const filteredShares = (shares) => {
    return shares;
  };

  return (
    <div>
      <SharesDisplay shares={filteredShares(data["shares"])} />
      <AddShares addShare={addShares} />
    </div>
  );
}
