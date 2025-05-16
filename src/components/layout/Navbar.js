import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="md:flex md:items-center">
      {/* Hamburger menu per mobile */}
      <button 
        className="md:hidden text-white focus:outline-none mb-4"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      
      <ul className={`flex flex-col md:flex-row md:space-x-6 ${isOpen ? 'block' : 'hidden md:flex'}`}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium block ${isActive ? 'bg-blue-700' : ''}`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/chi-siamo" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium block ${isActive ? 'bg-blue-700' : ''}`
            }
          >
            Chi Siamo
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/attivita" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium block ${isActive ? 'bg-blue-700' : ''}`
            }
          >
            Attività
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contatti" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium block ${isActive ? 'bg-blue-700' : ''}`
            }
          >
            Contatti
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;