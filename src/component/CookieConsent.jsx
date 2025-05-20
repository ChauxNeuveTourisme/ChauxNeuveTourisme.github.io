import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState({
    strictlyNecessary: true,
    analytics: false,
    adInfo: false,
    targetedAds: false,
    personalizedAds: false,
    browsingHabits: false,
  });

  // Check localStorage on load
  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleToggle = (key) => {
    setConsent((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleAll = (value) => {
    const updated = Object.fromEntries(Object.keys(consent).map((key) => [key, value]));
    setConsent(updated);
  };

  const handleSubmit = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-lg z-50">
      <h2 className="text-base font-semibold mb-2">
        Ce site utilise des cookies et vous donne le contrôle sur ce que vous souhaitez activer.
      </h2>
      <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
        L'utilisation de cookies ou autres traceurs nous permet de réaliser des statistiques de visites et de vous garantir une meilleure expérience sur notre site.
      </p>

      <div className="flex gap-3 mb-4">
        <button onClick={() => handleAll(true)} className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
          Tout activer
        </button>
        <button onClick={() => handleAll(false)} className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">
          Tout désactiver
        </button>
      </div>

      <ul className="space-y-2 text-sm">
        <li>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={true} disabled />
            <span className="font-medium">Cookies strictement nécessaires</span>
          </label>
        </li>
        <li>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={consent.analytics} onChange={() => handleToggle("analytics")} />
            <span>Mesure d'audience</span>
          </label>
        </li>
        <li>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={consent.adInfo} onChange={() => handleToggle("adInfo")} />
            <span>Informations publicitaires</span>
          </label>
        </li>
        <li>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={consent.targetedAds} onChange={() => handleToggle("targetedAds")} />
            <span>Publicités ciblées</span>
          </label>
        </li>
        <li>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={consent.personalizedAds} onChange={() => handleToggle("personalizedAds")} />
            <span>Publicitées personnalisées</span>
          </label>
        </li>
        <li>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={consent.browsingHabits} onChange={() => handleToggle("browsingHabits")} />
            <span>Habitudes de navigation</span>
          </label>
        </li>
      </ul>

      <div className="mt-6 text-right">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
