import { useState } from "react";
import Navigation from "./components/Navigation";
import ContactList from "./components/ContactList";

import ContactCard from "./components/ContactCard";
import { Box } from "@mui/material";

const title = "PBLK";

const addressesArray = [
  {
    id: 1,
    name: "Wallet 1",
    walletAddress: "0xFf774DeBfaC5BA43E7988bDAb5819E2A847474f8",
    chain: "Ethereum",
  },
  {
    id: 2,
    name: "Ledger X",
    walletAddress: "0xf38A1C25CEfBd09Cc92E6B4dd3036f3022e97485",
    chain: "Ethereum",
  },
  {
    id: 3,
    name: "Burner 1",
    walletAddress: "0xFf774DeBfaC5BA43E7988bDAb5819E2A847474f8",
    chain: "Solana",
  },
  {
    id: 4,
    name: "Ledger S",
    walletAddress: "0x91CA0573f4D71398342685391A0e71653630e588",
    chain: "Ethereum",
  },
];

function App() {
  const [addresses, setAddresses] = useState(addressesArray);

  return (
    <div className="App">
      <Navigation title={title} />
      <ContactList walletAddresses={addresses} />
    </div>
  );
}

export default App;
