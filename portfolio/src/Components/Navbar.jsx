import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoHomeSharp } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    const currentState = isOpen
    return currentState ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      { isOpen ? <button className="navbar-toggler" onClick={ toggleNav }>&#5130;</button> : <button className="navbar-toggler" onClick={ toggleNav }>&#5125;</button> }
      <nav className="navbar-child">
        <img src="/me.png" alt="Photograph of the developer" />
        <h1>Matt Hammond</h1>
        <p>Junior Software Developer</p>
        <a href="https://github.com/MattHammond94">
          <BsGithub className="icons"/>
        </a>
        <a href="https://www.linkedin.com/in/matt-hammond-44444444f/">
          <BsLinkedin className="icons"/>
        </a>
        <a href="/">
          <IoHomeSharp className="icons"/>
        </a>
      </nav>
    </div>
  )
}

export default Navbar