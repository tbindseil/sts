import logo from './logo.svg';
import './App.css';
import Register from './Register';
import SignIn from './SignIn';
import {Switch, Route, Link} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/signin" component={SignIn}/>
      </Switch>
    </div>
  );
}

const Home = () => {
  return (
    <body>
      <img src={logo} className="App-logo" alt="logo" />

      <p>
        Welcome to Students Teaching Students!
      <br/>
        We empower students to help other students.
      </p>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </body>
  );
}

export default App;
