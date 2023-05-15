import { Fragment, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Services from "./components/CompanyServices/Services";
import News from "./components/News/News";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Footer from "./components/Footer/Footer";
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
