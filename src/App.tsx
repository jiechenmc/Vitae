import Classes from "./components/Classes";
import Head from "./components/Head";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Head />
      <div className="justify-evenly sm:flex-col md:flex-row">
        <Classes />
        <Projects />
      </div>
    </div>
  );
}

export default App;
