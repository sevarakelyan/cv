import "./App.css";
import Routee from "./components/Main/Route";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routee />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
