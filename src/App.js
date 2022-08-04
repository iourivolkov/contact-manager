import "./App.css";
import Navigation from "./components/Navigation";
import ContactList from "./components/ContactList";
import AddContactModal from "./components/Modals/AddContactModal";
import DeleteContactModal from "./components/Modals/DeleteContactModal";
import UpdateContactModal from "./components/Modals/UpdateContactModal";

const title = "CNTKT";

function App() {
  return (
    <div className="App">
      <Navigation title={title} />
      {/* <ContactList /> */}
      <UpdateContactModal />
    </div>
  );
}

export default App;
