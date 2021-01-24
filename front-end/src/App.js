import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllCharPage from './Components/Characters'
import CharacterStats from './Components/CharDetails';
import UpdateCharacterForm from './Components/UpdateCharacterForm';
import CreateCharacterForm from './Components/CreateCharacterForm';
import Tavern from './Components/Tavern.js';
import Battle from './Components/Battle';
import Home from './Components/Home';
import YouWin from './Components/YouWin';
import YouLose from './Components/YouLose';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {

  return (    
    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Characters" exact component={AllCharPage} />
        <Route path="/Characters/:id" component={CharacterStats} />
        <Route path="/CreateCharacterForm" exact component={CreateCharacterForm} />
        <Route path="/UpdateCharacterForm/:id" exact component={UpdateCharacterForm} />
        <Route path="/Tavern" component={Tavern} />
        <Route path="/Battle" component={Battle} />
        <Route path="/YouWin" component={YouWin} />
        <Route path="/YouLose" component={YouLose} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
      </Switch>
      </div>
    </Router>
  );
}
export default App;

