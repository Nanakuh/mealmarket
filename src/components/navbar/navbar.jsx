import { Navbar } from "flowbite-react";

function CustomNavbar() {
  const navbarItems = [
    { href: "/meals", title: "MEALS" },
    { href: "/how-it-works", title: "HOW IT WORKS" },
    { href: "/about-us", title: "ABOUT US" },
    { href: "/faqs", title: "FAQ'S" },
  ];
  return (
    <Navbar className="sticky top-0 bg-green-900" fluid rounded>
      <Navbar.Brand href="/">
        <img
          src="../../../icon.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Nana's recipes
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navbarItems.map((item, i) => (
          <Navbar.Link key={i} className="text-white" href={item.href}>
            {item.title}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default CustomNavbar;
