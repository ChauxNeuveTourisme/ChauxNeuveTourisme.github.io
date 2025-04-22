import React from "react";

const TarifsSection = ({ prices = [] }) => {
  return (
    <section className="max-w-screen-3xl mx-auto relative bg-[hsla(206,14%,97%,1)] dark:bg-basis-30 px-4 sm:px-8 xl:px-20 2xl:px-28 py-16 xl:py-24 2xl:py-32">
      <header className="border-b border-gray-300 dark:border-gray-700 mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
        <section>
          <h2 className="text-3xl font-bold text-basis-95">Tarifs</h2>
        </section>
      </header>

      <div className="my-12 bg-[hsla(0,0%,100%,1)] grid grid-flow-row lg:grid-cols-3 gap-x-[2rem] gap-y-[4rem] p-[2rem] lg:p-[4rem]">
        <div className="flex flex-col">
          <h3 className="heading-m h-[2.5rem]">Prix</h3>

          <div className="price-table">
            {/* Desktop Table */}
            <table className="hidden w-full border-collapse md:table">
              <thead>
                <tr>
                  <th className="text-left"></th>
                  <th className="text-left"></th>
                </tr>
              </thead>
              <tbody className="paragraph-s">
                {prices.map((item, index) => (
                  <tr key={index} className="separator-border-bottom">
                    <td className="text-color-content py-[1rem]">
                      <span>{item.category}</span>
                    </td>
                    <td className="text-color-content py-[1rem]">
                      <span>{item.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile stacked view */}
            <div className="md:hidden">
              {prices.map((item, index) => (
                <div key={index} className="separator-border-bottom py-[1rem]">
                  <div className="flex items-center justify-between">
                    <span className="text-color-title">{item.category}</span>
                    <span className="text-color-content paragraph-m">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarifsSection;
