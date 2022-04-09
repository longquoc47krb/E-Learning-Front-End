import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
export default (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/cart" component={Cart} />
  </Router>
);
