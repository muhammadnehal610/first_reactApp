import { useState } from "react";
import "./App.css";
import Filter from "./component/Filter";
import Footer from "./component/Footer";
import Hero from "./component/Hero";

import Nav from "./component/Nav";
import Product from "./component/Product";
import Testimoial from "./component/Testimoials";
import { useEffect } from "react";

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const filteredArr = product.filter(
    (data) => data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );
  console.log(product);
  return (
    <>
      <Nav />
      <Filter
        onChange={(e) => {
          setSearch(e.target.value);

        }}
      />
      {
        search ? false : <Hero />
      }
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-wrap -m-4">
          {filteredArr.map((data) => (
            <Product
              key={data.id}
              title={data.title}
              image={data.images[1]}
              category={data.category.name}
              price={data.price}
            />
          ))}
        </div>
      </div>
      <Testimoial />
      <Footer />
    </>
  );
}

export default App;
