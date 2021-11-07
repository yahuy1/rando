import './App.css';
import Homepage from './component/homepage.js'
import Play2 from './component/play2.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Howtoplay from './component/howtoplay'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/play' component={Play2} />
        <Route path='/:string' component={Homepage} />
        <Route exact path='/howtoplay' component={Howtoplay} />
      </Switch>
    </Router>
  );
}

export default App;
