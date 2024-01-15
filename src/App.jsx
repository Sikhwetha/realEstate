import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/companies/Companies"
import Residencies from "./Components/Residencies/Residencies"
import './App.css'


function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      </div>
    </div>
  );
}

export default App;
