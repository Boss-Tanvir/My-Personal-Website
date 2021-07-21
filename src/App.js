import "./App.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import AboutTab from "./components/AboutTab/AboutTab";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <AboutMe />
      <AboutTab />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
