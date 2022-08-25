import { useState, useCallback, useEffect } from "react";
import Navigation from "./components/Navigation";
import AddressesList from "./components/AddressesList";
import AppContext from "../src/Context";
import axios from "axios";

const title = "keepr";

function App() {
  const [addresses, setAddresses] = useState([]);
  const [error, setError] = useState(null);

  // GET request to fetch addresses from PBLK database

  const fetchAddresses = useCallback(async () => {
    setError(null);

    try {
      const response = await fetch("http://localhost:5001/wallets");

      const data = await response.json();
      // receive a collection of objects
      // console.log(data);

      const loadedAddresses = [];

      for (const key in data) {
        loadedAddresses.push({
          id: key,
          name: data[key].name,
          walletAddress: data[key].address,
          chain: data[key].chain,
        });
      }
      setAddresses(loadedAddresses);
      // console.log(loadedAddresses);
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
