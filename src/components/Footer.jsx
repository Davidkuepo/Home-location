import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section À propos */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">MyHomeCM</h2>
            <p className="mb-4">Votre partenaire de confiance pour trouver les meilleures locations de maisons, appartements et chambres.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Section Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors duration-300">Accueil</Link></li>
              <li><Link to="/annonces" className="hover:text-primary transition-colors duration-300">Annonces</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors duration-300">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors duration-300">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Section Catégories populaires */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Catégories populaires</h3>
            <ul className="space-y-2">
              <li><Link to="/category/apartments" className="hover:text-primary transition-colors duration-300">Appartements</Link></li>
              <li><Link to="/category/houses" className="hover:text-primary transition-colors duration-300">Maisons</Link></li>
              <li><Link to="/category/rooms" className="hover:text-primary transition-colors duration-300">Chambres</Link></li>
              <li><Link to="/category/vacation-rentals" className="hover:text-primary transition-colors duration-300">Locations de vacances</Link></li>
            </ul>
          </div>

          {/* Section Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contactez-nous</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="h-5 w-5 mr-2 text-primary" />
                <span>Tradex rond poulenc , douala, Cameroun</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 mr-2 text-primary" />
                <span>+237 695290396</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 mr-2 text-primary" />
                <span>davidkuepo83@gmail.com.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} KUEPO David Giress. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;