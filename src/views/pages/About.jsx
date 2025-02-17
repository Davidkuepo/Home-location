import React from 'react';
import { FaHome, FaUsers, FaStar, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">À propos de LuxeStay</h1>
        
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-4">Notre Histoire</h2>
          <p className="text-gray-700 mb-4">
            Fondée en 2010, LuxeStay est née de la passion de deux amis d'enfance pour l'immobilier et l'hospitalité. 
            Notre vision était simple : créer une plateforme qui offre des expériences de séjour uniques dans des 
            propriétés exceptionnelles, tout en simplifiant le processus de location pour les propriétaires.
          </p>
          <p className="text-gray-700 mb-4">
            Au fil des années, nous avons grandi pour devenir l'un des leaders du marché de la location de luxe, 
            avec un portefeuille de plus de 1000 propriétés dans 50 destinations à travers le monde.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-4">Notre Mission</h2>
          <p className="text-gray-700 mb-4">
            Chez LuxeStay, notre mission est de redéfinir l'expérience de la location de vacances. Nous nous efforçons de :
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Offrir une sélection soigneusement choisie de propriétés de luxe</li>
            <li>Fournir un service client exceptionnel 24/7</li>
            <li>Simplifier le processus de réservation pour nos clients</li>
            <li>Soutenir les propriétaires dans la gestion de leurs biens</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-8">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaHome className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualité</h3>
              <p className="text-gray-700">Nous ne proposons que les meilleures propriétés à nos clients.</p>
            </div>
            <div className="text-center">
              <FaUsers className="text-5xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service Client</h3>
              <p className="text-gray-700">Notre équipe est dédiée à offrir une expérience exceptionnelle.</p>
            </div>
            <div className="text-center">
              <FaStar className="text-5xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">Nous cherchons constamment à améliorer nos services.</p>
            </div>
            <div className="text-center">
              <FaHandshake className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Intégrité</h3>
              <p className="text-gray-700">Nous agissons avec honnêteté et transparence dans toutes nos interactions.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold mb-8">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sophie Martin", role: "CEO & Co-fondatrice" },
              { name: "Thomas Dubois", role: "CTO & Co-fondateur" },
              { name: "Marie Leclerc", role: "Directrice des Opérations" },
              { name: "Pierre Lefebvre", role: "Responsable Marketing" },
              { name: "Isabelle Rousseau", role: "Responsable Relations Clients" },
              { name: "Lucas Moreau", role: "Responsable Développement" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
