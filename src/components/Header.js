import logo from '../assets/img/Logo.svg';
import Nav from './Nav';
function Header() {
    return (
      <header>
          <img src={logo} alt="" />
          <Nav></Nav>
      </header>
    );
  }
  
  export default Header;