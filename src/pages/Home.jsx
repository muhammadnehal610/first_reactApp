import { useState, useEffect } from "react";
import "../App.css";
import Filter from "../component/Filter";

import Hero from "../component/Hero";

import Product from "../component/Product";
import Testimoials from "../component/Testimoials"; // Corrected import
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

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
      <Filter
        onSearchChange={handleSearchInput}
        onCategoryChange={handleCategoryChange}
      />
      {!search && <Hero />} {/* Using a more concise conditional rendering */}
      <div className="container mx-auto py-24 px-5">
        <div className="flex flex-wrap -m-4">
          {filteredArr.map((data) => (
            <Link
              key={data.id}
              to={`/details/${data.id}`}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <Product
                key={data.id}
                title={data.title}
                image={data.image || ""}
                category={data.category}
                price={data.price}
              />
            </Link>
          ))}
        </div>
      </div>
      <Testimoials /> {/* Corrected component reference */}
    </>
  );
}

export default Home;
