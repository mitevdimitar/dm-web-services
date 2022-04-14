import Home from './Pages/Home';
import './App.css';
import MenuBar from "./Components/AppBar";
import Services from './Pages/Services';
import Team from './Pages/Team';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Home />
      <Services />
      <Team />
    </div>
  );
}

export default App;
