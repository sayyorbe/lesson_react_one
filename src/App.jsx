import  Home  from "./components/hero/Home";
import Header from "./components/header/Header";
import "./App.css";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact  from './components/contact/Contact';





function App() {

  return (
    <div className="App">
      <Header />
      <Home />
       <About />
       <Portfolio />
       <Skills />
       <Contact />
    </div>
  );
}

export default App;
