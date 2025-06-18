import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faPaperPlane,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: faPhone,
      title: 'Téléphone',
      content: '+225 1 23 45 67 89',
      description: 'Appelez-nous pour toute question'
    },
    {
      icon: faEnvelope,
      title: 'Email',
      content: 'contact@hotel-exemple.com',
      description: 'Envoyez-nous un message'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Adresse',
      content: '123 Avenue hotel,ville',
      description: 'Venez nous rendre visite'
    },
    {
      icon: faClock,
      title: 'Horaires',
      content: '24h/24 - 7j/7',
      description: 'Réception ouverte en permanence'
    }
  ];

  const services = [
    'Réservation de chambres',
    'Informations sur les services',
    'Demandes spéciales',
    'Réservation de restaurant',
    'Services de conciergerie',
    'Réservation de spa'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Notre équipe est là pour vous accompagner et répondre à toutes vos questions
            </p>
          </div>
        </div>
      </div>

      {/* Informations de Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-3xl mb-4">
                  <FontAwesomeIcon icon={info.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {info.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact et Informations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Envoyez-nous un Message
              </h2>
              
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Envoyer le Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Informations Supplémentaires */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Informations Utiles
              </h2>
              
              <div className="space-y-8">
                {/* Services */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Services Disponibles
                  </h3>
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Horaires de Réception */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Horaires de Réception
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lundi - Dimanche</span>
                        <span className="font-medium">24h/24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-in</span>
                        <span className="font-medium">À partir de 15h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-out</span>
                        <span className="font-medium">Jusqu'à 11h00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations Pratiques */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Informations Pratiques
                  </h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      <strong>Parking :</strong> Gratuit pour tous nos clients
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>WiFi :</strong> Gratuit dans tout l'hôtel
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Animaux :</strong> Acceptés (supplément de 10000FCFA/nuit)
                    </p>
                    <p className="text-gray-700">
                      <strong>Accessibilité :</strong> Chambres adaptées disponibles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Questions Fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Comment annuler une réservation ?
                </h3>
                <p className="text-gray-600">
                  Vous pouvez annuler votre réservation jusqu'à 24h avant votre arrivée 
                  sans frais. Contactez-nous par téléphone ou email.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Y a-t-il un parking disponible ?
                </h3>
                <p className="text-gray-600">
                  Oui, nous disposons d'un parking privé gratuit pour tous nos clients. 
                  Réservation recommandée pour les périodes de forte affluence.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Acceptez-vous les animaux ?
                </h3>
                <p className="text-gray-600">
                  Oui, nous acceptons les animaux de compagnie moyennant un supplément 
                  de 15€ par nuit. Merci de nous prévenir à l'avance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Quels sont les horaires du restaurant ?
                </h3>
                <p className="text-gray-600">
                  Notre restaurant est ouvert de 7h00 à 23h00. Le petit-déjeuner est 
                  servi de 7h00 à 10h30. Réservation recommandée pour le dîner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 