import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Service from "./pages/Service";
import PNF from "./pages/PNF";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/service" component={Service}/>
          <Route component={PNF}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
