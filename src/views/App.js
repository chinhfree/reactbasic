import logo from './logo.svg';
import './App.scss';
import DemoComponent from './Example/DemoComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with Chinh Free!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <DemoComponent />
      </header>
    </div>
  );
}

export default App;
