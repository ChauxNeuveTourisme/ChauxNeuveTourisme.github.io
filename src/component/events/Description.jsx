import React from "react";

const Description = ({
        introText,
        paragraphs = [],
        listTitle,
        listItems = [],
    }) => {
    return (
        <div id="description" className="anchor-section">
            <section className="max-w-screen-3xl mx-auto relative bg-[hsla(0,0%,100%,1)] px-4 sm:px-8 xl:px-20 2xl:px-28 py-16 xl:py-24 2xl:py-32">
                <header className="border-b  border-gray-700 mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
                    <h2 className="text-3xl font-bold text-gray-900 ">
                        Description
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {introText && (
                        <div className="text-base font-semibold text-gray-800">
                            {introText}
                        </div>
                    )}

                    <div className="text-base leading-relaxed text-gray-700 space-y-4">
                        {paragraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}

                        {listItems.length > 0 && (
                            <>
                                {listTitle && <p>{listTitle}</p>}
                                <ul className="list-disc list-inside space-y-1">
                                    {listItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Description;
