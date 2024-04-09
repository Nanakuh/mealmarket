import { Navbar } from "flowbite-react";

function CustomNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          src="../../../vite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="text-orange-500 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Recetas de Anita
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/meals">MEALS</Navbar.Link>
        <Navbar.Link href="/how-it-works">HOW IT WORKS</Navbar.Link>
        <Navbar.Link href="/about-us">ABOUT US</Navbar.Link>
        <Navbar.Link href="/faqs">FAQ'S</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default CustomNavbar;
