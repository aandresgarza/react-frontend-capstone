import footerLogo from "../assets/img/footerLogo.svg";

function Footer() {
  return (
    <footer className="full-green testimonials">
      <nav className="container flex">
        <img src={footerLogo} alt="logo"></img>
        <ul>
        <h4>Doormat Navigation</h4>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
      <ul>
      <h4>Contact</h4>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
      <ul>
        <h4>Social Media Links</h4>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
      </nav>
    </footer>
  );
}

export default Footer;