import Footer from "./layout/FooterTem.jsx";
import  Navbar from "./layout/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from"./sections/About.jsx";
import Menu from "./sections/Menu.jsx";
import  Contact from "./sections/Contact.jsx";
function App(){
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
    < Footer />
  </div>;
}

export default App;
