import React from "react";

const Calendrier = ({ events = [] }) => {
    return (
        <div id="Agenda" className="anchor-section">
            <section className="max-w-screen-3xl mx-auto relative bg-[hsla(206,14%,97%,1)]  px-4 sm:px-8 xl:px-20 2xl:px-28 py-16 xl:py-24 2xl:py-32">
                <header className="border-b border-gray-300  mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
                    <h2 className="text-3xl font-bold text-basis-95 ">Calendrier</h2>
                </header>

                <div className="my-12 bg-[hsla(0,0%,100%,1)] px-6 py-8 lg:p-0 lg:pt-6 space-y-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-start gap-6 p-6 lg:pt-0 font-light text-basis-90 "
                        >
                            <span className="material-symbols-outlined text-3xl text-basis-90">event</span>
                            <p className="text-xl font-medium whitespace-normal grow">
                                {event}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Calendrier;
