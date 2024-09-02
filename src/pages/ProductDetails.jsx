import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full">
          <div className="block relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              alt={product.title}
              className="object-cover object-center w-full h-full"
              src={product.image}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 w-full flex flex-col justify-between">
          <div>
            <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-2">
              {product.category}
            </h3>
            <h1 className="text-gray-900 text-3xl font-semibold mb-4">
              {product.title}
            </h1>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {Array.from(
                  { length: Math.floor(product.rating.rate) },
                  (_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.256 3.877a1 1 0 00.95.69h4.073c.969 0 1.371 1.24.588 1.81l-3.3 2.396a1 1 0 00-.364 1.118l1.256 3.877c.3.921-.755 1.688-1.54 1.118l-3.3-2.396a1 1 0 00-1.175 0l-3.3 2.396c-.784.57-1.838-.197-1.539-1.118l1.255-3.877a1 1 0 00-.364-1.118L2.182 9.304c-.784-.57-.38-1.81.588-1.81h4.073a1 1 0 00.95-.69l1.256-3.877z" />
                    </svg>
                  )
                )}
                {product.rating.rate % 1 !== 0 && (
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <linearGradient id="half">
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#half)"
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.256 3.877a1 1 0 00.95.69h4.073c.969 0 1.371 1.24.588 1.81l-3.3 2.396a1 1 0 00-.364 1.118l1.256 3.877c.3.921-.755 1.688-1.54 1.118l-3.3-2.396a1 1 0 00-1.175 0l-3.3 2.396c-.784.57-1.838-.197-1.539-1.118l1.255-3.877a1 1 0 00-.364-1.118L2.182 9.304c-.784-.57-.38-1.81.588-1.81h4.073a1 1 0 00.95-.69l1.256-3.877z"
                    />
                  </svg>
                )}
              </div>
              <span className="text-gray-600 ml-2">
                {product.rating.count} Reviews
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-blue-600">
                ${product.price}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
              <button className="flex items-center justify-center w-12 h-12 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
                <svg
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.76 3.64a5.5 5.5 0 00-7.78 7.78l7.78 7.78 7.78-7.78a5.5 5.5 0 00-7.78-7.78z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Additional Info (Optional) */}
          {/* You can add more sections here like specifications, reviews, etc. */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
