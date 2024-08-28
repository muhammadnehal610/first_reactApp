import { useState } from "react";
import "./App.css";
import Filter from "./component/Filter";
import Footer from "./component/Footer";
import Hero from "./component/Hero";

import Nav from "./component/Nav";
import Product from "./component/Product";
// import Testimoial from "./component/Testimoials";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredArr = products.filter((data) => {
    const matchesSearch = search
      ? data.title.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchesCategory = category
      ? data.category.name.includes(category)
      : true;

    return matchesSearch && matchesCategory;
  });

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <>
      <Nav />

      <Filter
<<<<<<< Updated upstream
        onChange={(e) => {
          setSearch(e.target.value);

        }}
      />
      {
        search ? false : <Hero />
      }
=======
        onSearchChange={handleSearchInput}
        onCategoryChange={handleCategoryChange}
      />

      <Hero />
>>>>>>> Stashed changes
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
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
}

export default App;
