import Classes from "./components/Education";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div>
      <Head />
      <div className="justify-evenly sm:flex-col md:flex-row">
        <About />
        <Classes />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
