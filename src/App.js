import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hello World!
        </p>
        <p data-testid="cicd" className="App-link">
          We Added CI/CD!
        </p>
        <p data-testid="nf" className="App-link">
          Added New Feature ⭐!
        </p>
      </header>
    </div>
  );
}

export default App;
