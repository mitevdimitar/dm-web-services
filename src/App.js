import Home from './Pages/Home';
import './App.css';
import MenuBar from "./Components/AppBar";
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
