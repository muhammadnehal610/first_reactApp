import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      {/* SignIn Component */}
      <div className="flex h-screen">
        {/* Left Pane */}
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="max-w-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="524.67004"
              height="531.39694"
              className="w-full"
              alt="https://undraw.co/illustrations"
              title="https://undraw.co/illustrations"
              viewBox="0 0 524.67004 531.39694"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon
                points="117.67523 88.74385 113.67523 109.74385 133.61763 115.36589 131.1398 92.94604 117.67523 88.74385"
                fill="#a0616a"
              />
              <path
                d="M0,523.44458c0,.66003,.53003,1.19,1.19006,1.19H523.48004c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H1.19006c-.66003,0-1.19006,.53003-1.19006,1.19Z"
                fill="#3f3d56"
              />
              <g>
                <path
                  d="M356.03772,238.30865H150.36885c-23.32296,0-42.22995,18.90698-42.22995,42.22995v199.43289c0,23.32291,18.90695,42.22986,42.22986,42.22986h205.66896c23.32297,0,42.22995-18.90698,42.22995-42.22995v-199.43283c0-23.32297-18.90698-42.22995-42.22995-42.22995v.00003Z"
                  fill="#fff"
                />
                <path
                  d="M356.03781,523.20093H150.36888c-23.83691,0-43.22998-19.39258-43.22998-43.22949v-199.43262c0-23.83691,19.39307-43.22998,43.22998-43.22998h205.66896c23.83691,0,43.22998,19.39307,43.22998,43.22998v199.43262c0,23.83691-19.39307,43.22949-43.22998,43.22949h-.00003ZM150.36888,239.30882c-22.73438,0-41.22998,18.49562-41.22998,41.23v199.43262c0,22.73438,18.49561,41.22949,41.22998,41.22949h205.66896c22.73438,0,41.22998-18.49512,41.22998-41.22949v-199.43262c0-22.73438-18.49561-41.22998-41.22998-41.22998H150.36888v-.00002Z"
                  fill="#3f3d56"
                />
                <path
                  d="M370.93558,324.77005h-82.66788c-3.50635,0-6.35907-2.85272-6.35907-6.35907s2.85272-6.35907,6.35907-6.35907h82.66785c3.50635,0,6.35907,2.85272,6.35907,6.35907s-2.85272,6.35907-6.35907,6.35907h.00003Z"
                  fill="#000000"
                />
                <path
                  d="M293.3822,374.77737h-80.3571c-2.02586,0-3.67427-1.64841-3.67427-3.67429s1.64841-3.67352,3.67427-3.67352h80.3571c2.02588,0,3.67352,1.64764,3.67352,3.67352s-1.64764,3.67426-3.67352,3.67426v.00003Z"
                  fill="#000000"
                />
                <rect
                  x="133.61763"
                  y="251.96666"
                  width="46.49806"
                  height="5.96129"
                  rx=".31021"
                  ry=".31021"
                  fill="#000000"
                />
                <circle
                  cx="334.3363"
                  cy="253.15892"
                  r="4.76904"
                  fill="#3f3d56"
                />
                <circle
                  cx="347.45114"
                  cy="253.15892"
                  r="4.76904"
                  fill="#3f3d56"
                />
                <circle
                  cx="360.56598"
                  cy="253.15892"
                  r="4.76904"
                  fill="#3f3d56"
                />
                <path
                  d="M149.86826,394.44458c0,.66003,.53003,1.19,1.19006,1.19h204.28998c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H151.05832c-.66003,0-1.19006,.53003-1.19006,1.19Z"
                  fill="#3f3d56"
                />
              </g>
              {/* Additional SVG Elements */}
              <g>
                <path
                  id="uuid-d0b76542-8f08-4363-846d-0cc3b89caf22-176"
                  d="M212.17296,100.91704c4.34915-3.59367,9.72871-4.26258,12.0153-1.49438,2.28658,2.7682,.6142,7.92447-3.73698,11.51883-1.71841,1.45964-3.76141,2.48653-5.95805,2.99474l-18.6198,14.99379-6.8499-8.8877,19.08307-13.83763c.91373-2.06202,2.30807-3.87516,4.06638-5.28765h-.00002Z"
                  fill="#a0616a"
                />
                <path
                  d="M104.55261,134.74706c-.00944-.66307-.00322-6.44713,4.27885-10.10294,4.91893-4.1995,11.85979-2.49972,14.29424-1.90355,5.62363,1.37718,6.08482,3.78959,11.36601,6.2683,9.88049,4.63744-2.4994,2.26379,3.37981,.77675,2.03505-.51472,31.31216-2.54515,38.59979-7.03056,14.17354-8.72353,23.83086-14.01349,23.83086-14.01349l6.31322,12.62642s-9.12891,12.69357-21.97707,22.09717c-13.17929,9.64592-19.76894,14.46893-29.78342,16.3324-.8624,.16048-22.0723,3.78188-39.15515-8.98085-3.89654-2.91112-11.03588-8.24498-11.14714-16.06966v.00002Z"
                  fill="#e6e6e6"
                />
                <circle
                  cx="124.1365"
                  cy="80.64255"
                  r="21.99265"
                  fill="#a0616a"
                />
                {/* Additional Graphics */}
                <g>
                  <polygon
                    points="296.37473 228.39777 273.72531 205.74836 191.67984 287.79382 191.67984 291.79382 195.67984 291.79382 281.72609 205.74757 301.37512 225.39775 296.37473 228.39777"
                    fill="#e6e6e6"
                  />
                  <rect
                    x="232.09598"
                    y="137.02428"
                    width="67.84616"
                    height="4.20654"
                    fill="#e6e6e6"
                  />
                  <rect
                    x="233.89165"
                    y="142.37457"
                    width="63.05836"
                    height="4.20654"
                    fill="#e6e6e6"
                  />
                  <rect
                    x="243.6192"
                    y="147.72485"
                    width="42.52087"
                    height="4.20654"
                    fill="#e6e6e6"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        {/* Sign In Form */}
        <div className="flex flex-col justify-center flex-1 px-6">
          <div className="mx-auto w-full max-w-md bg-white shadow-lg rounded-md p-8">
            <h2 className="text-2xl font-bold mb-6">Sign In</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Sign In
                </button>
              </div>
              <div className="flex justify-between text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
                <Link
                  to={"/auth/signup"}
                  className="text-blue-600 hover:underline"
                >
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
