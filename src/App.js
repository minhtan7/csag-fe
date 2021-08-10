import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hompage from "./pages/Hompage";
import ShipperPage from "./pages/ShipperPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import PublicNavbar from "./components/PublicNavabar/PublicNavbar";

function App() {
  return (
    <Router>
      <PublicNavbar />
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shipper" component={ShipperPage} />
        <Route path="/blogpage" component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;
