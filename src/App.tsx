import { BrowserRouter, HashRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Menu />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
