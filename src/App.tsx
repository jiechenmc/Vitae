import About from "./components/About";
import Classes from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="justify-evenly sm:flex-col md:flex-row">
          <About />
          <Classes />
          <Projects />
          <TechStack />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
