import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { X } from 'lucide-react'; // Keep only close icon

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-md max-w-lg w-full">
      <div className="flex justify-center items-center px-6 py-2 relative">
        {/* Centered Menu Items for desktop */}
        <nav className="hidden md:flex space-x-6 text-white font-medium text-xs uppercase tracking-wide">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cosmic-accent1 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - positioned right */}
        <div className="md:hidden absolute right-6">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none flex flex-col justify-center items-center space-y-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <>
                {/* 3 lines hamburger */}
                <span className="block w-6 h-0.5 bg-white rounded"></span>
                <span className="block w-6 h-0.5 bg-white rounded"></span>
                <span className="block w-6 h-0.5 bg-white rounded"></span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-6 py-4 text-white space-y-4 text-center absolute w-full top-full left-0 rounded-b-lg shadow-lg z-40">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={toggleMobileMenu}
              className="block text-sm font-medium uppercase tracking-wide hover:text-cosmic-accent1 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
