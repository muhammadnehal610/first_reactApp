function Filter({ onSearchChange, onCategoryChange }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mx-auto">
        {/* Search Bar */}
        <form className="max-w-md w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-6-6m0-9a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full pl-10 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              placeholder="Search Mockups, Logos..."
              required=""
              onChange={onSearchChange}
            />
          </div>
        </form>

        {/* State Selector */}
        <form className="max-w-sm w-full">
          <div className="flex items-center">
            <label htmlFor="states" className="sr-only">
              Choose a state
            </label>
            <select
              id="states"
              className="w-full p-2.5 text-sm bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
<<<<<<< Updated upstream
              <option value="" disabled selected>
                Choose a state
              </option>

=======
              <option onChange={onCategoryChange} selected="">
                Choose a state
              </option>
              <option value={"Clothes"}>Clothes</option>
              <option value={"Electronics"}>Electronics</option>
              <option value={"Furniture"}>Furniture</option>
              <option value={"Shoes"}>Shoes</option>
              <option value={"Miscellaneous"}>Miscellaneous</option>
>>>>>>> Stashed changes
            </select>
          </div>
        </form>

        {/* Document Type Radio Buttons */}
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg sm:flex">
          {[
            { id: "horizontal-list-radio-license", label: "100>" },
            { id: "horizontal-list-radio-id", label: "29>" },
            { id: "horizontal-list-radio-military", label: "46>" },
            { id: "horizontal-list-radio-passport", label: "30>" },
          ].map((option) => (
            <li
              key={option.id}
              className="w-full border-b border-gray-300 sm:border-b-0 sm:border-r last:border-0"
            >
              <div className="flex items-center pl-3">
                <input
                  id={option.id}
                  type="radio"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor={option.id}
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                >
                  {option.label}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
