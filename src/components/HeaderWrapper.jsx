import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderWrapper = ({
  isScrolled,
  initialBgColor = 'bg-transparent',
  initialTextColor = 'text-white',
  scrolledBgColor = 'bg-white',
  scrolledTextColor = 'text-black',
  scrolledShadow = 'shadow-md',
  logoImage,
  logoAlt = 'Logo',
  navItems = [
    { to: '/', text: 'Accueil' },
    { to: '/annonces', text: 'Annonces' },
    { to: '/about', text: 'À propos' },
    { to: '/contact', text: 'Contact' }
  ],
  buttonRegister = 'button-register',
  buttonLogin = 'button-login',
  additionalClasses = ''
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${scrolledBgColor} ${scrolledTextColor} ${scrolledShadow}`
          : `${initialBgColor} ${initialTextColor}`
      } ${additionalClasses}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt={logoAlt} className="h-10 w-auto" />
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center">
            <nav className="mr-4">
              <ul className="flex space-x-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to} className="hover:text-gray-300">{item.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex space-x-2">
              <button className={`btn btn-${buttonRegister} bg-transparent border-none`}>
                <Link to="/register">Inscription</Link>
              </button>
              <button className={`btn btn-${buttonLogin} bg-transparent border-none`}>
                <Link to="/login">Connexion</Link>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-lg p-3">
            <nav className="py-4 ">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to} className="block text-black ">{item.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col space-y-2 py-4">
              <button className={`btn btn-${buttonRegister} bg-transparent border-none`}>
                <Link to="/register">Inscription</Link>
              </button>
              <button className={`btn btn-${buttonLogin} bg-transparent border-none`}>
                <Link to="/login">Connexion</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderWrapper;
