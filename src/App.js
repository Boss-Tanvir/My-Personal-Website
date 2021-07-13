import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
