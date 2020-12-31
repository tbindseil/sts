import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Welcome to Students Teaching Students!
        <br/>
          We empower students to help other students.
        </p>

        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">Register</Button>
          <Button variant="primary">Sign In</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
