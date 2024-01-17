import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/companies/Companies"
import Residencies from "./Components/Residencies/Residencies"
import Value from "./Components/Value/Value";
import { Contact } from "./Components/Contact/Contact";
import './App.css'
import { GetStarted } from "./Components/GetStarted/GetStarted";


function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      </div>
    </div>
  );
}

export default App;
