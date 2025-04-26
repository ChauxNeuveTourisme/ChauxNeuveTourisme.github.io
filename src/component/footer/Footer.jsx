import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa";
const Footer = () => {
  // State for dropdowns
    const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
    const [isStayOpen, setIsStayOpen] = useState(false);
    const [isActivityOpen, setIsActivityOpen] = useState(false);    
    // Toggle functions
    const toggleDiscover = () => setIsDiscoverOpen(!isDiscoverOpen);
    const toggleStay = () => setIsStayOpen(!isStayOpen);
    const toggleActivity = () => setIsActivityOpen(!isActivityOpen);    
    return (
        <footer className="bg-navy text-white p-16 pb-5 pt-25">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Column 1: Logo + Contact */}
                <div>
                <img src="/images/logo-25.png" alt="Logo" className="h-[130px] mt-[-22px]" />
                <p className="text-sm mb-2 flex items-center gap-2 mt-[-22px]">
                    <FaMapMarkerAlt className="text-hover" /> 23 Rue des Montagnes
                </p>
                <p className="text-sm mb-2 flex items-center gap-2">
                    <FaEnvelope className="text-hover" /> contact@chauxneuvetourisme.fr
                </p>
                <p className="text-sm flex items-center gap-2">
                    <FaPhone className="text-hover" /> +33 3 84 12 34 56
                </p>
                </div>

                {/* Column 2: Accès rapide */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Accès rapide</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/decouvrir" className="hover:text-hover">Découvrir</Link></li>

                        {/* Séjourner Dropdown */}
                        <li>
                            <button onClick={toggleStay} className="text-sm w-full text-left hover:text-hover">
                                Séjourner
                            </button>
                            {isStayOpen && (
                                <ul className="pl-4 space-y-2">
                                    <li><Link to="/hebergements" className="hover:text-hover">Hébergements</Link></li>
                                    <li><Link to="/restauration" className="hover:text-hover">Restauration</Link></li>
                                    <li><Link to="/commerces" className="hover:text-hover">Commerces</Link></li>
                                    <li><Link to="/services-de-sante" className="hover:text-hover">Services de santé </Link></li>

                                </ul>
                            )}
                        </li>
                        
                      {/* Activités Dropdown */}
                        <li>
                            <button onClick={toggleActivity} className="text-sm w-full text-left hover:text-hover">
                                Activités
                            </button>
                            {isActivityOpen && (
                                <ul className="pl-4 space-y-2">
                                    <li><Link to="/hiver" className="hover:text-hover">Hiver</Link></li>
                                    <li><Link to="/ete" className="hover:text-hover">Été</Link></li>
                                    <li><Link to="/patrimone" className="hover:text-hover">Patrimone</Link></li>
                                    <li><Link to="/gastronomie" className="hover:text-hover">Gastronomie</Link></li>

                                </ul>
                            )}
                        </li>
                        
                        <li><Link to="/evenements" className="hover:text-hover">Événements</Link></li>
                    </ul>
                </div>
                        
                {/* Column 3: ChauxNeuveTourisme info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">ChauxNeuveTourisme</h3>
                    <ul className="space-y-2 text-sm mb-4">
                    <li><a href="mailto:info@chauxneuvetourisme.com" className="hover:text-hover">Nous contacter</a></li>
                    <li><Link to="/faqs" className="hover:text-hover">FAQ</Link></li>
                    </ul>
                    <p className="text-sm mb-3">Suivez-nous <span className="italic text-hover"></span></p>
                    <div className="flex space-x-4 text-lg">
                        <a href="/" className="hover:text-hover"><FaFacebookF /></a>
                        <a href="/" className="hover:text-hover"><FaInstagram /></a>
                        <a href="/" className="hover:text-hover"><FaTiktok /></a>
                        <a href="/" className="hover:text-hover"><FaYoutube /></a>
                    </div>
                </div>
            </div>
                        
              {/* Bottom bar */}
            <div className="border-t border-white/20 mt-12 pt-6 text-sm text-center">
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0 lg:space-x-8">
                    <span>© 2025 ChauxNeuveTourisme. Tous droits réservés.</span>
                    <Link to="/mentions" className="hover:text-hover">Mentions légales</Link>
                    <Link to="/donnees" className="hover:text-hover">Données et cookies</Link>
                    <Link to="/conditions" className="hover:text-hover">Conditions générales de vente</Link>
                </div>
            </div>



        </footer>
    );
};

export default Footer;
