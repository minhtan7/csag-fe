
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hompage from "./pages/Homepage/Hompage";
import ShipperPage from "./pages/ShipperPage";
import PublicNav from "./components/PublicNav/PublicNav";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <PublicNav />
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shipper" component={ShipperPage} />
      </Switch>
    </Router>
  );
}

export default App;
