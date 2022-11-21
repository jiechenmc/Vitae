import Classes from "./components/Education";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Head />
      <div className="justify-evenly sm:flex-col md:flex-row">
        <About />
        <Classes />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
