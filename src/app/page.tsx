'use client'

import { getCurrentPractice } from '@/lib/practice-config'
import { Calendar, MapPin, Phone, Mail, Clock, CheckCircle, Star, Heart } from 'lucide-react'

export default function HealthcarePage() {
  const practice = getCurrentPractice();
  
  return (
    <div className={practice.template.backgroundGradient}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{practice.name}</h1>
              <p className="text-emerald-600 font-medium">{practice.doctor}</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Diensten</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">Over Ons</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {practice.template.heroTitle}
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {practice.template.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={practice.template.buttonStyling}>
                <Calendar className="w-5 h-5 mr-2" />
                {practice.template.ctaText}
              </button>
              <button className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl border border-emerald-200 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Bel Ons Nu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze Wellness Diensten</h2>
            <p className="text-xl text-gray-600">Alles wat u nodig heeft voor optimale gezondheid en welzijn</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practice.template.services.map((service, index) => (
              <div key={index} className={practice.template.cardStyling}>
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                </div>
                <p className="text-gray-600">
                  Professionele {service.toLowerCase()} service met persoonlijke begeleiding en bewezen resultaten.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Over {practice.doctor}</h2>
              <p className="text-lg text-gray-700 mb-6">
                Met meer dan 15 jaar ervaring in holistische geneeskunde, helpt {practice.doctor} 
                patiënten bij het bereiken van optimale gezondheid door natuurlijke en bewezen methodes.
              </p>
              <p className="text-gray-600 mb-8">
                Ons team bij {practice.name} combineert traditionele medische kennis met moderne 
                wellness technieken om u de beste zorg te bieden.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="w-6 h-6 text-emerald-600" />
                <span className="text-gray-700">Persoonlijke zorg voor elk individu</span>
              </div>
            </div>
            <div className={practice.template.cardStyling}>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{practice.template.testimonial.text}"
              </blockquote>
              <cite className="text-emerald-600 font-medium">
                — {practice.template.testimonial.author}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Afspraken</h2>
            <p className="text-xl text-gray-600">Neem contact op voor een persoonlijk gesprek</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className={practice.template.cardStyling}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contactgegevens</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">{practice.location}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">+31 20 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">info@amsterdamwellness.nl</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Ma-Vr: 8:00-18:00</span>
                </div>
              </div>
            </div>
            
            <div className={practice.template.cardStyling}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Maak een Afspraak</h3>
              <p className="text-gray-600 mb-6">
                Klaar om uw wellness journey te beginnen? Boek een consultatiegesprek met {practice.doctor}.
              </p>
              <button className={practice.template.buttonStyling + " w-full"}>
                <Calendar className="w-5 h-5 mr-2" />
                Online Afspraak Boeken
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{practice.name}</h3>
            <p className="text-gray-400 mb-4">Uw partner in optimale gezondheid en welzijn</p>
            <p className="text-gray-500">© 2024 {practice.name}. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}