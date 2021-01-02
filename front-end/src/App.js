import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AllCharPage from './Components/Characters'
import CharacterStats from './Components/CharDetails';
import UpdateCharacterForm from './Components/UpdateCharacterForm';
import CreateCharacterForm from './Components/CreateCharacterForm';
import GenerateCharComponent from './Components/GenerateChar';

function App() {
  const Home = () => (
    <div>
      <h1>Home Page</h1>
      <button>Login</button>
      <button>Register</button>
    </div>
  );

  return (    
    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Characters" exact component={AllCharPage} />
        <Route path="/Characters/:id" component={CharacterStats} />
        <Route path="/CreateCharacterForm" exact component={CreateCharacterForm} />
        <Route path="/UpdateCharacterForm/:id" component={UpdateCharacterForm} />
        <Route path="/GenerateChar" exact component={GenerateCharComponent} />

      </Switch>
      </div>
    </Router>
  );
}
export default App;

