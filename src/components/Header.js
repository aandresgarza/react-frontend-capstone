import logo from '../assets/img/Logo.svg';
import Nav from './Nav';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <img src={logo} alt="" />

      <div className={`menu ${isOpen ? 'open' : 'close'}`} style={{ position: 'relative' }}>
        <button className="hamburger btn-primary" onClick={toggleMenu}>☰</button>
        <div className={` ${isOpen ? 'absolute' : 'hidden'}`} >
          <Nav></Nav>
        </div>
      </div>

    </header>
  );
}

export default Header;