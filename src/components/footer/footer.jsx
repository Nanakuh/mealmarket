import { Footer } from "flowbite-react";

function CustomFooter() {
  return (
    <Footer container>
      <Footer.Copyright href="/" by="Recetas de Anita™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="terms-of-service">Terms of Service</Footer.Link>
        <Footer.Link href="privacy-policy">Privacy Policy</Footer.Link>    
        <Footer.Link href="contact">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
export default CustomFooter;
