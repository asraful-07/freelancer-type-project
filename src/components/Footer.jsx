import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">About Us</h2>
            <p className="text-sm">
              SoloSphere is a platform connecting professionals to high-quality
              freelancing opportunities. Join us to grow your career and achieve
              your goals.
            </p>
          </div>
          {/* Links */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-indigo-500">
                  All Jobs
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-indigo-500">
                  Login
                </a>
              </li>
              <li>
                <a href="/add-job" className="hover:text-indigo-500">
                  Add Job
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-500"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-500"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-500"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-500"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SoloSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
