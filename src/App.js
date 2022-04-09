import "./App.css";
import NavBar from "./components/containers/NavBar/NavBar";
import HeroBanner from "./components/containers/HeroBanner/HeroBanner";
import Footer from "./components/containers/Footer/Footer";
import { ConfigProvider } from "antd";
import Categories from "./components/containers/Categories/Categories";
import "./styles/common/global.scss";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      <Categories />
    </div>
  );
}
export default App;
