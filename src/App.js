import Home from './Pages/Home';
import './App.css';
import MenuBar from "./Components/AppBar";
import Services from './Pages/Services';
import Team from './Pages/Team';
import Contacts from './Pages/Contacts';
import Footer from './Components/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.replace("#", "")
      );
      if (element) element.scrollIntoView();
    }
  }, []);

  return (
    <div className="App">
      <MenuBar />
      <Home />
      <Services />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
