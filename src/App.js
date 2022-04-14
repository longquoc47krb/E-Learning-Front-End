import "./App.css";
import {
  NavBar,
  HeroBanner,
  Footer,
  Categories,
} from "./components/containers/";
import { Home, NotFound } from "./pages";
import "./styles/common/global.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
