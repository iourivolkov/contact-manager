import "./App.css";
import Navigation from "./components/Navigation";
import ContactCard from "./components/ContactCard";

const title = "CNTKT";

function App() {
  return (
    <div className="App">
      <Navigation title={title} />
      <ContactCard />
    </div>
  );
}

export default App;
