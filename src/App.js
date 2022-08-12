import { useState, useCallback, useEffect } from "react";
import Navigation from "./components/Navigation";
import AddressesList from "./components/AddressesList";
import AppContext from "../src/Context";

const title = "PBLK";

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
      // console.log(data);

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
