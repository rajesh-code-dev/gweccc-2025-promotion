import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-blue-800 text-white">
      <div className="flex items-center space-x-4">
        <img src="/event-logo.png" alt="Event Logo" className="h-10" />
        <img src="/partner-logo.png" alt="Partner Logo" className="h-8" />
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
