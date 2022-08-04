import { useState } from "react";
import Navigation from "./components/Navigation";
import ContactList from "./components/ContactList";
import man1 from "./assets/images/man1.jpg";
import man2 from "./assets/images/man2.jpg";
import woman1 from "./assets/images/woman1.jpg";
import woman2 from "./assets/images/woman2.jpg";
import ContactCard from "./components/ContactCard";
import { Box } from "@mui/material";

const title = "CNTKT";

// hard-code array of contacts before creating back-end

const contactsArray = [
  {
    id: 1,
    name: "Peter Munk",
    mobile: "6472728888",
    email: "p.munk@gmail.com",
    image: man1,
  },
  {
    id: 2,
    name: "John Smith",
    mobile: "6472728888",
    email: "p.munk@gmail.com",
    image: man2,
  },
  {
    id: 3,
    name: "Kira Young",
    mobile: "4167776767",
    email: "ky@gmail.com",
    image: woman1,
  },
  {
    id: 4,
    name: "Jennifer Dangelo",
    mobile: "6478880909",
    email: "dangeloo@gmail.com",
    image: woman2,
  },
];

function App() {
  const [contacts, setContacts] = useState(contactsArray);

  return (
    <div className="App">
      <Navigation title={title} />
      <ContactList contacts={contacts} />
      {/* {contactsArray.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            name={contact.name}
            mobile={contact.mobile}
            email={contact.email}
            image={contact.image}
          />
        );
      })} */}
    </div>
  );
}

export default App;
