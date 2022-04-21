import "./App.css";
import { NavBar, Footer } from "./components/containers/";
import { Home, NotFound } from "./pages";
import "./styles/common/global.scss";
import { SignIn } from "./components/containers/User/Auth/SignIn";
import { Register } from "./components/containers/User/Auth/Register";
import { ForgetPassword } from "./components/containers/User/Auth/ForgetPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/auth/signin" element={<SignIn />} />
          <Route exact path="/auth/signup" element={<Register />} />
          <Route
            exact
            path="/auth/forget-password"
            element={<ForgetPassword />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
