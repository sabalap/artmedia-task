import { Fragment, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import News from "./components/News";
import AboutCompany from "./components/AboutCompany";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Fragment>
      <Header />
      <main>
        <Services anim="fade-up" />
        <News anim="fade-up" />
        <AboutCompany anim="fade-up" />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
