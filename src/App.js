import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import News from "./components/News";
import AboutCompany from "./components/AboutCompany";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Services />
        <News />
        <AboutCompany />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
