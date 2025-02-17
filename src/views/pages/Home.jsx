import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carroussel';
import HeaderWrapper from '../../components/HeaderWrapper';
import logoImage from '../../assets/images/white-logo.png';
import Footer from '../../components/Footer';
import AnimatedText from '../../components/AnimatedText';
import PropertyCard from '../../components/PropertyCard';
import { CarouselSlides } from '../../utils/data';
import { FaHome, FaSearch, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import ServiceGallery from '../../components/ServiceGallery';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import FAQ from '../../components/FAQ';
import { testimonials,faqs } from '../../utils/data';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    console.log('Commencer la recherche');
  };

  const serviceCards = [
    {
      icon: <FaHome className="text-3xl text-blue-500" />,
      title: 'Large Sélection de Propriétés',
      description:
        'Découvrez une vaste gamme de maisons, appartements et villas pour tous les goûts et budgets.'
    },
    {
      icon: <FaSearch className="text-3xl text-green-500" />,
      title: 'Recherche Personnalisée',
      description:
        'Utilisez nos filtres avancés pour trouver la location parfaite selon vos critères spécifiques.'
    },
    {
      icon: <FaHandshake className="text-3xl text-yellow-500" />,
      title: 'Réservation Facile',
      description:
        'Processus de réservation simple et sécurisé, avec assistance client disponible 24/7.'
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      title: 'Sécurité Garantie',
      description:
        "Toutes nos propriétés sont vérifiées et nous offrons une protection des paiements pour votre tranquillité d'esprit."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderWrapper
        isScrolled={isScrolled}
        initialBgColor="bg-transparent"
        initialTextColor="text-white"
        scrolledBgColor="bg-white"
        scrolledTextColor="text-black"
        scrolledShadow="shadow-md"
        logoImage={logoImage}
        logoAlt="Mon Site Logo"
        navItems={[
          { to: '/', text: 'Accueil' },
          { to: '/annonces', text: 'Annonces' },
          { to: '/about', text: 'À propos' },
          { to: '/contact', text: 'Contact' }
        ]}
      />

      <div className="relative">
        <Carousel
          slides={CarouselSlides}
          containerClass="h-screen"
          slideClass="h-full"
          imageClass="object-cover w-full h-full"
          overlayClass="flex flex-col justify-center items-center"
          titleClass="text-4xl md:text-5xl font-bold mb-4"
          descriptionClass="text-xl md:text-2xl mb-6"
          buttonClass="btn btn-primary btn-lg"
          navButtonClass="bg-transparent border-none text-white"
          indicatorClass="w-4 h-4"
          activeIndicatorClass="bg-primary"
        />
      </div>

      <AnimatedText
        title="Trouvez Votre Maison de Rêve"
        subtitle="Des locations exceptionnelles pour des séjours inoubliables"
        buttonText="Commencer la Recherche"
        onButtonClick={handleSearchClick}
      />

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((card, index) => (
              <PropertyCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
      <ServiceGallery />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquemment posées</h2>
          <FAQ faqs={faqs} />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
