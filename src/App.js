import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hompage from "./pages/Hompage";
import ShipperPage from "./pages/ShipperPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shipper" component={ShipperPage} />
      </Switch>
    </Router>
  );
}

export default App;
