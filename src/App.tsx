/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Waves, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle2, 
  Truck, 
  Shirt, 
  Wind, 
  Sparkles,
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-prestige-bg/95 backdrop-blur-md border-b border-prestige-gold/10 py-4' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-prestige-gold flex items-center justify-center rounded-sm rotate-45 group hover:rotate-0 transition-transform duration-500">
            <Waves className="text-prestige-gold w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
          </div>
          <span className={`text-2xl font-serif tracking-[0.1em] uppercase ${isScrolled ? 'text-prestige-ink' : 'text-white'}`}>
            First Class
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[11px] uppercase tracking-[0.2em] font-medium hover:text-prestige-gold transition-colors ${isScrolled ? 'text-prestige-ink/70' : 'text-white/80'}`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-8 py-3 rounded-none text-[11px] uppercase tracking-[0.2em] font-bold border transition-all duration-300 ${isScrolled ? 'border-prestige-ink text-prestige-ink hover:bg-prestige-ink hover:text-white' : 'border-white text-white hover:bg-white hover:text-prestige-ink'}`}>
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-prestige-ink' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-prestige-ink' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-prestige-bg border-b border-prestige-gold/20 overflow-hidden"
          >
            <div className="px-8 py-12 space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-2xl font-serif text-prestige-ink hover:text-prestige-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8">
                <button className="w-full bg-prestige-ink text-white px-8 py-5 text-[12px] uppercase tracking-[0.2em] font-bold">
                  Schedule Pickup
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-prestige-ink">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Laundry Service" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-prestige-ink/60 via-transparent to-prestige-ink" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold mb-8">
            Established in Cheras • 2020
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-white leading-[0.9] mb-10 tracking-tight">
            The Art of <br />
            <span className="italic text-prestige-gold">Fine Laundry.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the pinnacle of garment care. We treat your wardrobe with the reverence it deserves, 
            combining artisanal techniques with modern precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative px-12 py-5 bg-prestige-gold text-prestige-ink text-[12px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-500">
              <span className="relative z-10">Schedule a Pickup</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <a href="#services" className="text-white text-[11px] uppercase tracking-[0.3em] font-bold border-b border-white/30 pb-2 hover:border-prestige-gold transition-colors">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="hidden lg:block absolute left-12 bottom-24 vertical-rl rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">
        Premium Care • 24/7 Service • Cheras
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-prestige-gold to-transparent" />
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Signature Wash",
      description: "Our proprietary cleaning process that preserves fabric integrity while achieving deep cleanliness.",
      icon: <Waves className="w-8 h-8" />,
      features: ["pH Balanced", "Hand-finished", "Eco-Luxury Detergents"]
    },
    {
      title: "Bespoke Dry Clean",
      description: "Expert care for your most treasured garments. From couture gowns to tailored suits.",
      icon: <Shirt className="w-8 h-8" />,
      features: ["Stain Forensics", "Silk & Lace Specialists", "Odorless Process"]
    },
    {
      title: "Artisan Pressing",
      description: "The perfect finish. Our master pressers ensure every line is crisp and every fold is intentional.",
      icon: <Wind className="w-8 h-8" />,
      features: ["Steam Revitalization", "Hanger Presentation", "Zero-Crease Guarantee"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-prestige-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold mb-6 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-serif text-prestige-ink mb-8 leading-tight">Meticulous Care <br />for the Modern Wardrobe.</h2>
          </div>
          <p className="text-prestige-ink/60 text-lg max-w-md font-light leading-relaxed pt-4">
            We believe that laundry is more than a chore—it's a preservation of your investments and an enhancement of your daily confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="mb-10 text-prestige-gold group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-3xl font-serif text-prestige-ink mb-6">{service.title}</h4>
              <p className="text-prestige-ink/60 mb-10 leading-relaxed font-light">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-prestige-ink/80">
                    <div className="w-1.5 h-1.5 bg-prestige-gold rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const items = [
    { name: "Signature Wash & Fold", price: "RM 6.50 / kg", popular: true },
    { name: "Three-Piece Suit", price: "RM 45.00", popular: false },
    { name: "Evening Gown", price: "RM 38.00", popular: false },
    { name: "Silk Shirt Press", price: "RM 12.00", popular: false },
    { name: "Luxury Bedding Set", price: "RM 25.00", popular: false },
    { name: "Blackout Curtains", price: "RM 18.00 / kg", popular: false },
  ];

  return (
    <section id="pricing" className="py-32 bg-prestige-ink text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-prestige-gold/5 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold mb-6 block">Investment</span>
            <h3 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">Transparent <br />Excellence.</h3>
            <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
              Quality of this caliber is an investment in your lifestyle. Our pricing reflects the meticulous attention to detail 
              and premium materials used in every treatment.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-prestige-gold/30 flex items-center justify-center rounded-full group-hover:bg-prestige-gold transition-colors duration-500">
                  <Truck className="w-5 h-5 text-prestige-gold group-hover:text-prestige-ink transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold">Complimentary Concierge</p>
                  <p className="text-sm text-white/40 font-light">Pickup & Delivery for orders above RM 80.00</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-prestige-gold/30 flex items-center justify-center rounded-full group-hover:bg-prestige-gold transition-colors duration-500">
                  <Sparkles className="w-5 h-5 text-prestige-gold group-hover:text-prestige-ink transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold">Seamless Transactions</p>
                  <p className="text-sm text-white/40 font-light">All major digital currencies and cards accepted</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-10 md:p-16 border border-white/10 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-prestige-gold" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-prestige-gold" />
            
            <h4 className="text-2xl font-serif mb-12 tracking-wide">Service Menu</h4>
            <div className="space-y-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-end group">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-light text-white/80 group-hover:text-prestige-gold transition-colors">{item.name}</span>
                    {item.popular && (
                      <span className="text-[9px] uppercase tracking-[0.2em] text-prestige-gold font-bold">Most Requested</span>
                    )}
                  </div>
                  <div className="flex-grow border-b border-white/5 mx-4 mb-1" />
                  <span className="text-lg font-serif">{item.price}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-16 py-5 border border-prestige-gold text-prestige-gold text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-prestige-gold hover:text-prestige-ink transition-all duration-500">
              Request Full Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Coverage = () => {
  const areas = ["Taman Bukit Segar", "Cheras Hartamas", "Taman Segar", "Bandar Tun Razak", "Taman Connaught", "Bandar Mahkota Cheras"];

  return (
    <section id="coverage" className="py-32 bg-prestige-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square bg-prestige-ink/5 rounded-full absolute inset-0 scale-110 -z-10" />
            <div className="grid grid-cols-2 gap-8">
              {areas.map((area, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-white border border-prestige-gold/10 flex flex-col items-center text-center group hover:border-prestige-gold transition-colors duration-500"
                >
                  <MapPin className="w-6 h-6 text-prestige-gold mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-prestige-ink">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold mb-6 block">Presence</span>
            <h3 className="text-5xl md:text-7xl font-serif text-prestige-ink mb-10 leading-tight">Cheras' Finest <br />Concierge.</h3>
            <p className="text-prestige-ink/60 text-lg mb-12 font-light leading-relaxed">
              Our white-glove delivery service extends across the heart of Cheras. We bring the boutique experience 
              directly to your residence, ensuring your garments never leave the care of our professionals.
            </p>
            <div className="flex items-center gap-8 p-10 bg-prestige-ink text-white">
              <div className="w-14 h-14 border border-prestige-gold flex items-center justify-center">
                <Phone className="text-prestige-gold w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-prestige-gold font-bold mb-1">Direct Line</p>
                <p className="text-2xl font-serif tracking-wider">016-226 0409</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Omar Abdul Jabar",
      role: "Global Traveler",
      content: "An impeccable establishment. The attention to detail is something I haven't seen outside of London's finest dry cleaners. Truly First Class.",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Azhan Abdul-Rahim",
      role: "Local Professional",
      content: "The artisan pressing service is a game-changer for my business attire. Crisp, perfect, and delivered with such grace. Highly recommended.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "Fahmy Saddam",
      role: "Cheras Resident",
      content: "Finally, a laundry service that understands the value of fine fabrics. Their signature wash has revitalized my vintage collection.",
      rating: 5,
      date: "January 2024"
    }
  ];

  return (
    <section id="reviews" className="py-32 bg-prestige-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold mb-6 block">Acclaim</span>
          <h3 className="text-5xl md:text-7xl font-serif text-prestige-ink mb-8">Voices of Satisfaction.</h3>
          <div className="w-24 h-[1px] bg-prestige-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex gap-1 text-prestige-gold mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-prestige-ink/70 italic text-lg mb-10 font-serif leading-relaxed">"{review.content}"</p>
              <div className="flex flex-col items-center">
                <h5 className="text-[11px] uppercase tracking-[0.3em] font-bold text-prestige-ink mb-1">{review.name}</h5>
                <p className="text-[10px] text-prestige-gold uppercase tracking-[0.1em]">{review.role} • {review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  return (
    <section id="booking" className="py-32 bg-prestige-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-stretch">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold mb-8 block">Reservations</span>
            <h3 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">Secure Your <br />Collection.</h3>
            <p className="text-white/40 text-lg mb-16 font-light leading-relaxed max-w-lg">
              Allow us to simplify your life. Schedule a pickup at your convenience and our concierge will handle the rest.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-[0.3em] text-prestige-gold font-bold">Concierge Line</h5>
                <p className="text-xl font-serif">016-226 0409</p>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-[0.3em] text-prestige-gold font-bold">Atelier</h5>
                <p className="text-sm font-light text-white/60 leading-relaxed">30A, Jalan BS9, Taman Bukit Segar, 43200 Cheras</p>
              </div>
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-[0.3em] text-prestige-gold font-bold">Hours</h5>
                <p className="text-sm font-light text-white/60">Open 24 Hours • 7 Days</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 border border-prestige-gold/20">
            <h4 className="text-2xl font-serif text-prestige-ink mb-10">Pickup Request</h4>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-prestige-ink/40">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-prestige-ink/10 py-3 text-prestige-ink outline-none focus:border-prestige-gold transition-colors font-light" placeholder="e.g. Alexander Graham" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-prestige-ink/40">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-prestige-ink/10 py-3 text-prestige-ink outline-none focus:border-prestige-gold transition-colors font-light" placeholder="012-345 6789" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-prestige-ink/40">Service Selection</label>
                <select className="w-full bg-transparent border-b border-prestige-ink/10 py-3 text-prestige-ink outline-none focus:border-prestige-gold transition-colors font-light appearance-none">
                  <option>Signature Wash & Fold</option>
                  <option>Bespoke Dry Cleaning</option>
                  <option>Artisan Pressing</option>
                  <option>Specialized Fabric Care</option>
                </select>
              </div>
              <div className="pt-8">
                <button className="w-full bg-prestige-ink text-white py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-prestige-gold transition-all duration-500">
                  Request Pickup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-prestige-ink text-white pt-32 pb-16 border-t border-prestige-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 border border-prestige-gold flex items-center justify-center rounded-sm rotate-45">
                <Waves className="text-prestige-gold w-4 h-4 -rotate-45" />
              </div>
              <span className="text-2xl font-serif tracking-[0.1em] uppercase">
                First Class
              </span>
            </div>
            <p className="text-white/40 max-w-sm mb-10 font-light leading-relaxed">
              The standard of excellence in garment care. Established in 2020 to serve the most discerning clientele in Cheras.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-prestige-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-prestige-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-prestige-gold transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h6 className="text-[10px] uppercase tracking-[0.3em] text-prestige-gold font-bold mb-8">Navigation</h6>
            <ul className="space-y-6">
              <li><a href="#services" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#coverage" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Coverage</a></li>
              <li><a href="#reviews" className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">Acclaim</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-[10px] uppercase tracking-[0.3em] text-prestige-gold font-bold mb-8">Contact</h6>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/60">
                <MapPin className="w-4 h-4 text-prestige-gold shrink-0 mt-1" />
                <span className="text-sm font-light">30A, Jalan BS9, Taman Bukit Segar, 43200 Cheras</span>
              </li>
              <li className="flex items-center gap-4 text-white/60">
                <Phone className="w-4 h-4 text-prestige-gold shrink-0" />
                <span className="text-sm font-light">016-226 0409</span>
              </li>
              <li className="flex items-center gap-4 text-white/60">
                <Clock className="w-4 h-4 text-prestige-gold shrink-0" />
                <span className="text-sm font-light">Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© 2024 First Class Laundry. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-[0.2em]">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white text-[10px] uppercase tracking-[0.2em]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-prestige-bg font-sans text-prestige-ink selection:bg-prestige-gold selection:text-prestige-ink">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Coverage />
        <Reviews />
        <BookingSection />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/60162260409" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-50 bg-prestige-ink text-white p-5 rounded-full shadow-2xl border border-prestige-gold/20 transition-all hover:scale-110 active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6 text-prestige-gold" />
        <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-white text-prestige-ink px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-prestige-gold/10">
          Concierge Support
        </span>
      </a>
    </div>
  );
}
