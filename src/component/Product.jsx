function Product({ image, category, title, price }) {
  return (
    <div>
      <a className="block relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs uppercase tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-semibold">
          {title}
        </h2>
        <p className="mt-2 text-xl font-bold text-blue-600">${price}</p>
      </div>
    </div>
  );
}

export default Product;
