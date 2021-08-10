import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hompage from "./pages/Homepage/Hompage";
import ShipperPage from "./pages/ShipperPage";
import PublicNav from "./components/PublicNav/PublicNav";
import BlogPage from "./pages/BlogPage/BlogPage";
import ShipperProfilePage from "./pages/ShipperProfilePage";

function App() {
  return (
    <Router>
      <PublicNav />
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route path="/shipper" component={ShipperPage} />
        <Route path="/blogpage" component={BlogPage} />
        <Route path="/profile" component={ShipperProfilePage} />

      </Switch>
    </Router>
  );
}

export default App;
