import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className=" dictionary-wrap">
          <h1 className="text-center mt-4 mb-4">
            What word are you looking for?
          </h1>
          <Dictionary />
        </div>
      </div>
      <footer className="text-center text-muted mt-2 mb-2">
        This project was coded by Asal Karimi and is open-sourced on{" "}
        <a href="https://github.com/Odinkrm/dictionary-react-app">GitHub</a> and
        hosted on{" "}
        <a href="https://this-react-dictionary-app.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}
