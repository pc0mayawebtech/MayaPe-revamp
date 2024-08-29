import { MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer className="relative bg-gradient-to-t from-sky-200 via-sky-50 to-white pt-20 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <img src="/mayapeLogo.png" alt="logo" className="h-auto w-32" />
              <div className="mt-6 flex flex-col gap-2">
                <p className="text-muted-foreground font-semibold">
                T-04, A-44, near sector-15 Metro Station, <br /> Sector 2, Noida, Uttar Pradesh <br /> 201301
                </p>
                <Link
                  to="https://maps.app.goo.gl/SpDLMcd91Xzaxha1A"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
                >
                  <MapPinIcon className="w-4 h-4 text-sky-500" />
                  View on Map
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-5/12 sm:px-4 ml-auto pt-8 sm:pt-1">
                  <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/about-us"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/contact-us"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Sign In
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-5/12 sm:px-4 pt-8 sm:pt-1">
                  <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="#"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">{year}</span>
                <span
                  className="text-blueGray-500 hover:text-gray-800"
                />{" "}
                MayaPe
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
