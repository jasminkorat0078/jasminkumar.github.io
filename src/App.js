import logo from "./logo.svg";
import "./App.scss";
import Experience from "./component/experience/Experience";
import Testimonial from "./component/testimonial/Testimonial";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Nav from "./component/nav/Nav";
import Service from "./component/service/Service";
import Qualification from "./component/qualification/Qualification";
import Achievement from "./component/achievement/Achievement";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Qualification/>
      <Achievement/>
      <Experience />
      <Service/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
