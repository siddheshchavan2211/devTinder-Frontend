import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white py-8 bg-red-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">DevTinder</h3>
            <p className="text-lg font-semibold mb-4">
              DevTinder is a platform that connects developers with like-minded
              professionals. Build your network, share ideas, and collaborate on
              exciting projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-blue-600 hover:text-blue-800"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:text-blue-600"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-pink-600 hover:text-pink-800"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="text-white ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/businesspolicy" className="text-white">
                  Business Policy
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">
              <span className="font-semibold">Phone:</span> (+91) 8459303668
            </p>
            <p className="text-sm mb-4">
              <span className="font-semibold">Email:</span>{" "}
              siddheshchavan02@gmail.com
            </p>
            <p className="text-sm">
              <span className="font-semibold">Address:</span> DevTinder, Mumbai,
              India
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
