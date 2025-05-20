import React from 'react';

export default function PricingTable({ title, description, data }) {
    return (
        <section className="bg-white  px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
          {/* Title + Description */}
            <header className="border-b border-gray-300 mb-10 pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
                    {title}
                </h2>
                {description && (
                    <p className="text-gray-600  text-sm mt-1">
                        {description}
                    </p>
                )}
            </header>
        
            {/* Desktop Table */}
            <div className="hidden md:block">
                <table className="w-full table-fixed border-collapse text-left">
                    <thead>
                        <tr className="text-gray-800  border-b border-gray-700">
                            <th className="w-1/2 py-3 px-4 font-semibold">Type</th>
                            <th className="w-1/4 py-3 px-4 font-semibold">Adulte</th>
                            <th className="w-1/4 py-3 px-4 font-semibold">Enfant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => (
                            <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                                <td className="py-4 px-4 text-gray-900 ">{item.type}</td>
                                <td className="py-4 px-4 text-gray-700 ">{item.adult || '–'}</td>
                                <td className="py-4 px-4 text-gray-700">{item.child || '–'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Mobile Layout */}
            <div className="md:hidden space-y-6">
                {data.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between text-gray-900 dark:text-white font-medium">
                            <span>{item.type}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-700 mt-2">
                            <span>Adulte</span>
                            <span>{item.adult || '–'}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-700 ">
                            <span>Enfant</span>
                            <span>{item.child || '–'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
