import React from "react";
import { gweccclogo, nexuslogo } from "../assets/images/index";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-8">
        <img src={nexuslogo} alt="Event Logo" className="h-10" />
        <img
          src={gweccclogo}
          alt="Partner Logo"
          className="h-10 mix-blend-multiply"
        />
      </div>
      <nav className="space-x-6">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#schedule" className="hover:underline">
          Schedule
        </a>
        <a href="#register" className="hover:underline">
          Register
        </a>
      </nav>
    </header>
  );
}
export default Header;
