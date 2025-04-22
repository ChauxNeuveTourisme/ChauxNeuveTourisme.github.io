import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Reusable Accordion Component
const InformationsSection = ({ sectionTitle, data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Guard clause to ensure data exists before calling map()
  if (!data || !Array.isArray(data)) {
    return null; // You can render an error message or fallback UI here
  }

  return (
    <section id="Informations" className="relative px-8 bg-[#10395f] md:px-16 xl:px-80 2xl:px-104 py-20 xl:py-32 2xl:py-40">
      <header className="border-b pb-6 mb-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-basis-95 text-white">
          {sectionTitle}
        </h2>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-6 px-4 text-left text-lg font-medium text-basis-95 text-white"
            >
              <span className="flex items-center gap-3">
                <span className="material-icons">{item.icon}</span>
                {item.title}
              </span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-transform duration-500 ease-in-out transform ${
                openIndex === index ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              }`}
              style={{
                transformOrigin: "top",
              }}
            >
              <div className="p-4 text-white dark:text-gray-300">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InformationsSection;
