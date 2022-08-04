import "./App.css";
import Navigation from "./components/Navigation";
import ContactCard from "./components/ContactCard";
import SearchContacts from "./components/SearchContacts";

const title = "CNTKT";

function App() {
  return (
    <div className="App">
      <Navigation title={title} />
      {/* <ContactCard /> */}
      <SearchContacts />
    </div>
  );
}

export default App;
