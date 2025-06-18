import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faBed, 
  faUtensils, 
  faSwimmingPool, 
  faWifi, 
  faParking,
  faConciergeBell,
  faSpa
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const features = [
    {
      icon: faBed,
      title: 'Chambres Confortables',
      description: 'Des chambres modernes et élégantes pour un séjour inoubliable'
    },
    {
      icon: faUtensils,
      title: 'Restaurant Gastronomique',
      description: 'Une cuisine raffinée avec des produits locaux et frais'
    },
    {
      icon: faSwimmingPool,
      title: 'Piscine & Spa',
      description: 'Profitez de notre piscine chauffée et de nos soins spa'
    },
    {
      icon: faWifi,
      title: 'WiFi Gratuit',
      description: 'Connexion internet haute vitesse dans tout l\'hôtel'
    },
    {
      icon: faParking,
      title: 'Parking Sécurisé',
      description: 'Parking privé gratuit pour tous nos clients'
    },
    {
      icon: faConciergeBell,
      title: 'Service Conciergerie',
      description: 'Notre équipe est là pour vous accompagner 24h/24'
    }
  ];

  const stats = [
    { number: '50+', label: 'Chambres Élégantes' },
    { number: '15', label: 'Années d\'Expérience' },
    { number: '1000+', label: 'Clients Satisfaits' },
    { number: '4.8', label: 'Note Moyenne' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À Propos de Notre Hôtel
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez l'excellence et l'élégance dans un cadre idyllique
            </p>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-300 text-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notre Histoire */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Notre Histoire
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fondé en 2008, notre hôtel est né d'une vision simple : créer un havre de paix 
                où chaque voyageur se sent comme chez lui. Situé au cœur de la ville, 
                nous avons su allier modernité et tradition pour offrir une expérience unique.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depuis plus de 15 ans, notre équipe passionnée s'engage à offrir un service 
                d'excellence et à créer des moments inoubliables pour chacun de nos clients. 
                Chaque détail a été pensé pour votre confort et votre bien-être.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre hôtel est plus qu'un simple lieu de séjour, c'est une destination 
                où l'hospitalité rencontre l'élégance, où chaque instant devient un souvenir précieux.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg mb-4">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg">
                  <FontAwesomeIcon icon={faSpa} className="text-white text-6xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nos Chiffres Clés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-3xl mb-4">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faStar} className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à offrir un service d'excellence dans chaque détail, 
                de l'accueil à la chambre, pour garantir votre satisfaction totale.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faConciergeBell} className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Hospitalité
              </h3>
              <p className="text-gray-600">
                Notre équipe chaleureuse et professionnelle s'engage à vous faire 
                sentir comme chez vous, avec un service personnalisé et attentionné.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faSpa} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Bien-être
              </h3>
              <p className="text-gray-600">
                Nous créons un environnement propice à la détente et au bien-être, 
                où vous pouvez vous ressourcer et profiter pleinement de votre séjour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à Découvrir Notre Hôtel ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre séjour et vivez une expérience inoubliable 
            dans notre établissement d'exception.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Réserver Maintenant
          </button>
        </div>
      </section>
    </div>
  );
};

export default About; 