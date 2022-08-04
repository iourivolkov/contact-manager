import "./App.css";
import Navigation from "./components/Navigation";
import ContactList from "./components/ContactList";
import AddContactModal from "./components/Modals/AddContactModal";

const title = "CNTKT";

function App() {
  return (
    <div className="App">
      <Navigation title={title} />
      {/* <ContactList /> */}
      <AddContactModal />
    </div>
  );
}

export default App;
