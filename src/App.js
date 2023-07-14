import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          So this is where it is
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
