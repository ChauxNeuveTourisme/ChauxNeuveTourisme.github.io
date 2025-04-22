import React, { useState, useEffect } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Découvrir", href: "/decouvrir" },
  {
    name: "Séjourner",
    submenu: [
      { name: "Hébergements", href: "/hebergements" },
      { name: "Restauration", href: "/restauration" },
      { name: "Commerces", href: "/commerces" },
      { name: "Services de santé ", href: "/services-de-sante" },

    ],
  },
  {
    name: "Activités",
    submenu: [
      { name: "Hiver", href: "/hiver" },
      { name: "Été", href: "/ete" },
      { name: "Patrimone", href: "/patrimone" },
      { name: "Gastronomie", href: "/gastronomie" },

    ],
  },
  { name: "Événements", href: "/evenements" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="bg-navy text-white w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-1">
        <div className="text-xl font-bold">
          <img src="/images/logo-25.png" alt="Logo" className="h-[130px] aspect-[16/9] pt-0 w-full object-cover"/>
        </div>

        <button className="md:hidden pr-[10px]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={40} /> : <FiMenu size={40} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => !isTouchDevice && item.submenu && setActiveDropdown(idx)}
              onMouseLeave={() => !isTouchDevice && setActiveDropdown(null)}
              onClick={() => isTouchDevice && item.submenu && handleDropdown(idx)}
            >
              <a
                href={item.href || "#"}
                className="flex items-center gap-1 hover:text-hover cursor-pointer"
              >
                {item.name}
                {item.submenu && <FiChevronDown size={16} />}
              </a>

              {/* Dropdown */}
              {item.submenu && (
                <div
                  className={`absolute left-0 mt-2 bg-navy text-white rounded-md shadow-lg w-48 z-50 transition-all duration-200 ${
                    isTouchDevice
                      ? activeDropdown === idx
                        ? "block"
                        : "hidden"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  }`}
                >
                  {item.submenu.map((sub, j) => (
                    <a
                      key={j}
                      href={sub.href}
                      className="block px-4 py-2 hover:text-hover"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() =>
                  item.submenu ? handleDropdown(idx) : setMobileOpen(false)
                }
                className="w-full flex justify-between items-center py-2 text-left hover:text-hover"
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <FiChevronDown
                    className={`transition-transform ${
                      activeDropdown === idx ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Submenu shown only if active */}
              {item.submenu && activeDropdown === idx && (
                <div className="pl-4 space-y-1">
                  {item.submenu.map((sub, j) => (
                    <a
                      key={j}
                      href={sub.href}
                      className="block text-sm text-white hover:text-hover py-1"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
