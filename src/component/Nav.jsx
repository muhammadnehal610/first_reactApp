import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="bg-white shadow-lg rounded-lg p-4">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full shadow-lg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl font-semibold">Tailblocks</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-300 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-blue-600 transition-colors duration-300 ease-in-out">
            First Link
          </a>
          <a className="mr-5 hover:text-blue-600 transition-colors duration-300 ease-in-out">
            Second Link
          </a>
          <a className="mr-5 hover:text-blue-600 transition-colors duration-300 ease-in-out">
            Third Link
          </a>
          <a className="mr-5 hover:text-blue-600 transition-colors duration-300 ease-in-out">
            Fourth Link
          </a>
        </nav>
        <Link
          to={"/auth/signin"}
          className="inline-flex items-center bg-blue-600 text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded-lg text-base mt-4 md:mt-0 shadow-lg transition-all duration-300 ease-in-out"
        >
          Sign In
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
