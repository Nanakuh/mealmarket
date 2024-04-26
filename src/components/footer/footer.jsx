import { Footer } from "flowbite-react";

function CustomFooter() {
  return (
    <Footer container>
      <Footer.Copyright href="/" by="Recetas de Anita™" year={2024} className="text-emerald-800 text-base"/>
      <Footer.LinkGroup>
        <Footer.Link href="terms-of-service" className="text-emerald-800 text-base">Terms of Service</Footer.Link>
        <Footer.Link href="privacy-policy" className="text-emerald-800 text-base">Privacy Policy</Footer.Link>    
        <Footer.Link href="contact" className="text-emerald-800 text-base">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
export default CustomFooter;
