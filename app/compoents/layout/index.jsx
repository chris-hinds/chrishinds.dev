import { Link } from "remix";

// Icons
import { FaInstagram, FaGithub } from "react-icons/fa";

const layout = ({ children }) => (
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center py-6 md:space-x-10">
      {/* Logo */}
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link to="/" className="font-primary font-semibold">
          chrishinds.dev
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 justify-between items-center font-primary font-semibold">
        <Link to="/posts">posts</Link>

        <Link to="/contact">contact</Link>

        <a href="https://www.instagram.com/chinds1" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://github.com/chris-hinds" target="_blank">
          <FaGithub />
        </a>
      </nav>
    </div>
    {children}
  </div>
);

export default layout;
