import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import UserPage from "./containers/UserPage/index";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user/:userId" component={UserPage} />
          <Route>404 Page not found</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
