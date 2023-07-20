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

  const addShares = async (share) => {
    console.log(share);
    let shares = data["shares"];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(share),
    };

    await fetch("http://localhost:3001/shares", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("posted");
        shares.push(data);
        setData({ shares: shares });
      });
  };

  const updateShare = async (share) => {
    let shares = data["shares"];
    await fetch(`http://localhost:3001/shares/${share.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        console.log("deleted");
        const idx = shares.indexOf(share);
        shares.splice(idx, 1);
        setData({ shares: shares });
      }
    });

    addShares(share);
  };

  const filteredShares = (shares) => {
    return shares;
  };

  const getStockPrice = async (listing) => {
    const baseURL = "https://api.twelvedata.com";
    const endpoint = "/price";
    const symbol = listing.company;

    console.log(symbol);

    const params = new URLSearchParams({
      symbol: symbol,
      apikey: "908ae3068730422a8cc03b3b414cc2cc",
    });

    try {
      const response = await fetch(`${baseURL}${endpoint}?${params}`);
      const responseData = await response.json();

      if ("price" in responseData) {
        listing.price = parseFloat(responseData["price"]);
        updateShare(listing);
        return parseFloat(responseData["price"]);
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error:", error.message);
      return null;
    }
  };

  return (
    <div>
      <SharesDisplay shares={filteredShares(data["shares"])} />
      <AddShares addShare={addShares} />
      <RefreshData data={data["shares"]} getPrice={getStockPrice} />
    </div>
  );
}
