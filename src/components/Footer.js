import footerLogo from "../assets/img/footerLogo.svg";
import Nav from "./Nav";

function Footer() {
  return (
    <footer className="full-green testimonials">
      <nav className="container flex">
        <img src={footerLogo} alt="logo"></img>
        <Nav></Nav>
      <ul>
      <h4>Contact</h4>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      <ul>
        <h4>Social Media Links</h4>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      </nav>
    </footer>
  );
}

export default Footer;