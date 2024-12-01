import { gweccclogo, nexuslogo } from "../assets/images/index";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="flex md:flex-row flex-col gap-4 justify-between md:items-center">
        <div className="flex items-center space-x-8">
          <img src={nexuslogo} alt="Event Logo" className="h-10" />
          <img
            src={gweccclogo}
            alt="Partner Logo"
            className="h-10 mix-blend-multiply"
          />
        </div>
        <div className="text-sm">© 2024 GWECCC. All rights reserved.</div>
        <nav className="flex space-x-4">
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
          <a href="/privacy" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-400">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
