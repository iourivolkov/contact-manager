import "./App.css";
import Navigation from "./components/Navigation";
import ContactList from "./components/ContactList";

const title = "CNTKT";

function App() {
  return (
    <div className="App">
      <Navigation title={title} />
      <ContactList />
    </div>
  );
}

export default App;
