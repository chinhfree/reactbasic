import logo from './logo.svg';
import './App.scss';
import DemoComponent from './Example/DemoComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <DemoComponent />
      </header>
    </div>
  );
}

export default App;
