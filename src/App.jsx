import "./App.css";
import Footer from "./component/Footer";
import Hero from "./component/Hero";

import Nav from "./component/Nav";
import Product from "./component/Product";
import Testimoial from "./component/Testimoials";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Product className="flex flex-wraps" />
      <Testimoial />
      <Footer />
    </>
  );
}

export default App;
