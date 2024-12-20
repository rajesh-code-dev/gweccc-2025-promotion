import { gweccclogo, nexuslogo } from "../assets/images/index";

function Header() {
  return (
    <header className="hidden sm:flex w-full fixed mx-auto gap-6 items-center px-6 py-4">
      <div className="flex items-center space-x-8">
        <img src={nexuslogo} alt="Event Logo" className="h-10" />
        <img
          src={gweccclogo}
          alt="Partner Logo"
          className="h-10 mix-blend-darken"
        />
      </div>
      <nav className="space-x-6 [&>a]:text-xl pb-2 text-white [&>a]:mix-blend-difference [&>a]:font-medium  [&>a]:border [&>a]:rounded-md [&>a]:px-2 [&>a]:py-1">
        <a href="#about" className="hover:underline ">
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
