import { useState, useCallback, useEffect } from "react";
import Navigation from "./components/Navigation";
import AddressesList from "./components/AddressesList";
import { v4 as uuidv4 } from "uuid";
import AppContext from "../src/Context";

const title = "PBLK";

// const addressesArray = [
//   {
//     id: uuidv4(),
//     name: "Wallet 1",
//     walletAddress: "0xFf774DeBfaC5BA43E7988bDAb5819E2A847474f8",
//     chain: "Ethereum",
//   },
//   {
//     id: uuidv4(),
//     name: "Ledger X",
//     walletAddress: "0xf38A1C25CEfBd09Cc92E6B4dd3036f3022e97485",
//     chain: "Ethereum",
//   },
//   {
//     id: uuidv4(),
//     name: "Burner 1",
//     walletAddress: "0xFf774DeBfaC5BA43E7988bDAb5819E2A847474f8",
//     chain: "Solana",
//   },
//   {
//     id: uuidv4(),
//     name: "Ledger S",
//     walletAddress: "0x91CA0573f4D71398342685391A0e71653630e588",
//     chain: "Avalanche",
//   },
// ];

function App() {
  const [addresses, setAddresses] = useState([]);
  const [error, setError] = useState(null);

  // GET request to fetch addresses from PBLK database

  const fetchAddresses = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://pblk-ef287-default-rtdb.firebaseio.com/addresses.json"
      );

      const data = await response.json();
      // receive a collection of objects
      console.log(data);

      const loadedAddresses = [];

      for (const key in data) {
        loadedAddresses.push({
          id: key,
          name: data[key].name,
          walletAddress: data[key].walletAddress,
          chain: data[key].chain,
        });
      }
      setAddresses(loadedAddresses);
      console.log(loadedAddresses);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  console.log(addresses);
  return (
    <AppContext.Provider
      value={{
        walletAddresses: addresses,
        setAddresses: setAddresses,
      }}
    >
      <Navigation title={title} />
      <AddressesList />
    </AppContext.Provider>
  );
}

export default App;
