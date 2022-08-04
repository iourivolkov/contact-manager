import { useState } from "react";
import Navigation from "./components/Navigation";
import ContactList from "./components/ContactList";

import ContactCard from "./components/ContactCard";
import { Box } from "@mui/material";

const title = "PBLK";

const contactsArray = [
  {
    id: 1,
    name: "Wallet1",
    walletAddress: "0xFf774DeBfaC5BA43E7988bDAb5819E2A847474f8",
    chain: "Ethereum",
  },
];

function App() {
  const [contacts, setContacts] = useState(contactsArray);

  return (
    <div className="App">
      <Navigation title={title} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
