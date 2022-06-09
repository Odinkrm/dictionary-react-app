import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <Dictionary />
      </div>
      <footer className="text-center text-muted mt-2 mb-2">
        Coded by Asal Karimi
      </footer>
    </div>
  );
}
