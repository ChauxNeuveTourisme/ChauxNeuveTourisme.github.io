import React from "react";

const faqSections = [
  {
    title: "Généralités",
    items: [
      {
        question: " question?",
        answer:
          "répondre .",
        lastUpdated: "2025-03-15",
      },
      {
        question: "question?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
      {
        question: "Qquestion ?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
    ],
  },
  {
    title: "Forfaits de ski",
    items: [
      {
        question: "question?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
      {
        question: "question?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
      {
        question: "question ?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
      {
        question: "question ?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
      {
        question: "question ?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
      {
        question: "question ?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
    ],
  },
  {
    title: "Les pistes de luge",
    items: [
      {
        question: " question?",
        answer:
          "répondre .",
        lastUpdated: "2025-03-15",
      },
      {
        question: "question?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
      {
        question: "Qquestion ?",
        answer:
          "répondre.",
        lastUpdated: "2025-03-15",
      },
    ],
  },
];

export default function Faqs() {
  return (
    <section className="bg-accent1-95 bg-[#10395f] text-white px-6 md:px-16 lg:px-40 py-20">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Foire aux questions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Retrouvez ici les réponses aux questions les plus fréquentes sur nos services.
        </p>
      </header>

      <div className="max-w-5xl mx-auto space-y-24">
        {faqSections.map((section, idx) => {
          const mid = Math.ceil(section.items.length / 2);
          const left = section.items.slice(0, mid);
          const right = section.items.slice(mid);

          return (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-8 text-white border-b border-hover pb-2">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[left, right].map((col, colIndex) => (
                  <div key={colIndex} className="space-y-4">
                    {col.map((faq, i) => (
                      <div key={i} className="border-b border-hover">
                        <details className="group">
                          <summary className="flex justify-between items-center cursor-pointer py-4 px-4 text-lg font-medium">
                            <span>{faq.question}</span>
                            <span className="text-2xl transition-transform duration-300 group-open:rotate-45">
                              +
                            </span>
                          </summary>
                          <div className="px-4 pb-4 text-gray-300">
                            <p className="mb-2">{faq.answer}</p>
                            <p className="text-sm text-gray-500">
                              Mis à jour le : {faq.lastUpdated}
                            </p>
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
